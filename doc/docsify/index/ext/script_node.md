
## 使用脚本的处理逻辑节点<sup class="footnote-symbol"> <font color=orange>[210]</font></sup>

#### [组件(ADDON)](module/Base/addon)的处理逻辑[组件权限计数器(addon_authority)](module/Base/addon/logic/addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var addons = logic.getParam('addons');
var result = logic.getParam('result');
for(var i=0 ;i<addons.size;i++){
    var addon = addons.get(i);
    result.set(addon.get('ddon_type'),addon.get('is_enabled'));
}
```
#### [应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme)的处理逻辑[获取过滤条件(fill_search_conds)](module/ebsx/app_view_theme/logic/fill_search_conds)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def deRuntime = logic.param('Default').getDataEntityRuntime();
def strThemeModel = _default.get("theme_model")
def themeModel = deRuntime.deserializeEntity(strThemeModel);
_default.set("search_conds",themeModel.get("searchconds"))
```
#### [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)的处理逻辑[基线对比数据查询(baseline_comparison)](module/ProdMgmt/baseline_idea/logic/baseline_comparison)

节点：提取关联对象中的主键标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_ids = logic.getParam("idea_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = idea_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    idea_ids.set("ids", ids);
}
```
#### [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)的处理逻辑[基线对比数据查询(baseline_comparison)](module/ProdMgmt/baseline_idea/logic/baseline_comparison)

节点：提取关联对象中的版本标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_versions = logic.getParam("idea_versions");
var idea_for_temp = logic.getParam("idea_for_temp");
if(idea_for_temp.get("cur_version_id")){
    var version_id_in = idea_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + idea_for_temp.get("cur_version_id");
    } else {
        version_id_in = idea_for_temp.get("cur_version_id");
    }
    idea_versions.set("version_id_in", version_id_in);
}
```
#### [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)的处理逻辑[基线对比数据查询(baseline_comparison)](module/Wiki/baseline_page/logic/baseline_comparison)

节点：提取关联对象中的主键标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_ids = logic.getParam("page_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = page_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    page_ids.set("ids", ids);
}
```
#### [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)的处理逻辑[基线对比数据查询(baseline_comparison)](module/Wiki/baseline_page/logic/baseline_comparison)

节点：提取关联对象中的版本标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_versions = logic.getParam("page_versions");
var page_for_temp = logic.getParam("page_for_temp");
if(page_for_temp.get("cur_version_id")){
    var version_id_in = page_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + page_for_temp.get("cur_version_id");
    } else {
        version_id_in = page_for_temp.get("cur_version_id");
    }
    page_versions.set("version_id_in", version_id_in);
}
```
#### [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)的处理逻辑[基线对比数据查询(baseline_comparison)](module/TestMgmt/baseline_test_case/logic/baseline_comparison)

节点：提取关联对象中的主键标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var test_case_ids = logic.getParam("test_case_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = test_case_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    test_case_ids.set("ids", ids);
}
```
#### [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)的处理逻辑[基线对比数据查询(baseline_comparison)](module/TestMgmt/baseline_test_case/logic/baseline_comparison)

节点：提取关联对象中的版本标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var test_case_versions = logic.getParam("test_case_versions");
var test_case_for_temp = logic.getParam("test_case_for_temp");
if(test_case_for_temp.get("cur_version_id")){
    var version_id_in = test_case_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + test_case_for_temp.get("cur_version_id");
    } else {
        version_id_in = test_case_for_temp.get("cur_version_id");
    }
    test_case_versions.set("version_id_in", version_id_in);
}
```
#### [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)的处理逻辑[基线对比数据查询(baseline_comparison)](module/ProjMgmt/baseline_work_item/logic/baseline_comparison)

节点：提取关联对象中的主键标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_ids = logic.getParam("work_item_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = work_item_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    work_item_ids.set("ids", ids);
}
```
#### [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)的处理逻辑[基线对比数据查询(baseline_comparison)](module/ProjMgmt/baseline_work_item/logic/baseline_comparison)

节点：提取关联对象中的版本标识
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_versions = logic.getParam("work_item_versions");
var work_item_for_temp = logic.getParam("work_item_for_temp");
if(work_item_for_temp.get("cur_version_id")){
    var version_id_in = work_item_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + work_item_for_temp.get("cur_version_id");
    } else {
        version_id_in = work_item_for_temp.get("cur_version_id");
    }
    work_item_versions.set("version_id_in", version_id_in);
}
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[删除客户发送通知(remove_customer_notify)](module/ProdMgmt/customer/logic/remove_customer_notify)

节点：获取操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[取消关联(del_relation)](module/ProdMgmt/customer/logic/del_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id"));
}

```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/customer/logic/get_product_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/customer/logic/get_product_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/customer/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/customer/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取需求中客户信息(get_idea_customer_info)](module/ProdMgmt/customer/logic/get_idea_customer_info)

节点：计算分数
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def list = logic.param("relation_page").getReal().content
def result = logic.param("result").getReal()
def score = 0
def customer_num = list.size()
def very_important = 0
def very_important_precent = 0
def important = 0
def important_precent = 0
def normal = 0
def normal_precent = 0
def unknown = 0
def unknown_precent = 0
def not_important = 0
def not_important_precent = 0
def score_precent = 0

list.each{ item -> 
    sys.info('level', item.get("level"))
    switch(item.get("level")) {
        case '10':
            score += 3
            very_important++
            break
        case '20':
            score += 2
            important++
            break
        case '30':
            score += 1
            normal++
            break
        case '40':
            score += 0
            not_important++
            break
        case '50':
            score += 1
            unknown++
            break
        default:
            score += 0;
    }
}

if (customer_num != 0) {
    very_important_precent = very_important / customer_num
    important_precent = important / customer_num
    normal_precent = normal / customer_num
    unknown_precent = unknown / customer_num
    not_important_precent = not_important / customer_num
    score_precent = score / (customer_num * 3)
}

result.set("score", score + "分")
result.set("customer_num", customer_num)
result.set("very_important", very_important)
result.set("important", important)
result.set("normal", normal)
result.set("unknown", unknown)
result.set("not_important", not_important)
result.set("very_important_precent", very_important_precent)
result.set("important_precent", important_precent)
result.set("normal_precent", normal_precent)
result.set("unknown_precent", unknown_precent)
result.set("not_important_precent", not_important_precent)
result.set("score_precent", score_precent)
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[获取话题成员（移动端）(mob_get_topic_member)](module/Team/discuss_post/logic/mob_get_topic_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[获取话题成员（移动端）(mob_get_topic_member)](module/Team/discuss_post/logic/mob_get_topic_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[获取话题成员（移动端）(mob_get_topic_member)](module/Team/discuss_post/logic/mob_get_topic_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[获取话题成员（移动端）(mob_get_topic_member)](module/Team/discuss_post/logic/mob_get_topic_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[获取快速新建话题集合(quick_create)](module/Team/discuss_topic/logic/quick_create)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[获取话题成员(get_discuss_member_one)](module/Team/discuss_topic/logic/get_discuss_member_one)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[获取话题成员(get_discuss_member_one)](module/Team/discuss_topic/logic/get_discuss_member_one)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[获取话题成员(get_discuss_member_one)](module/Team/discuss_topic/logic/get_discuss_member_one)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(use_cur_template)](module/Base/dyna_dashboard/logic/use_cur_template)

节点：生成报表
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_board = logic.getParam("new_board");
var strModel = new_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var portletid = reportModel.i;
  var bireportid = portletid.substring(12).replace("__",".");
  bireportids.push(bireportid);
}
var reportSearchContext = sys.filter("insight_report");
var templReports = reportSearchContext.in("id",bireportids.join(",")).pageable(0,1000).select("is_system");
for(var i=0; i<templReports.length; i++){
    var bireport = templReports.get(i);
    var orginId = bireport.get("id");
    bireport.reset("id");
    bireport.set("view_id",new_board.get("owner_id"));
    bireport.set("is_system",0);
    var newbireport = bireport.create();
    replaceIds[orginId.replace(".","__").toLowerCase()] = newbireport.get("id").replace(".","__").toLowerCase();
}
for(var key in replaceIds){
    var keyreg = new RegExp(key, "g");
    strModel = strModel.replace(keyreg,replaceIds[key]);
}
new_board.set("model",strModel);
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[更新看板部件模型(sync_portlet_model)](module/Base/dyna_dashboard/logic/sync_portlet_model)

节点：更新看板部件模型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var strModel = _default.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var biPortletIds = [];
var replaceIds ={};
var biPortletDigest ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var dynamodelFlag =  reportModel.dynamodelFlag;
  if(dynamodelFlag && dynamodelFlag == 1){
    var portletId =  reportModel.portletId;
    var portletDigest = reportModel.controlmodeldigest?reportModel.controlmodeldigest:"__needRefresh__";
    biPortletIds.push(portletId);
    biPortletDigest[portletId] = portletDigest;
  }
}
var portletSearchContext = sys.filter("psappportlet");
var viewPortlets = portletSearchContext.in("psappportletid",biPortletIds.join(",")).eq("pssysappid","plmweb").ne("dynamodelflag",0).pageable(0,200).select();
for(var i=0; i<viewPortlets.length; i++){
    var biPortlet = viewPortlets.get(i);
    var biPortletId = biPortlet.get("psappportletid");
    var curPortletDigest = biPortlet.get("controlmodeldigest");
    if(biPortletDigest[biPortletId] && biPortletDigest[biPortletId] != curPortletDigest){
        var  lastBIPortlet = biPortlet.last();
        replaceIds[biPortletId] = lastBIPortlet;
    }
}
for(var j=0; j<modeljArray.length; j++){
  var reportModel2 = modeljArray[j];
  var dynamodelFlag =  reportModel2.dynamodelFlag;    
  if(dynamodelFlag != 1){
      continue;
  }
  var portletId2 = reportModel2.portletId;
  reportModel2["orignModel"] = false;

  if(replaceIds[portletId2] != null){
        reportModel2.portletModel = JSON.parse(replaceIds[portletId2].get("controlmodel"))
        reportModel2["orignModel"] = true;
        reportModel2["controlmodeldigest"] = replaceIds[portletId2].get("controlmodeldigest");
  }
  if(reportModel2.portletModel.controlmodeldigest){
        reportModel2["orignModel"] = true;
  }
}
_default.set("model",JSON.stringify(modeljO));
```
#### [执行人(EXECUTOR)](module/Base/executor)的处理逻辑[删除执行人时发送通知(del_notice)](module/Base/executor/logic/del_notice)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
//获取当前用户
def user = sys.user()
def _default = logic.param('Default').getReal()
if(_default.get('user_id') == user.getUserid()){
    _default.set('is_current_user', '1')
}
```
#### [扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)的处理逻辑[工时自动计算(workload_auto_cal)](module/Base/extend_storage/logic/workload_auto_cal)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var workload_data = logic.getParam("workload_data");
var actual_workload = workload_data.get("actual_workload");
var estimated_workload =workload_data.get("estimated_workload");
var remaining_workload = null;
if(estimated_workload){
    if(actual_workload){
        remaining_workload = estimated_workload-actual_workload;
        if(remaining_workload>0){
            workload_data.set("remaining_workload",remaining_workload);
        }
    }else{
        workload_data.set("remaining_workload",estimated_workload);
    }
}


```
#### [扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)的处理逻辑[工时自动计算(workload_auto_cal)](module/Base/extend_storage/logic/workload_auto_cal)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var workload_data = logic.getParam("workload_data");
var cur_estimated_workload = parseFloat(work_item_temp && work_item_temp.get("estimated_workload")) || 0;
var cur_actual_workload = parseFloat(work_item_temp && work_item_temp.get("actual_workload")) || 0;

workload_data.set("estimated_workload", cur_estimated_workload + workload_data.get("estimated_workload"));
workload_data.set("actual_workload",cur_actual_workload + workload_data.get("actual_workload")) ;

```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[基线规划需求数据查询(baseline_plan_idea)](module/ProdMgmt/idea/logic/baseline_plan_idea)

节点：获取所选需求的版本ID信息
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_versions = logic.getParam("idea_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = idea_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    idea_versions.set("version_id_in", version_id_in);
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/idea/logic/get_product_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/idea/logic/get_product_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/idea/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/idea/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取客户分数(get_customer_score)](module/ProdMgmt/idea/logic/get_customer_score)

节点：计算分数
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def list = logic.param("relation_page").getReal().content
def result = logic.param("result").getReal()
def score = 0
list.each{ item -> 
    sys.info('level', item.get("level"))
    switch(item.get("level")) {
        case '10':
            score += 3
            break
        case '20':
            score += 2
            break
        case '30':
            score += 1
            break
        case '40':
            score += 0
            break
        case '50':
            score += 1
            break
        default:
            score += 0;
    }
}

result.set("customer_score", score + "分") 
if (list.size() != 0) {
    result.set("customer_score_precent", score / (list.size() * 3))
} else {
    result.set("customer_score_precent", 0)
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[计划内需求批删除(plan_delete_idea)](module/ProdMgmt/idea/logic/plan_delete_idea)

节点：拼接正反关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null && forward_relation_obj.get("principal_type") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id") + '_' + forward_relation_obj.get("principal_type"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null && reverse_relation_obj.get("principal_type") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id") + '_' + reverse_relation_obj.get("principal_type"));
}
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_report/logic/use_cur_template)

