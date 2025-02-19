# 系统角色成员(role_member)  <!-- {docsify-ignore-all} -->


用于系统角色成员管理


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|用户组/人员标识|MEMBER_UID|文本，可指定长度|100|是||
|姓名|NAME|文本，可指定长度|200|是||
|系统角色标识|ROLE_ID|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `系统角色标识(ROLE_ID)`
  * `用户组/人员标识(MEMBER_UID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[ROLE_MEMBER_ROLE_ROLE_ID](der/ROLE_MEMBER_ROLE_ROLE_ID)|[角色(ROLE)](module/Base/role)|自定义关系||
|[ROLE_MEMBER_USER_MEMBER_UID](der/ROLE_MEMBER_USER_MEMBER_UID)|[企业用户(USER)](module/Base/user)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[ibizsysmgr角色成员映射](module/Base/role_member/demap/DEMap)|[系统角色成员(SYS_ROLE_MEMBER)](module/ibizsysmgr/sys_role_member)||
|[ebsx角色成员映射](module/Base/role_member/demap/DEMap2)|[用户角色关系(SYS_USER_ROLE)](module/ebsx/UserRole)||

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
|[数据查询(DEFAULT)](module/Base/role_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/role_member/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/role_member/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=role_member-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(角色(CREATE))`
* `READ`
* `UPDATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_MEMBER_UID_EQ|用户组/人员标识|EQ||
|N_NAME_LIKE|姓名|LIKE||
|N_ROLE_ID_EQ|系统角色标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 删除成员 | Remove | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/role_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/role_member?id=界面行为`">
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