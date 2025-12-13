# 空间成员(space_member)  <!-- {docsify-ignore-all} -->


记录PLM系统中各知识库或协作空间的成员。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|姓名|NAME|外键值文本|200|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#role_type "角色类型")|60|是||
|空间标识|SPACE_ID|外键值|100|是||
|空间编号|SPACE_IDENTIFIER|外键值附加数据|15|是||
|名称|SPACE_NAME|外键值文本|200|是||
|职位|TITLE|外键值附加数据|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `空间标识(SPACE_ID)`
  * `登录名(USER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/space)|1:N关系||
|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#space_member_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#space_member_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|变更角色|change_role|[实体处理逻辑](module/Wiki/space_member/logic/change_role "变更角色")|默认|不支持||||
|变更职位|choose_position|[实体处理逻辑](module/Wiki/space_member/logic/change_position "变更职位")|默认|不支持||||
|新建项目成员（移动端）|mob_create_space_member|[实体处理逻辑](module/Wiki/space_member/logic/mob_create_project_member "新建空间成员（移动端）")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Wiki/space_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/Wiki/space_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/Wiki/space_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建空间成员（移动端）](module/Wiki/space_member/logic/mob_create_project_member)|mob_create_project_member|无||新建空间成员（移动端）|
|[无操作](module/Wiki/space_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除空间成员发送通知](module/Wiki/space_member/logic/remove_space_member_notify)|remove_space_member_notify|无||移除空间成员时向对应用户发送通知消息|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/space_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/space_member/query/View)|VIEW|否|否 |否 ||
|[当前空间下成员(cur_space)](module/Wiki/space_member/query/cur_space)|cur_space|否|否 |否 ||
|[未关注用户(测试用例)(no_attention)](module/Wiki/space_member/query/no_attention)|no_attention|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/space_member/dataset/Default)|DEFAULT|数据查询|是|||
|[当前空间下成员(cur_space)](module/Wiki/space_member/dataset/cur_space)|cur_space|数据查询|否|||
|[未关注用户(测试用例)(no_attention)](module/Wiki/space_member/dataset/no_attention)|no_attention|数据查询|否|||
## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[空间成员加入通知](module/Wiki/space_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(加入空间成员)](index/notify_index#space_member_create)|成员 ||
|[空间成员移除通知](module/Wiki/space_member/notify/remover_member_notify)|remover_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(移除空间成员)](index/notify_index#space_member_remove)|成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|姓名|LIKE||
|N_ROLE_ID_EQ|角色|EQ||
|N_SPACE_ID_EQ|空间标识|EQ||
|N_SPACE_NAME_EQ|名称|EQ||
|N_SPACE_NAME_LIKE|名称|LIKE||
|N_USER_ID_EQ|登录名|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加成员（移动端） | mob_add_member | 添加成员 |无数据|<details><summary>后台调用</summary>[mob_create_space_member](#行为)||
| 设置角色（移动端） | mob_setting_role | 设置角色 |单项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 设置角色 | setting_role | 设置 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 职位选择 | choose_position | 职位选择 |多项数据（主键）|<details><summary>后台调用</summary>[choose_position](#行为)||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建空间默认临时成员](module/Wiki/space_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到空间临时成员内|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/space_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space_member?id=界面逻辑`">
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