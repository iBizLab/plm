package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.action.CopyDEActionRuntime
import net.ibizsys.central.util.IEntity
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.ISearchContextDTO
import net.ibizsys.central.util.Inflector
import net.ibizsys.model.PSModelEnums
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDER1NBase
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom
import net.ibizsys.model.dataentity.ds.IPSDEDataSet
import net.ibizsys.model.dataentity.service.IPSDEMethodDTOField
import net.ibizsys.runtime.dataentity.DETypes
import net.ibizsys.runtime.util.ActionSession
import net.ibizsys.runtime.util.ActionSessionManager
import net.ibizsys.runtime.util.Conditions
import net.ibizsys.runtime.util.DataTypeUtils
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils;

public class ProjectCopyDEActionRuntime extends CopyDEActionRuntime {

    private boolean bCopyComment = true;
    private static String WORK_ITEM_DENAME = "WORK_ITEM";
    private static String COMMENT_DENAME = "COMMENT";
    private static String COMMENTS_DEFIELD = "comments";

    @Override
    protected void onCopyPSDER1NBase(IEntityDTO srcEntityDTO, IEntityDTO retEntityDTO, IPSDER1NBase iPSDERBase) throws Throwable {
        IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId());
        if(WORK_ITEM_DENAME.equals(refDataEntityRuntime.getName())){
            Object objKeyValue = this.getDataEntityRuntime().getKeyFieldValue(srcEntityDTO);
            // 找到外键
            IPSDEField pickupPSDEField = null;
            IPSDEField parentTypePSDEField = null;
            IPSDEField parentSubTypePSDEField = null;

            String strParentSubType = null;
            String strParentType = null;

            IPSDEDataSet nestedPSDEDataSet = null;

            if (iPSDERBase instanceof IPSDER1N) {
                pickupPSDEField = ((IPSDER1N) iPSDERBase).getPSPickupDEFieldMust();
                nestedPSDEDataSet = ((IPSDER1N) iPSDERBase).getNestedPSDEDataSet();
            } else if (iPSDERBase instanceof IPSDERCustom) {
                IPSDERCustom iPSDERCustom = (IPSDERCustom) iPSDERBase;
                pickupPSDEField = iPSDERCustom.getPickupPSDEField();
                nestedPSDEDataSet = iPSDERCustom.getNestedPSDEDataSet();
                if (refDataEntityRuntime.getDEType() == DETypes.DYNAATTACHED || PSModelEnums.DERSubType.DER1N.value.equalsIgnoreCase(iPSDERCustom.getDERSubType())) {
                    parentTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTTYPE, refDataEntityRuntime.getDEType() != DETypes.DYNAATTACHED);
                    if (parentTypePSDEField != null) {
                        strParentType = iPSDERCustom.getParentType();
                        if (!StringUtils.hasLength(strParentType)) {
                            // strParentType = this.getName();
                            strParentType = this.getDataEntityRuntime().getDERParentType();
                        }
                    }
                    parentSubTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE, true);
                    if (parentSubTypePSDEField != null) {
                        strParentSubType = iPSDERCustom.getParentSubType();
                        if (!StringUtils.hasLength(strParentSubType)) {
                            strParentSubType = iPSDERBase.getMinorCodeName();
                        }
                    }
                }
            }
            if (pickupPSDEField == null) {
                throw new Exception(String.format("克隆关系[%s]未定义连接属性", iPSDERBase.getName()));
            }

            ISearchContextDTO iSearchContextDTO = refDataEntityRuntime.createSearchContext();
            iSearchContextDTO.all().count(false);
            refDataEntityRuntime.setSearchCondition(iSearchContextDTO, pickupPSDEField, Conditions.EQ, objKeyValue);
            if (parentTypePSDEField != null) {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentTypePSDEField, Conditions.EQ, strParentType);
            }
            if (parentSubTypePSDEField != null) {
                if (StringUtils.hasLength(strParentSubType)) {
                    refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, Conditions.EQ, DataTypeUtils.convert(parentSubTypePSDEField.getStdDataType(), strParentSubType));
                } else {
                    refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, Conditions.ISNULL, null);
                }
            }

            // 设置排序信息
            IPSDEField orderValuePSDEField = refDataEntityRuntime.getOrderValuePSDEField();
            if (orderValuePSDEField != null) {
                refDataEntityRuntime.setSearchSort(iSearchContextDTO, orderValuePSDEField, PSModelEnums.SortDir.ASC.value);
            }
            List<IEntityDTO> lastList = null;
            if (nestedPSDEDataSet != null) {
                lastList = refDataEntityRuntime.selectDataSet(nestedPSDEDataSet, iSearchContextDTO);
            } else {
                lastList = refDataEntityRuntime.select(iSearchContextDTO);
            }

            //以上与常规拷贝一致，下方为工作项批量拷贝
            Map<String, IEntity[]> cloneEntityDtosMap= new LinkedHashMap<>();
            if (!ObjectUtils.isEmpty(lastList)) {
                //嵌套数据列表集合
                List<IPSDER1NBase> clonelist = refDataEntityRuntime.getClonePSDER1Ns(true);
                if (!ObjectUtils.isEmpty(clonelist)) {
                    for (IPSDER1NBase clonePSDERBase : clonelist) {
                        //预处理COMMENT评论数据
                        if (COMMENT_DENAME.equals(clonePSDERBase.getMinorPSDataEntity().getName()) && bCopyComment) {
                            IDataEntityRuntime nestDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime((clonePSDERBase.getMinorPSDataEntity().getName()));
                            List<IEntityDTO> copyComments = getCopyrefs(refDataEntityRuntime, nestDataEntityRuntime, lastList, clonePSDERBase);
                            if (!ObjectUtils.isEmpty(copyComments)) {
                                for(IEntityDTO iEntityDTO :copyComments){
                                    nestDataEntityRuntime.rebuildCopyEntityDTO(iEntityDTO,true,true);
                                }
                                for (IEntityDTO item : lastList) {
                                    item.put(COMMENTS_DEFIELD,copyComments.findAll {item.get(refDataEntityRuntime.getKeyPSDEField().getLowerCaseName()).equals(it.get(clonePSDERBase.getPickupPSDEField().getLowerCaseName()))})
                                }
                            }
                        }
                    }
                    for (IEntityDTO item : lastList) {
                        refDataEntityRuntime.rebuildCopyEntityDTO(item,true,true);
                        //获取嵌套实体的克隆数据
                        for (IPSDER1NBase clonePSDERBase : clonelist) {
                            List<IEntityDTO> allNestDTOList = cloneEntityDtosMap.get(clonePSDERBase.getMinorPSDataEntity().getName());
                            if(ObjectUtils.isEmpty(allNestDTOList)){
                                allNestDTOList = new ArrayList<IEntityDTO>();
                                cloneEntityDtosMap.put(clonePSDERBase.getMinorPSDataEntity().getName(), allNestDTOList);
                            }
                            List<IEntityDTO> curItemNestDTOList =  refDataEntityRuntime.getNestedDERValue(item, clonePSDERBase);
                            if(ObjectUtils.isEmpty(curItemNestDTOList)){
                                curItemNestDTOList = item.get(Inflector.getInstance().pluralize(clonePSDERBase.getMinorPSDataEntity().getLowerCamelCodeName()));
                            }
                            if(!ObjectUtils.isEmpty(curItemNestDTOList)){
                                allNestDTOList.addAll(curItemNestDTOList);
                                IPSDEMethodDTOField iPSDEMethodDTOField = item.getDEMethodDTORuntime().getPSDEMethodDTOFieldByDER(clonePSDERBase.getId(), true);
                                if(!ObjectUtils.isEmpty(iPSDEMethodDTOField)){
                                    //排除嵌套数据，后续批保存提升速度
                                    item.reset(iPSDEMethodDTOField.getLowerCaseName());
                                }
                            }

                        }
                    }
                }

                //再次执行父键转化
                for (IPSDER1NBase clonePSDERBase : clonelist) {
                    List<IEntityDTO> allNestDTOList = cloneEntityDtosMap.get(clonePSDERBase.getMinorPSDataEntity().getName());
                    reTranstransParentId(clonePSDERBase.getMinorPSDataEntity().getName(),allNestDTOList);
                }
                refDataEntityRuntime.rawCreate(lastList,true);
            }
