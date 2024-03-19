# 收藏(Favorite)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Favorite/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Favorite/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Favorite/value_rule/Owner_subtype#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Favorite/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Favorite/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Favorite/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Favorite/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `建立人(CREATE_MAN)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCCUSTOM_FAVORITE_PROJECT](der/DERCCUSTOM_FAVORITE_PROJECT)|[项目(PROJECT)](module/ProjMgmt/Project)|自定义关系||
|[DERCUSTOM_FAVORITE_PRODUCT](der/DERCUSTOM_FAVORITE_PRODUCT)|[产品(PRODUCT)](module/ProdMgmt/Product)|自定义关系||
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
|[数据查询(DEFAULT)](module/Base/Favorite/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Favorite/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Favorite/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Favorite-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_CREATE_MAN_EQ|建立人|EQ|




