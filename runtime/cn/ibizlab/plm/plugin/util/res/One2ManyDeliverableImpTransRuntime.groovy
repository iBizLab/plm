package cn.ibizlab.plm.plugin.util.res

import groovy.transform.CompileStatic
import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.PSModelEnums
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom
import net.ibizsys.runtime.dataentity.IDataEntityRuntime
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes
import org.springframework.util.ObjectUtils

@CompileStatic
class One2ManyDeliverableImpTransRuntime extends SysTranslatorRuntimeBase {

    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyDeliverableImpTransRuntime.class);

    private String strOne2ManyField = null;
    @Override
    protected void onInit() throws Exception {
        this.strOne2ManyField = "deliverable";
        super.onInit();
    }

    @Override
    protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
        if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO!=null ) {
            // 找到要导入的字段，并判断是否为一对多字段
            IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
            if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
                // 确保为String，才走后面的逻辑
                if (!(objValue instanceof String)) {
                    return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
                }
                // 确保存在对应关系
                IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
                IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
                if (iPSDERBase == null) {
                    throw new RuntimeException(String.format("关系集合属性未绑定关系"));
                }
                // 找到关系的runtime，后续字段需要从这个runtime取
                IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
                if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
                    IPSDEField parentIdField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTID, true);
                    IPSDEField parentTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTTYPE, true);
                    IPSDEField parentSubTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE.value, true);
                    // 构建需要保存的交付物数据
                    List one2manyDatas = new ArrayList<>();
                    objValue = ((String)objValue).replace("；",";");
                    String[] objs = objValue.split(";");
                    if (objs.length > 0) {
                        for (String obj : objs) {
                            IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                            refEntityDTO.set(refDataEntityRuntime.getMajorPSDEField().getLowerCaseName(), obj);
                            // 设置关系中必要的字段
                            if(parentIdField!=null) {
                                refEntityDTO.set(parentIdField.getLowerCaseName(), iEntityDTO.get(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
                            }
                            if(parentTypeField!=null) {
                                refEntityDTO.set(parentTypeField.getLowerCaseName(), entityDataEntityRuntime.getName());
                            }
                            if(parentSubTypeField != null && iPSDERBase instanceof IPSDERCustom){
                                refEntityDTO.set(parentSubTypeField.getLowerCaseName(),((IPSDERCustom)iPSDERBase).getTypeValue());
                            }

                            one2manyDatas.add(refEntityDTO);
                        }
                    }
                    // 直接设置到iEntityDTO中，后续的处理逻辑在进行处理
                    iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
                }
            }
        }
        return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
    }

}
