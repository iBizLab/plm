# 页面版本(Page_version)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|正文|CONTENT|长文本，没有长度限制|1048576|[默认规则](module/Wiki/Page_version/value_rule/Content#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Page_version/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|主题|NAME|文本，可指定长度|200|[默认规则](module/Wiki/Page_version/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Page_version/value_rule/Create_man#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Page_version/value_rule/Update_man#default)||||
|页面标识|PAGE_ID|外键值|100|[默认规则](module/Wiki/Page_version/value_rule/Page_id#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PAGE_VERSION_PAGE_PAGE_ID](der/DER1N_PAGE_VERSION_PAGE_PAGE_ID)|[页面(PAGE)](module/Wiki/Article_page)|1:N关系||
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
|[数据查询(DEFAULT)](module/Wiki/Page_version/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Page_version/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/Page_version/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|主题|LIKE|
|N_PAGE_ID_EQ|页面标识|EQ|