//            throw new Exception("TestCopy");
            //优化保存速度
            for (java.util.Map.Entry<String, Map<Object, List<String>>> entry : cloneEntityDtosMap.entrySet()) {
                if(!ObjectUtils.isEmpty(entry.value)){
                    IDataEntityRuntime nestDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(entry.key);
                    if(nestDataEntityRuntime != null){
                        nestDataEntityRuntime.rawCreate(entry.value,true);
                    }

                }
            }
        }else {
            super.onCopyPSDER1NBase(srcEntityDTO, retEntityDTO, iPSDERBase)
        }
    }

    private List<IEntityDTO> getCopyrefs(IDataEntityRuntime  srcDataEntityRuntime, IDataEntityRuntime  refDataEntityRuntime, List<IEntityDTO> srcList,IPSDER1NBase iPSDERBase){
        List<String> ids = srcList.collect {
            it.get("id")
        } as List;
        IPSDEField pickupPSDEField = null;
        IPSDEField parentTypePSDEField = null;
        IPSDEField parentSubTypePSDEField = null;
        String strParentSubType = null;
        String strParentType = null;
        IPSDEDataSet nestedPSDEDataSet = null;
        if (iPSDERBase instanceof IPSDER1N) {
            pickupPSDEField = ((IPSDER1N)iPSDERBase).getPSPickupDEFieldMust();
            nestedPSDEDataSet = ((IPSDER1N)iPSDERBase).getNestedPSDEDataSet();
        } else if (iPSDERBase instanceof IPSDERCustom) {
            IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;
            pickupPSDEField = iPSDERCustom.getPickupPSDEField();
            nestedPSDEDataSet = iPSDERCustom.getNestedPSDEDataSet();
            if (refDataEntityRuntime.getDEType() == 4 || PSModelEnums.DERSubType.DER1N.value.equalsIgnoreCase(iPSDERCustom.getDERSubType())) {
                parentTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTTYPE, refDataEntityRuntime.getDEType() != 4);
                if (parentTypePSDEField != null) {
                    strParentType = iPSDERCustom.getParentType();
                    if (!StringUtils.hasLength(strParentType)) {
                        strParentType = srcDataEntityRuntime.getDERParentType();
                    }
                }

                parentSubTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE, true);
                if (parentSubTypePSDEField != null) {
                    strParentSubType = iPSDERCustom.getParentSubType();
                    if (!StringUtils.hasLength(strParentSubType)) {
                        strParentSubType = iPSDERBase.getMinorCodeName();
                    }
                }
            }
        }
        ISearchContextDTO iSearchContextDTO = refDataEntityRuntime.createSearchContext();
        iSearchContextDTO.all().count(false);
        //以下为批量查询
        iSearchContextDTO.in(pickupPSDEField.getName(),ids);
        if (parentTypePSDEField != null) {
            refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentTypePSDEField, "EQ", strParentType);
        }

        if (parentSubTypePSDEField != null) {
            if (StringUtils.hasLength(strParentSubType)) {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, "EQ", DataTypeUtils.convert(parentSubTypePSDEField.getStdDataType(), strParentSubType));
            } else {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, "ISNULL", (Object)null);
            }
        }

        IPSDEField orderValuePSDEField = refDataEntityRuntime.getOrderValuePSDEField();
        if (orderValuePSDEField != null) {
            refDataEntityRuntime.setSearchSort(iSearchContextDTO, orderValuePSDEField, PSModelEnums.SortDir.ASC.value);
        }

        List<IEntityDTO> lastList = null;
        if (nestedPSDEDataSet != null) {
            lastList = refDataEntityRuntime.selectDataSet(nestedPSDEDataSet, iSearchContextDTO);
        } else {
            lastList = refDataEntityRuntime.select(iSearchContextDTO);
        }
        return lastList;
    }

    private List<IEntityDTO> reTranstransParentId(String DEName, List<IEntityDTO> srcList){
        IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(DEName);
        ActionSession actionSession = ActionSessionManager.getCurrentSession();
        for (IEntityDTO iEntityDTO :srcList){
            if (!ObjectUtils.isEmpty(refDataEntityRuntime.getPSDERBases())) {
                for(IPSDERBase ipsderBase : refDataEntityRuntime.getPSDERBases()) {
                    if (ipsderBase instanceof IPSDER1NBase) {
                        IPSDER1NBase iPSDER1N = (IPSDER1NBase)ipsderBase;
                        if (iPSDER1N.getPickupPSDEField() != null) {
                            Object value = iEntityDTO.get(iPSDER1N.getPickupPSDEField().getLowerCaseName());
                            if (!ObjectUtils.isEmpty(value)) {
                                String strTag = String.format("_COPYSOURCE__%s__%s", iPSDER1N.getMajorPSDataEntityMust().getId(), value);
                                Object cache = actionSession.getActionParam(strTag);
                                if (cache instanceof IEntityDTO) {
                                    IDataEntityRuntime majorDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDER1N.getMajorPSDataEntityMust().getId());
                                    IEntityDTO cacheEntityDTO = (IEntityDTO)cache;
                                    iEntityDTO.set(iPSDER1N.getPickupPSDEField().getLowerCaseName(), majorDataEntityRuntime.getKeyFieldValue(cacheEntityDTO));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}