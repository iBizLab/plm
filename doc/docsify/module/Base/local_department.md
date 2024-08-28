# 部门(local_department)  <!-- {docsify-ignore-all} -->


部门本地化数据


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
|[DER1N_LOCAL_DEPARTMENT_LOCAL_DEPARTMENT_PARENT_ID](der/DER1N_LOCAL_DEPARTMENT_LOCAL_DEPARTMENT_PARENT_ID)|[部门(LOCAL_DEPARTMENT)](module/Base/local_department)|1:N关系||
|[DER1N_LOCAL_USER_LOCAL_DEPARTMENT_DEPARTMENT_ID](der/DER1N_LOCAL_USER_LOCAL_DEPARTMENT_DEPARTMENT_ID)|[企业用户(LOCAL_USER)](module/Base/local_user)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_LOCAL_DEPARTMENT_LOCAL_DEPARTMENT_PARENT_ID](der/DER1N_LOCAL_DEPARTMENT_LOCAL_DEPARTMENT_PARENT_ID)|[部门(LOCAL_DEPARTMENT)](module/Base/local_department)|1:N关系||
|[DER1N_LOCAL_DEPARTMENT_LOCAL_USER_HEAD_ID](der/DER1N_LOCAL_DEPARTMENT_LOCAL_USER_HEAD_ID)|[企业用户(LOCAL_USER)](module/Base/local_user)|1:N关系||

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
|[数据查询(DEFAULT)](module/Base/local_department/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/local_department/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/local_department/dataset/Default)|DEFAULT|数据查询|是|||

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
<el-anchor-link :href="`#/module/Base/local_department?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_department?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_department?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_department?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_department?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_department?id=搜索模式`">
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