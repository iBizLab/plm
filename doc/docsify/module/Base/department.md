# 部门(department)  <!-- {docsify-ignore-all} -->


用于查看和管理企业的部门信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|部门负责人标识|HEAD_ID|外键值|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|父部门标识|PARENT_ID|外键值|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID](der/DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|[企业用户(USER)](module/Base/user)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID](der/DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[ebsx_mapping](module/Base/department/demap/ebsx_mapping)|[部门(SYS_DEPT)](module/ebsx/SysDepartment)||
|[ibizsysmgr部门映射](module/Base/department/demap/ibizsysmgr)|[部门(SYS_DEPARTMENT)](module/ibizsysmgr/sys_department)||

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
|[数据查询(DEFAULT)](module/Base/department/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/department/query/View)|VIEW|否|否 |否 ||
|[根部门(root)](module/Base/department/query/root)|root|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/department/dataset/Default)|DEFAULT|数据查询|是|||
|[根部门(root)](module/Base/department/dataset/root)|root|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=department-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=department-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_HEAD_ID_EQ|部门负责人标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PARENT_ID_EQ|父部门标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/department?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/department?id=搜索模式`">
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