# 第三方用户(openuser)  <!-- {docsify-ignore-all} -->


第三方用户


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立时间|CREATEDATE|日期时间型||否||
|创建人|CREATEMAN|文本，可指定长度|100|否||
|部门|DEPTS|文本，可指定长度|100|是||
|是否绑定|ISBINDING|整型||是||
|手机|MOBILE|文本，可指定长度|100|是||
|第三方用户代码|OPENUSERCODE|文本，可指定长度|100|是||
|第三方用户标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|OPENUSERID|全局唯一标识，文本类型，用户不可见|60|否||
|第三方用户名称|OPENUSERNAME|文本，可指定长度|100|是||
|第三方用户类型|OPEN_TYPE|文本，可指定长度|100|是||
|组织标识|ORGID|文本，可指定长度|100|是||
|更新时间|UPDATEDATE|日期时间型||否||
|最后更新人|UPDATEMAN|文本，可指定长度|100|否||
|用户标识|USERID|文本，可指定长度|100|是||


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
|[数据查询(DEFAULT)](module/ebsx/openuser/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/openuser/query/View)|VIEW|否|否 |否 ||
|[企业微信(wxwork)](module/ebsx/openuser/query/wxwork)|wxwork|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/openuser/dataset/Default)|DEFAULT|数据查询|是|||
|[企业微信(wxwork)](module/ebsx/openuser/dataset/wxwork)|wxwork|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=openuser-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=openuser-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `DELETE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_OPENUSERID_EQ|第三方用户标识|EQ||
|N_OPEN_TYPE_EQ|第三方用户类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/openuser?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/openuser?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/openuser?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/openuser?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/openuser?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/openuser?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>