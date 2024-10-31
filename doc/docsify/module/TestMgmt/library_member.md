# 测试库成员(library_member)  <!-- {docsify-ignore-all} -->


记录测试库中各个成员的角色·，方便管理和协作


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|测试库标识|LIBRARY_ID|外键值|100|是||
|测试库编号|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库名称|LIBRARY_NAME|外键值文本|200|是||
|姓名|NAME|外键值文本|200|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#role_type "角色类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `测试库标识(LIBRARY_ID)`
  * `登录名(USER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||
|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#library_member_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#library_member_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|变更角色|change_role|[实体处理逻辑](module/TestMgmt/library_member/logic/change_role "变更角色")|默认|不支持||||
|新建测试库成员|create_library_member|[实体处理逻辑](module/TestMgmt/library_member/logic/create_library_member "新建测试库成员")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/TestMgmt/library_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/TestMgmt/library_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建测试库成员](module/TestMgmt/library_member/logic/create_library_member)|create_library_member|无||新建测试库成员|
|[无操作](module/TestMgmt/library_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除测试库成员通知](module/TestMgmt/library_member/logic/remove_library_member_notify)|remove_library_member_notify|无||移除测试库成员时向对应用户发送通知消息|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/library_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/library_member/query/View)|VIEW|否|否 |否 ||
|[当前测试库成员(cur_library_member)](module/TestMgmt/library_member/query/cur_library_member)|cur_library_member|否|否 |否 ||
|[移动端当前测试库成员(mob_cur_member)](module/TestMgmt/library_member/query/mob_cur_member)|mob_cur_member|否|否 |否 ||
|[未关注用户(测试用例)(no_attention)](module/TestMgmt/library_member/query/no_attention)|no_attention|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/library_member/dataset/Default)|DEFAULT|数据查询|是|||
|[当前测试库成员(cur_library_member)](module/TestMgmt/library_member/dataset/cur_library_member)|cur_library_member|数据查询|否|||
|[移动端当前测试库成员(mob_cur_member)](module/TestMgmt/library_member/dataset/mob_cur_member)|mob_cur_member|数据查询|否|||
|[未关注用户(测试用例)(no_attention)](module/TestMgmt/library_member/dataset/no_attention)|no_attention|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=library_member-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[测试库成员加入通知](module/TestMgmt/library_member/notify/library_member_create)|library_member_create|[默认消息队列](index/notify_index)|[测试库通知模板(加入测试库成员)](index/notify_index#library_member_create)|勾选对象 ||
|[测试库成员移除通知](module/TestMgmt/library_member/notify/library_member_remove)|library_member_remove|[默认消息队列](index/notify_index)|[测试库通知模板(移除测试库成员)](index/notify_index#library_member_remove)|勾选对象 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|测试库名称|EQ||
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE||
|N_NAME_LIKE|姓名|LIKE||
|N_ROLE_ID_EQ|角色|EQ||
|N_USER_ID_EQ|登录名|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加测试库成员（移动端） | mob_add_member | 添加成员 |无数据|<details><summary>后台调用</summary>[create_library_member](#行为)||
| 设置角色（移动端） | mob_setting_role | 设置角色 |单项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 设置角色 | setting_role | 设置角色 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 跳转至成员设置 | jump_to_member_set | 跳转至成员设置 |无数据|用户自定义||
| 删除成员（移动端） | mob_delete_member | 删除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 删除成员 | delete_member | 删除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建测试库默认临时成员](module/TestMgmt/library_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到测试库临时成员内|
|[跳转至成员设置](module/TestMgmt/library_member/uilogic/jump_to_member_set)|jump_to_member_set|通过路由跳转至测试库成员设置|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/library_member?id=界面逻辑`">
  界面逻辑
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