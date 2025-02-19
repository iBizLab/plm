# 人员(sys_person)  <!-- {docsify-ignore-all} -->


人员映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|头像|AVATAR|文本，可指定长度|200|是||
|建立时间|CREATE_TIME|日期时间型||否||
|创建人|CREATOR|文本，可指定长度|100|否||
|DC|DC|文本，可指定长度|200|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|名称|DISPLAY_NAME|文本，可指定长度|100|是||
|DN|DN|文本，可指定长度|200|是||
|人员编号|EMPLOYEE_NUMBER|文本，可指定长度|100|是||
|类型|EMPLOYEE_TYPE|文本，可指定长度|100|是||
|逻辑有效标志|ENABLE|是否逻辑|8|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|证件号|IDENTIFICATION_NUMBER|文本，可指定长度|100|是||
|电子邮箱|MAIL|文本，可指定长度|100|是||
|主部门|MDEPARTMENT_ID|文本，可指定长度|100|是||
|主部门|MDEPARTMENT_NAME|文本，可指定长度|100|是||
|移动电话|MOBILE|文本，可指定长度|100|是||
|组织标识|ORGANIZATION_ID|文本，可指定长度|100|是||
|组织名称|ORGANIZATION_NAME|文本，可指定长度|100|是||
|地址|POSTAL_ADDRESS|文本，可指定长度|500|是||
|统计|REPORT_FLAG|是否逻辑||是||
|状态|STATUS|文本，可指定长度|100|是||
|联系电话|TELEPHONE_NUMBER|文本，可指定长度|100|是||
|职位|TITLE|文本，可指定长度|100|是||
|uid/loginname|UID|文本，可指定长度|100|是||
|最后更新人|UPDATER|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|密码|USER_PASSWORD|文本，可指定长度|512|是||

<p class="panel-title"><b>联合主键</b></p>

  * `uid/loginname(UID)`
  * `DC(DC)`

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|获取人员简要信息|GetSimple|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|重置密码|ResetPassword|用户自定义|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|存储扩展|动态存储|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ibizsysmgr/sys_person/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/sys_person/query/View)|VIEW|否|否 |否 ||
|[当前用户(user)](module/ibizsysmgr/sys_person/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/sys_person/dataset/Default)|DEFAULT|数据查询|是|||
|[当前用户(user)](module/ibizsysmgr/sys_person/dataset/user)|user|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=sys_person-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=sys_person-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`



##### 普通用户（读写） :id=sys_person-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[当前用户(user)](module/ibizsysmgr/sys_person#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DC_EQ|DC|EQ||
|N_ID_EQ|标识|EQ||
|N_UID_EQ|uid/loginname|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_person?id=搜索模式`">
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