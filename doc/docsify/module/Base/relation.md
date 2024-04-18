# 关联(relation)  <!-- {docsify-ignore-all} -->


用于记录不同实体间的关系，如需求与工单、工作项与缺陷等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|是||
|关联目标标识|TARGET_ID|文本，可指定长度|100|是||
|关联目标类型|TARGET_TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `关联目标标识(TARGET_ID)`

###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="RELATION" name="index_RELATION">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|关联主体标识|PRINCIPAL_ID|false|升序|-1||
|关联主体类型|PRINCIPAL_TYPE|false|升序|-1||
|关联目标类型|TARGET_TYPE|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RELATION_BASELINE](der/DERCUSTOM_RELATION_BASELINE)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_RELATION_CUSTOMER](der/DERCUSTOM_RELATION_CUSTOMER)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_RELATION_PRODUCT_PLAN](der/DERCUSTOM_RELATION_PRODUCT_PLAN)|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|自定义关系||
|[DERCUSTOM_RELATION_REVIEW](der/DERCUSTOM_RELATION_REVIEW)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_RELATION_SPACE](der/DERCUSTOM_RELATION_SPACE)|[空间(SPACE)](module/Wiki/space)|自定义关系||
|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|自定义关系||
|[DERCUSTOM_RELATION_TICKET](der/DERCUSTOM_RELATION_TICKET)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/relation/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/relation/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/relation/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=relation-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `CREATE`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_TARGET_ID_EQ|关联目标标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/relation?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/relation?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',

show_index:'index_RELATION',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>