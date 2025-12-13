# 依赖(dependency)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|重要程度|LEVEL|[单项选择(文本值)](index/dictionary_index#common_level "通用重要程度")|60|是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|父对象版本标识|PARENT_VERSION_ID|文本，可指定长度|100|是||
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|否||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|否||
|关联类型|RELATION_TYPE|文本，可指定长度|100|是||
|目标主体标识|TARGET_ID|文本，可指定长度|100|是||
|关联目标类型|TARGET_TYPE|文本，可指定长度|100|是||
|目标对象版本标识|TARGET_VERSION_ID|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `目标主体标识(TARGET_ID)`
  * `关联主体类型(PRINCIPAL_TYPE)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_DEPENDENCY_TARGET_WORK_ITEM](der/DERCUSTOM_DEPENDENCY_TARGET_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||
|[DERCUSTOM_DEPENDENCY_WORK_ITEM](der/DERCUSTOM_DEPENDENCY_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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
|[DEFAULT](module/Base/dependency/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/dependency/query/View)|VIEW|否|否 |否 ||
|[工作项依赖(dependency_work_items)](module/Base/dependency/query/dependency_work_items)|dependency_work_items|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/Base/dependency/dataset/Default)|DEFAULT|数据查询|是|||
|[工作项依赖(dependency_work_items)](module/Base/dependency/dataset/dependency_work_items)|dependency_work_items|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=dependency-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_LEVEL_EQ|重要程度|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_PRINCIPAL_TYPE_EQ|关联主体类型|EQ||
|N_TARGET_ID_EQ|目标主体标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/dependency?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dependency?id=搜索模式`">
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


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>