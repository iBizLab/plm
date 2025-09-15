package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataexport

import groovy.transform.CompileStatic;
import net.ibizsys.central.plugin.poi.dataentity.dataexport.POIDEDataExportRuntime
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.dataexport.IPSDEDataExportGroup;
import net.ibizsys.model.dataentity.dataexport.IPSDEDataExportItem;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

@CompileStatic
class TestCasePOIDEDataExportRuntimeEx extends POIDEDataExportRuntime  {

    int descSubstepCounter = 1;
    int descCounter = 1;
    int resultSubstepCounter = 1;
    int resultCounter = 1;
    String sort = "";
    int rowNum = 1;
    int startRowNum = 0;

    @Override
    protected void onExportStream(Object objData, OutputStream outputStram) throws Throwable {
        Workbook workbook = new XSSFWorkbook();
        Throwable var4 = null;

        try {
            List<IPSDEDataExportItem> exportItems = this.getPSDEDataExportItems();
            if (ObjectUtils.isEmpty(exportItems)) {
                throw new Exception("未指定导出列");
            }

            Sheet sheet = workbook.createSheet();
            int nGroupLevel = this.getGroupLevel();

            for(int i = 0; i < nGroupLevel; ++i) {
                sheet.createRow(i);
            }

            //创建表头
            Row row = sheet.createRow(nGroupLevel);
            Map<String, List<Cell>> mergedCellMap = new HashMap();

            for(int i = 0; i < exportItems.size(); ++i) {
                IPSDEDataExportItem iPSDEDataExportItem = (IPSDEDataExportItem)exportItems.get(i);
                Cell cell0 = row.createCell(i);
                cell0.setCellValue(iPSDEDataExportItem.getCaption());
                if (nGroupLevel > 0) {
                    this.fillMergedCellMap(mergedCellMap, iPSDEDataExportItem.getName(), cell0, iPSDEDataExportItem, (IPSDEDataExportGroup)null);
                }
            }

            //合并单元格
            if (mergedCellMap.size() > 0) {
                this.addMergedRegions(sheet, mergedCellMap);
            }

            // 填充数据行
            List<IEntityDTO> data = ((Page) objData).getContent();
            for (int i = 0; i < data.size(); ++i) {
                IEntityDTO testCase = (IEntityDTO) data.get(i);
                List<IEntityDTO> steps = (List<IEntityDTO>) testCase.get("steps");
                this.startRowNum = this.rowNum;
                //循环步骤
                for (int j = 0; j < (steps.size() == 0 ? 1 : steps.size()); j++) {
                    Row dataRow = sheet.createRow(this.rowNum);
                    //循环表头
                    for (int k = 0; k < exportItems.size(); ++k) {
                        IPSDEDataExportItem iPSDEDataExportItem = (IPSDEDataExportItem) exportItems.get(k);
                        Object objValue = testCase.get(iPSDEDataExportItem.getName());
                        Cell cell0 = dataRow.createCell(k);

                        // 如果字段是步骤描述和预期结果相关的，使用parseSteps填充
                        if (iPSDEDataExportItem.getName().equals("step_desc") && steps.size() != 0) {
                            String parsedSteps = stepDesc(steps, j);
                            cell0.setCellValue(parsedSteps);
                        } else if(iPSDEDataExportItem.getName().equals("expected_result") && steps.size() != 0) {
                            String parsedSteps = expectedResult(steps, j);
                            cell0.setCellValue(parsedSteps);
                            IEntityDTO step = steps.get(j);
                            if (step.get("is_group") && (int) step.get("is_group") == 1) {
                                sheet.addMergedRegion(new CellRangeAddress(this.rowNum, this.rowNum, k - 1, k));
                            }
                        } else if(iPSDEDataExportItem.getName().equals("precondition")){
                            if (testCase.get("precondition") != null){
                                String precondition = extractTextFromHtml(testCase.get("precondition").toString());
                                cell0.setCellValue(precondition);
                            }
                            if ((this.startRowNum != this.rowNum) && (j == steps.size() - 1)) {
                                sheet.addMergedRegion(new CellRangeAddress(this.startRowNum, this.rowNum, k, k));
                            }
                        } else {
                            if (objValue != null) {
                                cell0.setCellValue(this.convertValue(iPSDEDataExportItem, objValue));
                            }
                            if ((this.startRowNum != this.rowNum) && (j == steps.size() - 1)) {
                                sheet.addMergedRegion(new CellRangeAddress(this.startRowNum, this.rowNum, k, k));
                            }
                        }
                    }
                    this.rowNum++;
                }
                this.resultCounter = 1;
                this.descCounter = 1;
            }
            workbook.write(outputStram);
        } catch (Throwable var25) {
            var4 = var25;
            throw var25;
        } finally {
            if (workbook != null) {
                if (var4 != null) {
                    try {
                        workbook.close();
                    } catch (Throwable var24) {
                        var4.addSuppressed(var24);
                    }
                } else {
                    workbook.close();
                }
            }
            this.descSubstepCounter = 1;
            this.descCounter = 1;
            this.resultSubstepCounter = 1;
            this.resultCounter = 1;
            this.sort = "";
            this.rowNum = 1;
            this.startRowNum = 0;
        }
    }

    String stepDesc(List<IEntityDTO> steps, int i) {
        StringBuilder result = new StringBuilder();

        IEntityDTO step = steps.get(i);
        // 如果是分组, 处理分组
        if (step.get("group_id") != null) {
            this.sort = this.descCounter -1 + "." + this.descSubstepCounter;
            String description = (String) step.get("description");
            result.append("→").append(this.sort).append(". ").append(description ?: "");
            this.sort = "";
            this.descSubstepCounter ++;
        } else if (step.get("is_group") && (int) step.get("is_group") == 1) {
            String groupName = (String) step.get("name");
            result.append(this.descCounter).append(". ").append(groupName ?: "");
            this.descSubstepCounter = 1;
            this.descCounter++;
        } else {
            // 正常的步骤
            String description = (String) step.get("description");
            result.append(this.descCounter).append(". ").append(description ?: "");
            this.descSubstepCounter = 1;
            this.descCounter++;
        }

        return result.toString();
    }

    String expectedResult(List<IEntityDTO> steps, int i) {
        StringBuilder result = new StringBuilder();

        IEntityDTO step = steps.get(i);
        // 如果是分组, 处理分组
        if (step.get("is_group") && (int) step.get("is_group") == 1) {
            String groupName = (String) step.get("name");
            result.append(this.resultCounter).append(". ").append(groupName ?: "");
            this.resultSubstepCounter = 1;
            this.resultCounter++;
        } else if (step.get("group_id") != null) {
            this.sort = this.resultCounter -1 + "." + this.resultSubstepCounter;
            String expected_value = (String) step.get("expected_value");
            result.append("→").append(this.sort).append(". ").append(expected_value ?: "");
            this.sort = "";
            this.resultSubstepCounter ++;
        } else {
            // 正常的步骤
            String expectedValue = (String) step.get("expected_value");
            result.append(this.resultCounter).append(". ").append(expectedValue ?: "");
            this.resultSubstepCounter = 1;
            this.resultCounter++;
        }
        return result.toString();
    }

    String extractTextFromHtml(String htmlContent) {
        // 使用 Jsoup 解析 HTML 内容
        Document document = Jsoup.parse(htmlContent);
        // 提取并返回纯文本内容
        return document.text();
    }

}