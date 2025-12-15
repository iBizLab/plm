# 工时类别(workload_type)  <!-- {docsify-ignore-all} -->


用于区分和管理工时记录的不同类别。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否系统默认|IS_SYSTEM|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|序号|SEQUENCE|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID](der/DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID)|[工时(WORKLOAD)](module/Base/workload)|1:N关系||


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
|移动排序|move_order|用户自定义|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/workload_type/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/workload_type/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/workload_type/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/workload_type/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/workload_type/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=workload_type-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=workload_type-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建类别 | create_type | 新建类别 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建类别](app/view/workload_type_quick_create_view)</details>||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/workload_type?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/workload_type?id=界面行为`">
  界面行为
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>