# 文件夹成员(portfolio_member)  <!-- {docsify-ignore-all} -->


记录项目集团队中各个成员的角色·，方便管理和协作。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|姓名|NAME|外键值文本|200|是||
|文件夹标识|PORTFOLIO_ID|外键值|100|是||
|文件夹标识|PORTFOLIO_IDENTIFIER|外键值附加数据|15|是||
|文件夹名称|PORTFOLIO_NAME|外键值文本|200|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#role_type "角色类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `文件夹标识(PORTFOLIO_ID)`
  * `登录名(USER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID](der/DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID)|[文件夹(PORTFOLIO)](module/Base/portfolio)|1:N关系||
|[DER1N_PORTFOLIO_MEMBER_USER_USER_ID](der/DER1N_PORTFOLIO_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#portfolio_member_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#portfolio_member_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|变更角色|change_role|[实体处理逻辑](module/Base/portfolio_member/logic/change_role "变更角色")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/portfolio_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/Base/portfolio_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[无操作](module/Base/portfolio_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除项目集成员通知](module/Base/portfolio_member/logic/remove_project_set_member_notify)|remove_project_set_member_notify|无||移除项目集成员时向对应用户发送通知消息|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/portfolio_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/portfolio_member/query/View)|VIEW|否|否 |否 ||
|[当前项目集下成员(cur_project_set)](module/Base/portfolio_member/query/cur_project_set)|cur_project_set|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/portfolio_member/dataset/Default)|DEFAULT|数据查询|是|||
|[当前项目集下成员(cur_project_set)](module/Base/portfolio_member/dataset/cur_project_set)|cur_project_set|数据查询|否|||
## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[项目集加入成员通知](module/Base/portfolio_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[项目集通知模板(加入成员)](index/notify_index#project_set_member_create)|选择对象 ||
|[项目集移除成员通知](module/Base/portfolio_member/notify/remove_member_notify)|remove_member_notify|[默认消息队列](index/notify_index)|[项目集通知模板(移除成员)](index/notify_index#project_set_member_remove)|选择对象 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|姓名|LIKE||
|N_PORTFOLIO_ID_EQ|文件夹标识|EQ||
|N_PORTFOLIO_NAME_EQ|文件夹名称|EQ||
|N_PORTFOLIO_NAME_LIKE|文件夹名称|LIKE||
|N_ROLE_ID_EQ|角色|EQ||
|N_USER_ID_EQ|登录名|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 设置角色 | setting_role | 设置角色 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建项目集默认临时成员](module/Base/portfolio_member/uilogic/default_project_member)|default_project_member|创建临时数据，并将当前用户加入到项目集临时成员内|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/portfolio_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio_member?id=界面逻辑`">
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