节点：生成报表
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_board = logic.getParam("new_board");
var strModel = new_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var portletid = reportModel.i;
  var bireportid = portletid.substring(12).replace("__",".");
  bireportids.push(bireportid);
}
var reportSearchContext = sys.filter("insight_report");
var templReports = reportSearchContext.in("id",bireportids.join(",")).pageable(0,1000).select();
for(var i=0; i<templReports.length; i++){
    var bireport = templReports.get(i);
    var orginId = bireport.get("id");
    bireport.reset("id");
    bireport.set("view_id",new_board.get("owner_id"));
    bireport.set("is_system",0);
    bireport.create();
    replaceIds[orginId.replace(".","__")] = bireport.get("id").replace(".","__");
}
for(var key in replaceIds){
 strModel = strModel.replace(key,replaceIds[key]);
}
//类似forEach遍历
new_board.set("model",strModel);
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[同步模板模型(sync_model)](module/Insight/insight_report/logic/sync_model)

节点：dump模型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var bireport = logic.getParam("bireport");
var _default = logic.getParam("default");
_default.set("template_model",bireport.dump());
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[复制报表(copy_report)](module/Insight/insight_report/logic/copy_report)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var target_board = logic.getParam("target_board");
var new_report = logic.getParam("new_report");
var strModel = target_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds = {};
//获取新建报表ID数据，同步生成仪表盘的模型数据
var portletId = ("plmweb.uxbireport__") + (new_report.get("id").toLowerCase());
var portletCodeName = ("uxbireport__") + (new_report.get("id").toLowerCase());
var new_board_report = {};
new_board_report.i = portletCodeName;
new_board_report.portletId = portletId;
new_board_report.portletCodeName = portletCodeName;



```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[建立报表扩展模型(create_bi_report)](module/Insight/insight_report/logic/create_bi_report)

节点：从模板初始化模型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var bireport = logic.getParam("bireport");
var templateModel = _default.get("template_model");
if(templateModel != null){
    bireport.from(templateModel);
    bireport.reset("pssysbireportid");
    bireport.reset("codename");
}
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_report/logic/get_view_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_report/logic/get_view_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_report/logic/get_view_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[计算分组信息(calc_group_data)](module/Insight/insight_report/logic/calc_group_data)

节点：转换参数
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var groupdata = logic.getParam('group_data');
if( _default.get("group")!=null){
    groupdata.set("groupname", _default.codeitem("group").text);
    groupdata.set("groupcodename", _default.get("group"));
}
if( _default.get("id")!=null){
    var appportletid = "plmweb.";
    var appportletcodename = "uxbireport__"+_default.get("id").replace(".", "__");
    appportletid = appportletid + appportletcodename;
    groupdata.set("psappportletid",appportletid.toLowerCase());
    groupdata.set("codename",appportletcodename.toLowerCase());
    groupdata.set("psappportletname",_default.get("name"));
    _default.set("ctrl_id",appportletid.toLowerCase());
}

```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_view/logic/use_cur_template)

节点：生成报表
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_board = logic.getParam("new_board");
var strModel = new_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var portletid = reportModel.i;
  var bireportid = portletid.substring(12).replace("__",".");
  bireportids.push(bireportid);
}
var reportSearchContext = sys.filter("insight_report");
var templReports = reportSearchContext.in("id",bireportids.join(",")).pageable(0,1000).select("is_system");
for(var i=0; i<templReports.length; i++){
    var bireport = templReports.get(i);
    var orginId = bireport.get("id");
    bireport.reset("id");
    bireport.set("view_id",new_board.get("owner_id"));
    bireport.set("is_system",0);
    var newbireport = bireport.create();
    replaceIds[orginId.replace(".","__").toLowerCase()] = newbireport.get("id").replace(".","__").toLowerCase();
}
for(var key in replaceIds){
    var keyreg = new RegExp(key, "g");
    strModel = strModel.replace(keyreg,replaceIds[key]);
}
new_board.set("model",strModel);
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_view/logic/get_view_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_view/logic/get_view_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_view/logic/get_view_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[获取视图成员(get_view_member)](module/Insight/insight_view/logic/get_view_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[创建测试库流程准则(auto_create_guideline)](module/TestMgmt/library/logic/auto_create_guideline)

节点：拼接guideline_ID
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_guideline = logic.getParam("new_guideline");
var for_obj_guideline = logic.getParam("for_obj_guideline");
new_guideline.set("id",new_guideline.get("scope_id")+"_"+for_obj_guideline.get("id"));
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[测试库组件权限计数器(library_addon_authority)](module/TestMgmt/library/logic/library_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[获取快速新建测试库集合(quick_create)](module/TestMgmt/library/logic/quick_create)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[获取测试库成员(get_library_member_one)](module/TestMgmt/library/logic/get_library_member_one)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[获取测试库成员(get_library_member_one)](module/TestMgmt/library/logic/get_library_member_one)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[获取测试库成员(get_library_member_one)](module/TestMgmt/library/logic/get_library_member_one)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)的处理逻辑[移除测试库成员通知(remove_library_member_notify)](module/TestMgmt/library_member/logic/remove_library_member_notify)

节点：填充当前操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员图表数据(calc_active_chart_datas)](module/Base/login_log/logic/calc_active_chart_datas)

节点：计算前15天和今天的日期
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，获取前15天的日期 
var fifty = new Date();  
// 获取前15天的日期  
fifty.setDate(fifty.getDate() - 15);  
// 获取年、月、日信息  
var year = fifty.getFullYear();  
var month = fifty.getMonth() + 1;  
var day = fifty.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}
// 创建一个新的 Date 对象，获取今天的日期 
var today = new Date();  
// 获取年、月、日信息  
var todayYear = today.getFullYear();  
var todayMonth = today.getMonth() + 1;  
var todayDay = today.getDate();  
if (todayMonth < 10) {
    todayMonth = '0' + todayMonth;
}
if (todayDay < 10) {
    todayDay = '0' + todayDay;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var todayDateStr = todayYear + '-' + todayMonth + '-' + todayDay;

var beforefiftyday = dateStr + ' 00:00:00';
var todays =  todayDateStr + ' 23:59:59';


logic.setParam('starttime',beforefiftyday);
logic.setParam('endtime',todays)
```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员图表数据(calc_active_chart_datas)](module/Base/login_log/logic/calc_active_chart_datas)

节点：计算图表所需数据
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var echart_obj = logic.getParam('echart_obj');
//活跃总人数
var user_total = logic.getParam('user_total');
var total = user_total.get('total');
//活跃人数
var active_members = echart_obj.get('active_members');
//计算活跃率
var active_rate = ((active_members / total) * 100).toFixed(2); 
//补充活跃率
echart_obj.set("active_rate",active_rate);

//处理authtime
var newdate = String(echart_obj.get('auth_time')).split(' ')[0]; 
echart_obj.set("auth_time",newdate);
```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员数据信息(calc_active_member_info)](module/Base/login_log/logic/calc_active_member_info)

节点： 准备昨日开始结束时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，包含当前的日期和时间  
var lastday = new Date();  
// 获取昨天的日期  
lastday.setDate(lastday.getDate() - 1);  
// 获取年、月、日信息  
var year = lastday.getFullYear();  
var month = lastday.getMonth() + 1;  
var day = lastday.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}

// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var lastdayFirst = dateStr + ' 00:00:00';
var lastdayLast =  dateStr + ' 23:59:59';

logic.setParam('last_day_starttime',lastdayFirst);
logic.setParam('last_day_endtime',lastdayLast)


```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员数据信息(calc_active_member_info)](module/Base/login_log/logic/calc_active_member_info)

节点：准备近七日开始结束时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 创建一个新的 Date 对象，包含当前的日期和时间  
var sevenday = new Date();  
// 获取前6天的日期  
sevenday.setDate(sevenday.getDate() - 6);  
// 获取年、月、日信息  
var year = sevenday.getFullYear();  
var month = sevenday.getMonth() + 1;  
var day = sevenday.getDate();  
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var dateStr = year + '-' + month + '-' + day;
var sevendayFirst = dateStr + ' 00:00:00';




// 创建一个新的 Date 对象，包含当前的日期和时间  
var today = new Date();  
// 获取年、月、日信息  
var todayyear = today.getFullYear();  
var todaymonth = today.getMonth() + 1;  
var todayday = today.getDate();  
if (todaymonth < 10) {
    todaymonth = '0' + todaymonth;
}
if (todayday < 10) {
    todayday = '0' + todayday;
}
// 生成日期字符串，格式为 YYYY-MM-DD
var enddate = todayyear + '-' + todaymonth + '-' + todayday + ' 23:59:59';

logic.setParam('seven_day_starttime',sevendayFirst);
logic.setParam('seven_day_endtime',enddate)


```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员数据信息(calc_active_member_info)](module/Base/login_log/logic/calc_active_member_info)

节点：赋值昨日和近七日活跃人数、活跃率
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var datas = logic.getParam('datas');
var last_active_members = logic.getParam('last_active_members');
var seven_active_members = logic.getParam('seven_active_members');
//活跃总人数
var active_count = datas.get('active_count');
//昨日活跃人数
var lastday_count = last_active_members.get('ACTIVE_MEMBERS');
//昨日活跃率
var lastday_rate = ((lastday_count / active_count) * 100).toFixed(2);
//设置昨日活跃人数和活跃率
datas.set("lastday_active_count",lastday_count);
datas.set("lastday_active_rate",lastday_rate);
//近七日活跃人数
var sevenday_count = seven_active_members.get('ACTIVE_MEMBERS');
//近七日活跃率
var sevenday_rate = ((sevenday_count / active_count) * 100).toFixed(2);
//设置近七日活跃人数和活跃率
datas.set("sevenday_active_count",sevenday_count);
datas.set("sevenday_active_rate",sevenday_rate);

