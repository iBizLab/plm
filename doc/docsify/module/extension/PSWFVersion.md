# 工作流版本(PSWFVersion)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|建立时间|CREATEDATE|日期时间型|8|||||
|工作流版本标识|PSWFVERSIONID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/extension/PSWFVersion/value_rule/PSWFVersionId#default)||||
|更新人|UPDATEMAN|文本，可指定长度|60|[默认规则](module/extension/PSWFVersion/value_rule/UpdateMan#default)||||
|工作流版本名称|PSWFVERSIONNAME|文本，可指定长度|200|[默认规则](module/extension/PSWFVersion/value_rule/PSWFVersionName#default)||√||
|更新时间|UPDATEDATE|日期时间型|8|||||
|建立人|CREATEMAN|文本，可指定长度|60|[默认规则](module/extension/PSWFVersion/value_rule/CreateMan#default)||||
|工作流|PSWFID|文本，可指定长度|100|[默认规则](module/extension/PSWFVersion/value_rule/PSWFId#default)||||
|工作流|PSWFNAME|文本，可指定长度|100|[默认规则](module/extension/PSWFVersion/value_rule/PSWFName#default)||||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|[默认规则](module/extension/PSWFVersion/value_rule/Extension_tag#default)||||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|[默认规则](module/extension/PSWFVersion/value_rule/Extension_tag2#default)||||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|[默认规则](module/extension/PSWFVersion/value_rule/Extension_tag3#default)||||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|[默认规则](module/extension/PSWFVersion/value_rule/Extension_tag4#default)||||


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
|[数据查询(DEFAULT)](module/extension/PSWFVersion/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSWFVersion/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSWFVersion/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PSWFVERSIONID_EQ|工作流版本标识|EQ|
|N_PSWFVERSIONNAME_LIKE|工作流版本名称|LIKE|
|N_PSWFID_EQ|工作流|EQ|
|N_PSWFNAME_EQ|工作流|EQ|
|N_PSWFNAME_LIKE|工作流|LIKE|




