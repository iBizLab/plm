# 产品工单类型(Product_ticket_type)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Id#default)||||
|工单类型标识|TICKET_TYPE_ID|外键值|100|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Ticket_type_id#default)||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Product_ticket_type/value_rule/Product_id#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
|[DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID](der/DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID)|[工单类型(TICKET_TYPE)](module/ProdMgmt/Ticket_type)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProdMgmt/Product_ticket_type/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Product_ticket_type/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/Product_ticket_type/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Product_ticket_type-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_TICKET_TYPE_ID_EQ|工单类型标识|EQ|
|N_PRODUCT_ID_EQ|产品标识|EQ|




