# 组织(sys_organization)  <!-- {docsify-ignore-all} -->


组织映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建时间|CREATE_TIME|日期时间型||否||
|创建人|CREATOR|文本，可指定长度|100|否||
|DC|DC|文本，可指定长度|200|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|逻辑有效标记|ENABLED|是否逻辑|1|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|是||
|名称|ORGANIZATION_NAME|文本，可指定长度|200|否||
|机构编号|ORGANIZATION_NUMBER|文本，可指定长度|100|否||
|父标识|PARENT_ID|外键值|100|是||
|上级名称|PARENT_NAME|外键值文本|200|是||
|简称|SHORT_NAME|文本，可指定长度|100|是||
|排序|SORT|大整型|20|是||
|最后更新人|UPDATER|文本，可指定长度|100|否||
|最后更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_SYS_ORGANIZATION_SYS_ORGANIZATION_PARENT_ID](der/DER1N_SYS_ORGANIZATION_SYS_ORGANIZATION_PARENT_ID)|[组织(SYS_ORGANIZATION)](module/ibizsysmgr/sys_organization)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SYS_ORGANIZATION_SYS_ORGANIZATION_PARENT_ID](der/DER1N_SYS_ORGANIZATION_SYS_ORGANIZATION_PARENT_ID)|[组织(SYS_ORGANIZATION)](module/ibizsysmgr/sys_organization)|1:N关系||

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
|[数据查询(DEFAULT)](module/ibizsysmgr/sys_organization/query/Default)|DEFAULT|是|否 |否 ||
|[Nav](module/ibizsysmgr/sys_organization/query/Nav)|Nav|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/sys_organization/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/sys_organization/dataset/Default)|DEFAULT|数据查询|是|||
|[Nav](module/ibizsysmgr/sys_organization/dataset/Nav)|Nav|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=sys_organization-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `DELETE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_ORGANIZATION_NAME_LIKE|名称|LIKE||
|N_PARENT_ID_EQ|父标识|EQ||
|N_PARENT_NAME_EQ|上级名称|EQ||
|N_PARENT_NAME_LIKE|上级名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_organization?id=搜索模式`">
  搜索模式
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