```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[添加共享页面非空间下成员(add_shared_page_member)](module/Base/member/logic/add_shared_page_member)

节点：添加共享页面成员
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def choose_member = _default.get('choose_member')
def choose_member_ids = _default.get('choose_member_ids')
def member_ids = choose_member_ids.split(',')
def member_names = choose_member.split(',')
def member_runtime = sys.dataentity('member')
if(_default.get('shared_page') != null){
    member_ids.eachWithIndex { item, index ->
        def newMember = member_runtime.entity()
        newMember.set('owner_type', 'PAGE')
        newMember.set('role_id', _default.get('check_type', 'reader'))
        newMember.set('owner_subtype', 'SHARED')
        newMember.set('owner_id', _default.get('shared_page'))
        newMember.set('user_id', item) 
        newMember.set('name', member_names[index])
        member_runtime.save(newMember)
    }

}

```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[添加共享页面非空间下成员（移动端）(mob_add_shared_page_member)](module/Base/member/logic/mob_add_shared_page_member)

节点：添加共享页面成员
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def choose_member = _default.get('choose_member')
def choose_member_ids = _default.get('choose_member_ids')
def member_ids = choose_member_ids.split(',')
def member_names = choose_member.split(',')
def member_runtime = sys.dataentity('member')
if(_default.get('shared_page') != null){
    member_ids.eachWithIndex { item, index ->
        def newMember = member_runtime.entity()
        newMember.set('owner_type', 'PAGE')
        newMember.set('role_id', _default.get('check_type', 'reader'))
        newMember.set('owner_subtype', 'SHARED')
        newMember.set('owner_id', _default.get('shared_page'))
        newMember.set('user_id', item) 
        newMember.set('name', member_names[index])
        member_runtime.save(newMember)
    }

}

```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[选择资源成员（全局）(choose_resource_member)](module/Base/member/logic/choose_resource_member)

节点：分页参数
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def user_filter = logic.param('user_filter').getReal()
user_filter.setPageable(_default.getPageable())

```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[选择资源成员（全局）(choose_resource_member)](module/Base/member/logic/choose_resource_member)

