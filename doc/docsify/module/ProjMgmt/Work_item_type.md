# 工作项类型(Work_item_type)  <!-- {docsify-ignore-all} -->

仅瀑布类型项目可以自定义工作项类型

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|序号|SEQUENCE|数值|0|||||
|是否系统类型|IS_SYSTEM|是否逻辑|0|||||
|项目类型|PROJECT_TYPE|[单项选择(文本值)](index/dictionary_index#Project_type "项目类型")|60|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Project_type#default)||||
|类型分组|GROUP|[单项选择(文本值)](index/dictionary_index#Work_item_type_group "工作项类型分组")|60|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Group#default)||||
|编码|CODE|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Code#default)||||
|图标|ICON|长文本，没有长度限制|100|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Icon#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Update_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_type/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/Work_item_state)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
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
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/Work_item_type/query/Default)|DEFAULT|是|否 |否 ||
|[项目工作项类型(project_work_item_type)](module/ProjMgmt/Work_item_type/query/Project_work_item_type)|project_work_item_type|否|否 |否 ||
|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/Work_item_type/query/Project_work_item_type_not_bug)|project_work_item_type_not_bug|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Work_item_type/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Work_item_type/dataset/Default)|DEFAULT|数据查询|是|||
|[项目工作项类型(project_work_item_type)](module/ProjMgmt/Work_item_type/dataset/Project_work_item_type)|project_work_item_type|数据查询|否|||
|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/Work_item_type/dataset/Project_work_item_type_not_bug)|project_work_item_type_not_bug|数据查询|否|||


## 数据权限

##### 全部数据（读） :id=Work_item_type-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=Work_item_type-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `READ`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PROJECT_TYPE_EQ|项目类型|EQ|
|N_GROUP_EQ|类型分组|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 配置 | panel_Usr1229905828_button_link3_click | 通知配置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[通知配置](app/view/PSDENotifytab_exp_view)</details>|否|无||
| 配置 | panel_Usr1229905828_button_link_click | 设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[设计](app/view/PSDELogicMSLogicDesign)</details>|否|无||
| 配置 | panel_Usr1229905828_button_link1_click | 表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[表单设计](app/view/PSDEFormdesign)</details>|否|无||
| 配置 | panel_Usr12299058218_form_cfg_click | 表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[表单设计](app/view/PSDEFormdesign_Modal)</details>|否|无||
| 配置 | panel_Usr12299058218_button_link3_click | 通知配置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[通知配置](app/view/PSDENotifytab_exp_view)</details>|否|无||
| 配置 | panel_Usr12299058218_button_link_click | 设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[设计](app/view/PSDELogicMSLogicDesign)</details>|否|无||

