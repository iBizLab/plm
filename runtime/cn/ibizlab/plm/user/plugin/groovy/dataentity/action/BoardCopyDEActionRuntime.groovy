package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.plugin.util.dataentity.action.CopyDEActionRuntime
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1NBase
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.runtime.util.ActionSession
import net.ibizsys.runtime.util.ActionSessionManager
import org.springframework.util.ObjectUtils

public class BoardCopyDEActionRuntime extends CopyDEActionRuntime {

    private static String PROJECT_ID_DEFIELD = "project_id";
    @Override
    protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
        ActionSession actionSession = ActionSessionManager.getCurrentSessionMust();
        Object objKeyValue = this.getDataEntityRuntime().getKeyFieldValue(iEntityDTO);
        if (ObjectUtils.isEmpty(objKeyValue)) {
            throw new Exception("传入数据键值无效");
        } else {
            IEntityDTO ret = this.getDataEntityRuntime().get(objKeyValue);
            boolean defaultBoards = false;
            if(objKeyValue.equals(ret.get(PROJECT_ID_DEFIELD))){
                defaultBoards = true;
            }
            this.getDataEntityRuntime().rebuildCopyEntityDTO(ret, true, true);
            List<IPSDEField> psDEFields = this.getDataEntityRuntime().getPSDEFields(true);
            if (psDEFields != null) {
                for(IPSDEField iPSDEField : psDEFields) {
                    if (!iPSDEField.isKeyDEField() && iEntityDTO.contains(iPSDEField.getLowerCaseName())) {
                        ret.set(iPSDEField.getLowerCaseName(), iEntityDTO.get(iPSDEField.getLowerCaseName()));
                    }
                }
            }

            List<IPSDERBase> psDERBaseList = this.getDataEntityRuntime().getPSDERBases(true);
            if (!ObjectUtils.isEmpty(psDERBaseList)) {
                for(IPSDERBase iPSDERBase : psDERBaseList) {
                    if (iPSDERBase instanceof IPSDER1NBase) {
                        IPSDER1NBase iPSDER1NBase = (IPSDER1NBase)iPSDERBase;
                        if (iPSDER1NBase.getCloneOrder() >= 0) {
                            IPSDEField pickupPSDEField = iPSDER1NBase.getPickupPSDEFieldMust();
                            Object value = ret.get(pickupPSDEField.getLowerCaseName());
                            if (value != null) {
                                String strTag = String.format("_COPYSOURCE__%s__%s", iPSDER1NBase.getMajorPSDataEntityMust().getId(), value);
                                Object cache = actionSession.getActionParam(strTag);
                                if (cache instanceof IEntityDTO) {
                                    IDataEntityRuntime majorDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDER1NBase.getMajorPSDataEntityMust().getId());
                                    IEntityDTO cacheEntityDTO = (IEntityDTO)cache;
                                    ret.set(pickupPSDEField.getLowerCaseName(), majorDataEntityRuntime.getKeyFieldValue(cacheEntityDTO));
                                }
                            }
                        }
                    }
                }
            }
            //移除默认看板子数据
            if(defaultBoards){
                String defaultBoardKey = ret.get(PROJECT_ID_DEFIELD);
                ret = this.getDataEntityRuntime().get(defaultBoardKey);
                List<IPSDER1NBase> clonelist = this.getDataEntityRuntime().getClonePSDER1Ns(true);
                if (!ObjectUtils.isEmpty(clonelist)) {
                    for(IPSDER1NBase iPSDERBase : clonelist) {
                        this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntity().getName()).removeByForeignKey(iPSDERBase.getPickupPSDEField(),defaultBoardKey,iPSDERBase);
                    }
                }
            }else{
                this.getDataEntityRuntime().rawCreate(Arrays.asList(ret),true);
            }
            String strTag = String.format("_COPYSOURCE__%s__%s", this.getDataEntityRuntime().getId(), objKeyValue);
            actionSession.setActionParam(strTag, ret);
            List<IPSDER1NBase> clonelist = this.getDataEntityRuntime().getClonePSDER1Ns(true);
            if (!ObjectUtils.isEmpty(clonelist)) {
                for(IPSDER1NBase iPSDERBase : clonelist) {
                    this.onCopyPSDER1NBase(iEntityDTO, ret, iPSDERBase);
                }
            }
//            throw new Exception("TestCopy");
            return ret;
        }
    }
}