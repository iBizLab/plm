package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.dataentity.IDataEntityRuntime
import net.ibizsys.central.cloud.core.dataentity.util.IDEExtensionUtilRuntime;
import net.ibizsys.central.plugin.extension.dataentity.util.DEExtensionUtilRuntimeBase;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.model.IPSModelObjectRuntime
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem
import net.ibizsys.model.dataentity.dataimport.PSDEDataImportItemImpl;
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.security.IUserContext;
import net.ibizsys.runtime.util.IWebContext
import net.ibizsys.runtime.util.JsonUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils

@CompileStatic
public class DynaFieldDEDataImportRuntimeEx extends POIDEDataImportRuntime  {
    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(DynaFieldDEDataImportRuntimeEx.class);

    private List<String> extendParentKeys = new ArrayList<>();

    private IDEExtensionUtilRuntime iDEExtensionUtilRuntime = null;

    @Override
    protected void onInit() throws Exception {
        if(this.getDataEntityRuntime().isEnableExtension() && this.getDataEntityRuntime().getDEExtensionUtilRuntime()!=null) {
            this.iDEExtensionUtilRuntime = this.getDataEntityRuntime().getDEExtensionUtilRuntime();
        }

        List<IPSDERBase> minorPSDERs = getDataEntityRuntime().getPSDataEntity().getMinorPSDERs();
        if (!ObjectUtils.isEmpty(minorPSDERs)) {
            for (IPSDERBase iPSDERBase : minorPSDERs) {
                if (iPSDERBase instanceof IPSDER1N) {
                    IPSDER1N iPSDER1N = (IPSDER1N) iPSDERBase;
                    if ((iPSDER1N.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value) {
                        extendParentKeys.add(iPSDER1N.getPSPickupDEFieldMust().getName());
                    }
                    continue;
                }

                if (iPSDERBase instanceof IPSDERCustom) {
                    IPSDERCustom iPSDERCustom = (IPSDERCustom) iPSDERBase;
                    if (PSModelEnums.DERSubType.DER1N.value.equals(iPSDERCustom.getDERSubType()) || PSModelEnums.DERSubType.DER11.value.equals(iPSDERCustom.getDERSubType())) {
                        if (iPSDERCustom.getPickupPSDEField() != null && ((iPSDERCustom.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value)) {
                            extendParentKeys.add(iPSDERCustom.getPickupPSDEField().getName());
                        }
                    }
                    continue;
                }
            }
        }
        super.onInit();
    }

    @Override
    public IDataEntityRuntime getDataEntityRuntime() {
        return (IDataEntityRuntime)super.getDataEntityRuntime();
    }
    protected Map<String, IPSDEDataImportItem> getPSDEDataImportItems(IUserContext iUserContext) throws Throwable {
        Map<String, IPSDEDataImportItem> map = super.getPSDEDataImportItems(iUserContext);
        if(!ObjectUtils.isEmpty(extendParentKeys) && getDEExtensionUtilRuntime() != null) {
            IWebContext iWebContext = iUserContext.getWebContext();
            if(iWebContext != null) {
                for (String extendParentKey : extendParentKeys) {
                    String strDataType = iWebContext.getParameter(extendParentKey);
                    if (!StringUtils.hasLength(strDataType)) {
                        continue;
                    }
                    List<IPSDEField> psDEFieldList = this.getDEExtensionUtilRuntime().getPSDEFields(String.format(DEExtensionUtilRuntimeBase.FIELD_EXTENSION_FORMAT, extendParentKey.toUpperCase(), strDataType));
                    int defaultOrderValue = 99900;
                    if (!ObjectUtils.isEmpty(psDEFieldList)) {
                        for (IPSDEField iPSDEField : psDEFieldList) {
                            if (!StringUtils.hasLength(iPSDEField.getLogicName())) {
                                continue;
                            }
                            if (map.containsKey(iPSDEField.getLogicName())) {
                                log.warn(String.format("扩展属性[%s]标题[%s]已经存在，忽略导入", iPSDEField.getName(), iPSDEField.getLogicName()));
                                continue;
                            }

                            ObjectNode objectNode = JsonUtils.createObjectNode();
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETID, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETNAME, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETCAPTION, iPSDEField.getLogicName());

                            // int iOrderValue = iPSDEField.getImportOrder() != 0 ? iPSDEField.getImportOrder() : iPSDEField.getOrderValue();
                            int iOrderValue = iPSDEField.getImportOrder();
                            if (iOrderValue == 0) {
                                iOrderValue = defaultOrderValue++;
                            }
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETORDERVALUE, iOrderValue);

                            IPSDEDataImportItem iPSDEDataImportItem = this.getSystemRuntime().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime) this.getPSDEDataImport(), IPSDEDataImportItem.class, objectNode);
                            if (iPSDEDataImportItem instanceof PSDEDataImportItemImpl) {
                                PSDEDataImportItemImpl psDEDataImportItemImpl = (PSDEDataImportItemImpl) iPSDEDataImportItem;
                                psDEDataImportItemImpl.setPSDEField(iPSDEField);
                                if (iPSDEField.getInlinePSCodeList() != null) {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getInlinePSCodeList());
                                } else {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getPSCodeList());
                                }
                                map.put(psDEDataImportItemImpl.getCaption(), psDEDataImportItemImpl);
                            }
                        }
                    }
                }
            }
        }
        return map;
    }

    protected IDEExtensionUtilRuntime getDEExtensionUtilRuntime() {
        return this.iDEExtensionUtilRuntime;
    }
}