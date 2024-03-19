# 页面(Page)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|正文格式|FORMAT_TYPE|单项选择(文本值)|60|[默认规则](module/Wiki/Page/value_rule/Format_type#default)||||
|正文|CONTENT|长文本，没有长度限制|1048576|[默认规则](module/Wiki/Page/value_rule/Content#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Page/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Page/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Wiki/Page/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Page/value_rule/Create_man#default)||||
|空间标识|SPACE_ID|外键值|100|[默认规则](module/Wiki/Page/value_rule/Space_id#default)||||
|父页面标识|PARENT_ID|外键值|100|[默认规则](module/Wiki/Page/value_rule/Parent_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/Page)|1:N关系||
|[DER1N_PAGE_VERSION_PAGE_PAGE_ID](der/DER1N_PAGE_VERSION_PAGE_PAGE_ID)|[页面版本(PAGE_VERSION)](module/Wiki/Page_version)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/Page)|1:N关系||
|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/Space)|1:N关系||
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
|[数据查询(DEFAULT)](module/Wiki/Page/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Page/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/Page/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_FORMAT_TYPE_EQ|正文格式|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_SPACE_ID_EQ|空间标识|EQ|
|N_PARENT_ID_EQ|父页面标识|EQ|




