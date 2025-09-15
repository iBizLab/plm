package cn.ibizlab.plm.user.plugin.groovy.dataentity.ac;

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.action.DEActionRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.ISearchContextDTO
import net.ibizsys.central.util.SearchContextDTO
import net.ibizsys.model.dataentity.action.IPSDEAction
import net.ibizsys.model.dataentity.action.IPSDEUserCustomAction
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.ds.IPSDEDataSet
import net.ibizsys.runtime.dataentity.action.DEActionModes
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils

@CompileStatic
class BoardMovePositionDEActionRuntime extends DEActionRuntimeBase{

	public BoardMovePositionDEActionRuntime() {
	}

	@Override
	protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
		IDataEntityRuntime entityDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime("WORK_ITEM");
		IPSDEField positionValuePSDEField = entityDataEntityRuntime.getPSDEField("entry_position");
		String strCurrentKey = iEntityDTO.getString(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), null);
		if(!StringUtils.hasLength(strCurrentKey)) {
			throw new Exception("未指定移动操作的数据");
		}
		String strTargetKey = iEntityDTO.getString(DEActionModes.PARAM_MOVEORDER_TARGETKEY, null);
		if(!StringUtils.hasLength(strTargetKey)) {
			throw new Exception("未指定移动操作的目标数据");
		}

		if(strCurrentKey.equals(strTargetKey)) {
			throw new Exception("指定移动操作的数据与目标数据不能一致");
		}

		String strMoveType = iEntityDTO.getString(DEActionModes.PARAM_MOVEORDER_MOVETYPE, null);
		if(!StringUtils.hasLength(strMoveType)) {
			throw new Exception("未指定移动操作的类型");
		}

		if(!DEActionModes.MOVETYPE_MOVEAFTER.equalsIgnoreCase(strMoveType)
				&& !DEActionModes.MOVETYPE_MOVEBEFORE.equalsIgnoreCase(strMoveType)
				&& !DEActionModes.MOVETYPE_SWITCHPOS.equalsIgnoreCase(strMoveType)){
			throw new Exception(String.format("无法识别的移动操作类型[%s]", strMoveType));
		}
		IPSDEAction iPSDEAction = entityDataEntityRuntime.getPSDEAction("board_move_position");
		IPSDEDataSet iPSDEDataSet =	null;
		if(iPSDEAction instanceof IPSDEUserCustomAction) {
			IPSDEUserCustomAction iPSDEUserCustomAction = (IPSDEUserCustomAction)iPSDEAction;
			iPSDEDataSet =	iPSDEUserCustomAction.getPSDEDataSet();
		}
		if(iPSDEDataSet == null) {
			iPSDEDataSet = entityDataEntityRuntime.getOrderScopePSDEDataSet();
		}
		if(iPSDEDataSet == null) {
			throw new Exception("未指定移动操作的相关数据集");
		}
		ISearchContextDTO iSearchContextDTO = entityDataEntityRuntime.createSearchContext();
		iSearchContextDTO.putAll(iEntityDTO.any());
		String entry_id = iEntityDTO.getString("entry_id", null);
		if(entry_id == null){
			throw new Exception("未指定移动操作的所属看板栏");
		}
		iSearchContextDTO.eq("entry_id", entry_id); // 所属看板栏
		iSearchContextDTO.count(false).all();

		entityDataEntityRuntime.setSearchSort(iSearchContextDTO, positionValuePSDEField, "ASC");

		//查出数据
		List<IEntityDTO> list = entityDataEntityRuntime.selectDataSet(iPSDEDataSet, iSearchContextDTO);
		if(ObjectUtils.isEmpty(list) ) {
			throw new Exception("无法获取移动的数据集");
		}
		Map<String, Integer> map = new LinkedHashMap<String, Integer>();
		for(IEntityDTO item : list) {
			map.put(item.getString(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), null), item.getInteger(positionValuePSDEField.getLowerCaseName(), Integer.MAX_VALUE));
		}

		if(!map.containsKey(strCurrentKey)) {
			throw new Exception("未指定移动操作的数据");
		}

		// if(!map.containsKey(strTargetKey)) {
		// 	throw new Exception("未指定移动操作的目标数据");
		// }

		List<String> keyList = new ArrayList<String>();
		keyList.addAll(map.keySet());

		int nTargetPos = keyList.indexOf(strTargetKey);
		int nCurrentPos = keyList.indexOf(strCurrentKey);

		List<IEntityDTO> changedList = new ArrayList<IEntityDTO>();

		if(DEActionModes.MOVETYPE_MOVEAFTER.equalsIgnoreCase(strMoveType)) {
			if(nTargetPos + 1 == nCurrentPos) {
				return changedList;
			}

			keyList.remove(strCurrentKey);
			nTargetPos = keyList.indexOf(strTargetKey);
			keyList.add(nTargetPos + 1, strCurrentKey);
		}
		else
		if(DEActionModes.MOVETYPE_MOVEBEFORE.equalsIgnoreCase(strMoveType)) {
			if(nTargetPos - 1 == nCurrentPos) {
				return changedList;
			}

			keyList.remove(strCurrentKey);
			nTargetPos = keyList.indexOf(strTargetKey);
			keyList.add(nTargetPos, strCurrentKey);
		}
		else
		if(DEActionModes.MOVETYPE_SWITCHPOS.equalsIgnoreCase(strMoveType)) {
			keyList.remove(strCurrentKey);
			keyList.remove(strTargetKey);
			if(nCurrentPos < nTargetPos) {
				//之前
				keyList.add(nCurrentPos, strTargetKey);
				keyList.add(nTargetPos, strCurrentKey);
			}
			else {
				keyList.add(nTargetPos, strCurrentKey);
				keyList.add(nCurrentPos, strTargetKey);
			}
		}

		//重新排序

		for(int i =0;i<keyList.size();i++) {
			String strKey = keyList.get(i);
			int nNewOrder = 1 +  i * 1;
			int nLastOrder = map.get(strKey);
			if(nNewOrder == nLastOrder) {
				continue;
			}

			IEntityDTO item = entityDataEntityRuntime.createEntity();
			item.set(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), strKey);
			item.set(positionValuePSDEField.getLowerCaseName(), nNewOrder);
			changedList.add(item);
		}

		if(!ObjectUtils.isEmpty(changedList)) {
			//执行批更新
			entityDataEntityRuntime.rawUpdate(changedList, false);
		}

		if(changedList.size() > SearchContextDTO.getMaxSize() * 10) {
			return null;
		}

		return changedList;
	}

	
	
}