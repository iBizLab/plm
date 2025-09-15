package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.SearchFieldCond
import net.ibizsys.runtime.util.SearchGroupCond
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import org.springframework.data.domain.Page;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl
import org.springframework.data.domain.Pageable;

@CompileStatic
class MemberWorklaodDEDataSetRuntime extends DEDataSetRuntimeBase {

	@Override
	protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {

		if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
			throw new Exception("实体未提供系统持久化设置器");
		}

        // 获取User实体
        IDataEntityRuntime userDERutime = this.getSystemRuntime().getDataEntityRuntime("USER");
        ISearchContextDTO userSearchContextDTO = userDERutime.createSearchContext();
		userSearchContextDTO.setPageable(iSearchContextDTO.getPageable());
		userSearchContextDTO.sort("display_name,desc");
		// 判断搜索条件中是否包含登记人
        String objValue = null;
		for (ISearchCond first : iSearchContextDTO.searchConds) {
			SearchGroupCond firstSearchGroupCond = (SearchGroupCond)first;
			if (firstSearchGroupCond.searchConds.size() > 0) {
				for (ISearchCond second : firstSearchGroupCond.searchConds) {
					if (second instanceof SearchGroupCond){
						SearchGroupCond secondSearchGroupCond = (SearchGroupCond)second;
						if (secondSearchGroupCond.searchConds.size() > 0){
							for (ISearchCond third : secondSearchGroupCond.searchConds) {
								if (third instanceof SearchFieldCond){
									SearchFieldCond searchFieldCond = (SearchFieldCond)third;
									if (searchFieldCond.getFieldName() == "create_man"){
                                        objValue = String.valueOf(searchFieldCond.getValue());
										if (!Objects.isNull(objValue)){
											objValue = objValue.replaceAll("'", "");
										}
                                        print "连接符" + searchFieldCond.getCondOp();
										//userSearchContextDTO.setFieldCond("id", searchFieldCond.getCondOp(), objValue);
									}
								}
							}
						}
					}
				}
			}
		}
        if (!Objects.isNull(objValue)) {
            List<IEntityDTO> dtos = new ArrayList<>();
            String[] strArr= objValue.split(",");
            for (int i = 0; i < strArr.length; i++){
                IEntityDTO userDTO = userDERutime.createEntity();
                userDTO.put("id", strArr[i]);
                dtos.add(userDTO);
            }
            int pageNum = strArr.length == 0 ? 1 : (int)Math.ceil((double)strArr.length / (double)userSearchContextDTO.getPageable().getPageSize());
            return new CustomPageImpl<IEntityDTO>(fillWorkloadData(dtos, iSearchContextDTO), userSearchContextDTO.getPageable(), strArr.length, pageNum);
        }
        // 调用User的workload数据集合
        Object[] args = [userSearchContextDTO];
		Page<?> ret = (Page<?>)userDERutime.fetchDataSet("workload", null, args);
		Page<IEntityDTO> page = userDERutime.getEntityDTOPage(ret, userDERutime.getDefaultPSDEDataSet(), userSearchContextDTO.getPageable());
		return new CustomPageImpl<IEntityDTO>(fillWorkloadData(page.getContent(), iSearchContextDTO), userSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());
	}

	@Override
	public boolean isValid(Object[] args) {
		return true;
	}

	protected List<IEntityDTO> fillWorkloadData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<String> fetchUserIdList = new ArrayList<String>();
		// 查询工时日志
		for (IEntityDTO dto : dtos) {
			fetchUserIdList.add(dto.getString("id", ""));
		}
		iSearchContextDTO.count(false).limit(10000)//in("create_man", fetchUserIdList);
		List<IEntityDTO> worklaodDTOList = this.getDataEntityRuntime().selectDataQuery("calendar", iSearchContextDTO);
		if(worklaodDTOList != null && worklaodDTOList.size() > 0){
			for (IEntityDTO user : dtos) {
				boolean userExistsWorkload = false;
				for (IEntityDTO workload : worklaodDTOList) {
					if(user.getString("id", "") == workload.getString("create_man", "")){
						userExistsWorkload = true;
						break;
					}
				}
				if(!userExistsWorkload){
					IEntityDTO entityDTO = this.getDataEntityRuntime().createEntity();
					entityDTO.put("create_man", user.getString("id", ""));
					entityDTO.put("duration", 0);
					worklaodDTOList.add(entityDTO);
				}
			}
			return worklaodDTOList;
		}
		List<IEntityDTO> emptyDTOList = new ArrayList<IEntityDTO>();
		for (IEntityDTO user : dtos) {
			IEntityDTO entityDTO = this.getDataEntityRuntime().createEntity();
			entityDTO.put("create_man", user.getString("id", ""));
			entityDTO.put("duration", 0);
			emptyDTOList.add(entityDTO);
		}

		return emptyDTOList;
	}

	class CustomPageImpl<T> extends net.ibizsys.central.util.PageImpl<T> {
		private final long total;
		public CustomPageImpl(List<T> content, Pageable pageable, long total, int totalPages) {
			super(content, pageable, total,totalPages);
			this.total = total;
		}

		@Override
		long getTotalElements() {
			return total;
		}
	}
}