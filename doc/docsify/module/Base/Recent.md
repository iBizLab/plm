# 最近访问(Recent)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Identifier#default)|[工作项编号](index/sequence_index#seq_work_item_id)|||
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|[单项选择(文本值)](index/dictionary_index#Recent_type "最近访问对象")|100|[默认规则](module/Base/Recent/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|[文本，可指定长度](index/dictionary_index#Recent_visite "最近访问")|100|[默认规则](module/Base/Recent/value_rule/Owner_subtype#default)||||
|访问类型|TYPE|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Type#default)||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|访问父类名称|RECENT_PARENT_NAME|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Recent_parent_name#default)||||
|访问父类|RECENT_PARENT|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Recent_parent#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/Base/Recent/value_rule/Show_identifier#default)||√||
|访问父类编号|RECENT_PARENT_IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/RECENT_PARENT_IDENTIFIER#default)||||
|名称|NAME|文本，可指定长度|500|[默认规则](module/Base/Recent/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Recent/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Recent/value_rule/Create_man#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `建立人(CREATE_MAN)`
  * `所属对象子类型(OWNER_SUBTYPE)`
  * `所属数据标识(OWNER_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RECENT_WORK_ITEM](der/DERCUSTOM_RECENT_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|我负责的事项|My_charge_entry|[实体处理逻辑](module/Base/Recent/logic/my_charge_entry "我负责的事项")|默认|不支持||||
|我创建的事项|My_created_entry|[实体处理逻辑](module/Base/Recent/logic/my_created_entry "我创建的事项")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[我负责的事项](module/Base/Recent/logic/my_charge_entry)|my_charge_entry|无|||
|[我创建的事项](module/Base/Recent/logic/my_created_entry)|my_created_entry|无|||
|[最近访问](module/Base/Recent/logic/recent_access)|recent_access|无|||
|[最近访问跳转其他视图](module/Base/Recent/logic/recent_jump_other_view)|recent_jump_other_view|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Recent/query/Default)|DEFAULT|是|否 |否 ||
|[最近访问(recent_access)](module/Base/Recent/query/Recent_access)|recent_access|否|否 |否 ||
|[最近浏览当前产品内工单(recent_curproduct_ticket)](module/Base/Recent/query/Recent_curproduct_ticket)|recent_curproduct_ticket|否|否 |否 ||
|[最近浏览当前项目工作项(recent_curproject_work_item)](module/Base/Recent/query/Recent_curproject_work_item)|recent_curproject_work_item|否|否 |否 ||
|[最近浏览_需求(recent_idea)](module/Base/Recent/query/Recent_idea)|recent_idea|否|否 |否 ||
|[最近访问页面(recent_page)](module/Base/Recent/query/Recent_page)|recent_page|否|否 |否 ||
|[最近访问项目(recent_project)](module/Base/Recent/query/Recent_project)|recent_project|否|否 |否 ||
|[最近浏览_用例(recent_test_case)](module/Base/Recent/query/Recent_test_case)|recent_test_case|否|否 |否 ||
|[最近访问的用例_首页(recent_test_case_index)](module/Base/Recent/query/Recent_test_case_index)|recent_test_case_index|否|否 |否 ||
|[最近浏览_工单(recent_ticket)](module/Base/Recent/query/Recent_ticket)|recent_ticket|否|否 |否 ||
|[最近使用(recent_use)](module/Base/Recent/query/Recent_use)|recent_use|否|否 |否 ||
|[最近浏览_工作项(recent_work_item)](module/Base/Recent/query/Recent_work_item)|recent_work_item|否|否 |否 ||
|[最近浏览工作项且不含缺陷(recent_work_item_and_nobug)](module/Base/Recent/query/Recent_work_item_and_nobug)|recent_work_item_and_nobug|否|否 |否 ||
|[最近浏览_缺陷(recent_work_item_bug)](module/Base/Recent/query/Recent_work_item_bug)|recent_work_item_bug|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Recent/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Recent/dataset/Default)|DEFAULT|数据查询|是|||
|[最近访问(recent_access)](module/Base/Recent/dataset/Recent_access)|recent_access|数据查询|否|||
|[最近访问（逻辑生成）(recent_access_logic)](module/Base/Recent/dataset/Recent_access_logic)|recent_access_logic|[实体逻辑](module/Base/Recent/logic/recent_access)|否|||
|[最近浏览当前产品内工单(recent_curproduct_ticket)](module/Base/Recent/dataset/Recent_curproduct_ticket)|recent_curproduct_ticket|数据查询|否|||
|[最近浏览当前项目工作项(recent_curproject_work_item)](module/Base/Recent/dataset/Recent_curproject_work_item)|recent_curproject_work_item|数据查询|否|||
|[最近浏览_需求(recent_idea)](module/Base/Recent/dataset/Recent_idea)|recent_idea|数据查询|否|||
|[最近访问页面(recent_page)](module/Base/Recent/dataset/Recent_page)|recent_page|数据查询|否|||
|[最近访问项目(recent_project)](module/Base/Recent/dataset/Recent_project)|recent_project|数据查询|否|||
|[最近浏览_用例(recent_test_case)](module/Base/Recent/dataset/Recent_test_case)|recent_test_case|数据查询|否|||
|[最近访问的用例_首页(recent_test_case_index)](module/Base/Recent/dataset/Recent_test_case_index)|recent_test_case_index|数据查询|否|||
|[最近浏览_工单(recent_ticket)](module/Base/Recent/dataset/Recent_ticket)|recent_ticket|数据查询|否|||
|[最近使用(recent_use)](module/Base/Recent/dataset/Recent_use)|recent_use|数据查询|否|||
|[最近浏览_工作项(recent_work_item)](module/Base/Recent/dataset/Recent_work_item)|recent_work_item|数据查询|否|||
|[最近浏览工作项且不含缺陷(recent_work_item_and_nobug)](module/Base/Recent/dataset/Recent_work_item_and_nobug)|recent_work_item_and_nobug|数据查询|否|||
|[最近浏览_缺陷(recent_work_item_bug)](module/Base/Recent/dataset/Recent_work_item_bug)|recent_work_item_bug|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Recent-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ|
|N_RECENT_PARENT_EQ|访问父类|EQ|
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_CREATE_MAN_EQ|建立人|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 新建工作项（测试用例） | test_case_create_new_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 新建缺陷 | create_new_work_item_bug | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 首页 | panel_DECustomIndexViewLayout_overview_button_calluilogic_click | 产品管理 |单项数据|<details><summary>打开视图或向导（模态）</summary>[产品管理](app/view/producttree_exp_view)</details>|否|无||
| 新建测试用例 | create_new_test_case | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建用例](app/view/test_casequick_create_view)</details>|否|引用视图或树节点||
| 新建工单 | create_new_ticket | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticketquick_create_view)</details>|否|引用视图或树节点||
| 新建执行后（建立双向关联数据) | after_creat_double_relation | 新建执行后（建立双向关联数据) |单项数据（主键）|用户自定义|否|无||
| 新建子工作项 | create_child_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 新建工作项 | create_new_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 新建缺陷(执行用例) | run_create_new_work_item_bug | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 新建需求 | create_new_idea | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建需求](app/view/ideaquick_create_view)</details>|否|引用视图或树节点||
| 新建工单（客户） | customer_create_ticket | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticketquick_create_view)</details>|否|引用视图或树节点||
| 通过重定向视图跳转 | jump | 通过重定向视图跳转 |单项数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recentRedirectView)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[最近访问跳转其他视图](module/Base/Recent/uilogic/recent_jump_other_view)|recent_jump_other_view|
|[建立双向关联数据](module/Base/Recent/uilogic/create_double_relation)|create_double_relation|
