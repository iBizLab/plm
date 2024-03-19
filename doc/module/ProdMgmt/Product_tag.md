# 产品标签(Product_tag)  <!-- {docsify-ignore-all} -->

产品专有标签

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_tag/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Product_tag/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Product_tag/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product_tag/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Product_tag/value_rule/Product_id#default)||||
|产品名称|PRODUCT_NAME|外键值文本|200|[默认规则](module/ProdMgmt/Product_tag/value_rule/Product_name#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProdMgmt/Product_tag/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Product_tag/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/Product_tag/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Product_tag-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=Product_tag-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `READ`
* `DELETE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PRODUCT_ID_EQ|产品标识|EQ|
|N_PRODUCT_NAME_EQ|产品名称|EQ|
|N_PRODUCT_NAME_LIKE|产品名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除标签 | delete_tag | 删除标签 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||
| 编辑标签 | edit_tag | 编辑标签 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑标签](app/view/product_tagoption_view_edit)</details>|否|无||

