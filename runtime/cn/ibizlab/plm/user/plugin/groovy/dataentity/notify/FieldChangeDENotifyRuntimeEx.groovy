package cn.ibizlab.plm.user.plugin.groovy.dataentity.notify

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.notify.DENotifyRuntime
import net.ibizsys.central.util.SearchGroupCond
import net.ibizsys.model.util.JsonUtils
import net.ibizsys.psmodel.core.util.Conditions
import net.ibizsys.psmodel.core.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.ISearchFieldCond
import org.springframework.util.StringUtils

@CompileStatic
public class FieldChangeDENotifyRuntimeEx extends DENotifyRuntime{
    @Override
    protected void onSend(IEntity iEntity, Map<String, Object> params) throws Throwable {
        Object eventData = params.get(NOTIFY_PARAM_EVENTDATA);
        // 自定义条件
        String strsearchCond = this.getPSDENotify().getCustomCond();
         if(StringUtils.hasLength(strsearchCond)){
             SearchGroupCond searchGroupCond = SearchGroupCond.from(JsonUtils.asMap(strsearchCond),true);
             if(!testDomainField((IEntity)eventData,searchGroupCond)) {
                 return;
             }
        }
        super.onSend(iEntity,params)
    }

    protected boolean testDomainField(IEntity entity, SearchGroupCond searchGroupCond) throws Exception {
        Boolean testResult = true;
        if(StringUtils.hasLength(this.getPSDENotify().getUserTag())){
            if (!this.getPSDENotify().getUserTag().equals(entity.get("work_item_type_id"))) {
                return false;
            }
        }
        String groupType = searchGroupCond.getCondOp();
        Boolean andMode = groupType.equals("AND")?true:false;
        List<ISearchCond> searchConds = searchGroupCond.getSearchConds();
        for (ISearchCond searchCond : searchConds) {
            if(searchCond instanceof ISearchFieldCond) {
                Object value = entity.get(searchCond.getFieldName()) ;
                if(!testSingleDomainField(value,searchCond.getCondOp(),searchCond.getValue())) {
                    if(andMode) {
                        testResult = testResult && false;
                        break;
                    }else {
                        testResult = testResult || false;
                    }

                }else {
                    if(!andMode) {
                        testResult = testResult || true;
                    }
                }
            }
        }
        return testResult;
    }

    protected boolean testSingleDomainField(Object value, String strCondition,Object condValue){
        if (Conditions.EQ.equals(strCondition) || Conditions.ABSEQ.equals(strCondition)) {
            if (value instanceof String) {
                return ((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) == 0;
        }

        if (Conditions.GT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) > 0;
        }

        if (Conditions.GTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) >= 0;
        }

        if (Conditions.LT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) < 0;
        }

        if (Conditions.LTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) <= 0;
        }

        if (Conditions.NOTEQ.equals(strCondition)) {
            if (value instanceof String) {
                return !((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) != 0;
        }

        if (Conditions.IN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() > 0;
        }

        if (Conditions.NOTIN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() <= 0;
        }

        if (Conditions.LIKE.equals(strCondition)) {
            return value.toString().toUpperCase().indexOf(condValue.toString().toUpperCase()) != -1;
        }
        if(Conditions.ISNOTNULL.equals(strCondition)) {
            return value != null;
        }
        if(Conditions.ISNULL.equals(strCondition)) {
            return value == null;
        }
        return false;
    }
}
