package net.ibizsys.central.plugin.extension.sysutil.addin

import com.fasterxml.jackson.databind.JsonNode;
import net.ibizsys.model.app.IPSApplication;
import net.ibizsys.model.app.dataentity.IPSAppDataEntity;
import net.ibizsys.model.app.view.IPSAppDEGridView
import net.ibizsys.model.app.view.IPSAppDETreeGridView;
import net.ibizsys.model.app.view.IPSAppView;
import net.ibizsys.model.control.searchbar.IPSSearchBar;
import net.ibizsys.model.control.searchbar.IPSSearchBarGroup
import net.ibizsys.runtime.util.JsonUtils;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.ObjectUtils;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.dataentity.IPSDataEntity;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.model.dataentity.ds.IPSDEDataSet;

public class PSDESearchBarSyncTool extends PSDEModelSyncToolBase {

	private static final org.apache.commons.logging.Log log = LogFactory.getLog(PSDESearchBarSyncTool.class);

	@Override
	protected void onSync(IPSDataEntity iPSDataEntity, Object param) throws Throwable {

		Map<String, Object> params = null;
		if(param instanceof Map) {
			params = (Map)param;
		}
		IDataEntityRuntime iDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDataEntity.getId());

		List<Map> mapList = new ArrayList<Map>();

		List<IPSDERBase> psDERBaseList = iPSDataEntity.getMinorPSDERs();
		if(!ObjectUtils.isEmpty(psDERBaseList)) {
			for(IPSDERBase iPSDERBase : psDERBaseList) {

				if(!(iPSDERBase instanceof IPSDERCustom)) {
					continue;
				}

				IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;

				//获取相应的视图
				IPSDataEntity majorPSDataEntity = iPSDERCustom.getMajorPSDataEntityMust();
				Set<String> viewCache = new HashSet<>();
				for(IPSApplication application : getSystemRuntime().getPSSystem().getAllPSApps()){
					IPSAppDataEntity majorPSAppDataEntity;
					for(IPSAppDataEntity appDataEntity: application.getAllPSAppDataEntities()){
						if(appDataEntity.getName().equals(majorPSDataEntity.getName())){
							majorPSAppDataEntity = appDataEntity;
							break;
						}
					}
					if (majorPSAppDataEntity == null){
						break;
					}
					for (IPSAppView appView : majorPSAppDataEntity.getAllPSAppViews()){
						//仅支持表格视图中绑定的搜索栏
						if(appView instanceof IPSAppDEGridView || appView instanceof IPSAppDETreeGridView){
							//避免重复添加
							if(viewCache.contains(appView.getCodeName())){
								continue;
							}
							viewCache.add(appView.getCodeName());
							IPSSearchBar searchbar = (IPSSearchBar)appView.getPSControl("searchbar",true);
							if(searchbar == null){
								searchbar = appView.getPSViewLayoutPanel().getPSControl("searchbar",true);
							}
							if(searchbar != null){
								int ordervalueindex = 1;
								for (IPSSearchBarGroup group : searchbar.getPSSearchBarGroups()) {

									Map<String, Object> obj = new LinkedHashMap<String, Object>();
									obj.put("APP_VIEW_TAG", appView.getCodeName());
//									obj.put("APP_TAG", application.getCodeName());
									obj.put("NAME", group.getName());
									obj.put("OWNER_TYPE", "SYSTEM");
									if (!ObjectUtils.isEmpty(group.getData())){
										try {
											JsonNode jsonNode = JsonUtils.MAPPER.readTree(group.getData())
											obj.put("THEME_MODEL",jsonNode.get("theme_model").toString());
										} catch (Exception e) {
											continue;
										}
									}
									obj.put("SYSTEM_TAG", getSystemRuntime().getDeploySystemId());
									obj.put("VALID_FLAG", 1);
									obj.put("ORDER_VALUE", ordervalueindex * 100);
									obj.put("CAPTION",  group.getCaption());
									mapList.add(obj);
									ordervalueindex = ordervalueindex+1;
								}
							}
						}
					}
				}
			}
		}

		//查询历史数据
		Map<String, IEntityDTO> lastEntityDTOMap = null;

		IPSDEDataSet iPSDEDataSet = iDataEntityRuntime.getPSDEDataSetByTag(PSMODELSYNC_PREDEFINEDDATASET_PSMODELSYNC, true);
		if(iPSDEDataSet != null) {

			lastEntityDTOMap = new HashMap<String, IEntityDTO>();
			ISearchContextDTO iSearchContextDTO = iDataEntityRuntime.createSearchContext();
			iSearchContextDTO.all().count(false);
			iSearchContextDTO.eq("SYSTEM_TAG",getSystemRuntime().getDeploySystemId());
			List<IEntityDTO> list = iDataEntityRuntime.selectDataSet(iPSDEDataSet, iSearchContextDTO);
			for(IEntityDTO item : list) {
				String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
				lastEntityDTOMap.put(unionTag, item);
			}
		}


		//执行批保存
		List<IEntityDTO> updateentityList = new ArrayList<IEntityDTO>();
		List<IEntityDTO> createentityList = new ArrayList<IEntityDTO>();
		for(Map<String, Object> item : mapList) {
			IEntityDTO iEntityDTO = iDataEntityRuntime.createEntity(item);
			String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
			if(lastEntityDTOMap != null && lastEntityDTOMap.containsKey(unionTag)) {
				IEntityDTO lastEntity = lastEntityDTOMap.get(unionTag);
				iEntityDTO.set(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),lastEntity.get(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),null));
				if(lastEntity.get("CAPTION").equals(item.get("CAPTION")) &&lastEntity.get("THEME_MODEL").equals(item.get("THEME_MODEL"))){
					continue;
				}
				updateentityList.add(iEntityDTO);
			}else {
				createentityList.add(iEntityDTO);
			}
		}


		for(IEntityDTO iEntityDTO : createentityList) {
			iDataEntityRuntime.fillEntityKeyValue(iEntityDTO);
		}

		if(ObjectUtils.isEmpty(createentityList)&& ObjectUtils.isEmpty(updateentityList)){
			return;
		}

		try {
			if(!ObjectUtils.isEmpty(createentityList) ) {
				iDataEntityRuntime.rawCreate(createentityList, true);
			}
			if(!ObjectUtils.isEmpty(updateentityList) ) {
				iDataEntityRuntime.rawUpdate(updateentityList, true);
			}
		}
		catch (Throwable ex) {
			log.error(String.format("同步搜索栏发生异常，%s", ex.getMessage()), ex);
		}
	}

}
