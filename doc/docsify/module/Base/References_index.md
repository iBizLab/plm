# 引用索引(References_index)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|标识|ID|全局唯一标识，文本类型，用户不可见|200|[默认规则](module/Base/References_index/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/References_index/value_rule/Name#default)||√||
|索引类型|TYPE|[单项选择(文本值)](index/dictionary_index#Index_type "索引类型")|200|[默认规则](module/Base/References_index/value_rule/Type#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DERINDEX_LIBRARY_REFERENCES_INDEX](der/DERINDEX_LIBRARY_REFERENCES_INDEX)|[测试库(LIBRARY)](module/TestMgmt/Library)|索引关系||
|[DERINDEX_PRODUCT_REFERENCES_INDEX](der/DERINDEX_PRODUCT_REFERENCES_INDEX)|[产品(PRODUCT)](module/ProdMgmt/Product)|索引关系||
|[DERINDEX_PROJECT_REFERENCES_INDEX](der/DERINDEX_PROJECT_REFERENCES_INDEX)|[项目(PROJECT)](module/ProjMgmt/Project)|索引关系||
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
|[数据查询(DEFAULT)](module/Base/References_index/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/References_index/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/References_index/dataset/Default)|DEFAULT|数据查询|是|||
|[数据集2(IndexDER)](module/Base/References_index/dataset/IndexDER)|IndexDER|索引实体|否|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_TYPE_EQ|索引类型|EQ|




