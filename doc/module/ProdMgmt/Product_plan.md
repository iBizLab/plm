# 排期(Product_plan)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|类别|TYPE|长文本，长度1000|1000|[默认规则](module/ProdMgmt/Product_plan/value_rule/Type#default)||||
|计划开始|START_AT|日期型|0|||||
|计划结束|END_AT|日期型|0|||||
|类别|CATEGORIES|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Product_plan/value_rule/Categories#default)||||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Product_plan/value_rule/Categories_name#default)||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Assignee_id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|计划名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Product_plan/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Create_man#default)||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Product_plan/value_rule/Product_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_RELATION_PRODUCT_PLAN](der/DERCUSTOM_RELATION_PRODUCT_PLAN)|[关联(RELATION)](module/Base/Relation)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PLAN_PRODUCT_PRODUCT_ID](der/DER1N_PLAN_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
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
|删除|Delete|[实体处理逻辑](module/ProdMgmt/Product_plan/logic/delete "删除")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/ProdMgmt/Product_plan/logic/delete)|delete|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[类别下的计划(category_plan)](module/ProdMgmt/Product_plan/query/Category_plan)|category_plan|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProdMgmt/Product_plan/query/Default)|DEFAULT|是|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/Product_plan/query/Normal)|normal|否|否 |否 ||
|[当前计划(this_plan)](module/ProdMgmt/Product_plan/query/This_plan)|this_plan|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Product_plan/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/Product_plan/dataset/Default)|DEFAULT|数据查询|是|||
|[正常状态(normal)](module/ProdMgmt/Product_plan/dataset/Normal)|normal|数据查询|否|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_CATEGORIES_LIKE|类别|LIKE|
|N_NAME_LIKE|计划名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_PRODUCT_ID_EQ|产品标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建分组 |单项数据|用户自定义|否|无||
| 编辑 | edit_plan | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑计划](app/view/product_planupdate_view)</details>|否|无||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 新建类别 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建类别 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/ProdMgmt/Product_plan/uilogic/create_category)|create_category|
|[新建分组](module/ProdMgmt/Product_plan/uilogic/create_section)|create_section|
|[删除类别或分组](module/ProdMgmt/Product_plan/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/ProdMgmt/Product_plan/uilogic/edit_section_or_category)|edit_section_or_category|
