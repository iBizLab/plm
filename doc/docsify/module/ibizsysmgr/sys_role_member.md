# 系统角色成员(sys_role_member)  <!-- {docsify-ignore-all} -->


角色成员映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建时间|CREATE_TIME|日期时间型||否||
|创建人|CREATOR|文本，可指定长度|100|否||
|DC|DC|文本，可指定长度|200|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|是||
|Mail|MAIL|文本，可指定长度|200|是||
|成员分组名称|MEMBER_GROUP_NAME|文本，可指定长度|200|是||
|成员姓名|MEMBER_NAME|文本，可指定长度|100|是||
|用户组/人员标识|MEMBER_UID|文本，可指定长度|100|是||
|系统角色标识|ROLE_ID|文本，可指定长度|100|是||
|最后更新人|UPDATER|文本，可指定长度|100|否||
|最后更新时间|UPDATE_TIME|日期时间型||否||


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
|[数据查询(DEFAULT)](module/ibizsysmgr/sys_role_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/sys_role_member/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/sys_role_member/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=sys_role_member-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_LIKE|标识|LIKE||
|N_ID_EQ|标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role_member?id=搜索模式`">
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