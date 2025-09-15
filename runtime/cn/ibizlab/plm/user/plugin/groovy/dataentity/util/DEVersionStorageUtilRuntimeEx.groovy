package cn.ibizlab.plm.user.plugin.groovy.dataentity.util;

import groovy.transform.CompileStatic;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.dataentity.ds.DEDQJoinTypes;
import net.ibizsys.central.dataentity.util.DEVersionStorageUtilRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.SearchContextDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.model.dataentity.der.IPSDER1N;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.model.dataentity.ds.IPSDEDQJoin;
import net.ibizsys.model.dataentity.ds.IPSDEDataQuery;
import net.ibizsys.model.dataentity.ds.IPSDEDataSet;
import net.ibizsys.runtime.util.ISearchCond;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.List;

@CompileStatic
public class DEVersionStorageUtilRuntimeEx extends DEVersionStorageUtilRuntime {

    @Override
    protected void prepareVersionDataEntityRuntime() throws Exception {
        super.prepareVersionDataEntityRuntime();
    }

    @Override
    protected List<IEntityDTO> filterEntityDTOList(List<IEntityDTO> list, IPSDEDataSet iPSDEDataSet, ISearchContextDTO iSearchContextDTO) throws Throwable {
        List<IEntityDTO> filterList = super.filterEntityDTOList(list,iPSDEDataSet,iSearchContextDTO);
        Map<String, Object> params = new LinkedHashMap<>();
        if(iSearchContextDTO.any()!=null) {
            params.putAll(iSearchContextDTO.any());
        }
        List<IPSDEDataQuery> psDEDataQueryList = iPSDEDataSet.getPSDEDataQueries();
        if(!ObjectUtils.isEmpty(psDEDataQueryList)) {
            for(IPSDEDataQuery iPSDEDataQuery : psDEDataQueryList) {
                if(iPSDEDataQuery.getPSDEDQMain() != null
                        && iPSDEDataQuery.getPSDEDQMain().getPSDEDQGroupCondition() != null) {
                    List<IPSDEDQJoin> childPSDEDQJoins =  iPSDEDataQuery.getPSDEDQMain().getChildPSDEDQJoins();
                    //只识别第一层
                    for (IPSDEDQJoin childPSDEDQJoin: childPSDEDQJoins) {
                        if (DEDQJoinTypes.TYPE_N1.equals(childPSDEDQJoin.getJoinType())) {
                            ISearchCond joinPSDESearchCond = super.getSearchCond(childPSDEDQJoin.getPSDEDQGroupCondition(), params);
                            IPSDERBase joinPSDER = childPSDEDQJoin.getJoinPSDER();
                            IPSDEField pickupPSDEField = null;
                            IDataEntityRuntime joinPSDERuntime = this.getSystemRuntime().getDataEntityRuntime(childPSDEDQJoin.getJoinPSDataEntity().getName());

                            if (joinPSDER instanceof IPSDER1N) {
                                IPSDER1N iPSDER1N = (IPSDER1N) joinPSDER;
                                pickupPSDEField = iPSDER1N.getPSPickupDEFieldMust();
                            } else if (joinPSDER instanceof IPSDERCustom) {
                                IPSDERCustom iPSDERCustom = (IPSDERCustom) joinPSDER;
                                pickupPSDEField = iPSDERCustom.getPickupPSDEField();
                            } else{
                                continue;
                            }
                            
                            Map<String, IEntityDTO> entityDTOMap = new LinkedHashMap<>();
                            for (IEntityDTO iEntityDTO : filterList) {
                                entityDTOMap.put((String) iEntityDTO.get(pickupPSDEField.getLowerCaseName()), iEntityDTO);
                            }
                            SearchContextDTO joinPSDESearchContextDTO = (SearchContextDTO) joinPSDERuntime.createSearchContext(params);
                            List joinPSDESearchCondList = new ArrayList();
                            joinPSDESearchCondList.add(joinPSDESearchCond);
                            joinPSDESearchContextDTO.setSearchConds(joinPSDESearchCondList);
                            joinPSDESearchContextDTO.all().count(false).in(joinPSDERuntime.getKeyPSDEField().getLowerCaseName(), entityDTOMap.keySet());
                            List<IEntityDTO> joinDEList = joinPSDERuntime.selectDataSet(joinPSDERuntime.getDefaultPSDEDataSet(), joinPSDESearchContextDTO);
                            List joinfilterList = new ArrayList();
                            for (IEntityDTO iEntityDTO : joinDEList) {
                                Object key = joinPSDERuntime.getKeyFieldValue(iEntityDTO);
                                if (entityDTOMap.containsKey(key)) {
                                    joinfilterList.add(entityDTOMap.get(key));
                                }
                            }
                            filterList.clear();
                            filterList.addAll(joinfilterList);
                        }
                    }
                }
            }
        }
        return filterList;
    }
}
