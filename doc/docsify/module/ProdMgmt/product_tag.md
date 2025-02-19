# 产品标签(product_tag)  <!-- {docsify-ignore-all} -->


为产品分配的标签，用于标识产品特性、类型和分类，便于管理和筛选。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|产品标识|PRODUCT_ID|外键值|100|是||
|产品名称|PRODUCT_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|删除标签|delete_tag|[实体处理逻辑](module/ProdMgmt/product_tag/logic/delete_tag "删除标签")|默认|不支持||||
|获取关联的工单和需求数量|get_con_product_tag|[实体处理逻辑](module/ProdMgmt/product_tag/logic/get_con_product_tag "获取关联的工单数量")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/product_tag/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除标签](module/ProdMgmt/product_tag/logic/delete_tag)|delete_tag|无||删除标签时对工单的标签属性进行处理|
|[无操作](module/ProdMgmt/product_tag/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取关联的工单数量](module/ProdMgmt/product_tag/logic/get_con_product_tag)|get_con_product_tag|无||在删除产品标签时，获取与之关联的工单数量。|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/product_tag/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/product_tag/query/View)|VIEW|否|否 |否 ||
|[当前项目标签(cur_product_tag)](module/ProdMgmt/product_tag/query/cur_product_tag)|cur_product_tag|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/product_tag/dataset/Default)|DEFAULT|数据查询|是|||
|[当前项目标签(cur_product_tag)](module/ProdMgmt/product_tag/dataset/cur_product_tag)|cur_product_tag|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=product_tag-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=product_tag-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `READ`
* `DELETE`



##### 操作用户(写) :id=product_tag-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRODUCT_ID_EQ|产品标识|EQ||
|N_PRODUCT_NAME_EQ|产品名称|EQ||
|N_PRODUCT_NAME_LIKE|产品名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 删除标签 | delete_tag | 删除标签 |单项数据（主键）|<details><summary>后台调用</summary>[delete_tag](#行为)||
| 编辑标签 | edit_tag | 编辑标签 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑标签](app/view/product_tag_edit_option_view)</details>||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_tag?id=界面行为`">
  界面行为
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>