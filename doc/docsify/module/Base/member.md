# 成员(member)  <!-- {docsify-ignore-all} -->


公共成员实体。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|外键值文本|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#user_group_role_type "团队角色类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `登录名(USER_ID)`
  * `所属数据对象(OWNER_TYPE)`

###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="userid" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|登录名|USER_ID|外键值|100|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_MEMBER_USER_USER_ID](der/DER1N_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||
|[DERCUSTOM_MEMBER_COMMON_FLOW](der/DERCUSTOM_MEMBER_COMMON_FLOW)|[通用规则(COMMON_FLOW)](module/Base/common_flow)|自定义关系||
|[DERCUSTOM_MEMBER_GROUP_OWNER_ID](der/DERCUSTOM_MEMBER_GROUP_OWNER_ID)|[团队(GROUP)](module/Base/group)|自定义关系||

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
|变更角色|change_role|[实体处理逻辑](module/Base/member/logic/change_role "变更角色")|默认|不支持||||
|新建成员|create_member|[实体处理逻辑](module/Base/member/logic/create_member "新建成员")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/Base/member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建成员](module/Base/member/logic/create_member)|create_member|无||批量新建角色|
|[无操作](module/Base/member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/member/query/View)|VIEW|否|否 |否 ||
|[团队管理员(user_group_admin)](module/Base/member/query/user_group_admin)|user_group_admin|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/member/dataset/Default)|DEFAULT|数据查询|是|||
|[团队管理员(user_group_admin)](module/Base/member/dataset/user_group_admin)|user_group_admin|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=member-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `UPDATE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_ROLE_ID_EQ|角色|EQ||
|N_USER_ID_EQ|登录名|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 设置 | open_role_edit_view | 设置 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 添加成员 | add_member | 添加成员 |无数据|<details><summary>后台调用</summary>[create_member](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/member?id=界面行为`">
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
show_field_group:'field_group_DEFGroup',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>