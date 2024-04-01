# 分组(Section)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Section/value_rule/Owner_id#default)||||
|序号|SEQUENCE|数值|0|||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Section/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Section/value_rule/Owner_subtype#default)||||
|是否叶子节点|IS_LEAF|是否逻辑|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Section/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Section/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Section/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Section/value_rule/Create_man#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_CATEGORY_SECTION_SECTION_ID](der/DER1N_CATEGORY_SECTION_SECTION_ID)|[类别(CATEGORY)](module/Base/Category)|1:N关系||
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
|删除分组|Delete_section|[实体处理逻辑](module/Base/Section/logic/delete_section "删除分组及其下类别")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[删除分组及其下类别](module/Base/Section/logic/delete_section)|delete_section|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Section/query/Default)|DEFAULT|是|否 |否 ||
|[产品排期分组(this_product_section)](module/Base/Section/query/This_product_section)|this_product_section|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Section/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Section/dataset/Default)|DEFAULT|数据查询|是|||
|[产品排期分组(This_product_section)](module/Base/Section/dataset/This_product_section)|This_product_section|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Section-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `CREATE`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_OWNER_TYPE_EQ|所属数据对象|EQ|
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