节点：根据团队成员的用户标识查询USER
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var group_page = logic.getParam("group_page");
var user_filter = logic.getParam("user_filter");
var user_ids = "";
for (var i = 0; i < group_page.length; i++) {
    if(i>0){
        user_ids = user_ids+",";
    }
    var _group_member = group_page.get(i);
    user_ids = user_ids + _group_member.get("user_id");
}
if(user_ids != ""){
    user_filter.in("id",user_ids);
}
```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[非空间下成员(not_space_mmeber)](module/Base/member/logic/not_space_mmeber)

节点：填充user过滤器ni参数
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var space_members = logic.getParam("space_members");
var shared_page_members = logic.getParam("shared_page_members");
var user_filter = logic.getParam("Default");
var user_ids = "";
for (var i = 0; i < space_members.length; i++) {
    if(i>0){
        user_ids = user_ids+",";
    }
    var space_member = space_members.get(i);
    user_ids = user_ids + space_member.get("user_id");
}
for (var i = 0; i < shared_page_members.length; i++) {
    if(user_ids != ""){
        user_ids = user_ids+",";
    }
    var shared_page_member = shared_page_members.get(i);
    user_ids = user_ids + shared_page_member.get("user_id");
}
if(user_ids != ""){
    user_filter.ni("id",user_ids);
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[共享设置(shared_setting)](module/Wiki/article_page/logic/shared_setting)

节点：填充共享时间、共享人
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
if(_default.get('shared_by') == null){
    _default.set('shared_by', sys.user.getUserid())
}
if(_default.get('shared_time') == null){
    _default.set('shared_time', new java.sql.Timestamp(System.currentTimeMillis()))
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[发布页面(publish_page)](module/Wiki/article_page/logic/publish_page)

节点：设置发布时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("publish_time", new Date());
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[发布页面（测试）(publish_page_test)](module/Wiki/article_page/logic/publish_page_test)

节点：设置发布时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("publish_time", new Date());
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[基线规划页面数据查询(baseline_plan_page)](module/Wiki/article_page/logic/baseline_plan_page)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_versions = logic.getParam("page_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = page_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    page_versions.set("version_id_in", version_id_in);
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[校验共享访问密码(access_password)](module/Wiki/article_page/logic/access_password)

节点：校验链接是否有效
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def check_page = logic.param('check_page').getReal()
def expiration_date = check_page.get('expiration_date')
_default.set('effective', 1)
_default.set('check_access_password', 0)
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        _default.set('effective', 0)
    }
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[检验共享页面(check_shared)](module/Wiki/article_page/logic/check_shared)

节点：检验是否有效
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def result = logic.param('result').getReal()
result.set('id', _default.get('id'))
result.set('effective', 1)
result.set('check_access_pwd', 0)
def expiration_date = _default.get('expiration_date')
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        result.set('effective', 0)
    }
}
if(_default.get('access_password') != null){
    result.set('check_access_pwd', 1)
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取历史版本(get_by_version)](module/Wiki/article_page/logic/get_by_version)

节点：拆分id
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var versionObj = logic.getParam("version");
var id = defaultObj.get("id");
if(id != null && id != ''){
    if(id.contains("__SRFVERSION__")){
        var idArray = [];
        idArray = id.split("__SRFVERSION__");
        defaultObj.set("id",idArray[0]);
        versionObj.set("id",idArray[1]);
    }
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取知识空间成员(get_space_member)](module/Wiki/article_page/logic/get_space_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取知识空间成员(get_space_member)](module/Wiki/article_page/logic/get_space_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取知识空间成员(get_space_member)](module/Wiki/article_page/logic/get_space_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取知识空间成员(get_space_member)](module/Wiki/article_page/logic/get_space_member)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取页面共享链接(shared_url)](module/Wiki/article_page/logic/shared_url)

节点：拼接共享链接
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def plm_wiki = sys.param('plm_wiki','')
if(_default.get('id') != null && plm_wiki != '') {
    def _url = ''
  if(_default.get('is_shared_subset') == '1'){
      _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_with_sub_view/srfnavctx=%257B%2522shared_page%2522%253A%2522' + _default.get('id') + '%2522%257D'
  } else {
      _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_view/srfnavctx=%257B%2522shared_page%2522%253A%2522' + _default.get('id') + '%2522%257D'
  }
  _default.set('shared_page_url', _url)
}
```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[项目集组件权限计数器(portfolio_addon_authority)](module/Base/portfolio/logic/portfolio_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[项目集资源成员设置(resource_member_setting)](module/Base/portfolio/logic/resource_member_setting)

节点：判断此成员是否已加入资源
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def for_choose_obj = logic.param('for_choose_obj').getReal()
insert_members.each { item ->
    def user_id = item.user_id
    if(user_id == for_choose_obj.get('user_id')){
       for_choose_obj.set('already_exist', '1') 
    }
}


```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[项目集资源成员设置(resource_member_setting)](module/Base/portfolio/logic/resource_member_setting)

节点：资源成员绑定容量属性
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def resource_member = logic.param('resource_member').getReal()
def day_capacity = logic.param('day_capacity').getReal()
resource_member.set('day_capacity', day_capacity)
```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[项目集资源成员设置(resource_member_setting)](module/Base/portfolio/logic/resource_member_setting)

节点：资源成员绑定至组件
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def addon_resource = logic.param('addon_resource').getReal()
addon_resource.set('members', insert_members)
```
#### [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)的处理逻辑[移除项目集成员通知(remove_project_set_member_notify)](module/Base/portfolio_member/logic/remove_project_set_member_notify)

节点：获取当前操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[test_counters](module/ProdMgmt/product/logic/test_counters)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
_default.set('flag1', 0)
_default.set('flag2', 1)
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品组件权限计数器(product_addon_authority)](module/ProdMgmt/product/logic/product_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[获取产品成员(get_product_member_one)](module/ProdMgmt/product/logic/get_product_member_one)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[获取产品成员(get_product_member_one)](module/ProdMgmt/product/logic/get_product_member_one)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[获取产品成员(get_product_member_one)](module/ProdMgmt/product/logic/get_product_member_one)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[获取快速新建产品集合(quick_create)](module/ProdMgmt/product/logic/quick_create)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)的处理逻辑[移除产品成员通知(remove_product_member_notify)](module/ProdMgmt/product_member/logic/remove_product_member_notify)

节点：获取当前操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)的处理逻辑[获取关联的工单数量(get_con_product_tag)](module/ProdMgmt/product_tag/logic/get_con_product_tag)

节点：添加工单数量提醒内容
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var tag = logic.getParam("Default");
var num = tag.get("num");
tag.set("remind", "标签删除后不可恢复。共 " + num + " 个工单正在使用此标签，删除后会从对应事项中移除。");

```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[scrum项目组件权限计数器(scrum_project_addon_authority)](module/ProjMgmt/project/logic/scrum_project_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[waterfall项目组件权限计数器(waterfall_project_addon_authority)](module/ProjMgmt/project/logic/waterfall_project_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[看板项目组件权限计数器(kanban_project_addon_authority)](module/ProjMgmt/project/logic/kanban_project_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[获取快速新建项目集合(quick_create)](module/ProjMgmt/project/logic/quick_create)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[获取项目成员(get_project_member_one)](module/ProjMgmt/project/logic/get_project_member_one)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[获取项目成员(get_project_member_one)](module/ProjMgmt/project/logic/get_project_member_one)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[获取项目成员(get_project_member_one)](module/ProjMgmt/project/logic/get_project_member_one)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[获取项目进度(get_schedule)](module/ProjMgmt/project/logic/get_schedule)

节点：计算项目进度
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var project = logic.getParam("Default");
var dividend = parseInt(project.get("completed_work_items"));
var divisor = parseInt(project.get("all_work_items"));
if(dividend != 0 && divisor != 0){
    project.set("schedule",  Math.round((dividend / divisor) * 100));
} else {
    project.set("schedule",  0);
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[逾期工作项计数(warning_count_logic)](module/ProjMgmt/project/logic/warning_count_logic)

节点：计算逾期比例
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var result = logic.getParam("result");
var totalWorkItemCount = result.get("total_work_item_count");
var daily_warning_count = result.get("daily_warning_count");
var upcoming_warning_count = result.get("upcoming_warning_count");
var overdueCount = result.get("overdue_count");
var overdue_ratio = 0;
if (typeof overdueCount === "undefined" && daily_warning_count === "undefined" && upcoming_warning_count === "undefined" || overdueCount === null || daily_warning_count === null || upcoming_warning_count === null) {
    overdue_ratio = 0;
} else if (overdueCount === 0 && daily_warning_count === 0 && upcoming_warning_count === 0) {
    overdue_ratio = 0;
} else {
    overdue_ratio = ((overdueCount + daily_warning_count + upcoming_warning_count) / totalWorkItemCount) * 100;
    overdue_ratio = Math.round(overdue_ratio * 100) / 100;

}
if(overdue_ratio){
    result.set("overdue_ratio", Math.round(overdue_ratio) + "%");
}else{
    result.set("overdue_ratio", "0%");
}

```
#### [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)的处理逻辑[移除项目成员通知(remove_project_member_notify)](module/ProjMgmt/project_member/logic/remove_project_member_notify)

节点：填充操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)的处理逻辑[获取关联的工作项(get_con_project_tag)](module/ProjMgmt/project_tag/logic/get_con_project_tag)

节点：添加工作项数量提醒内容
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item = logic.getParam("Default");
var num = work_item.get("num");
work_item.set("remind", "标签删除后不可恢复。共 " + num + " 个工作项正在使用此标签，删除后会从对应工作项中移除。");

```
#### [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)的处理逻辑[获取最后运行状态(get_last_run_info)](module/extension/PSDELogic/logic/get_last_run_info)

节点：计算值
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var staticfics = logic.getParam("log_statistics");
var defvar = logic.getParam("default");
var success_per = 0;
var success_count = 0;
var failure_count = 0;
for (var i = 0; i < staticfics.size(); i++) {
    var staticfic = staticfics.get(i); 
    if (staticfic.get("state") == "SUCCESS"){
        success_count = staticfic.get("count");
    }
    if (staticfic.get("state") == "FAILURE"){
        failure_count = staticfic.get("count");
    }
}
var total = success_count + failure_count;
success_per = (success_count / total) *100 ;
defvar.set("success_count",success_count);
defvar.set("failure_count",failure_count);
defvar.set("success_per",success_per);
defvar.set("total",total);
```
#### [智能报表(PSSYSBIREPORT)](module/extension/PSSysBIReport)的处理逻辑[更新报表(update_report)](module/extension/PSSysBIReport/logic/update_report)

节点：回写图表类型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("Default");
var insight_report = logic.getParam("insight_report");
var str_uimodel = _default.get("bireportuimodel");
var uimodel = JSON.parse(str_uimodel);
var chart_type = uimodel.selectChartType;
insight_report.set("chart_type",chart_type);
insight_report.set("template_model",_default.dump());
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[取消关联(del_relation)](module/Base/relation/logic/del_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null && forward_relation_obj.get("principal_type") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id") + '_' + forward_relation_obj.get("principal_type"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null && reverse_relation_obj.get("principal_type") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id") + '_' + reverse_relation_obj.get("principal_type"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项取消关联测试用例(work_item_del_relation_test_case)](module/Base/relation/logic/work_item_del_relation_test_case)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id")+ '_' + forward_relation_obj.get("principal_type"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id")+ '_' + forward_relation_obj.get("principal_type"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项取消关联测试用例(work_item_del_relation_test_case)](module/Base/relation/logic/work_item_del_relation_test_case)

节点：获取执行用例关联缺陷对象主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var relation_for_temp_obj = logic.getParam("relation_for_temp_obj");
var run_relation_bug = logic.getParam("run_relation_bug");
var bug_relation_run = logic.getParam("bug_relation_run");
if(relation_for_temp_obj.get("id") != null && relation_for_temp_obj.get("target_id") != null){
    // 获取执行用例关联缺陷对象的主键
    run_relation_bug.set("id", relation_for_temp_obj.get("principal_id") + "_" + relation_for_temp_obj.get("target_id"));
    // 获取缺陷关联执行用例对象的主键
    bug_relation_run.set("id", relation_for_temp_obj.get("target_id") + "_" + relation_for_temp_obj.get("principal_id"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项添加依赖(add_dependency)](module/Base/relation/logic/add_dependency)

节点：填充principal_id
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def dependency = logic.param('dependency').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    dependency.set('principal_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    dependency.set('principal_id', for_temp_obj.get('owner_id'))
}



```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项添加依赖(add_dependency)](module/Base/relation/logic/add_dependency)

节点：填充target_id
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def dependency = logic.param('dependency').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    dependency.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    dependency.set('target_id', for_temp_obj.get('owner_id'))
}



```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[执行用例取消关联缺陷(run_del_relation_bug)](module/Base/relation/logic/run_del_relation_bug)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[执行用例取消关联缺陷(run_del_relation_bug)](module/Base/relation/logic/run_del_relation_bug)

节点：填充主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var for_temp_obj = logic.getParam("for_temp_obj");
var test_case_relation_bug = logic.getParam("test_case_relation_bug");
var bug_relation_test_case = logic.getParam("bug_relation_test_case");
if(for_temp_obj.get("principal_id") != null && for_temp_obj.get("target_id") != null){
    // 获取测试用例关联缺陷对象的主键
    test_case_relation_bug.set("id", for_temp_obj.get("principal_id") + "_" + for_temp_obj.get("target_id"));
    // 获取缺陷关联测试用例对象的主键
    bug_relation_test_case.set("id", for_temp_obj.get("target_id") + "_" + for_temp_obj.get("principal_id"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[测试用例取消关联缺陷(test_case_del_relation_bug)](module/Base/relation/logic/test_case_del_relation_bug)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id"));
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[测试用例取消关联缺陷(test_case_del_relation_bug)](module/Base/relation/logic/test_case_del_relation_bug)

节点：获取执行用例关联缺陷对象主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var relation_for_temp_obj = logic.getParam("relation_for_temp_obj");
var run_relation_bug = logic.getParam("run_relation_bug");
var bug_relation_run = logic.getParam("bug_relation_run");
if(relation_for_temp_obj.get("id") != null && relation_for_temp_obj.get("target_id") != null){
    // 获取执行用例关联缺陷对象的主键
    run_relation_bug.set("id", relation_for_temp_obj.get("principal_id") + "_" + relation_for_temp_obj.get("target_id"));
    // 获取缺陷关联执行用例对象的主键
    bug_relation_run.set("id", relation_for_temp_obj.get("target_id") + "_" + relation_for_temp_obj.get("principal_id"));
}
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[修改发布当前阶段(change_stage)](module/ProjMgmt/release/logic/change_stage)

节点：修改发布当前阶段
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def stage_transitions = logic.param('stage_transitions').getReal()
def stages = logic.param('stages').getReal()
def update_obj = logic.param('update_obj').getReal()

def first_stage = logic.param('first_stage').getReal()
def last_stage = logic.param('last_stage').getReal()
def current_stage = logic.param('current_stage').getReal()
def target_stage = logic.param('target_stage').getReal()

first_stage = stages.min { it.get('p_sequence') }
last_stage = stages.max { it.get('p_sequence') }
//首阶段标识
def first_stage_id = first_stage.get('id')
//末阶段标识
def last_stage_id = last_stage.get('id')
//获取实体运行对象
def stage_runtime = sys.dataentity('stage')
def release_runtime = sys.dataentity('release')
//循环处理
stage_transitions.each { it ->
    def stage_id = it.get('id')
    if(it.get('target') == 1){
        it.set('is_current', 1)
        target_stage = it
        if(first_stage_id != null){
            if(first_stage_id == stage_id){
                update_obj.set('start_at', it.get('operated_time'))
            }
        }
        if(last_stage_id != null){
            if(last_stage_id == stage_id){
                update_obj.set('end_at', it.get('operated_time'))
            }
        }
        update_obj.set('status', stage_id) 
    }
    if(it.get('current') == 1){
        it.set('is_current', 0)
        current_stage = it
    }
    //更新阶段
    stage_runtime.update(it)
}
// 向前变动阶段时, 从当前阶段 -> 目标阶段 的中间阶段将操作时间置空
if(target_stage.get('p_sequence') < current_stage.get('p_sequence')){
    stages.each { it ->
        if(it.get('p_sequence') > target_stage.get('p_sequence')){
            // 构造阶段更新对象
            def update_stage = stage_runtime.entity()
            update_stage.set('id', it.get('id'))
            if(current_stage.get('id') == last_stage_id){
                if(it.get('p_sequence') < current_stage.get('p_sequence')){
                    update_stage.set('operated_time', null)
                    stage_runtime.update(update_stage)
                }
            } else {
                if(it.get('p_sequence') <= current_stage.get('p_sequence')){
                    update_stage.set('operated_time', null)
                    stage_runtime.update(update_stage)
                }
            }
        }
    }
}
release_runtime.update(update_obj)

```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[新建后附加逻辑(after_create)](module/ProjMgmt/release/logic/after_create)

节点：根据全局预定义阶段生成发布阶段
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def stages = logic.param('stages').getReal()
def _default = logic.param('Default').getReal()
def first_stage_id = _default.get('first_stage_id')
def last_stage_id = _default.get('last_stage_id')
//获取实体运行对象 参数实体名
def stage_runtime = sys.dataentity('stage')
def release_runtime = sys.dataentity('release')
stages.each { it ->
    //构造阶段对象
    def new_stage = stage_runtime.entity()
    new_stage.set('release_id', _default.get('id'))
    new_stage.set('pid', it.get('id'))
    new_stage.set('name', it.get('name'))
    new_stage.set('type', it.get('type'))
    new_stage.set('sequence', it.get('sequence'))
    new_stage.set('is_current', 0)
    if(it.get('id') == first_stage_id){
        new_stage.set('is_current', 1)
        new_stage.set('operated_time', _default.get('start_at'))
    }
    if(it.get('id') == last_stage_id){
        new_stage.set('operated_time', _default.get('end_at'))
    }
    //新建发布
    stage_runtime.create(new_stage)
}




```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[获取修改阶段(change_draft)](module/ProjMgmt/release/logic/change_draft)

节点：返回结果
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def first_stage = logic.param('first_stage').getReal()
def last_stage = logic.param('last_stage').getReal()
def current_stage = logic.param('current_stage').getReal()
def target_stage = logic.param('target_stage').getReal()
def stages = logic.param('stages').getReal()
def stage_transitions = logic.param('stage_transitions').getReal()

def current = _default.get('current_stage')
def target = _default.get('target_stage')
first_stage = stages.min { it.get('p_sequence') }
last_stage = stages.max { it.get('p_sequence') }
stages.each { it ->
    if(it.get('id') == current){
        it.set('current', 1)
        current_stage = it
    }
    if(it.get('id') == target){
        it.set('target', 1)
        target_stage = it
    }
}

// 向后变动阶段
if(target_stage.get('p_sequence') > current_stage.get('p_sequence')){
    target_stage.set('date_gt', current_stage.get('operated_time'))
    // 若当前阶段未存在操作时间，目标阶段时间需大于首阶段时间
    if(current_stage.get('operated_time') == null){
        target_stage.set('date_gt', first_stage.get('operated_time'))
    }
    if(target_stage.get('id') != last_stage.get('id')){
        target_stage.set('date_lt', last_stage.get('operated_time'))
    }
}
// 向前变动阶段
if(target_stage.get('p_sequence') < current_stage.get('p_sequence')){
    target_stage.set('date_lt', last_stage.get('operated_time'))
    if(target_stage.get('id') != first_stage.get('id')){
        target_stage.set('date_gt', first_stage.get('operated_time'))
    }
}
stage_transitions.add(current_stage)
stage_transitions.add(target_stage)
_default.set('stage_transitions', stage_transitions)

```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[迭代取消关联发布(del_relation)](module/ProjMgmt/release/logic/del_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id")  + '_sprint') ;
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id") + '_release');
}
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[项目下发布（移动端）(mob_project_release)](module/ProjMgmt/release/logic/mob_project_release)

节点：设置进度
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def release_page_result = logic.param('release_page_result').getReal()
release_page_result.each { release ->
    def all_work_items = release.get('all_work_items')
    def completed_work_items = release.get('completed_work_items')
    def schedule = 0
    if (all_work_items != 0 && completed_work_items != 0) {
        schedule = Math.round(completed_work_items / all_work_items * 100)
    }
    release.set('schedule', schedule)
    release.set('schedule_text', schedule + "%")
}

```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[提交评审(submit_review)](module/TestMgmt/review/logic/submit_review)

节点：设置提交时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var default_obj = logic.getParam("default");
default_obj.set("submitted_at", new Date());
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)

节点：完成时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("review_detail");
defaultObj.set("COMPLETED_AT", new Date());
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[提交评审(submit_review)](module/TestMgmt/review_content/logic/submit_review)

节点：设置提交时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var review_detail = logic.getParam("review_detail");
review_detail.set("submitted_at", new Date());
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[其他实体关联执行用例(others_relation_run)](module/TestMgmt/run/logic/others_relation_run)

节点：关联标识
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def reverse_relation_obj = logic.param('reverse_relation_obj').getReal()

def forward_relation_obj = logic.param('forward_relation_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('owner_id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('owner_id'))
}



```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/run/logic/get_library_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/run/logic/get_library_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/run/logic/get_library_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[重置为未测(reset_not_test)](module/TestMgmt/run/logic/reset_not_test)

节点：获取选中的用例ID
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var ids = logic.getParam("ids");
var id = defaultObj.get("id");
if(id != null && id != ''){
    if(id.contains(";")){
        var idArray = [];
        idArray = id.split(";");
        for (var i = 0; i < idArray.length; i++) {
            ids.add(idArray[i]);
        }
    } else {
        ids.add(id);
    }
}
```
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[校验共享访问密码(access_password)](module/Wiki/shared_space/logic/access_password)

节点：校验链接是否有效
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def check_space = logic.param('check_space').getReal()
def expiration_date = check_space.get('expiration_date')
_default.set('effective', 1)
_default.set('check_access_password', 0)
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        _default.set('effective', 0)
    }
}
```
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[检验共享页面(check_shared)](module/Wiki/shared_space/logic/check_shared)

节点：检验是否有效
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def result = logic.param('result').getReal()
result.set('id', _default.get('id'))
result.set('effective', 1)
result.set('check_access_pwd', 0)
def expiration_date = _default.get('expiration_date')
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        result.set('effective', 0)
    }
}
if(_default.get('access_password') != null){
    result.set('check_access_pwd', 1)
}
```
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[获取共享链接(shared_url)](module/Wiki/shared_space/logic/shared_url)

节点：拼接共享链接
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def plm_wiki = sys.param('plm_wiki','')
if(_default.get('id') != null && plm_wiki != '') {
  def _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_tree_exp_view/srfnavctx=%257B%2522shared_space%2522%253A%2522' + _default.get('id') + '%2522%257D'
  _default.set('shared_url', _url)
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：管理员
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "admin");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：普通用户
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "user");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
defaultObj.set("user_role", "reader");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", true);
defaultObj.set("user_role", "reader");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：普通用户
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "user");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色(recognize_cur_user_role)](module/Wiki/space/logic/recognize_cur_user_role)

节点：管理员
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "admin");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[取消关联(del_relation)](module/Wiki/space/logic/del_relation)

节点：拼接正反关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id") + '_' + forward_relation_obj.get("principal_type"));
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id") + '_' + reverse_relation_obj.get("principal_type"));
}

```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[开启共享(open_shared)](module/Wiki/space/logic/open_shared)

节点：填充共享时间
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _shared_space = logic.param('shared_space').getReal()
if(_shared_space.get('shared_time') == null){
    _shared_space.set('shared_time', new java.sql.Timestamp(System.currentTimeMillis()))
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[空间组件权限计数器(space_addon_authority)](module/Wiki/space/logic/space_addon_authority)

节点：构建计数器结果
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[自动创建主页(auto_create_home_page)](module/Wiki/space/logic/auto_create_home_page)

节点：设置发布时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var home_page = logic.getParam("home_page");
home_page.set("publish_time", new Date());
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[自动创建主页(auto_create_home_page)](module/Wiki/space/logic/auto_create_home_page)

节点：设置主页内容（content）
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var home_page = logic.getParam("home_page");
home_page.set("content", "<p><span style=\"font-size: 19px;\"><strong>欢迎进入空间，您可以通过以下方式快速开始：</strong></span></p>"
    + "<p><span style=\"font-size: 16px;\">点击右上角的 </span><span style=\"font-size: 16px;\"><strong>编辑</strong></span><span style=\"font-size: 16px;\"> 按钮，开始定义自己的主页</span></p>"
    + "<p><span style=\"font-size: 16px;\">点击左上角的 </span><span style=\"font-size: 16px;\"><strong>新建</strong></span><span style=\"font-size: 16px;\"> 按钮，创建新的页面</span></p>"
    + "<p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/wAAAHeCAYAAAAmWgDvAAAgAElEQVR4AeydB1gUx/+HDzXqL827w5KoUcTbA7FEY5fbA+wFu9hjjcaa2Gti77GlqDHG2I2a2HussfduVFDEil3sUj///ywhQUI5jgXujs8+zz3A3e7szHurM++U72g0PEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABByEwPsGzwo6oxzEFxnwGeAzwGfAMZ4B8f+6g1RRLAYJkAAJkAAJkAAJkEBKCGgNslduDx9UqPUp2vb8Cp/1GckXGfAZ4DPAZ8DOnoG2Pb+GXK89cntUhvh/PSX1Aq8lARIgARIgARIgARJwEAKiYfhh8apo0rEfZs5bjnnL1vJFBnwG+AzwGbCzZ2DW/BVo3X0o8paoRuF3kPqZxSABEiABEiABEiCBFBMQwl/wk1oYOflHhDx5Bh4kQAIkQAL2R+DJs+eY9uNiuJSpTeFPcc3IBEiABEiABEiABEjAQQhQ+O2vYc8ckwAJkEBcAhR+B6mUWQwSIAESIAESIAESUJMAhT9us5l/kwAJkID9EaDwq1kzMi0SIAESIAESIAEScBACFH77a9gzxyRAAiQQlwCF30EqZRaDBEiABEiABEiABNQkQOGP22zm3yRAAiRgfwQo/GrWjEyLBEiABEiABEiABByEAIXf/hr2zDEJkAAJxCVA4XeQSpnFIAESIAESIAESIAE1CVD44zab+TcJkAAJ2B8BCr+aNSPTIgESIAESIAESIAEHIUDht7+G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\" alt=\"image.png\" data-href=\"\" style=\"width: 502.00px;height: 235.24px;\"/></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">为了您更好的使用空间，这里有几个小tips:</span></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">1、每个空间都有一个</span><span style=\"color: rgb(140, 140, 140); font-size: 16px;\"><strong>主页</strong></span><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">页面，您可以修改主页内容，但不能删除它</span></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">2、为了使您的文档更有层次，建议使用左侧的页面树，定义好目录结构</span></p>"
    + "<p><br></p>");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[自动创建主页(auto_create_home_page)](module/Wiki/space/logic/auto_create_home_page)

节点：设置主页发布内容（publish_content）
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var home_page = logic.getParam("home_page");
home_page.set("publish_content", "<p><span style=\"font-size: 19px;\"><strong>欢迎进入空间，您可以通过以下方式快速开始：</strong></span></p>"
    + "<p><span style=\"font-size: 16px;\">点击右上角的 </span><span style=\"font-size: 16px;\"><strong>编辑</strong></span><span style=\"font-size: 16px;\"> 按钮，开始定义自己的主页</span></p>"
    + "<p><span style=\"font-size: 16px;\">点击左上角的 </span><span style=\"font-size: 16px;\"><strong>新建</strong></span><span style=\"font-size: 16px;\"> 按钮，创建新的页面</span></p>"
    + "<p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/wAAAHeCAYAAAAmWgDvAAAgAElEQVR4AeydB1gUx/+HDzXqL827w5KoUcTbA7FEY5fbA+wFu9hjjcaa2Gti77GlqDHG2I2a2HussfduVFDEil3sUj///ywhQUI5jgXujs8+zz3A3e7szHurM++U72g0PEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABByEwPsGzwo6oxzEFxnwGeAzwGfAMZ4B8f+6g1RRLAYJkAAJkAAJkAAJkEBKCGgNslduDx9UqPUp2vb8Cp/1GckXGfAZ4DPAZ8DOnoG2Pb+GXK89cntUhvh/PSX1Aq8lARIgARIgARIgARJwEAKiYfhh8apo0rEfZs5bjnnL1vJFBnwG+AzwGbCzZ2DW/BVo3X0o8paoRuF3kPqZxSABEiABEiABEiCBFBMQwl/wk1oYOflHhDx5Bh4kQAIkQAL2R+DJs+eY9uNiuJSpTeFPcc3IBEiABEiABEiABEjAQQhQ+O2vYc8ckwAJkEBcAhR+B6mUWQwSIAESIAESIAESUJMAhT9us5l/kwAJkID9EaDwq1kzMi0SIAESIAESIAEScBACFH77a9gzxyRAAiQQlwCF30EqZRaDBEiABEiABEiABNQkQOGP22zm3yRAAiRgfwQo/GrWjEyLBEiABEiABEiABByEAIXf/hr2zDEJkAAJxCVA4XeQSpnFIAESIAESIAESIAE1CVD44zab+TcJkAAJ2B8BCr+aNSPTIgESIAESIAESIAEHIUDht7+G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\" alt=\"image.png\" data-href=\"\" style=\"width: 502.00px;height: 235.24px;\"/></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">为了您更好的使用空间，这里有几个小tips:</span></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">1、每个空间都有一个</span><span style=\"color: rgb(140, 140, 140); font-size: 16px;\"><strong>主页</strong></span><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">页面，您可以修改主页内容，但不能删除它</span></p>"
    + "<p><span style=\"color: rgb(140, 140, 140); font-size: 16px;\">2、为了使您的文档更有层次，建议使用左侧的页面树，定义好目录结构</span></p>"
    + "<p><br></p>");
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[获取快速新建空间集合(quick_create)](module/Wiki/space/logic/quick_create)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[获取知识空间成员(get_space_member_one)](module/Wiki/space/logic/get_space_member_one)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[获取知识空间成员(get_space_member_one)](module/Wiki/space/logic/get_space_member_one)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[获取知识空间成员(get_space_member_one)](module/Wiki/space/logic/get_space_member_one)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [空间成员(SPACE_MEMBER)](module/Wiki/space_member)的处理逻辑[移除空间成员发送通知(remove_space_member_notify)](module/Wiki/space_member/logic/remove_space_member_notify)

节点：获取当前操作时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[发布取消关联迭代(del_relation)](module/ProjMgmt/sprint/logic/del_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
// 获取正向关联对象的主键
var forward_relation_obj = logic.getParam("forward_relation_obj");
if(forward_relation_obj.get("principal_id") != null && forward_relation_obj.get("target_id") != null){
    forward_relation_obj.set("id", forward_relation_obj.get("principal_id") + "_" + forward_relation_obj.get("target_id") + '_release');
}
// 获取反向关联对象的主键
var reverse_relation_obj = logic.getParam("reverse_relation_obj");
if(reverse_relation_obj.get("principal_id") != null && reverse_relation_obj.get("target_id") != null){
    reverse_relation_obj.set("id", reverse_relation_obj.get("principal_id") + "_" + reverse_relation_obj.get("target_id") + '_sprint');
}
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[获取未完成的工作项数量(get_not_finish)](module/ProjMgmt/sprint/logic/get_not_finish)

节点：添加未完成提醒内容
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var sprint = logic.getParam("Default");
var not_finish_num = sprint.get("not_finish_num");
sprint.set("remind", "该迭代仍有" + not_finish_num + "个工作项没有完成，将它们：");

```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[获取概览基本信息统计数字(overview_num)](module/ProjMgmt/sprint/logic/overview_num)

节点：计算迭代结束日期距离今天的天数
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def daysDifference = 0
if(_default.get('end_at') != null){
    // 将 java.sql.Timestamp 转换为 java.time.LocalDateTime
    java.time.LocalDateTime endDateTime = _default.get('end_at').toLocalDateTime();
    java.time.LocalDateTime startDateTime = _default.get('start_at').toLocalDateTime();

     // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def endDate = endDateTime.toLocalDate()
    def startDate = startDateTime.toLocalDate()
    def currentDate = currentDateTime.toLocalDate()
    // 计算结束日期与今天的天数差
    def enddaysDifference = endDate.toEpochDay() - currentDate.toEpochDay()
    // 计算开始日期与今天的天数差
    def startdaysDifference = currentDate.toEpochDay() - startDate.toEpochDay()
    // 计算开始日期与结束日期的天数差
    def betweenDifference = endDate.toEpochDay() - startDate.toEpochDay()
    if(enddaysDifference < 0){
        enddaysDifference = 0
    }
    if(startdaysDifference < 0){
        startdaysDifference = 0
    }
    if(betweenDifference == 0){
        betweenDifference = 1
    }
    if(enddaysDifference == 0){
        // 日期已过比例
        _default.set("past_days", 1)
    } else {
        if(startdaysDifference > 0 && betweenDifference > 0){
            _default.set("past_days", startdaysDifference / betweenDifference)
        }
    }
    // 剩余天数
    _default.set("remaining_days", enddaysDifference)
}
def total_num = _default.get('all_work_items')
def completed_num = _default.get('completed_work_items')
def work_item_counts = completed_num + '/' + total_num
_default.set('work_item_counts', work_item_counts)
if(completed_num == 0 || total_num == 0){
    // 工作项完成率
    _default.set('work_item_complete_percent', 0)
} else {
    _default.set('work_item_complete_percent', completed_num / total_num)
}
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[项目下迭代（移动端）(mob_project_sprint)](module/ProjMgmt/sprint/logic/mob_project_sprint)

节点：填充进度信息
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def sprint_page_result = logic.param('sprint_page_result').getReal()
sprint_page_result.each { sprint ->
    def all_work_items = sprint.get('all_work_items')
    def completed_work_items = sprint.get('completed_work_items')
    def schedule = 0
    if (all_work_items != 0 && completed_work_items != 0) {
        schedule = Math.round(completed_work_items / all_work_items * 100)
    }
    sprint.set('schedule', schedule)
    sprint.set('schedule_text', "${schedule}%")
}

```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[其他实体关联用例(others_relation_test_case)](module/TestMgmt/test_case/logic/others_relation_test_case)

节点：关联标识
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def reverse_relation_obj = logic.param('reverse_relation_obj').getReal()

def forward_relation_obj = logic.param('forward_relation_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('owner_id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('owner_id'))
}



```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[基线规划用例数据查询(baseline_plan_case)](module/TestMgmt/test_case/logic/baseline_plan_case)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var case_versions = logic.getParam("case_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = case_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    case_versions.set("version_id_in", version_id_in);
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[填充最近执行(fill_latest_executed)](module/TestMgmt/test_case/logic/fill_latest_executed)

节点：填充最近执行
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param("Default").real;
def _id = _default.get("id");
def cur_version_id = _default.get("cur_version_id");
def runDERuntime = sys.dataentity("RUN");
def searchContextDTO = runDERuntime.createSearchContext();
searchContextDTO.limit(1).count(false).eq("case_id",_id).nn("status").sort("executed_at,desc");
def args = [searchContextDTO,"SRFVERSIONID",cur_version_id] as Object[];
def page = runDERuntime.fetchDataSet("Default", null, args);
_default.set("latest_executed", page.getContent());
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取变更类型与变更版本(set_change_type)](module/TestMgmt/test_case/logic/set_change_type)

节点：设置from-to都为最新版
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var version_pages_results = logic.getParam("version_pages_results");

if (version_pages_results) {
    var change_version = {};
    var for_obj = logic.getParam("for_obj");
    for (var i = 0; i < version_pages_results.length; i++) {
        //新增只有to
        if (i === 0) {
            change_version["to"] = version_pages_results.get(i);
        }
    }

    for_obj.set("change_version", change_version);
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取变更类型与变更版本(set_change_type)](module/TestMgmt/test_case/logic/set_change_type)

节点：设置改变版本信息
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var version_pages_results = logic.getParam("version_pages_results");
if (version_pages_results) {
    var change_version = {};
    var for_obj = logic.getParam("for_obj");
    for (var i = 0; i < version_pages_results.length; i++) {
        if (i === 0) {
            change_version["from"] = version_pages_results.get(i);
            change_version["to"] = version_pages_results.get(i);
            sys.info("进入1");
        } else if (i === 1) {
            change_version["from"] = version_pages_results.get(i);
            sys.info("进入2");
        }
    }
    for_obj.set("change_version", change_version);}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/test_case/logic/get_library_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/test_case/logic/get_library_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/test_case/logic/get_library_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取测试库成员(get_library_member)](module/TestMgmt/test_case/logic/get_library_member)

节点：设置只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[其他实体关联工单(others_relation_ticket)](module/ProdMgmt/ticket/logic/others_relation_ticket)

节点：移动端和PC端关联关系
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def reverse_relation_obj = logic.param('reverse_relation_obj').getReal()

def forward_relation_obj = logic.param('forward_relation_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('owner_id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('owner_id'))
}



```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[查询归档数据(get_archived_info)](module/ProdMgmt/ticket/logic/get_archived_info)

节点：拼接输出信息
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var activity_infos = logic.getParam("activity_info");
var get_infos = logic.getParam("get_infos") || {}; 

var create_time = activity_infos.get("create_time");
var create_man = activity_infos.get("oppersonname");

var print_info = create_man + '于' + create_time + '归档了工作项';

get_infos.set("archived_info",print_info);


```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/ticket/logic/get_product_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/ticket/logic/get_product_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/ticket/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[获取产品成员(get_product_member)](module/ProdMgmt/ticket/logic/get_product_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
null
```
#### [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)的处理逻辑[获取关联的工单(get_con_ticket)](module/ProdMgmt/ticket_type/logic/get_con_ticket)

节点：添加工单数量提醒内容
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var ticket = logic.getParam("Default");
var ticket_num = ticket.get("ticket_num");
ticket.set("remind", "该工单类型关联了" + ticket_num + "个工单，请先将对应的工单变更为其他工单类型再删除。");
ticket.set("disabled",1)
```
#### [企业用户(USER)](module/Base/user)的处理逻辑[统计过滤(report_flag_filter)](module/Base/user/logic/report_flag_filter)

节点：填充user过滤器ni参数
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var storage_page = logic.getParam("storage_page");
var user_filter = logic.getParam("Default");
var user_ids = "";
 for (var i = 0; i < storage_page.length; i++) {
     if(i>0){
         user_ids = user_ids+",";
     }
     var _storage = storage_page.get(i);
     user_ids = user_ids + _storage.get("owner_id");
 }
if(user_ids != ""){
    user_filter.ni("id",user_ids);
}
```
#### [企业用户(USER)](module/Base/user)的处理逻辑[非空间下成员(not_space_mmeber)](module/Base/user/logic/not_space_mmeber)

节点：填充user过滤器ni参数
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var space_members = logic.getParam("space_members");
var shared_page_members = logic.getParam("shared_page_members");
var user_filter = logic.getParam("Default");
var user_ids = "";
for (var i = 0; i < space_members.length; i++) {
    if(i>0){
        user_ids = user_ids+",";
    }
    var space_member = space_members.get(i);
    user_ids = user_ids + space_member.get("user_id");
}
for (var i = 0; i < shared_page_members.length; i++) {
    if(user_ids != ""){
        user_ids = user_ids+",";
    }
    var shared_page_member = shared_page_members.get(i);
    user_ids = user_ids + shared_page_member.get("user_id");
}
if(user_ids != ""){
    user_filter.ni("id",user_ids);
}
```
#### [版本(VERSION)](module/Base/version)的处理逻辑[新建版本时填充默认版本名称(fill_default_name)](module/Base/version/logic/fill_default_name)

节点：填充默认版本名称
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def default_obj = logic.param('default').getReal()
def cur_version = logic.param('cur_version').getReal()
def cur_version_identifier = cur_version.get('identifier') // 当前版本编号
if(cur_version_identifier){
    def new_version_name = 'v' + (cur_version_identifier + 1)
    default_obj.set('name', new_version_name) // 新版本名称
    default_obj.set('cur_version_name', cur_version.get('name')) // 当前版本名称
} else {
    default_obj.set('name', 'v2') // 新版本名称
    default_obj.set('cur_version_name', 'v1') // 当前版本名称
}


```
#### [视图主题设置(VIEW_THEME_SETTING)](module/Base/view_theme_setting)的处理逻辑[数据去重(distinctData)](module/Base/view_theme_setting/logic/distinctData)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _settingList = logic.param('settingList').getReal()
def _outSettingList = logic.param('outSettingList').getReal()
def existMap = [:]
for(def i=0;i<_settingList.content.size();i++){
     def _setting = _settingList.content.getAt(i)
     def appViewTag = _setting.get("app_view_tag")
     def _name = _setting.get("name")
     def ownertype = _setting.get("owner_type")
     def tag = String.format("%s|%s",appViewTag,_name)
     if(existMap.containsKey(tag) && ownertype != "PERSONAL"){
         continue
     }
     existMap[tag] = _setting
     _outSettingList.add(_setting)
}
```
#### [视图主题设置(VIEW_THEME_SETTING)](module/Base/view_theme_setting)的处理逻辑[获取过滤条件(fill_search_conds)](module/Base/view_theme_setting/logic/fill_search_conds)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def deRuntime = logic.param('Default').getDataEntityRuntime();
def strThemeModel = _default.get("theme_model")
def themeModel = deRuntime.deserializeEntity(strThemeModel);
_default.set("search_conds",themeModel.get("searchconds"))
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[删除工时记录前附加逻辑(before_remove)](module/Base/workload/logic/before_remove)

节点：计算剩余工时
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var remainingObj = logic.getParam("remaining"); // 剩余工时对象
var estimatedObj = logic.getParam("estimated"); // 预估工时对象
var actualObj = logic.getParam("actual"); // 实际工时对象

var total_register = logic.getParam("total_register"); // 总登记时长
var actual_workload = total_register.get("duration") == null ? 0 : Number(total_register.get("duration"));
var estimated_workload = estimatedObj.get("decimal_value") == null ? 0 : Number(estimatedObj.get("decimal_value"));
var duration = defaultObj.get("duration") == null ? 0 : Number(defaultObj.get("duration"));
sys.info("查询预估工时=", estimated_workload);
sys.info("查询总登记工时=", actual_workload);
// 重新计算剩余工时
var remaining = estimated_workload - (actual_workload - duration);
if(remaining < 0){
    remaining = 0;
}
remainingObj.set("decimal_value", remaining);
// 计算实际工时
var actual = (actual_workload - duration) <= 0 ? 0 : actual_workload - duration;
actualObj.set("decimal_value", actual);

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload)

节点：计算进度
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var remaining_workload = defaultObj.get("remaining_workload") == null ? 0 : Number(defaultObj.get("remaining_workload"));
var actual_workload = defaultObj.get("actual_workload") == null ? 0 : Number(defaultObj.get("actual_workload"));
var estimated_workload = defaultObj.get("estimated_workload") == null ? 0 : Number(defaultObj.get("estimated_workload"));
var duration = defaultObj.get("duration") == null ? 0 : Number(defaultObj.get("duration"));
var actual = actual_workload - duration;
if(actual <= 0){
    defaultObj.set("actual_workload", null);
} else {
    defaultObj.set("actual_workload", actual);
}
// 计算工时进度
if((actual_workload + remaining_workload) != 0){
    var schedule = ((actual_workload / (actual_workload + remaining_workload)) * 100).toFixed(1);
    defaultObj.set("workload_schedule", schedule);
}
var principal_type = defaultObj.get("principal_type");
if(principal_type == 'WORK_ITEM'){
    defaultObj.set("workload_kind", "工作项");
}
if(principal_type == 'IDEA'){
    defaultObj.set("workload_kind", "产品需求");
}
if(principal_type == 'TEST_CASE'){
    defaultObj.set("workload_kind", "测试用例");
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[其他实体关联工作项(others_relation_work_item)](module/ProjMgmt/work_item/logic/others_relation_work_item)

节点：关联标识
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def reverse_relation_obj = logic.param('reverse_relation_obj').getReal()

def forward_relation_obj = logic.param('forward_relation_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    reverse_relation_obj.set('principal_id', for_temp_obj.get('owner_id'))
    forward_relation_obj.set('target_id', for_temp_obj.get('owner_id'))
}



```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[变更状态(change_state)](module/ProjMgmt/work_item/logic/change_state)

节点：设置工作项类型id
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var old_work_item_type_id = _default.get("work_item_type_id");

var first_value = old_work_item_type_id.split(';')[0];

_default.set("work_item_type_id", first_value);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[基线规划工作项数据查询(baseline_plan_work_item)](module/ProjMgmt/work_item/logic/baseline_plan_work_item)

节点：设置工作项版本id
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_versions = logic.getParam("work_item_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = work_item_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    work_item_versions.set("version_id_in", version_id_in);
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[填充实际开始/完成时间(fill_actual_time)](module/ProjMgmt/work_item/logic/fill_actual_time)

节点：填充开始或结束时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var updated_data = logic.getParam("default");
if (updated_data.get('state_type') == 'in_progress' && updated_data.get('actual_start_at') == null) {
    updated_data.set("actual_start_at", new Date());
}
if (updated_data.get('state_type') == 'completed' && updated_data.get('actual_end_at') == null) {
    updated_data.set('actual_end_at', new Date());
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项完成趋势(complete_trend)](module/ProjMgmt/work_item/logic/complete_trend)

节点：统计七天内的完成/未完成数量
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def result_list = logic.param('result_list').getReal()
def result_page = logic.param('result_page').getReal()
def work_item = logic.param('work_item').getReal()

// 七天前未完成数量
def not_completed = work_item.get('seven_ago_not_completed')
def completed = work_item.get('seven_ago_completed')

def dateFormatter = new java.text.SimpleDateFormat("yyyy-MM-dd")
def calendar = java.util.Calendar.getInstance()

// 获取当前日期
def endDate = calendar.time

// 获取6天前的日期
calendar.add(Calendar.DAY_OF_MONTH, -6)
def startDate = calendar.time

// 生成日期列表
def datesInRange = []
calendar.time = startDate // 重置日历到起始日期

while (calendar.time <= endDate) {
    def rep_date = dateFormatter.format(calendar.time)
    def rep_obj = sys.entity('work_item')
    rep_obj.set('rep_date', rep_date) 
    result_list.add(rep_obj)
    calendar.add(java.util.Calendar.DATE, 1)
}
result_list.each { it ->
    def rep_date = dateFormatter.format(new Date(it.get('rep_date').time))
    result_page.each { item ->
        def state_type = item.get('state_type')
        if(state_type != null){
            if(state_type == 'completed' && item.get('completed_at') != null){
                def completed_at = dateFormatter.format(new Date(item.get('completed_at').time))
                if(completed_at == rep_date){
                    completed++
                    not_completed--
                }   
            } else if(state_type != 'completed' && item.get('create_time') != null){
                def create_time = dateFormatter.format(new Date(item.get('create_time').time))
                if(create_time == rep_date){
                    not_completed++
                }
            }
        }
    }
    it.set('rep_value1', not_completed)
    it.set('rep_value2', completed)
}


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项状态变更附加逻辑(state_onchange)](module/ProjMgmt/work_item/logic/state_onchange)

节点：生成实际完成时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var updated_data = logic.getParam("default");
if (updated_data.get('state_type') == 'in_progress' && updated_data.get('actual_start_at') == null) {
    updated_data.set("actual_start_at", new Date());
}
if (updated_data.get('state_type') == 'completed') {
    updated_data.set('actual_end_at', new Date());
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[新建工作项前校验父子工作项类型(before_create_check_type)](module/ProjMgmt/work_item/logic/before_create_check_type)

节点：判断父子工作项类型是否正确
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
// 父工作项的下级工作项范围
def parent_work_item = logic.param('parent_work_item').getReal()
def work_item_sub_type = parent_work_item.get('work_item_sub_type')
// 新建工作项的类型
def _default = logic.param('default').getReal()
_default.set('check_type', 0)
def child_type = _default.get('work_item_type_id')
if(work_item_sub_type != null && child_type != null){
    if(work_item_sub_type.contains(child_type)){
        _default.set('check_type', 1)
    }
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚实际工时(aggregate_actual_workload)](module/ProjMgmt/work_item/logic/aggregate_actual_workload)

节点：获取当前级的工时，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var workload_data = logic.getParam("workload_data");
var cur_estimated_workload = parseFloat(work_item_temp && work_item_temp.get("estimated_workload")) || 0;
var cur_actual_workload = parseFloat(work_item_temp && work_item_temp.get("actual_workload")) || 0;

workload_data.set("estimated_workload", cur_estimated_workload + workload_data.get("estimated_workload"));
sys.info("当前工作项实际工时"+cur_actual_workload);
workload_data.set("actual_workload",cur_actual_workload + workload_data.get("actual_workload")) ;

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚实际开始时间(aggregate_actual_start_at)](module/ProjMgmt/work_item/logic/aggregate_actual_start_at)

节点：获取当前级的最小开始时间，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_actual_start_time = work_item_data.get("actual_start_at");
var c_actual_start_time = work_item_temp.get("actual_start_at");
if (c_actual_start_time) {
    if (p_actual_start_time) {
        if (p_actual_start_time > c_actual_start_time) {
            work_item_data.set("actual_start_at", c_actual_start_time);
        }
    } else {
        work_item_data.set("actual_start_at", c_actual_start_time);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚实际结束时间(aggregate_actual_end_at)](module/ProjMgmt/work_item/logic/aggregate_actual_end_at)

节点：获取当前级的最小开始时间，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_actual_end_time = work_item_data.get("actual_end_at");
var c_actual_end_time = work_item_temp.get("actual_end_at");

if (c_actual_end_time) {
    if (p_actual_end_time) {
        if (p_actual_end_time < c_actual_end_time) {
            work_item_data.set("actual_end_at", c_actual_end_time);
        }
    } else {
        work_item_data.set("actual_end_at", c_actual_end_time);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚开始时间(aggregate_start_at)](module/ProjMgmt/work_item/logic/aggregate_start_at)

节点：获取当前级的最小开始时间，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_start_time = work_item_data.get("start_at");
var c_start_time = work_item_temp.get("start_at");

if (c_start_time) {
    if (p_start_time) {
        if (p_start_time > c_start_time) {
            work_item_data.set("start_at", c_start_time);
        }
    } else {
        work_item_data.set("start_at", c_start_time);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚结束时间(aggregate_end_at)](module/ProjMgmt/work_item/logic/aggregate_end_at)

节点：获取当前级的最小开始时间，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");

var p_end_time = work_item_data.get("end_at");
var c_end_time = work_item_temp.get("end_at");
if (c_end_time) {
    if (p_end_time) {
        if (p_end_time < c_end_time) {
            work_item_data.set("end_at", c_end_time);
        }
    } else {
        work_item_data.set("end_at", c_end_time);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚预估工时(aggregate_estimated_work_load)](module/ProjMgmt/work_item/logic/aggregate_estimated_work_load)

节点：获取当前级的工时，赋值给父
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var workload_data = logic.getParam("workload_data");
var cur_estimated_workload = parseFloat(work_item_temp && work_item_temp.get("estimated_workload")) || 0;
var cur_actual_workload = parseFloat(work_item_temp && work_item_temp.get("actual_workload")) || 0;

workload_data.set("estimated_workload", cur_estimated_workload + workload_data.get("estimated_workload"));

workload_data.set("actual_workload",cur_actual_workload + workload_data.get("actual_workload")) ;


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[汇聚预估工时(aggregate_estimated_work_load)](module/ProjMgmt/work_item/logic/aggregate_estimated_work_load)

节点：执行脚本代码
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var workload_data = logic.getParam("workload_data");
var actual_workload = workload_data.get("actual_workload");
var estimated_workload =workload_data.get("estimated_workload");
var remaining_workload = null;
if(estimated_workload){
    if(actual_workload){
        remaining_workload = estimated_workload-actual_workload;
        if(remaining_workload>0){
            workload_data.set("remaining_workload",remaining_workload);
        }
    }else{
        workload_data.set("remaining_workload",estimated_workload);
    }
}


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[状态类型变更附加逻辑(state_type_onchange)](module/ProjMgmt/work_item/logic/state_type_onchange)

节点：完成时间设置为当前时间
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var update_obj = logic.getParam('update_obj');
update_obj.set('id', _default.get('id'));
update_obj.set('completed_at', new Date());
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取测试计划对应项目(work_item_test_plan_project)](module/ProjMgmt/work_item/logic/work_item_test_plan_project)

节点：设置默认缺陷类型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var test_plan = logic.getParam("test_plan");
if(test_plan.get("project_type") != null){
    Default.set("work_item_type_id", test_plan.get("project_type") + "_bug");
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取项目成员(get_project_member)](module/ProjMgmt/work_item/logic/get_project_member)

节点：非只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取项目成员(get_project_member)](module/ProjMgmt/work_item/logic/get_project_member)

节点：判断系统管理员身份
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取项目成员(get_project_member)](module/ProjMgmt/work_item/logic/get_project_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取项目成员(get_project_member)](module/ProjMgmt/work_item/logic/get_project_member)

节点：只读权限
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置初始排序值(set_sequence)](module/ProjMgmt/work_item/logic/set_sequence)

节点：处理初始排序值
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal() 
def _sequence = _default.get('sequence')
_default.set('sequence', _sequence*100)
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置缺陷类型(set_type_bug)](module/ProjMgmt/work_item/logic/set_type_bug)

节点：设置缺陷类型
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var project = logic.getParam("project");
Default.set("work_item_type_id", project.get("type") + "_bug");
Default.set("work_item_type_name", "缺陷");

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置默认看板栏(set_default_entry)](module/ProjMgmt/work_item/logic/set_default_entry)

