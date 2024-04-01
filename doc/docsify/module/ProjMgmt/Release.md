# 项目发布(Release)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|开始时间|START_AT|日期型|0|||||
|发布时间|END_AT|日期型|0|||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Release/value_rule/Description#default)||||
|发布进度|PROGRESS|数值|0|||||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#Version_status "发布状态")|60|[默认规则](module/ProjMgmt/Release/value_rule/Status#default)||||
|类别|CATEGORIES|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Release/value_rule/Categories#default)||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/ProjMgmt/Release/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/ProjMgmt/Release/value_rule/Assignee_id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Release/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Release/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Release/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Release/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|项目标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Release/value_rule/Project_id#default)||||
|项目名称|PROJECT_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Release/value_rule/Project_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)|[发布阶段(STAGE)](module/ProjMgmt/Stage)|1:N关系||
|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|1:N关系||
|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_RELEASE_PROJECT_PROJECT_ID](der/DER1N_RELEASE_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProjMgmt/Release/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Release/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Release/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|状态|EQ|
|N_CATEGORIES_LIKE|类别|LIKE|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_PROJECT_ID_EQ|项目标识|EQ|
|N_PROJECT_NAME_EQ|项目名称|EQ|
|N_PROJECT_NAME_LIKE|项目名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建类别 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义|否|无||
| 编辑 | open_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑发布](app/view/releaseupdate_view)</details>|否|无||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义|否|无||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/ProjMgmt/Release/uilogic/create_category)|create_category|
|[新建分组](module/ProjMgmt/Release/uilogic/create_section)|create_section|
|[删除类别或分组](module/ProjMgmt/Release/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/ProjMgmt/Release/uilogic/edit_section_or_category)|edit_section_or_category|
