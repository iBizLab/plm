# 系统角色(sys_role)  <!-- {docsify-ignore-all} -->


角色映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|角色代码标记|AUTHORITY|文本，可指定长度|300|否||
|创建时间|CREATE_TIME|日期时间型||否||
|创建人|CREATOR|文本，可指定长度|100|否||
|DC|DC|文本，可指定长度|200|是||
|部署系统标识|DEPLOY_SYSTEM_ID|文本，可指定长度|100|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|逻辑有效标记|ENABLED|是否逻辑|1|否||
|范围|GROUP_SCOPE|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|最后更新人|UPDATER|文本，可指定长度|100|否||
|最后更新时间|UPDATE_TIME|日期时间型||否||
|是否是工作流用户组|WORKFLOW_GROUP|是否逻辑||是||


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
|[数据查询(DEFAULT)](module/ibizsysmgr/sys_role/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/sys_role/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/sys_role/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=sys_role-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=sys_role-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `CREATE`
* `UPDATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_role?id=搜索模式`">
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