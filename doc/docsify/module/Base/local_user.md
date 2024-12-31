# 企业用户(local_user)  <!-- {docsify-ignore-all} -->


企业用户本地化数据


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|头像|AVATAR|图片|500|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|部门标识|DEPARTMENT_ID|外键值|100|是||
|部门名称|DEPARTMENT_NAME|外键值文本|200|是||
|姓名|DISPLAY_NAME|文本，可指定长度|200|是||
|邮箱|EMAIL|电子邮件|100|是||
|工号|EMPLOYEE_NUMBER|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|手机号|MOBILE|文本，可指定长度|100|是||
|名称|NAME|文本，可指定长度|200|是||
|组织标识|ORGANIZATION_ID|文本，可指定长度|100|是||
|密码|PASSWORD|文本，可指定长度|200|是||
|统计|REPORT_FLAG|[是否逻辑](index/dictionary_index#user_report_flag "启停状态")||是||
|状态|STATUS|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_LOCAL_DEPARTMENT_LOCAL_USER_HEAD_ID](der/DER1N_LOCAL_DEPARTMENT_LOCAL_USER_HEAD_ID)|[部门(LOCAL_DEPARTMENT)](module/Base/local_department)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_LOCAL_USER_LOCAL_DEPARTMENT_DEPARTMENT_ID](der/DER1N_LOCAL_USER_LOCAL_DEPARTMENT_DEPARTMENT_ID)|[部门(LOCAL_DEPARTMENT)](module/Base/local_department)|1:N关系||

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
|[数据查询(DEFAULT)](module/Base/local_user/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/local_user/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/local_user/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DEPARTMENT_ID_EQ|部门标识|EQ||
|N_DEPARTMENT_NAME_EQ|部门名称|EQ||
|N_DEPARTMENT_NAME_LIKE|部门名称|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/local_user?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_user?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_user?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_user?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_user?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/local_user?id=搜索模式`">
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