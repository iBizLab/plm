# 服务插件 <!-- {docsify-ignore-all} -->

|  对象      |  实体  |  类型  | 插件  |备注|
|  --------  | ----- | -----    |-----    |----    |
|项目工作项代码表||PSCodeListImpl|[MSLogicCodeListRuntimeEx](#UsrSFPlugin0623056576)||
|SysDEBIReportProxyUtilRuntime||PSSysUtilImpl|[SysDEBIReportProxyUtilRuntime](#UsrSFPlugin0702700490)||
|SysPSDEModelUtilRuntime||PSSysUtilImpl|[PLMSysPSDEModelUtilRuntime](#PLMSysPSDEModelUtilRuntime)||
|用例步骤导入增强||PSSysTranslatorImpl|[One2ManyCaseStepImpTransRuntime](#UsrSFPlugin0515997865)|开发中，暂未使用|
|用户导入增强||PSSysTranslatorImpl|[One2ManyUserImpTransRuntime](#UsrSFPlugin0424744613)|参数名               说明                                   默认值<br>username       指定从用户实体对象中获取值名称名称             display_name<br>userdename     指定用户数据实体名称                          user<br>one2manyfield  指定转换器属性映射的1对多集合属性名称          attentions<br>one2manyuserid 指定映射的1对多集合属性中存储用户标识属性名称   user_id|
|@内容||PSSysTranslatorImpl|[SysAtContentTranslatorRuntime](#UsrSFPlugin0201416283)|评论@转换器|
|结束时间边界值||PSSysTranslatorImpl|[SysEndOfDayTranslatorRuntime](#UsrSFPlugin0401275996)||
|工作项通知模板(运行时)||PSSysMsgTemplImpl|[[消息模板]工作项通知模板(运行时)](#UsrSFPlugin0204714710)||
|填充产品需求版本数据(fill_version_data)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充页面版本数据(fill_version_data)|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充测试用例版本数据(fill_version_data)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充工作项版本数据(fill_version_data)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|空间页面(移动端)(normal_tree_page)|[页面(PAGE)](module/Wiki/article_page)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|多类型页面数据导入|[页面(PAGE)](module/Wiki/article_page)|PSDEDataImportImpl|[PageDataImportRuntimeEx](#PageDataImportRuntimeEx)|页面导入使用|
|version|[页面(PAGE)](module/Wiki/article_page)|PSDEUtilImpl|[DEVersionControlUtilRuntimeEx](#UsrSFPlugin0628633282)|排除新建模式行为自动建立版本|
|版本数据存储|[关联(RELATION)](module/Base/relation)|PSDEUtilImpl|[DEVersionStorageUtilRuntimeEx](#UsrSFPlugin0425071911)|查询版本关联数据|
|版本数据存储|[执行用例(RUN)](module/TestMgmt/run)|PSDEUtilImpl|[DEVersionStorageUtilRuntimeEx](#UsrSFPlugin0425071911)|查询版本关联数据|
|提交版本(COMMIT)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[CommitVersionDEActionRuntime](#UsrSFPlugin0324806543)|创建版本数据|
|修复版本(FixCommit)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[FixCommitVersionDEActionRuntime](#UsrSFPlugin0424197954)|初始化版本数据（修复版本）|
|恢复指定版本(RESTORE)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[RestoreVersionDEActionRuntime](#UsrSFPlugin0324899435)||
|人员维度(member_dimension)|[工时(WORKLOAD)](module/Base/workload)|PSDEDataSetImpl|[MemberWorklaodDEDataSetRuntime](#UsrSFPlugin0508758798)|工时管理，人员维度数据集合后台插件|
|工时日历移动端(mob_calendar)|[工时(WORKLOAD)](module/Base/workload)|PSDEDataSetImpl|[GroupNestedFieldsDEDataSetRuntime](#UsrSFPlugin1018391929)|分组数据集填充嵌套数据|
|看板工作项移动位置(board_move_position)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEUserCustomActionImpl|[BoardMovePositionDEActionRuntime](#UsrSFPlugin0618803950)|看板工作项移动排序|
|需求树表查询(requirement_tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|树表数据集合(tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|瀑布需求导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|Scrum工作项缺陷导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|Scrum工作项需求导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|瀑布缺陷导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|看板工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|敏捷工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|瀑布工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||

### EventHookDENotifyRuntimeEx :id=EventHookDENotifyRuntimeEx
运行时事件通知增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.notify.EventHookDENotifyRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.notify

import groovy.transform.CompileStatic;
import net.ibizsys.central.dataentity.notify.DENotifyRuntime
import net.ibizsys.central.util.SearchGroupCond
import net.ibizsys.model.util.JsonUtils
import net.ibizsys.psmodel.core.util.Conditions
import net.ibizsys.psmodel.core.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.ISearchFieldCond
import org.springframework.util.StringUtils;

@CompileStatic
public class EventHookDENotifyRuntimeEx extends DENotifyRuntime{

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

```
### FieldChangeDENotifyRuntimeEx :id=FieldChangeDENotifyRuntimeEx
运行时属性变更通知增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.notify.FieldChangeDENotifyRuntimeEx```

```groovy
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

```
### NestedDataImportRuntimeEx :id=NestedDataImportRuntimeEx


```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.NestedDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.JsonNode
import groovy.transform.CompileStatic;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.util.IEntity;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CompileStatic
public class NestedDataImportRuntimeEx extends POIDEDataImportRuntime  {
    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(NestedDataImportRuntimeEx.class);

    public final static String PARAM_NESTEDNAMEFIELD = "nestednamefield";
    public final static String PARAM_NESTEDPKEYFIELD = "nestedpkeyfield";
    public final static String PARAM_NESTEDSYMBOL = "nestedsymbol";

    private String strNestedNameField = null;
    private String strNestedPKeyField = null;
    private String strNestedSymbol = null;

    @Override
    protected void onInit() throws Exception {
        this.strNestedNameField =  this.getImportParam(PARAM_NESTEDNAMEFIELD,"");
        this.strNestedPKeyField =  this.getImportParam(PARAM_NESTEDPKEYFIELD,"pid");
        this.strNestedSymbol = this.getImportParam(PARAM_NESTEDSYMBOL, "→");
        super.onInit();
    }

    @Override
    protected List<Map<String, Object>> doResolveData(IEntity baseEntity, Workbook wb, V2ImportSchema importSchema) throws Throwable {
       List<Map<String, Object>> dataList = super.doResolveData(baseEntity, wb, importSchema);
       //进一步解析1对多数据对象导入数据
        Map<String, IPSDEDataImportItem> psDEDataImportItemMap = getPSDEDataImportItems();
        if (psDEDataImportItemMap == null || psDEDataImportItemMap.size() == 0) {
            throw new DataEntityRuntimeException(this.getDataEntityRuntimeBase(), this, String.format("没有定义任何导入项"));
        }
        String strNestedNameFieldTag = "";
        String strNestedKeyTag = "";
        String strNestedPKeyTag = "";
        boolean enableNestedImport = false;
        for (java.util.Map.Entry<String, IPSDEDataImportItem> entry : psDEDataImportItemMap.entrySet()) {
            IPSDEField iPSDEField = entry.getValue().getPSDEFieldMust();
            if(!StringUtils.hasLength(strNestedNameField)){
                strNestedNameField = this.getDataEntityRuntime().getMajorPSDEField().getLowerCaseName();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(strNestedNameField)) {
                strNestedNameFieldTag = entry.getKey();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(strNestedPKeyField)) {
                strNestedPKeyTag = entry.getKey();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(this.getDataEntityRuntime().getKeyPSDEField().getLowerCaseName())) {
                strNestedKeyTag = entry.getKey();
            }
            if(StringUtils.hasLength(strNestedNameFieldTag) && StringUtils.hasLength(strNestedPKeyTag) && StringUtils.hasLength(strNestedKeyTag) ){
                enableNestedImport = true;
            }
        }
        if(!enableNestedImport){
            return dataList;
        }
        List<String> parentKeyList = new ArrayList<>();
        for (Map<String, Object> paramMap : dataList){
            //生成主键用于后续绑定嵌套
            IEntityDTO iEntityDTO = this.getDataEntityRuntime().createEntity(paramMap);
            this.getDataEntityRuntime().fillEntityKeyValue(iEntityDTO);
            String strKeyPSDEFieldName = this.getDataEntityRuntime().getKeyPSDEField().getLowerCaseName();
            String strKey = (String)iEntityDTO.get(strKeyPSDEFieldName);
            paramMap.put(strNestedKeyTag,strKey);
            String nestedContent = (String) paramMap.get(strNestedNameFieldTag);
            if(StringUtils.hasLength(nestedContent)&& nestedContent.startsWith(strNestedSymbol)){
                int nestCount = 0;
                while (nestedContent.startsWith(strNestedSymbol)){
                    nestedContent = nestedContent.substring(1);
                    paramMap.put(strNestedPKeyTag,parentKeyList.get(nestCount));
                    nestCount++;
                }
                if(parentKeyList.size() > nestCount){
                    parentKeyList.set(nestCount,strKey);
                }else {
                    parentKeyList.add(strKey);
                }
            }else {
                parentKeyList.clear();
                parentKeyList.add(strKey);
            }
            paramMap.put(strNestedNameFieldTag,nestedContent);
        }
       return dataList;
    }

    protected String getImportParam(String strKey, String strDefault) {
        if (this.getPSDEDataImport().getImpParams() != null) {
            JsonNode node = this.getPSDEDataImport().getImpParams().get(strKey);
            if (node != null) {
                return node.asText(strDefault);
            }
        }
        return strDefault;
    }

}
```
### PLMSysPSDEModelUtilRuntime :id=PLMSysPSDEModelUtilRuntime


```cn.ibizlab.plm.user.plugin.groovy.sysutil.PLMSysPSDEModelUtilRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.sysutil;


import net.ibizsys.central.plugin.extension.sysutil.SysPSDEModelUtilRuntime;
import net.ibizsys.central.plugin.extension.sysutil.addin.ISysPSDEModelUtilRTAddin;
import net.ibizsys.central.plugin.extension.sysutil.addin.PSDESearchBarSyncTool;
import net.ibizsys.runtime.plugin.RuntimeObjectFactory;

public class PLMSysPSDEModelUtilRuntime extends SysPSDEModelUtilRuntime {
    static {
        RuntimeObjectFactory.getInstance().registerObjectIf(ISysPSDEModelUtilRTAddin.class, "*:PSDEMODELSYNCTOOL:PSSYSSEARCHBAR", PSDESearchBarSyncTool.class);
    }
}

```
### PageDataImportRuntimeEx :id=PageDataImportRuntimeEx
页面导入使用

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.PageDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.JsonNode
import groovy.transform.CompileStatic;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.util.IEntity;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CompileStatic
public class PageDataImportRuntimeEx extends POIDEDataImportRuntime  {


}
```
### SysAtContentTranslatorRuntime :id=UsrSFPlugin0201416283
评论@转换器

```net.ibizsys.central.res.SysAtContentTranslatorRuntime```

```groovy
null
```
### [消息模板]工作项通知模板(运行时) :id=UsrSFPlugin0204714710


```cn.ibizlab.plm.runtime.msg.WorkItemNotifyMsgTemplRuntime```

```groovy
package cn.ibizlab.plm.runtime.msg

/**
 * 工作项消息模板附加参数
 *
 */
class WorkItemNotifyMsgTemplRuntime extends net.ibizsys.central.msg.SysMsgTemplRuntime {


    @Override
    protected String getTemplContent(String strType, Object data, Map<String, Object> extParams) {
        //额外数据参数扩展
        if (extParams == null) {
            extParams = new HashMap<>()
        }
        extParams.put("param", "param")
        extParams.put("param2", new ArrayList())

        //获取 消息模板 相关配置信息
//        this.getPSSysMsgTempl().getName()
//        this.getPSSysMsgTempl().getUserTag()
//        this.getPSSysMsgTempl().getUserCat()

        //通过SystemRuntime获取其他相关信息
//        this.getSystemRuntime()


        return super.getTemplContent(strType, data, extParams)
    }

}

```
### CommitVersionDEActionRuntime :id=UsrSFPlugin0324806543
创建版本数据

```net.ibizsys.central.plugin.version.dataentity.action.CommitVersionDEActionRuntime```

```groovy
null
```
### RestoreVersionDEActionRuntime :id=UsrSFPlugin0324899435


```net.ibizsys.central.plugin.version.dataentity.action.RestoreVersionDEActionRuntime```

```groovy
null
```
### SysEndOfDayTranslatorRuntime :id=UsrSFPlugin0401275996


```net.ibizsys.central.plugin.util.res.SysEndOfDayTranslatorRuntime```

```groovy
null
```
### TreeGridDEDataSetRuntime :id=UsrSFPlugin0407757309
数据集合获取树表格层级数据

```net.ibizsys.central.plugin.util.dataentity.ds.TreeGridDEDataSetRuntime```

```groovy
null
```
### FillVersionDataDEDataSetRuntime :id=UsrSFPlugin0421357755
cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic;

import java.util.function.Predicate
import java.util.stream.Collectors;

import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import net.ibizsys.model.PSModelEnums;
import org.springframework.data.domain.Page;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

@CompileStatic
class FillVersionDataDEDataSetRuntime extends DEDataSetRuntimeBase {

	@Override
	protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {

		if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
			throw new Exception("实体未提供系统持久化设置器");
		}


		Page<?> ret = this.getDataEntityRuntime().getSystemPersistentAdapter().fetchDataSet(this.getDataEntityRuntime(), this.getPSDEDataSet(), iSearchContextDTO, null);
		Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());

		return new PageImpl<IEntityDTO>(fillVersionData(page.getContent(),iSearchContextDTO), iSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());

	}

	@Override
	public boolean isValid(Object[] args) {
		return true;
	}

	protected List<IEntityDTO> fillVersionData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<IEntityDTO> entityDTOList = new ArrayList<IEntityDTO>();
		//后续可以用参数指定
		String ownerDataKeyFieldName = "target_id";
		String ownerDataVersionKeyFieldName = "target_version_id";
		String ownerDataEntityTypeFieldName = "target_type";
		String ownerDataEntityName = "";
		List<String> fetchVersionIdList = new ArrayList<String>();
		for (IEntityDTO dto : dtos) {
			ownerDataEntityName = (String) dto.get(ownerDataEntityTypeFieldName);
			if (dto.get(ownerDataVersionKeyFieldName) == null) {
				continue;
			}
			fetchVersionIdList.add((String) dto.get(ownerDataVersionKeyFieldName));
		}
		if(!StringUtils.hasLength(ownerDataEntityName)){
			ownerDataEntityName = (String)iSearchContextDTO.get("owner_type");
		}
		if(!StringUtils.hasLength(ownerDataEntityName)){
			return dtos;
		}
		IDataEntityRuntime versionOwnerDERutime = this.getSystemRuntime().getDataEntityRuntime(ownerDataEntityName.toUpperCase());
		Map<String, IEntityDTO> versionDateMap = new LinkedHashMap<>();
		List<String> fetchLatestDataIdList = new ArrayList<String>();
		Map<String, IEntityDTO> latestVersionDateMap = new LinkedHashMap<>();
		if(versionOwnerDERutime.getDEVersionControlUtilRuntime() != null) {
			IDataEntityRuntime versionDERuntime = versionOwnerDERutime.getDEVersionControlUtilRuntime().getVersionDataEntityRuntime();
			try {
				ISearchContextDTO versionSearchContextDTO = versionDERuntime.createSearchContext();
				versionSearchContextDTO.count(false).limit(1000).in(versionDERuntime.getKeyPSDEField().getLowerCaseName(), fetchVersionIdList);
				List versionQueryRet = versionDERuntime.getSystemPersistentAdapter().query(versionDERuntime, versionDERuntime.getViewPSDEDataQuery(), versionSearchContextDTO, null);
				List<IEntityDTO> versionDTOList = versionDERuntime.getEntityDTOList(versionQueryRet, versionDERuntime.getViewPSDEDataQuery());
				for (IEntityDTO versionDTO : versionDTOList) {
					String strVersionDataId = versionDTO.getString(versionDERuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTID.value, false).getLowerCaseName(), null);
					String strVersionData = versionDTO.getString("data", null);
					if (!StringUtils.isEmpty(strVersionDataId) && !StringUtils.isEmpty(strVersionData)) {
						IEntityDTO versionDataDTO = (IEntityDTO) versionOwnerDERutime.deserializeEntity(strVersionData);
						//移除ID源对象ID字段
						versionDataDTO.reset(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName());
						versionDateMap.put(strVersionDataId, versionDataDTO);
					}
					if (StringUtils.isEmpty(strVersionData)) {
						fetchLatestDataIdList.add(strVersionDataId);
					}
				}
				if (fetchLatestDataIdList.size() > 0) {
					ISearchContextDTO versionOwnerSearchContextDTO = versionDERuntime.createSearchContext();
					versionOwnerSearchContextDTO.count(false).limit(1000).in(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName(), fetchLatestDataIdList);
					Page<?> ownerDataFetchRet = versionOwnerDERutime.getSystemPersistentAdapter().fetchDataSet(versionOwnerDERutime, versionOwnerDERutime.getDefaultPSDEDataSet(), versionOwnerSearchContextDTO, null);
					Page<IEntityDTO> ownerDataPage = versionOwnerDERutime.getEntityDTOPage(ownerDataFetchRet, versionOwnerDERutime.getDefaultPSDEDataSet(), versionOwnerSearchContextDTO.getPageable());
					for (IEntityDTO ownerDataDTO : ownerDataPage.getContent()) {
						String strOwnerDataDTOId = ownerDataDTO.getString(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName(), null);
						ownerDataDTO.reset(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName());
						latestVersionDateMap.put(strOwnerDataDTOId, ownerDataDTO);
					}
				}

			} catch (Throwable e) {
				throw new RuntimeException("查询目标版本数据异常");
			}
		}
		for(IEntityDTO dto : dtos) {
			String strVersionOwnerId = (String) dto.get(ownerDataKeyFieldName);
			if(versionDateMap.containsKey(strVersionOwnerId)){
				dto.putAll(versionDateMap.get(strVersionOwnerId).any());
			}
			if(latestVersionDateMap.containsKey(strVersionOwnerId)){
				dto.putAll(latestVersionDateMap.get(strVersionOwnerId).any());
			}
			entityDTOList.add(dto);
		}
		entityDTOList = filterVersionData(entityDTOList,iSearchContextDTO);
		return entityDTOList;
	}

	protected List<IEntityDTO> filterVersionData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<IEntityDTO> filterDtos = new ArrayList<>();
		//轻量级过滤
		Map<String, Object> params = iSearchContextDTO.any();
		List<String> strSearchConds = params.keySet().stream().filter({ key -> key.startsWith("n_") && key.split("_").length == 3 && this.getDataEntityRuntime().getPSDEFieldByCodeName(key.split("_")[1], true) != null }).collect(Collectors.toList());
		for (int i = 0;i< strSearchConds.size();i++ ) {
			String key = strSearchConds.get(i)
			List<IEntityDTO> filterResults = new ArrayList<>();
            Object objValue = params.get(key);
            String fieldName = key.split("_")[1];
            String operator = key.split("_")[2];
            if (operator.equalsIgnoreCase("eq")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> !ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) && iEntityDTO.get(fieldName).equals(objValue)} as Predicate<IEntityDTO>).collect(Collectors.toList()));
            } else if (operator.equalsIgnoreCase("isnull")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) } as Predicate<IEntityDTO>).collect(Collectors.toList()));
            } else if (operator.equalsIgnoreCase("isnotnull")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> !ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) } as Predicate<IEntityDTO>).collect(Collectors.toList()));
            }
        }
		if(strSearchConds.size() == 0){
			return dtos;
		}
		return filterDtos;
	}
}

```
### POIDEDataImportRuntimeEx :id=UsrSFPlugin0423541619
暂不使用

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.POIDEDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.CellValue;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.DataValidation;
import org.apache.poi.ss.usermodel.DataValidationConstraint;
import org.apache.poi.ss.usermodel.DataValidationHelper;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchemaField;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.sysutil.ISysOSSUtilRuntime;
import net.ibizsys.central.util.domain.ImportDataResult;
import net.ibizsys.model.codelist.IPSCodeItem;
import net.ibizsys.model.codelist.IPSCodeList;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem;
import net.ibizsys.runtime.codelist.ICodeListRuntime;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.security.IUserContext;
import net.ibizsys.runtime.sysutil.ISysFileUtilRuntime;
import net.ibizsys.runtime.util.EntityError;
import net.ibizsys.runtime.util.IEntity;

public class POIDEDataImportRuntimeEx extends POIDEDataImportRuntime  {
    
}
```
### FixCommitVersionDEActionRuntime :id=UsrSFPlugin0424197954
初始化版本数据（修复版本）

```net.ibizsys.central.plugin.version.dataentity.action.FixCommitVersionDEActionRuntime```

```groovy
null
```
### One2ManyUserImpTransRuntime :id=UsrSFPlugin0424744613
参数名               说明                                   默认值
username       指定从用户实体对象中获取值名称名称             display_name
userdename     指定用户数据实体名称                          user
one2manyfield  指定转换器属性映射的1对多集合属性名称          attentions
one2manyuserid 指定映射的1对多集合属性中存储用户标识属性名称   user_id

```cn.ibizlab.plm.plugin.util.res.One2ManyUserImpTransRuntime```

```groovy
package cn.ibizlab.plm.plugin.util.res;

import groovy.transform.CompileStatic;

import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.IDataEntityRuntime;

import java.util.ArrayList;
import java.util.List;

@CompileStatic
class One2ManyUserImpTransRuntime extends SysTranslatorRuntimeBase {

	private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyUserImpTransRuntime.class);



	public final static String PARAM_USERNAME = "username";

	public final static String PARAM_USERDENAME = "userdename";

	public final static String PARAM_ONE2MANYFIELD = "one2manyfield";

	public final static String PARAM_ONE2MANYUSERID = "one2manyuserid";

	private String strUserDEName = null;

	private String strUserNameField = null;

	private String strOne2ManyField = null;

	private String strOne2ManyUserId = null;
	@Override
	protected void onInit() throws Exception {

		this.strUserDEName = this.getTranslatorParam(PARAM_USERDENAME, "USER");
		this.strUserNameField = this.getTranslatorParam(PARAM_USERNAME, "display_name");
		this.strOne2ManyField = this.getTranslatorParam(PARAM_ONE2MANYFIELD, "attentions");
		this.strOne2ManyUserId = this.getTranslatorParam(PARAM_ONE2MANYUSERID, "user_id");
		super.onInit();
	}

	@Override
	protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
		if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO!=null ) {
			IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
			if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
				if (!(objValue instanceof String)) {
					return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
				}
                objValue = ((String)objValue).replace("，",",");
				IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
				IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
				if (iPSDERBase == null) {
					throw new RuntimeException(String.format("关系集合属性未绑定关系"));
				}
				IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
				IDataEntityRuntime UserDataEntityRuntime = getSystemRuntime().getDataEntityRuntime(strUserDEName);
				if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
					IPSDEField parentIdField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTID, true);
					IPSDEField parentTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTTYPE, true);
					IPSDEField parentSubTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE.value, true);
					List one2manyDatas = new ArrayList<>();
					ISearchContextDTO searchContextDTO = (ISearchContextDTO) UserDataEntityRuntime.createSearchContext();
					searchContextDTO.all().count(false).in(strUserNameField, objValue);
                    def args = [searchContextDTO] as Object[]
					Page<IEntityDTO> page = (Page<IEntityDTO>) (UserDataEntityRuntime).fetchDataSet(null, UserDataEntityRuntime.getDefaultPSDEDataSet(), args);
					if (page.getContent().size() > 0) {
						for (IEntityDTO itemDTO : page.getContent()) {
							IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
							refEntityDTO.set(refDataEntityRuntime.getMajorPSDEField().getLowerCaseName(), itemDTO.get(strUserNameField));
							refEntityDTO.set(strOne2ManyUserId.toLowerCase(), itemDTO.get(UserDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
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
					iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
				}
			}
		}
		return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
	}

}

```
### DEVersionStorageUtilRuntimeEx :id=UsrSFPlugin0425071911
查询版本关联数据

```cn.ibizlab.plm.user.plugin.groovy.dataentity.util.DEVersionStorageUtilRuntimeEx```

```groovy
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

```
### MemberWorklaodDEDataSetRuntime :id=UsrSFPlugin0508758798
工时管理，人员维度数据集合后台插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.MemberWorklaodDEDataSetRuntime```

```groovy
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
                                        String objValue = String.valueOf(searchFieldCond.getValue());
										if (!Objects.isNull(objValue)){
											objValue = objValue.replaceAll("'", "");
										}
										userSearchContextDTO.setFieldCond("id", searchFieldCond.getCondOp(), objValue);
									}
								}
							}
						}
					}
				}
			}
		}
		Object[] args = [userSearchContextDTO];
        // 调用User的workload数据集合
		Page<?> ret = (Page<?>)userDERutime.fetchDataSet("workload", null, args);
		Page<IEntityDTO> page = userDERutime.getEntityDTOPage(ret, userDERutime.getDefaultPSDEDataSet(), userSearchContextDTO.getPageable());
		return new CustomPageImpl<IEntityDTO>(fillWorkloadData(page.getContent(), iSearchContextDTO), userSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());;

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
		iSearchContextDTO.count(false).limit(10000).in("create_man", fetchUserIdList);
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
```
### One2ManyCaseStepImpTransRuntime :id=UsrSFPlugin0515997865
开发中，暂未使用

```cn.ibizlab.plm.plugin.util.res.One2ManyCaseStepImpTransRuntime```

```groovy
package cn.ibizlab.plm.plugin.util.res;

import groovy.transform.CompileStatic;

import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.IDataEntityRuntime;

import java.util.ArrayList;
import java.util.List;

@CompileStatic
class One2ManyCaseStepImpTransRuntime extends SysTranslatorRuntimeBase {

	private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyCaseStepImpTransRuntime.class);



	public final static String PARAM_USERNAME = "username";

	public final static String PARAM_USERDENAME = "userdename";

	public final static String PARAM_ONE2MANYFIELD = "one2manyfield";

	public final static String PARAM_ONE2MANYUSERID = "one2manyuserid";

	private String strUserDEName = null;

	private String strUserNameField = null;

	private String strOne2ManyField = null;

	private String strOne2ManyUserId = null;
	@Override
	protected void onInit() throws Exception {

		this.strUserDEName = this.getTranslatorParam(PARAM_USERDENAME, "USER");
		this.strUserNameField = this.getTranslatorParam(PARAM_USERNAME, "display_name");
		this.strOne2ManyField = this.getTranslatorParam(PARAM_ONE2MANYFIELD, "attentions");
		this.strOne2ManyUserId = this.getTranslatorParam(PARAM_ONE2MANYUSERID, "user_id");
		super.onInit();
	}

	@Override
	protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
		if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO!=null ) {
			IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
			if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
				if (!(objValue instanceof String)) {
					return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
				}
                objValue = ((String)objValue).replace("，",",");
				IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
				IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
				if (iPSDERBase == null) {
					throw new RuntimeException(String.format("关系集合属性未绑定关系"));
				}
				IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
				IDataEntityRuntime UserDataEntityRuntime = getSystemRuntime().getDataEntityRuntime(strUserDEName);
				if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
					IPSDEField parentIdField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTID, true);
					IPSDEField parentTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTTYPE, true);
					IPSDEField parentSubTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE.value, true);
					List one2manyDatas = new ArrayList<>();
					ISearchContextDTO searchContextDTO = (ISearchContextDTO) UserDataEntityRuntime.createSearchContext();
					searchContextDTO.all().count(false).in(strUserNameField, objValue);
                    def args = [searchContextDTO] as Object[]
					Page<IEntityDTO> page = (Page<IEntityDTO>) (UserDataEntityRuntime).fetchDataSet(null, UserDataEntityRuntime.getDefaultPSDEDataSet(), args);
					if (page.getContent().size() > 0) {
						for (IEntityDTO itemDTO : page.getContent()) {
							IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
							refEntityDTO.set(refDataEntityRuntime.getMajorPSDEField().getLowerCaseName(), itemDTO.get(strUserNameField));
							refEntityDTO.set(strOne2ManyUserId.toLowerCase(), itemDTO.get(UserDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
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
					iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
				}
			}
		}
		return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
	}

}

```
### SysPSDEModelUtilRuntime :id=UsrSFPlugin0606633396


```net.ibizsys.central.plugin.extension.sysutil.SysPSDEModelUtilRuntime```

```groovy
null
```
### HtmlToPdfTransRuntime :id=UsrSFPlugin0612360832
Html转PDF格式

```cn.ibizlab.plm.user.plugin.groovy.dataentity.logicnode.HtmlToPdfTransRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.logicnode;

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.logic.DELogicNodeRuntimeBase
import net.ibizsys.central.dataentity.logic.IDELogicParamRuntime
import net.ibizsys.central.dataentity.logic.IDELogicRuntimeContext
import net.ibizsys.central.dataentity.logic.IDELogicSession
import net.ibizsys.central.util.IEntity
import net.ibizsys.model.dataentity.logic.IPSDELogicNode

@CompileStatic
class HtmlToPdfTransRuntime extends DELogicNodeRuntimeBase {
    @Override
	protected void onExecute(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDELogicNode iPSDELogicNode) throws Throwable {

    }
}
```
### BoardMovePositionDEActionRuntime :id=UsrSFPlugin0618803950
看板工作项移动排序

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ac.BoardMovePositionDEActionRuntime```

```groovy
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
```
### CreateWorkItemLogicNodeRuntime :id=UsrSFPlugin0619559336
工作项自定义工作项类型创建逻辑节点

```cn.ibizlab.plm.user.plugin.groovy.dataentity.logic.CreateWorkItemLogicNodeRuntime```

```groovy
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
```
### MSLogicCodeListRuntimeEx :id=UsrSFPlugin0623056576


```cn.ibizlab.plm.user.plugin.groovy.dataentity.codelist.MSLogicCodeListRuntimeEx```

```groovy
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
```
### DEVersionControlUtilRuntimeEx :id=UsrSFPlugin0628633282
排除新建模式行为自动建立版本

```cn.ibizlab.plm.user.plugin.groovy.dataentity.util.DEVersionControlUtilRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.util;

import groovy.transform.CompileStatic;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums.DER1NMasterRS;
import net.ibizsys.model.PSModelEnums.DERSubType;
import net.ibizsys.model.PSModelEnums.DERType;
import net.ibizsys.model.PSModelEnums.DEUtilType;
import net.ibizsys.model.PSModelEnums.PredefinedFieldType;
import net.ibizsys.model.PSModelEnums.SortDir;
import net.ibizsys.model.dataentity.IPSDataEntity;
import net.ibizsys.model.dataentity.action.IPSDEAction;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.util.ActionSessionManager;
import net.ibizsys.runtime.util.DataTypeUtils;
import net.ibizsys.runtime.util.IAction;
import net.ibizsys.runtime.util.IEntityBase;
import net.ibizsys.runtime.util.KeyValueUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.Assert;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import net.ibizsys.central.dataentity.util.DEVersionControlUtilRuntime;

@CompileStatic
public class DEVersionControlUtilRuntimeEx extends DEVersionControlUtilRuntime {

    @Override
    public boolean isCommit(String strActionName, IPSDEAction iPSDEAction) {
        if ("create".equalsIgnoreCase(strActionName)) {
            return true;
        } else {
            return this.isAutoCommit() && "update".equalsIgnoreCase(strActionName);
        }
    }
}

```
### SysDEBIReportProxyUtilRuntime :id=UsrSFPlugin0702700490


```net.ibizsys.central.plugin.extension.sysutil.SysDEBIReportProxyUtilRuntime```

```groovy
null
```
### GroupNestedFieldsDEDataSetRuntime :id=UsrSFPlugin1018391929
分组数据集填充嵌套数据

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.GroupNestedFieldsDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic
import net.ibizsys.central.util.PageImpl
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import org.springframework.data.domain.Page;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;

import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSDEFGroup;

@CompileStatic
class GroupNestedFieldsDEDataSetRuntime extends DEDataSetRuntimeBase {
    @Override
    protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {
        if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
            throw new Exception("实体未提供系统持久化设置器");
        }

        Page<?> ret = this.getDataEntityRuntime().getSystemPersistentAdapter().fetchDataSet(this.getDataEntityRuntime(), this.getPSDEDataSet(), iSearchContextDTO, null);
        Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());

        return new PageImpl<IEntityDTO>(page.getContent(), iSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());

    }

    @Override
    protected Page<IEntityDTO> translatePageAfterProceed(Page<?> ret, ISearchContextDTO iSearchContextDTO) throws Throwable{
        Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());
        if(isFillEntityDTOPageNestedFields() && iSearchContextDTO.isFillNestedField()) {
            // this.getDataEntityRuntime().fillEntityDTOPageNestedFields(page, this.getPSDEDataSet());
            if(this.getPSDEDataSet().getViewLevel() == PSModelEnums.DEDataQueryViewLevel.ALL.value) {
                this.getDataEntityRuntime().fillEntityDTONestedFields(page.getContent(), (IPSDEFGroup)null);
            }
        }
        return page;
    }
}
```
### PSDESearchBarSyncTool :id=UsrSFPlugin1021369361


```cn.ibizlab.plm.user.plugin.groovy.sysutil.addin.PSDESearchBarSyncTool```

```groovy
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

// 		Map<String, Object> params = null;
// 		if(param instanceof Map) {
// 			params = (Map)param;
// 		}
// 		IDataEntityRuntime iDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDataEntity.getId());

// 		List<Map> mapList = new ArrayList<Map>();

// 		List<IPSDERBase> psDERBaseList = iPSDataEntity.getMinorPSDERs();
// 		if(!ObjectUtils.isEmpty(psDERBaseList)) {
// 			for(IPSDERBase iPSDERBase : psDERBaseList) {

// 				if(!(iPSDERBase instanceof IPSDERCustom)) {
// 					continue;
// 				}

// 				IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;

// 				//获取相应的视图
// 				IPSDataEntity majorPSDataEntity = iPSDERCustom.getMajorPSDataEntityMust();
// 				Set<String> viewCache = new HashSet<>();
// 				for(IPSApplication application : getSystemRuntime().getPSSystem().getAllPSApps()){
// 					IPSAppDataEntity majorPSAppDataEntity;
// 					for(IPSAppDataEntity appDataEntity: application.getAllPSAppDataEntities()){
// 						if(appDataEntity.getName().equals(majorPSDataEntity.getName())){
// 							majorPSAppDataEntity = appDataEntity;
// 							break;
// 						}
// 					}
// 					if (majorPSAppDataEntity == null){
// 						break;
// 					}
// 					for (IPSAppView appView : majorPSAppDataEntity.getAllPSAppViews()){
// 						//仅支持表格视图中绑定的搜索栏
// 						if(appView instanceof IPSAppDEGridView || appView instanceof IPSAppDETreeGridView){
// 							//避免重复添加
// 							if(viewCache.contains(appView.getCodeName())){
// 								continue;
// 							}
// 							viewCache.add(appView.getCodeName());
// 							IPSSearchBar searchbar = (IPSSearchBar)appView.getPSControl("searchbar",true);
// 							if(searchbar == null){
// 								searchbar = appView.getPSViewLayoutPanel().getPSControl("searchbar",true);
// 							}
// 							if(searchbar != null){
// 								int ordervalueindex = 1;
// 								for (IPSSearchBarGroup group : searchbar.getPSSearchBarGroups()) {

// 									Map<String, Object> obj = new LinkedHashMap<String, Object>();
// 									obj.put("APP_VIEW_TAG", appView.getCodeName());
// //									obj.put("APP_TAG", application.getCodeName());
// 									obj.put("NAME", group.getName());
// 									obj.put("OWNER_TYPE", "SYSTEM");
// 									if (!ObjectUtils.isEmpty(group.getData())){
// 										try {
// 											JsonNode jsonNode = JsonUtils.MAPPER.readTree(group.getData())
// 											obj.put("THEME_MODEL",jsonNode.get("theme_model").toString());
// 										} catch (Exception e) {
// 											continue;
// 										}
// 									}
// 									obj.put("SYSTEM_TAG", getSystemRuntime().getDeploySystemId());
// 									obj.put("VALID_FLAG", 1);
// 									obj.put("ORDER_VALUE", ordervalueindex * 100);
// 									obj.put("CAPTION",  group.getCaption());
// 									mapList.add(obj);
// 									ordervalueindex = ordervalueindex+1;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}

// 		//查询历史数据
// 		Map<String, IEntityDTO> lastEntityDTOMap = null;

// 		IPSDEDataSet iPSDEDataSet = iDataEntityRuntime.getPSDEDataSetByTag(PSMODELSYNC_PREDEFINEDDATASET_PSMODELSYNC, true);
// 		if(iPSDEDataSet != null) {

// 			lastEntityDTOMap = new HashMap<String, IEntityDTO>();
// 			ISearchContextDTO iSearchContextDTO = iDataEntityRuntime.createSearchContext();
// 			iSearchContextDTO.all().count(false);
// 			iSearchContextDTO.eq("SYSTEM_TAG",getSystemRuntime().getDeploySystemId());
// 			List<IEntityDTO> list = iDataEntityRuntime.selectDataSet(iPSDEDataSet, iSearchContextDTO);
// 			for(IEntityDTO item : list) {
// 				String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
// 				lastEntityDTOMap.put(unionTag, item);
// 			}
// 		}


// 		//执行批保存
// 		List<IEntityDTO> updateentityList = new ArrayList<IEntityDTO>();
// 		List<IEntityDTO> createentityList = new ArrayList<IEntityDTO>();
// 		for(Map<String, Object> item : mapList) {
// 			IEntityDTO iEntityDTO = iDataEntityRuntime.createEntity(item);
// 			String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
// 			if(lastEntityDTOMap != null && lastEntityDTOMap.containsKey(unionTag)) {
// 				IEntityDTO lastEntity = lastEntityDTOMap.get(unionTag);
// 				iEntityDTO.set(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),lastEntity.get(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),null));
// 				if(lastEntity.get("CAPTION").equals(item.get("CAPTION")) &&lastEntity.get("THEME_MODEL").equals(item.get("THEME_MODEL"))){
// 					continue;
// 				}
// 				updateentityList.add(iEntityDTO);
// 			}else {
// 				createentityList.add(iEntityDTO);
// 			}
// 		}


// 		for(IEntityDTO iEntityDTO : createentityList) {
// 			iDataEntityRuntime.fillEntityKeyValue(iEntityDTO);
// 		}

// 		if(ObjectUtils.isEmpty(createentityList)&& ObjectUtils.isEmpty(updateentityList)){
// 			return;
// 		}

// 		try {
// 			if(!ObjectUtils.isEmpty(createentityList) ) {
// 				iDataEntityRuntime.rawCreate(createentityList, true);
// 			}
// 			if(!ObjectUtils.isEmpty(updateentityList) ) {
// 				iDataEntityRuntime.rawUpdate(updateentityList, true);
// 			}
// 		}
// 		catch (Throwable ex) {
// 			log.error(String.format("同步搜索栏发生异常，%s", ex.getMessage()), ex);
// 		}
	}

}

```
### SimpleSysExtensionUtilRuntime :id=sysextension


```cn.ibizlab.central.plugin.groovy.sysutil.SimpleSysExtensionUtilRuntime```

```groovy
null
```






