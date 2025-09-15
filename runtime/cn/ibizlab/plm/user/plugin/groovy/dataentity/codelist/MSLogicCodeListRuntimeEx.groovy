package cn.ibizlab.plm.user.plugin.groovy.dataentity.codelist

import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.logic.IDEMSLogicRuntime
import net.ibizsys.model.IPSModelObjectRuntime
import net.ibizsys.model.codelist.IPSCodeItem
import net.ibizsys.model.codelist.IPSCodeList
import net.ibizsys.model.codelist.PSCodeItemImpl
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.logic.IPSDEMSLogicNode
import net.ibizsys.central.codelist.DEMainStateCodeListRuntime
import net.ibizsys.central.codelist.DynamicCodeListRuntimeBase
import net.ibizsys.runtime.SystemRuntimeException
import net.ibizsys.runtime.codelist.DynamicCodeListRuntime
import net.ibizsys.runtime.codelist.ICodeListRuntime
import net.ibizsys.runtime.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.JsonUtils
import org.springframework.util.ObjectUtils


@CompileStatic
class MSLogicCodeListRuntimeEx extends DEMainStateCodeListRuntime {

    @Override
    List<IPSCodeItem> getPSCodeItems(Object dataOrKey) {
        try {
            IEntity iEntity = getEntity(dataOrKey);
            IDEMSLogicRuntime iDEMSLogicRuntime = (iEntity!=null)?this.getDEMSLogicRuntime(iEntity):null;
            if(iDEMSLogicRuntime != null) {
                ICodeListRuntime basicCodeListRuntime =  this.getSystemRuntime().getCodeListRuntime("ProjMgmt__work_item_state2",true);
                basicCodeListRuntime
                IPSCodeItem baseCodeItem = null;
                java.util.List<IPSCodeItem> psCodeItemList = new ArrayList<IPSCodeItem>();
                List<IPSDEMSLogicNode> nextPSDEMSLogicNodeList = null;
                List<IPSDEField> mainStatePSDEFieldList = this.getDataEntityRuntime().getPSDataEntity().getMainStatePSDEFields();
                //提取代码项值，当前业务为状态值2
                String strState = DataTypeUtils.getStringValue(this.getDataEntityRuntime().getFieldValue(iEntity, mainStatePSDEFieldList.get(1)), "");
                try {
                    nextPSDEMSLogicNodeList = iDEMSLogicRuntime.getNextPSDEMSLogicNodes(iEntity);
                }catch (Exception e) {
                    if(!ObjectUtils.isEmpty(basicCodeListRuntime)){
                        if(basicCodeListRuntime instanceof DynamicCodeListRuntimeBase){
                            baseCodeItem = ((DynamicCodeListRuntimeBase)basicCodeListRuntime).getPSCodeItem(null,strState,true);
                        }else {
                            baseCodeItem = basicCodeListRuntime.getPSCodeItem(strState,true);
                        }
                    }
                }
                //正常顺序输出
                List<IPSDEMSLogicNode> psDEMSLogicNodeList = iDEMSLogicRuntime.getPSDEMSLogic().getPSDEMSLogicNodes();
                if(!ObjectUtils.isEmpty(psDEMSLogicNodeList)) {
                    for(IPSDEMSLogicNode iPSDEMSLogicNode : psDEMSLogicNodeList) {
                        IPSCodeItem iPSCodeItem = null;
                        //无状态值时输出全部
                        if(ObjectUtils.isEmpty(strState)){
                            iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false, basicCodeListRuntime);
                        }else {
                            if(nextPSDEMSLogicNodeList!=null) {
                                if(nextPSDEMSLogicNodeList.contains(iPSDEMSLogicNode)) {
                                    iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false , basicCodeListRuntime);
                                }
                                else {
                                    iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, true, basicCodeListRuntime);
                                }
                            }else {
                                iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false, basicCodeListRuntime);
                            }
                        }
                        psCodeItemList.add(iPSCodeItem);
                    }
                }

                if(!ObjectUtils.isEmpty(baseCodeItem)){
                    //不存在于逻辑中的默认代码项置于末位
                    psCodeItemList.add(getPSCodeItemWithBase(baseCodeItem));
                }
                return psCodeItemList;
            }
        }
        catch (Throwable ex) {
            throw new SystemRuntimeException(this.getSystemRuntimeBase(), this, String.format("获取代码项发生异常｛0｝", ex.getMessage()), ex);
        }

        return super.getPSCodeItems(dataOrKey);
    }

    protected IPSCodeItem getPSCodeItemWithDefColor(IPSDEMSLogicNode iPSDEMSLogicNode, boolean bDisabled,ICodeListRuntime basicCodeListRuntime){
        //构建代码项
        String strValue = org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getStateValue())?iPSDEMSLogicNode.getStateValue():iPSDEMSLogicNode.getCodeName();

        ObjectNode objNode = JsonUtils.createObjectNode();
        objNode.put(PSCodeItemImpl.ATTR_GETCODENAME, iPSDEMSLogicNode.getCodeName());
        objNode.put(PSCodeItemImpl.ATTR_GETNAME,  iPSDEMSLogicNode.getName());
        objNode.put(PSCodeItemImpl.ATTR_GETVALUE,  strValue);
        objNode.put(PSCodeItemImpl.ATTR_GETTEXT,  iPSDEMSLogicNode.getName());

        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getBKColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  iPSDEMSLogicNode.getBKColor());
        }else {
            //默认取基础代码表中对应项的颜色
            IPSCodeItem baseCodeItem = basicCodeListRuntime.getPSCodeItem(strValue);
            if(!ObjectUtils.isEmpty(baseCodeItem)){
                objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  baseCodeItem.getColor());
            }
        }
        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  iPSDEMSLogicNode.getColor());
        }else {
            //默认字体白色
            objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  "#FFFFFF");
        }

        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getCssClass())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTEXTCLS,  iPSDEMSLogicNode.getCssClass());
        }
        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getMemo())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTOOLTIP,  iPSDEMSLogicNode.getMemo());
        }

        if(iPSDEMSLogicNode.isDefaultMode()) {
            objNode.put(PSCodeItemImpl.ATTR_ISDEFAULT, true);
        }

        if(bDisabled) {
            objNode.put(PSCodeItemImpl.ATTR_ISDISABLESELECT, bDisabled);
        }


        return this.getSystemRuntimeBaseContext().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime)this.getPSCodeList(),
                IPSCodeItem.class, objNode);
    }

    protected IPSCodeItem getPSCodeItemWithBase(IPSCodeItem iPSCodeItem){
        //构建代码项
        String strValue = iPSCodeItem.value;

        ObjectNode objNode = JsonUtils.createObjectNode();
        objNode.put(PSCodeItemImpl.ATTR_GETCODENAME, iPSCodeItem.getCodeName());
        objNode.put(PSCodeItemImpl.ATTR_GETNAME,  iPSCodeItem.getName());
        objNode.put(PSCodeItemImpl.ATTR_GETVALUE,  strValue);
        objNode.put(PSCodeItemImpl.ATTR_GETTEXT,  iPSCodeItem.getText());

        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  iPSCodeItem.getColor());
        }
        //默认字体白色
        objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  "#FFFFFF");

        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getTextCls())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTEXTCLS,  iPSCodeItem.getTextCls());
        }
        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getTooltip())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTOOLTIP,  iPSCodeItem.getTooltip());
        }

        if(iPSCodeItem.isDefault()) {
            objNode.put(PSCodeItemImpl.ATTR_ISDEFAULT, true);
        }

        objNode.put(PSCodeItemImpl.ATTR_ISDISABLESELECT, true);


        return this.getSystemRuntimeBaseContext().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime)this.getPSCodeList(),
                IPSCodeItem.class, objNode);
    }
}