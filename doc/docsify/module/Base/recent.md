# 最近访问(recent)  <!-- {docsify-ignore-all} -->


记录用户最近访问过的实体记录，便于快速回溯和提高工作效率。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|IDENTIFIER|文本，可指定长度|100|是||
|是否已删除|IS_DELETED|是否逻辑||是||
|名称|NAME|文本，可指定长度|500|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|[文本，可指定长度](index/dictionary_index#recent_visite "最近访问")|100|是||
|所属数据对象|OWNER_TYPE|[单项选择(文本值)](index/dictionary_index#recent_type "最近访问对象")|100|是||
|访问父类|RECENT_PARENT|文本，可指定长度|100|是||
|访问父类编号|RECENT_PARENT_IDENTIFIER|文本，可指定长度|100|是||
|访问父类名称|RECENT_PARENT_NAME|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|访问类型|TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `建立人(CREATE_MAN)`
  * `所属对象子类型(OWNER_SUBTYPE)`
  * `所属数据标识(OWNER_ID)`

###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="RECENT" name="index_RECENT">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|false|升序|-1||
|所属对象子类型|OWNER_SUBTYPE|false|升序|-1||
|访问类型|TYPE|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RECENT_WORK_ITEM](der/DERCUSTOM_RECENT_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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
|跳转对应视图|jump_corresponding_view|[实体处理逻辑](module/Base/recent/logic/jump_corresponding_view "跳转对应视图")|默认|不支持||||
|我负责的事项|my_charge_entry|[实体处理逻辑](module/Base/recent/logic/my_charge_entry "我负责的事项")|默认|不支持||||
|我创建的事项|my_created_entry|[实体处理逻辑](module/Base/recent/logic/my_created_entry "我创建的事项")|默认|不支持||||
|我的任务总结|my_summary|[实体处理逻辑](module/Base/recent/logic/my_summary "我的任务总结")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[我创建的事项](module/Base/recent/logic/my_created_entry)|my_created_entry|无||查询当前用户创建的事项|
|[我的任务总结](module/Base/recent/logic/my_summary)|my_summary|无||获取我的任务总结数据|
|[我负责的事项](module/Base/recent/logic/my_charge_entry)|my_charge_entry|无||查询我负责的事项，工作台的计数器使用|
|[最近使用](module/Base/recent/logic/recent_use)|recent_use|无||查询最近使用数据(项目/产品/空间)，仅查询10条|
|[最近访问](module/Base/recent/logic/recent_access)|recent_access|无||查询最近访问数据，并获取他们的父级|
|[移动端首页_最近访问](module/Base/recent/logic/mob_home_recent_access)|mob_home_recent_access|无||仅查询最近5条访问|
|[跳转对应视图](module/Base/recent/logic/jump_corresponding_view)|jump_corresponding_view|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/recent/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/recent/query/View)|VIEW|否|否 |否 ||
|[最近访问(recent_access)](module/Base/recent/query/recent_access)|recent_access|否|否 |否 ||
|[最近浏览当前产品内工单(recent_curproduct_ticket)](module/Base/recent/query/recent_curproduct_ticket)|recent_curproduct_ticket|否|否 |否 ||
|[最近浏览当前项目子工作项(recent_curproject_child_work_item)](module/Base/recent/query/recent_curproject_child_work_item)|recent_curproject_child_work_item|否|否 |否 ||
|[最近浏览当前项目工作项(recent_curproject_work_item)](module/Base/recent/query/recent_curproject_work_item)|recent_curproject_work_item|否|否 |否 ||
|[最近浏览_需求(recent_idea)](module/Base/recent/query/recent_idea)|recent_idea|否|否 |否 ||
|[最近访问页面(recent_page)](module/Base/recent/query/recent_page)|recent_page|否|否 |否 ||
|[最近访问项目(recent_project)](module/Base/recent/query/recent_project)|recent_project|否|否 |否 ||
|[最近浏览_用例(recent_test_case)](module/Base/recent/query/recent_test_case)|recent_test_case|否|否 |否 ||
|[最近访问的用例_首页(recent_test_case_index)](module/Base/recent/query/recent_test_case_index)|recent_test_case_index|否|否 |否 ||
|[最近浏览_工单(recent_ticket)](module/Base/recent/query/recent_ticket)|recent_ticket|否|否 |否 ||
|[最近使用(recent_use)](module/Base/recent/query/recent_use)|recent_use|否|否 |否 ||
|[最近浏览_工作项(recent_work_item)](module/Base/recent/query/recent_work_item)|recent_work_item|否|否 |否 ||
|[最近浏览工作项且不含缺陷(recent_work_item_and_nobug)](module/Base/recent/query/recent_work_item_and_nobug)|recent_work_item_and_nobug|否|否 |否 ||
|[最近浏览_缺陷(recent_work_item_bug)](module/Base/recent/query/recent_work_item_bug)|recent_work_item_bug|否|否 |否 ||
|[最近浏览_依赖工作项(recent_work_item_dependency)](module/Base/recent/query/recent_work_item_dependency)|recent_work_item_dependency|否|否 |否 ||
|[本人最新访问(user)](module/Base/recent/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/recent/dataset/Default)|DEFAULT|数据查询|是|||
|[移动端首页_最近访问(mob_home_recent_access)](module/Base/recent/dataset/mob_home_recent_access)|mob_home_recent_access|[实体逻辑](module/Base/recent/logic/mob_home_recent_access)|否|||
|[最近使用（10条）(only_ten_access_use)](module/Base/recent/dataset/only_ten_access_use)|only_ten_access_use|[实体逻辑](module/Base/recent/logic/recent_use)|否|||
|[最近访问(recent_access)](module/Base/recent/dataset/recent_access)|recent_access|数据查询|否|||
|[最近访问（逻辑生成）(recent_access_logic)](module/Base/recent/dataset/recent_access_logic)|recent_access_logic|[实体逻辑](module/Base/recent/logic/recent_access)|否|||
|[最近浏览当前产品内工单(recent_curproduct_ticket)](module/Base/recent/dataset/recent_curproduct_ticket)|recent_curproduct_ticket|数据查询|否|||
|[最近浏览当前项目子工作项(recent_curproject_child_work_item)](module/Base/recent/dataset/recent_curproject_child_work_item)|recent_curproject_child_work_item|数据查询|否|||
|[最近浏览当前项目工作项(recent_curproject_work_item)](module/Base/recent/dataset/recent_curproject_work_item)|recent_curproject_work_item|数据查询|否|||
|[最近浏览_需求(recent_idea)](module/Base/recent/dataset/recent_idea)|recent_idea|数据查询|否|||
|[最近访问页面(recent_page)](module/Base/recent/dataset/recent_page)|recent_page|数据查询|否|||
|[最近访问项目(recent_project)](module/Base/recent/dataset/recent_project)|recent_project|数据查询|否|||
|[最近浏览_用例(recent_test_case)](module/Base/recent/dataset/recent_test_case)|recent_test_case|数据查询|否|||
|[最近访问的用例_首页(recent_test_case_index)](module/Base/recent/dataset/recent_test_case_index)|recent_test_case_index|数据查询|否|||
|[最近浏览_工单(recent_ticket)](module/Base/recent/dataset/recent_ticket)|recent_ticket|数据查询|否|||
|[最近使用(recent_use)](module/Base/recent/dataset/recent_use)|recent_use|数据查询|否|||
|[最近浏览_工作项(recent_work_item)](module/Base/recent/dataset/recent_work_item)|recent_work_item|数据查询|否|||
|[最近浏览工作项且不含缺陷(recent_work_item_and_nobug)](module/Base/recent/dataset/recent_work_item_and_nobug)|recent_work_item_and_nobug|数据查询|否|||
|[最近浏览_缺陷(recent_work_item_bug)](module/Base/recent/dataset/recent_work_item_bug)|recent_work_item_bug|数据查询|否|||
|[最近浏览_工作项(依赖)(recent_work_item_dependency)](module/Base/recent/dataset/recent_work_item_dependency)|recent_work_item_dependency|数据查询|否|||
|[本人最新访问(user)](module/Base/recent/dataset/user)|user|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=recent-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`



##### 普通用户（读写） :id=recent-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[本人最新访问(user)](module/Base/recent#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_RECENT_PARENT_EQ|访问父类|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开移动端事项分页导航视图(我创建的事项) | open_my_tab_created | 打开移动端事项 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_my_mob_tab_view)</details>||
| 显示更多_最近访问的项目（移动端仪表盘） | show_more_access_project | 显示更多 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问的项目](app/view/recent_recent_access_project_mobbash)</details>||
| 打开首页 | open_home_page | 打开首页 |无数据|用户自定义||
| 新建工作项（测试用例） | test_case_create_new_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 首页 | panel_de_custom_index_view_layout_overview_button_calluilogic_click | 产品管理 |单项数据|<details><summary>打开视图或向导（模态）</summary>[产品管理](app/view/product_tree_exp_view)</details>||
| 打开移动端事项分页导航视图(我关注的事项) | open_my_tab_attention | 打开移动端事项 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_my_mob_tab_view)</details>||
| 新建工单 | create_new_ticket | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticket_quick_create_view)</details>||
| 打开移动端事项分页导航视图(待完成事项) | open_my_tab_not_completed | 打开移动端事项 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_my_mob_tab_view)</details>||
| 新建子工作项 | create_child_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建需求 | create_new_idea | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建需求](app/view/idea_quick_create_view)</details>||
| 打开最近访问（移动端） | mob_open_recent_access | 打开最近访问 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_mob_recent_md_view)</details>||
| 新建缺陷 | create_new_work_item_bug | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 移动端通过重定向视图跳转 | mob_jump | 移动端通过重定向视图跳转 |单项数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_mob_redirect_view)</details>||
| 打开移动端事项分页导航视图(我负责的事项) | open_my_tab_assignee | 打开移动端事项 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_my_mob_tab_view)</details>||
| 新建测试用例 | create_new_test_case | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建用例](app/view/test_case_quick_create_view)</details>||
| 打开工作项主视图 | open_work_item_main_view | 打开工作项主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_main_view)</details>||
| 新建执行后（建立双向关联数据) | after_creat_double_relation | 新建执行后（建立双向关联数据) |单项数据（主键）|用户自定义||
| 新建工作项 | create_new_work_item | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建缺陷(执行用例) | run_create_new_work_item_bug | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建工单（客户） | customer_create_ticket | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticket_quick_create_view)</details>||
| 显示更多_最近访问的用例（移动端仪表盘） | show_more_access_case | 显示更多 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问的用例](app/view/recent_recent_access_case_mobbash)</details>||
| 通过重定向视图跳转 | jump | 通过重定向视图跳转 |单项数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_redirect_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[建立双向关联数据](module/Base/recent/uilogic/create_double_relation)|create_double_relation|工作项关联工作项（新建）|
|[最近访问跳转其他视图](module/Base/recent/uilogic/recent_jump_other_view)|recent_jump_other_view|首页最近访问点击后跳转其他视图|
|[移动端最近访问跳转其他视图](module/Base/recent/uilogic/mob_recent_jump_other_view)|mob_recent_jump_other_view|移动端首页最近访问点击后跳转其他视图|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/recent?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/recent?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',

show_index:'index_RECENT',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>