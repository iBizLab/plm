# 关联(relation)  <!-- {docsify-ignore-all} -->


用于记录不同实体间的关系，如需求与工单、工作项与缺陷等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|客户|CUSTOMER|外键值对象|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|产品需求|IDEA|外键值对象|1048576|是||
|前后置任务|JOB_TYPE|[单项选择(文本值)](index/dictionary_index#choose_job_type "选择前后置任务")|200|是||
|重要程度|LEVEL|[单项选择(文本值)](index/dictionary_index#common_level "通用重要程度")|60|是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|父对象版本标识|PARENT_VERSION_ID|文本，可指定长度|100|是||
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|否||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|否||
|源工作项|PRINCIPAL_WORK_ITEM|外键值对象|1048576|是||
|关联类型|RELATION_TYPE|文本，可指定长度|100|是||
|目标对象负责人|TARGET_ASSIGNEE|文本，可指定长度|100|是||
|目标主体标识|TARGET_ID|文本，可指定长度|100|是||
|目标对象编号|TARGET_IDENTIFIER|文本，可指定长度|100|是||
|目标对象父标识|TARGET_PARENT_ID|文本，可指定长度|100|是||
|目标对象优先级|TARGET_PRIORITY|文本，可指定长度|100|是||
|目标对象状态|TARGET_STATE|文本，可指定长度|100|是||
|目标对象标题|TARGET_TITLE|文本，可指定长度|100|是||
|关联目标类型|TARGET_TYPE|文本，可指定长度|100|是||
|目标对象版本标识|TARGET_VERSION_ID|文本，可指定长度|100|是||
|测试用例|TEST_CASE|外键值对象|1048576|是||
|工单|TICKET|外键值对象|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项|WORK_ITEM|外键值对象|1048576|是||

<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `目标主体标识(TARGET_ID)`
  * `关联主体类型(PRINCIPAL_TYPE)`

###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="RELATION" name="index_RELATION">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|关联主体标识|PRINCIPAL_ID|false|升序|-1||
|关联主体类型|PRINCIPAL_TYPE|false|升序|-1||
|目标主体标识|TARGET_ID|false|升序|-1||
|关联目标类型|TARGET_TYPE|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERMULINH_BASELINE_IDEA_RELATION](der/DERMULINH_BASELINE_IDEA_RELATION)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|多继承关系（虚拟实体）||
|[DERMULINH_BASELINE_PAGE_RELATION](der/DERMULINH_BASELINE_PAGE_RELATION)|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)|多继承关系（虚拟实体）||
|[DERMULINH_BASELINE_TEST_CASE_RELATION](der/DERMULINH_BASELINE_TEST_CASE_RELATION)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|多继承关系（虚拟实体）||
|[DERMULINH_BASELINE_WORK_ITEM_RELATION](der/DERMULINH_BASELINE_WORK_ITEM_RELATION)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|多继承关系（虚拟实体）||
|[DERMULINH_REVIEW_CONTENT_RELATION](der/DERMULINH_REVIEW_CONTENT_RELATION)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|多继承关系（虚拟实体）||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RELATION_BASELINE](der/DERCUSTOM_RELATION_BASELINE)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_RELATION_RELEASE](der/DERCUSTOM_RELATION_RELEASE)|[项目发布(RELEASE)](module/ProjMgmt/release)|自定义关系||
|[DERCUSTOM_RELATION_REVIEW](der/DERCUSTOM_RELATION_REVIEW)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_RELATION_REVIEW_CONTENT_EXTEND](der/DERCUSTOM_RELATION_REVIEW_CONTENT_EXTEND)|[评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend)|自定义关系||
|[DERCUSTOM_RELATION_SPRINT](der/DERCUSTOM_RELATION_SPRINT)|[迭代(SPRINT)](module/ProjMgmt/sprint)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_CUSTOMER](der/DERCUSTOM_RELATION_TARGET_CUSTOMER)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_IDEA](der/DERCUSTOM_RELATION_TARGET_IDEA)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_PAGE](der/DERCUSTOM_RELATION_TARGET_PAGE)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_PRODUCT_PLAN](der/DERCUSTOM_RELATION_TARGET_PRODUCT_PLAN)|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_RUN](der/DERCUSTOM_RELATION_TARGET_RUN)|[执行用例(RUN)](module/TestMgmt/run)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_SPACE](der/DERCUSTOM_RELATION_TARGET_SPACE)|[空间(SPACE)](module/Wiki/space)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_TEST_CASE](der/DERCUSTOM_RELATION_TARGET_TEST_CASE)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_TICKET](der/DERCUSTOM_RELATION_TARGET_TICKET)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_WORK_ITEM](der/DERCUSTOM_RELATION_TARGET_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||
|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|自定义关系||
|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|添加依赖|add_dependency|[实体处理逻辑](module/Base/relation/logic/add_dependency "工作项添加依赖")|默认|不支持||||
|取消关联|del_relation|[实体处理逻辑](module/Base/relation/logic/del_relation "取消关联")|默认|不支持||||
|规划用例|program_test_case|[实体处理逻辑](module/Base/relation/logic/program_test_case "规划用例")|默认|不支持||||
|执行用例取消关联缺陷|run_del_relation_bug|[实体处理逻辑](module/Base/relation/logic/run_del_relation_bug "执行用例取消关联缺陷")|默认|不支持||||
|测试用例取消关联缺陷|test_case_del_relation_bug|[实体处理逻辑](module/Base/relation/logic/test_case_del_relation_bug "测试用例取消关联缺陷")|默认|不支持||||
|工作项取消关联测试用例|work_item_del_relation_case|[实体处理逻辑](module/Base/relation/logic/work_item_del_relation_test_case "工作项取消关联测试用例")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[区分前后置任务](module/Base/relation/logic/differentiate_job_type)|differentiate_job_type|无||工作项依赖：区分前后置任务|
|[取消关联](module/Base/relation/logic/del_relation)|del_relation|无||工作项取消关联数据（正反向关联数据同时删除）|
|[工作项取消关联测试用例](module/Base/relation/logic/work_item_del_relation_test_case)|work_item_del_relation_test_case|无||1.工作项取消关联对应测试用例 2.判断是缺陷类型工作项时检验是否需删除执行用例关联|
|[工作项添加依赖](module/Base/relation/logic/add_dependency)|add_dependency|无||工作项添加依赖|
|[执行用例取消关联缺陷](module/Base/relation/logic/run_del_relation_bug)|run_del_relation_bug|无||1.执行用例取消关联缺陷 2.对应测试用例取消关联缺陷|
|[测试用例取消关联缺陷](module/Base/relation/logic/test_case_del_relation_bug)|test_case_del_relation_bug|无||1.测试用例取消关联缺陷 2.对应执行用例取消关联缺陷|
|[规划用例](module/Base/relation/logic/program_test_case)|program_test_case|无||规划用例，将用例规划至评审内，生成正反向关联数据|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|版本数据存储|版本数据存储|[附加数据版本(VERSION_DATA)](module/Base/version_data)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询2(DATAQUERY2)](module/Base/relation/query/DataQuery2)|DATAQUERY2|否|否 |否 ||
|[数据查询(DEFAULT)](module/Base/relation/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/relation/query/View)|VIEW|否|否 |否 ||
|[全部数据(all)](module/Base/relation/query/all)|all|否|否 |否 ||
|[基线下的工作项(baseline_relation_work_item)](module/Base/relation/query/baseline_relation_work_item)|baseline_relation_work_item|否|否 |否 ||
|[工作项依赖(dependency_work_items)](module/Base/relation/query/dependency_work_items)|dependency_work_items|否|否 |否 ||
|[测试用例下存在执行用例关联缺陷(exists_run_relation_bug)](module/Base/relation/query/exists_run_relation_bug)|exists_run_relation_bug|否|否 |否 ||
|[需求关联客户(idea_re_customer)](module/Base/relation/query/idea_re_customer)|idea_re_customer|否|否 |否 ||
|[需求关联需求(idea_re_idea)](module/Base/relation/query/idea_re_idea)|idea_re_idea|否|否 |否 ||
|[需求关联测试用例(idea_re_test_case)](module/Base/relation/query/idea_re_test_case)|idea_re_test_case|否|否 |否 ||
|[需求关联工单(idea_re_ticket)](module/Base/relation/query/idea_re_ticket)|idea_re_ticket|否|否 |否 ||
|[需求关联工作项(idea_re_work_item)](module/Base/relation/query/idea_re_work_item)|idea_re_work_item|否|否 |否 ||
|[版本需求关联数据(idea_version_relation)](module/Base/relation/query/idea_version_relation)|idea_version_relation|否|否 |否 |主实体版本创建时，查询关联principal_type为需求的数据存入version_data|
|[评审关联测试用例(review_re_test_case)](module/Base/relation/query/review_re_test_case)|review_re_test_case|否|否 |否 ||
|[执行用例关联缺陷(run_re_bug)](module/Base/relation/query/run_re_bug)|run_re_bug|否|否 |否 ||
|[执行用例关联需求(run_re_idea)](module/Base/relation/query/run_re_idea)|run_re_idea|否|否 |否 ||
|[执行用例关联工作项(run_re_work_item)](module/Base/relation/query/run_re_work_item)|run_re_work_item|否|否 |否 ||
|[测试用例关联缺陷(test_case_re_bug)](module/Base/relation/query/test_case_re_bug)|test_case_re_bug|否|否 |否 |仅关联缺陷类型工作项|
|[测试用例关联需求(test_case_re_idea)](module/Base/relation/query/test_case_re_idea)|test_case_re_idea|否|否 |否 ||
|[测试用例关联工作项(test_case_re_work_item)](module/Base/relation/query/test_case_re_work_item)|test_case_re_work_item|否|否 |否 |排除了缺陷类型的工作项|
|[版本用例关联数据(test_case_version_relation)](module/Base/relation/query/test_case_version_relation)|test_case_version_relation|否|否 |否 |主实体版本创建时，查询关联principal_type为用例的数据存入version_data|
|[工单关联产品需求(ticket_re_idea)](module/Base/relation/query/ticket_re_idea)|ticket_re_idea|否|否 |否 ||
|[工单关联工单(ticket_re_self)](module/Base/relation/query/ticket_re_self)|ticket_re_self|否|否 |否 ||
|[工单关联工作项(ticket_re_work_item)](module/Base/relation/query/ticket_re_work_item)|ticket_re_work_item|否|否 |否 ||
|[工作项关联产品需求(work_item_relation_idea)](module/Base/relation/query/work_item_relation_idea)|work_item_relation_idea|否|否 |否 ||
|[工作项关联工作项(work_item_relation_self)](module/Base/relation/query/work_item_relation_self)|work_item_relation_self|否|否 |否 ||
|[工作项关联测试用例(work_item_relation_test_case)](module/Base/relation/query/work_item_relation_test_case)|work_item_relation_test_case|否|否 |否 ||
|[工作项关联工单(work_item_relation_ticket)](module/Base/relation/query/work_item_relation_ticket)|work_item_relation_ticket|否|否 |否 ||
|[版本工作项关联数据(work_item_version_relation)](module/Base/relation/query/work_item_version_relation)|work_item_version_relation|否|否 |否 |主实体版本创建时，查询关联principal_type为工作项的数据存入version_data|

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/relation/dataset/Default)|DEFAULT|数据查询|是|||
|[全部数据(all)](module/Base/relation/dataset/all)|all|数据查询|否|||
|[工作项依赖(dependency)](module/Base/relation/dataset/dependency)|dependency|[实体逻辑](module/Base/relation/logic/differentiate_job_type)|否||工作项依赖|
|[工作项依赖(dependency_work_items)](module/Base/relation/dataset/dependency_work_items)|dependency_work_items|数据查询|否|||
|[测试用例下存在执行用例关联缺陷(exists_run_relation_bug)](module/Base/relation/dataset/exists_run_relation_bug)|exists_run_relation_bug|数据查询|否|||
|[需求关联客户(idea_re_customer)](module/Base/relation/dataset/idea_re_customer)|idea_re_customer|数据查询|否|||
|[需求关联需求(idea_re_idea)](module/Base/relation/dataset/idea_re_idea)|idea_re_idea|数据查询|否|||
|[需求关联测试用例(idea_re_test_case)](module/Base/relation/dataset/idea_re_test_case)|idea_re_test_case|数据查询|否|||
|[需求关联工单(idea_re_ticket)](module/Base/relation/dataset/idea_re_ticket)|idea_re_ticket|数据查询|否|||
|[需求关联工作项(idea_re_work_item)](module/Base/relation/dataset/idea_re_work_item)|idea_re_work_item|数据查询|否|||
|[版本需求关联数据(idea_version_relation)](module/Base/relation/dataset/idea_version_relation)|idea_version_relation|数据查询|否||主实体版本创建时，查询关联principal_type为需求的数据存入version_data|
|[评审关联测试用例(review_re_test_case)](module/Base/relation/dataset/review_re_test_case)|review_re_test_case|数据查询|否|||
|[执行用例关联缺陷(run_re_bug)](module/Base/relation/dataset/run_re_bug)|run_re_bug|数据查询|否|||
|[执行用例关联需求(run_re_idea)](module/Base/relation/dataset/run_re_idea)|run_re_idea|数据查询|否|||
|[执行用例关联工作项(run_re_work_item)](module/Base/relation/dataset/run_re_work_item)|run_re_work_item|数据查询|否|||
|[测试用例关联缺陷(test_case_re_bug)](module/Base/relation/dataset/test_case_re_bug)|test_case_re_bug|数据查询|否||仅关联缺陷类型工作项|
|[测试用例关联需求(test_case_re_idea)](module/Base/relation/dataset/test_case_re_idea)|test_case_re_idea|数据查询|否|||
|[测试用例关联工作项(test_case_re_work_item)](module/Base/relation/dataset/test_case_re_work_item)|test_case_re_work_item|数据查询|否||排除了缺陷类型的工作项|
|[版本用例关联数据(test_case_version_relation)](module/Base/relation/dataset/test_case_version_relation)|test_case_version_relation|数据查询|否||主实体版本创建时，查询关联principal_type为用例的数据存入version_data|
|[工单关联产品需求(ticket_re_idea)](module/Base/relation/dataset/ticket_re_idea)|ticket_re_idea|数据查询|否|||
|[工单关联工单(ticket_re_self)](module/Base/relation/dataset/ticket_re_self)|ticket_re_self|数据查询|否|||
|[工单关联工作项(ticket_re_work_item)](module/Base/relation/dataset/ticket_re_work_item)|ticket_re_work_item|数据查询|否|||
|[工作项关联产品需求(work_item_relation_idea)](module/Base/relation/dataset/work_item_relation_idea)|work_item_relation_idea|数据查询|否|||
|[工作项关联工作项(work_item_relation_self)](module/Base/relation/dataset/work_item_relation_self)|work_item_relation_self|数据查询|否|||
|[工作项关联测试用例(work_item_relation_test_case)](module/Base/relation/dataset/work_item_relation_test_case)|work_item_relation_test_case|数据查询|否|||
|[工作项关联工单(work_item_relation_ticket)](module/Base/relation/dataset/work_item_relation_ticket)|work_item_relation_ticket|数据查询|否|||
|[版本工作项关联数据(work_item_version_relation)](module/Base/relation/dataset/work_item_version_relation)|work_item_version_relation|数据查询|否||主实体版本创建时，查询关联principal_type为工作项的数据存入version_data|

