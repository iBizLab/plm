package cn.ibizlab.plm.user.plugin.groovy.dataentity.logic;

import groovy.transform.CompileStatic
import org.springframework.beans.factory.annotation.Qualifier
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.logic.DELogicNodeRuntimeBase
import net.ibizsys.central.dataentity.logic.IDELogicParamRuntime
import net.ibizsys.central.dataentity.logic.IDELogicRuntimeContext
import net.ibizsys.central.dataentity.logic.IDELogicSession
import net.ibizsys.central.util.IEntity
import net.ibizsys.model.dataentity.logic.IPSDELogicNode

@CompileStatic
class CreateWorkItemLogicNodeRuntime extends DELogicNodeRuntimeBase {

    @Qualifier("WORK_ITEM")
	IDataEntityRuntime workItemRuntime;

    @Override
	protected void onExecute(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDELogicNode iPSDELogicNode) throws Throwable {
        IEntity workItem = workItemRuntime.createEntity();
	}
}