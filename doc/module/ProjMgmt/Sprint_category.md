# 迭代类别(Sprint_category)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|迭代分组名称|SECTION_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Section_name#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Name#default)||√||
|产品标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Project_id#default)||||
|迭代分组标识|SPRINT_SECTION_ID|外键值|100|[默认规则](module/ProjMgmt/Sprint_category/value_rule/Sprint_section_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID](der/DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID](der/DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
|[DER1N_SPRINT_CATEGORY_SPRINT_SECTION_SPRINT_SECTION_ID](der/DER1N_SPRINT_CATEGORY_SPRINT_SECTION_SPRINT_SECTION_ID)|[迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProjMgmt/Sprint_category/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Sprint_category/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Sprint_category/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_SECTION_NAME_EQ|迭代分组名称|EQ|
|N_SECTION_NAME_LIKE|迭代分组名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PROJECT_ID_EQ|产品标识|EQ|
|N_SPRINT_SECTION_ID_EQ|迭代分组标识|EQ|




