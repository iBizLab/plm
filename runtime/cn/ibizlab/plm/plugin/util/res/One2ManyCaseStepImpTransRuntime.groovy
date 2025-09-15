package cn.ibizlab.plm.plugin.util.res;

import groovy.transform.CompileStatic;

import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.IDataEntityRuntime;

import java.util.ArrayList;
import java.util.List
import java.util.Map.Entry
import java.util.regex.Matcher
import java.util.regex.Pattern;

@CompileStatic
class One2ManyCaseStepImpTransRuntime extends SysTranslatorRuntimeBase {

    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyCaseStepImpTransRuntime.class);

    private static final String STEP_VALUE = "STEP_VALUE_IMP";

    private String strOne2ManyField = null;

    @Override
    protected void onInit() throws Exception {

        this.strOne2ManyField = "steps";
        super.onInit();
    }

    @Override
    protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
        if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO != null) {
            IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
            if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
                if (!(objValue instanceof String)) {
                    return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
                }
                /**
                 * 步骤导入说明
                 * 使用STEP_DESC_IMP字段和STEP_VALUE_IMP字段分别接收步骤描述和步骤预期结果。
                 * 该插件绑定在STEP_DESC_IMP中，因为预期结果可能为空
                 *
                 * STEP_VALUE_IMP的值可以直接从iEntityDTO中取出
                 */
                String[] stepDescs = ((String) objValue).split("\n");
                String[] stepValues = Optional.ofNullable(iEntityDTO.getString(STEP_VALUE.toLowerCase(), null))
                        .map({ value -> value.split("\n") }).orElse(new String[0]);
                // 转换为HashMap储存，以序号为key
                Map<String, Object> stepDescMap = formatStepImp(stepDescs);
                Map<String, Object> stepValueMap = formatStepImp(stepValues);

                IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
                IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
                if (iPSDERBase == null) {
                    throw new RuntimeException(String.format("关系集合属性未绑定关系"));
                }
                IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
                if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
                    List one2manyDatas = new ArrayList<>();
                    if (stepDescMap.size() > 0) {
                        for (int i = 1; i <= stepDescMap.size(); i++) {
                            IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                            String mainKey = i;
                            String subKey = i + "#";
                            String id = UUID.randomUUID()
                            if (stepDescMap.get(mainKey) == null) {
                                // 结束
                                break;
                            }

                            if (stepDescMap.get(subKey) == null) {
                                // 不是分组，进行构造实体
                                refEntityDTO.put("description", stepDescMap.get(mainKey));
                                refEntityDTO.put("expected_value", stepValueMap.get(mainKey));
                                refEntityDTO.put("is_group", 0);
                                refEntityDTO.put("id", id);
                                one2manyDatas.add(refEntityDTO);
                                continue;
                            }

                            // 构造实体，并构造子步骤
                            refEntityDTO.put("name", stepDescMap.get(mainKey));
                            refEntityDTO.put("is_group", 1);
                            refEntityDTO.put("id", id);
                            one2manyDatas.add(refEntityDTO);
                            // 子步骤
                            Map<Integer, String> subDescMap = (Map<Integer, String>) stepDescMap.get(subKey);
                            // 给一个默认值，是防止有对应的步骤描述，但是没有对应的预期结果
                            Map<Integer, String> subValueMap = (Map<Integer, String>) stepValueMap.getOrDefault(subKey, new HashMap<>());

                            for (Entry entry : subDescMap.entrySet()) {
                                // 遍历子步骤的描述，对应的预期结果不存在，则直接为空
                                IEntityDTO refSubEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                                refSubEntityDTO.put("description", entry.value);
                                refSubEntityDTO.put("expected_value", subValueMap.get(entry.key));
                                refSubEntityDTO.put("is_group", 0);
                                refSubEntityDTO.put("group_id", id);
                                refSubEntityDTO.put("id", UUID.randomUUID());
                                one2manyDatas.add(refSubEntityDTO);
                            }
                        }
                    }
                    iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
                }
            }
        }
        return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
    }

    /**
     * 将步骤导入数据格式化为Map类型，并以序号为Key
     *
     * 步骤导入规则
     * 步骤描述	文本，步骤请加编号填写，如1.xxx、2.xxx；分组填写，子步骤前加“→”，如1.xxx、→1.xxx；每个分组或步骤单元格内换行。
     * 预期结果	文本，保持编号与步骤对应，如1.xxx、2.xxx；分组的预期结果不用填写，子预期前加“→”，如1. 空、→1.xxx，每个预期结果单元格内换行。
     * @param stepImp
     * @return
     */
    private static Map<String, Object> formatStepImp(String[] stepImp) {
        Map<String, Object> map = new HashMap<>();
        // 使用正则表达式找到序号
        Pattern pattern = Pattern.compile("^(→?)(\\d+)\\.")
        int curNum = 1;
        for (String step : stepImp) {
            Matcher matcher = pattern.matcher(step);
            if (!matcher.find()) {
                // 未匹配，直接返回异常，并告知异常行
                throw new RuntimeException("该行步骤规则不匹配：" + step);
            }
            String flag = matcher.group(1);
            String num = matcher.group(2);
            String mapValue = step.substring(matcher.group().length());

            if (curNum == Integer.parseInt(num)) {
                // 不是分组
                map.put(num, mapValue);
                curNum++;
                continue;
            }

            if (flag != null && StringUtils.isNotEmpty(flag)) {
                // 为子步骤
                if (curNum - 1 != Integer.parseInt(num)) {
                    // 子步骤的序号不对，抛出异常
                    throw new RuntimeException("该行子步骤序号不匹配：" + step);
                }
                Map<Integer, String> subMap = (Map<Integer, String>) map.get(num + "#", new HashMap<>());
                int order = subMap.size() + 1;
                subMap.put(order, mapValue);

            }

        }
        return map;
    }
}