## 数据权限

##### 全部数据（读写） :id=relation-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `CREATE`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_JOB_TYPE_EQ|前后置任务|EQ||
|N_LEVEL_EQ|重要程度|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_PRINCIPAL_TYPE_EQ|关联主体类型|EQ||
|N_TARGET_ID_EQ|目标主体标识|EQ||
|N_TARGET_TYPE_EQ|关联目标类型|EQ||
|N_TARGET_VERSION_ID_EQ|目标对象版本标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加依赖关系 | add_dependency | 添加依赖关系 |单项数据|用户自定义||
| 测试用例取消关联缺陷 | test_case_del_relation_bug | 取消关联 |单项数据|<details><summary>后台调用</summary>[test_case_del_relation_bug](#行为)||
| 添加依赖前置任务（移动端） | mob_add_front_dependency | 添加前置任务 |无数据|<details><summary>后台调用</summary>[add_dependency](#行为)||
| 取消关联 | del_relation | 取消关联 |单项数据|<details><summary>后台调用</summary>[del_relation](#行为)||
| 产品移动端新建工单（新建后关联） | mob_create_and_relation_ticket | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticket_mob_ticket_create_option_view)</details>||
| 依赖类型变更 | dependency_change | 依赖类型变更 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 取消依赖 | del_dependency | 取消依赖 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 产品移动端新建需求（新建后关联） | mob_create_and_relation | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建需求](app/view/idea_mob_quick_create_view)</details>||
| 移动端新建缺陷（新建后关联） | product_create_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_mob_create_option_view)</details>||
| 添加关联 | add_relation | 添加关联 |无数据|用户自定义||
| 工作项取消关联测试用例 | work_item_del_relation_test_case | 取消关联 |单项数据|<details><summary>后台调用</summary>[work_item_del_relation_case](#行为)||
| 产品移动端新建工作项（新建后关联） | product_create_work_item | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_mob_create_option_view)</details>||
| 新建执行后（建立双向关联数据) | after_creat_double_relation | 新建执行后（建立双向关联数据) |单项数据（主键）|用户自定义||
| 执行用例取消关联缺陷 | run_del_relation_bug | 取消关联 |单项数据|<details><summary>后台调用</summary>[run_del_relation_bug](#行为)||
| 添加依赖后置任务（移动端） | mob_add_after_dependency | 添加后置任务 |无数据|<details><summary>后台调用</summary>[add_dependency](#行为)||
| 产品移动端新建用例（新建后关联） | mob_create_and_relation_case | 新建用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建用例](app/view/test_case_mob_quick_create)</details>||
| 打开依赖工作项主视图 | open_dependency | 打开依赖工作项主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_main_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[依赖列表视图加载完成](module/Base/relation/uilogic/dependency_load_success)|dependency_load_success|依赖列表视图加载完成|
|[依赖类型值变更](module/Base/relation/uilogic/dependency_onchange)|dependency_onchange|依赖类型值变更|
|[取消关联行为是否启用](module/Base/relation/uilogic/del_relation_disabled)|del_relation_disabled|用于动态取消关联按钮的启用(target_priority列绑定的界面行为组)|
|[工作项添加依赖关系](module/Base/relation/uilogic/add_dependency)|add_dependency|工作项添加依赖关系|
|[建立双向关联数据（移动端）](module/Base/relation/uilogic/create_double_relation)|create_double_relation|移动端建立双向关联数据|
|[打开依赖工作项](module/Base/relation/uilogic/open_dependency)|open_dependency|打开依赖工作项主视图|
|[获取关联列表总条数](module/Base/relation/uilogic/get_list_total)|get_list_total|获取关联列表的总条数信息|
|[触发计数器刷新及表格刷新](module/Base/relation/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新<br>并且刷新表单|
|[选择下拉框区域展示](module/Base/relation/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[通知刷新产品需求（移动端）](module/Base/relation/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/relation?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',

show_index:'index_RELATION',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>