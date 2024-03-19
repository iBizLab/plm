# 发布类别(Version_category)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Version_category/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Version_category/value_rule/Create_man#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Version_category/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Version_category/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|分组标识|VERSION_SECTION_ID|外键值|100|[默认规则](module/ProjMgmt/Version_category/value_rule/Version_section_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_VERSION_VERSION_CATEGORY_VERSION_CATEGORY_ID](der/DER1N_VERSION_VERSION_CATEGORY_VERSION_CATEGORY_ID)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_VERSION_CATEGORY_VERSION_SECTION_VERSION_SECTION_ID](der/DER1N_VERSION_CATEGORY_VERSION_SECTION_VERSION_SECTION_ID)|[发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProjMgmt/Version_category/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Version_category/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Version_category/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_VERSION_SECTION_ID_EQ|分组标识|EQ|




