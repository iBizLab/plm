# 工单类型(Ticket_type)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket_type/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Ticket_type/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket_type/value_rule/Update_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Ticket_type/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID](der/DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID)|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProdMgmt/Ticket_type/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Ticket_type/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/Ticket_type/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Ticket_type-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|




