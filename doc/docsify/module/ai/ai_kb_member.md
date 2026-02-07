# 知识库成员(ai_kb_member)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库标识|KB_ID|外键值|100|是||
|知识库名称|KB_NAME|外键值文本|200|是||
|名称|NAME|外键值文本|200|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#role_type "角色类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|标识|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `知识库标识(KB_ID)`
  * `标识(USER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID)|[知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base)|1:N关系||
|[DER1N_AI_KB_MEMBER_USER_USER_ID](der/DER1N_AI_KB_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

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
|变更角色|change_role|[实体处理逻辑](module/ai/ai_kb_member/logic/change_role "变更角色")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ai/ai_kb_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/ai/ai_kb_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[无操作](module/ai/ai_kb_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除知识库成员发送通知](module/ai/ai_kb_member/logic/remove_kb_member_notify)|remove_kb_member_notify|无||移除知识库成员时向对应用户发送通知消息|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_kb_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_member/query/View)|VIEW|否|否 |否 ||
|[启用(VALID)](module/ai/ai_kb_member/query/valid)|VALID|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_member/dataset/Default)|DEFAULT|数据查询|是|||
|[启用(VALID)](module/ai/ai_kb_member/dataset/valid)|VALID|数据查询|否|||
## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[知识库成员加入通知](module/ai/ai_kb_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(加入知识库成员)](index/notify_index#kb_member_create)|成员 ||
|[知识库成员移除通知](module/ai/ai_kb_member/notify/remover_member_notify)|remover_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(移除知识库成员)](index/notify_index#kb_member_remove)|成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_KB_ID_EQ|知识库标识|EQ||
|N_KB_NAME_EQ|知识库名称|EQ||
|N_KB_NAME_LIKE|知识库名称|LIKE||
|N_NAME_LIKE|名称|LIKE||
|N_USER_ID_EQ|标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 设置角色 | setting_role | 设置 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建知识库默认临时成员](module/ai/ai_kb_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到知识库临时成员内|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_member?id=界面逻辑`">
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