节点：默认填充看板栏
<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("Default");
var entry_page = logic.getParam("entry_page");
if(entry_page.getReal().numberOfElements > 0){
    defaultObj.set("entry_id", entry_page.get(0).get("id"));
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[资源分配(resource_assignment)](module/ProjMgmt/work_item/logic/resource_assignment)

节点：获取MEMBERS中的USER_ID
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def addon_resource = logic.param('addon_resource').getReal()
// 获取查询过滤器对象
def filter = logic.param('default').getReal()
def setting_model = addon_resource.get('setting_model')
if(!setting_model.isEmpty()){
    // JSON字符串转换
    def json = new groovy.json.JsonSlurper().parseText(setting_model)
    // 获取members属性
    def members = json.members
    // 循环members，将user_id拼至过滤器的n_assignee_id_in过滤项中
    members.each { item ->
        def user_id = item.user_id
        if(!user_id.isEmpty()){
            def assignee_ids = filter.get('n_assignee_id_in')
            if(assignee_ids.isEmpty()){
                filter.set('n_assignee_id_in', user_id)
            } else {
                filter.set('n_assignee_id_in', assignee_ids + ',' + user_id)
            }
        }
    }
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[资源成员设置（全局）(resource_member_setting)](module/ProjMgmt/work_item/logic/resource_member_setting)

节点：判断此成员是否已加入至资源
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def for_choose_obj = logic.param('for_choose_obj').getReal()
insert_members.each { item ->
    def user_id = item.user_id
    if(user_id == for_choose_obj.get('user_id')){
       for_choose_obj.set('already_exist', '1') 
    }
}


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[资源成员设置（全局）(resource_member_setting)](module/ProjMgmt/work_item/logic/resource_member_setting)

节点：资源成员绑定容量属性
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def resource_member = logic.param('resource_member').getReal()
def day_capacity = logic.param('day_capacity').getReal()
resource_member.set('day_capacity', day_capacity)
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[资源成员设置（全局）(resource_member_setting)](module/ProjMgmt/work_item/logic/resource_member_setting)

节点：资源成员绑定至组件
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def addon_resource = logic.param('addon_resource').getReal()
addon_resource.set('members', insert_members)
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[迭代成员贡献度(sprint_contribution)](module/ProjMgmt/work_item/logic/sprint_contribution)

节点：计算统计数字
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_obj = logic.param('for_obj').getReal()
// 工作项类型统计
def work_item_type = for_obj.get('work_item_type_id')
// scrum_story scrum_task scrum_bug 用户故事/任务/缺陷 使用rep_value统计字段
for_obj.set('rep_value1', 0)
for_obj.set('rep_value2', 0)
for_obj.set('rep_value3', 0)
if(work_item_type == 'scrum_story'){
    for_obj.set('rep_value1', 1)
}
if(work_item_type == 'scrum_task'){
    for_obj.set('rep_value2', 1)
}
if(work_item_type == 'scrum_bug'){
    for_obj.set('rep_value3', 1)
}
// 工作项工时统计
if(for_obj.get('estimated_workload') == null ){
    for_obj.set('estimated_workload', 0)
}
if(for_obj.get('actual_workload') == null ){
    for_obj.set('actual_workload', 0)
}
// 统计结果列表变量
def result_list = logic.param('result_list').getReal()
def assignee_id = for_obj.get('assignee_id')
if(assignee_id != null){
    def exists = result_list.any { it.assignee_id == assignee_id }
    if(exists){
        result_list.each { item ->
            if(item.get('assignee_id') == assignee_id){
                item.set('rep_num', item.get('rep_num') + for_obj.get('rep_num'))
                item.set('estimated_workload', item.get('estimated_workload') + for_obj.get('estimated_workload'))
                item.set('actual_workload', item.get('actual_workload') + for_obj.get('actual_workload'))
                item.set('rep_value1', item.get('rep_value1') + for_obj.get('rep_value1'))
                item.set('rep_value2', item.get('rep_value2') + for_obj.get('rep_value2'))
                item.set('rep_value3', item.get('rep_value3') + for_obj.get('rep_value3'))
            }
        }
    } else {
        result_list.add(for_obj)
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[选择子工作项(choose_child)](module/ProjMgmt/work_item/logic/choose_child)

节点：设置子工作项标识
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp_obj = logic.param('for_temp_obj').getReal()

def update_obj = logic.param('update_obj').getReal()


// PC端 使用owner_id   mob端 使用id 
if(for_temp_obj.get('id') != null){
    update_obj.set('id', for_temp_obj.get('id'))
}
if(for_temp_obj.get('owner_id') != null){
    update_obj.set('id', for_temp_obj.get('owner_id'))
}



```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求数量燃尽图(require_burn_out)](module/ProjMgmt/work_item/logic/require_burn_out)

节点：根据迭代日期，计算统计数量
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def change_page = logic.param('change_page').getReal()
def work_item_page = logic.param('work_item_page').getReal()
def sprint = logic.param('sprint').getReal()
def result_list = logic.param('result_list').getReal()


def startDate = new Date(sprint.get('start_at').time)
def endDate = new Date(sprint.get('end_at').time)

def dateFormatter = new java.text.SimpleDateFormat("yyyy-MM-dd")
def calendar = java.util.Calendar.getInstance()
calendar.time = startDate
// 从开始到结束的所有日期
while (!calendar.time.after(endDate)) {
    def rep_date = dateFormatter.format(calendar.time)
    def rep_obj = sys.entity('work_item')    
    rep_obj.set('rep_date', rep_date)
    result_list.add(rep_obj)
    calendar.add(java.util.Calendar.DATE, 1)
}

// 计算开始迭代时的移入工作项数量
def begin_count = 0
change_page.each { it ->
    // 迭代未开始 移入的记录
    if(it.get('type') == '1' && it.get('sprint_status') == '1'){
        begin_count++
    }
    if(it.get('type') == '2' && it.get('sprint_status') == '1' ){
        begin_count--
    }
}
def rep_num = begin_count
result_list.eachWithIndex { item, index ->
    def rep_date = dateFormatter.format(new Date(item.get('rep_date').time))
    if(begin_count > 0){
        // 计算递减步长
        def decrementStep = begin_count / (result_list.size() - 1)
        // 理想线 根据日期 从开始日期 逐天递减
        def rep_value1 =  begin_count - (decrementStep * index)        
        def formattedValue = String.format('%.2f', rep_value1)
        item.set('rep_value1', formattedValue)
    } else {
        item.set('rep_value1', 0)
    }
    if(index == 0){
        item.set('rep_value1', begin_count)
    }
    item.set('rep_value2', rep_num)
    work_item_page.each { it ->
        if(it.get('completed_at') != null){
            // 工作项完成时间
            def completed_at = dateFormatter.format(new Date(it.get('completed_at').time))
            if(completed_at == rep_date){
                rep_num--
                if(rep_num < 0){
                    rep_num = 0
                }
                item.set('rep_value2', rep_num)
            }  
        }    
    }
    change_page.each { it ->
        if(it.get('create_time') != null){
           // 移入移出迭代时间
            def change_date = dateFormatter.format(new Date(it.get('create_time').time))
            if(change_date == rep_date){
                // 迭代开始后 移入的记录
                if(it.get('type') == '1' && it.get('sprint_status') == '2'){
                    rep_num++
                    item.set('rep_value2', rep_num)
                }
                if(it.get('type') == '2' && it.get('sprint_status') == '2'){
                    rep_num--
                    if(rep_num < 0){
                        rep_num = 0
                    }
                    item.set('rep_value2', rep_num)
                }
            } 
        }
    }
}


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[项目资源成员设置(project_resource_setting)](module/ProjMgmt/work_item/logic/project_resource_setting)

节点：判断此成员是否已加入至资源
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def for_choose_obj = logic.param('for_choose_obj').getReal()
insert_members.each { item ->
    def user_id = item.user_id
    if(user_id == for_choose_obj.get('user_id')){
       for_choose_obj.set('already_exist', '1') 
    }
}


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[项目资源成员设置(project_resource_setting)](module/ProjMgmt/work_item/logic/project_resource_setting)

节点：资源成员绑定容量属性
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def resource_member = logic.param('resource_member').getReal()
def day_capacity = logic.param('day_capacity').getReal()
resource_member.set('day_capacity', day_capacity)
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[项目资源成员设置(project_resource_setting)](module/ProjMgmt/work_item/logic/project_resource_setting)

节点：资源成员绑定至组件
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def insert_members = logic.param('insert_members').getReal()
def addon_resource = logic.param('addon_resource').getReal()
addon_resource.set('members', insert_members)
```
#### [工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard)的处理逻辑[变更工作项类型(change)](module/ProjMgmt/work_item_wizard/logic/change)

节点：处理子工作项所属父级
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def for_temp = logic.param('for_temp').getReal()
def child_work_item_types = for_temp.get('child_work_item_types')
//获取实体运行对象 参数实体名
def work_item_runtime = sys.dataentity('work_item')

child_work_item_types.each { it ->
    def target_parent = it.get('target_parent')
    if(it.get('influence_child_ids') != null){
        def work_item_filter = work_item_runtime.filter()
        work_item_filter.in('id', it.get('influence_child_ids'))
        def childs = work_item_filter.select('')
        childs.each { item ->
            def update_entity = work_item_runtime.entity()
            update_entity.set('id', item.get('id'))
            if (target_parent != null) {
               update_entity.set('pid', target_parent) 
            } else {
               update_entity.set('pid', null)
            }
            //更新子工作项的所属父级
            work_item_runtime.update(update_entity)
        }       
    }   
}
```
#### [工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard)的处理逻辑[填充操作明细属性(fill_details)](module/ProjMgmt/work_item_wizard/logic/fill_details)

节点：封装属性
<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def project_id = _default.get('project_id')
def project_runtime = sys.dataentity('project')
def entity_runtime = sys.dataentity('work_item_wizard_detail')
def work_item_runtime = sys.dataentity('work_item')
def work_item_type_runtime = sys.dataentity('work_item_type')
def project = project_runtime.get(project_id);
def details = entity_runtime.list()
def work_items = logic.param('work_items').getReal()
def influence_ids = ''

work_items.each { item ->
    if(influence_ids != ''){
        influence_ids = influence_ids + ',' + item.get('id')
    } else {
        influence_ids = item.get('id')
    }
    def work_item_wizard_detail = sys.entity('work_item_wizard_detail')
    work_item_wizard_detail.set('origin_type', item.get('work_item_type_id'))
    def work_item_type_filter = work_item_type_runtime.filter()
    work_item_type_filter.eq('project_type', project.get('type'))
    work_item_type_filter.ne('id', item.get('work_item_type_id'))
    def choose_types = work_item_type_filter.select('')
    if(choose_types.size() > 0){
        work_item_wizard_detail.set('target_type', choose_types.get(0).get('id'))
    }
    work_item_wizard_detail.set('id', item.get('id'))
    work_item_wizard_detail.set('wizard_id', _default.get('id'))
    work_item_wizard_detail.set('origin_state', item.get('state'))
    work_item_wizard_detail.set('target_state', '10')
    work_item_wizard_detail.set('project_id', item.get('project_id'))
    work_item_wizard_detail.set('title', item.get('title'))
    work_item_wizard_detail.set('assignee_name', item.get('assignee_name'))
    work_item_wizard_detail.set('priority', item.get('priority'))
    work_item_wizard_detail.set('influence', 1)
    // 子工作项
    def child_filter = sys.filter('work_item')
    child_filter.eq('pid', item.get('id'))
    def childs = child_filter.select('')
    work_item_wizard_detail.set('influence_childs', 0)
    if(childs.size() > 0){
        work_item_wizard_detail.set('influence_childs', childs.size())
        def child_work_item_types = work_item_runtime.list()
        def childItems = childs.groupBy { it.get('work_item_type_id') }
        childItems.each { work_item_type_id, itemList ->
            def child_work_item = sys.entity('work_item')
            def influence_child_ids = ''
            child_work_item.set('child_work_item_type', work_item_type_id)
            itemList.each { it ->
                if(influence_child_ids != ''){
                    influence_child_ids = influence_child_ids + ',' + it.get('id')
                } else {
                    influence_child_ids = it.get('id')
                }
            }
            child_work_item.set('influence_child_ids', influence_child_ids)
            child_work_item.set('parent_title', work_item_wizard_detail.get('title'))
            child_work_item.set('influence', itemList.size())
            child_work_item.set('id', work_item_type_id)
            child_work_item.set('parent_origin_type', item.get('work_item_type_id'))
            child_work_item_types.add(child_work_item)
        }
        work_item_wizard_detail.set('child_work_item_types', child_work_item_types)
    }
    details.add(work_item_wizard_detail)
}
_default.set('details', details)
_default.set('influence_ids', influence_ids)
```




