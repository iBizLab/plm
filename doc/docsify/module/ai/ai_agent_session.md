# 智能体会话(ai_agent_session)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|上下文标记|CONTEXT_CODE_NAME|外键值附加数据|100|是||
|调试数据|CONTEXT_DEBUG_DATA|外键值附加数据|1048576|是||
|智能体业务上下文标识|CONTEXT_ID|外键值|100|是||
|调试反馈1|DEBUG_CALLBACK_1|长文本，没有长度限制|1048576|是||
|调试反馈2|DEBUG_CALLBACK_2|长文本，没有长度限制|1048576|是||
|智能体会话标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|外键值文本|200|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_AGENT_SESSION_AI_AGENT_CONTEXT_CONTEXT_ID](der/DER1N_AI_AGENT_SESSION_AI_AGENT_CONTEXT_CONTEXT_ID)|[智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#ai_agent_session_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[get_info](module/ai/ai_agent_session/logic/get_info)|get_info|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_agent_session/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_agent_session/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_agent_session/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_agent_session-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_agent_session-ALL_RW

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
|N_CONTEXT_ID_EQ|智能体业务上下文标识|EQ||
|N_ID_EQ|智能体会话标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 执行JENKINS | jenkinsrun | 执行JENKINS |单项数据|用户自定义||
| 添加到正文 | add_content | 添加到正文 |单项数据|用户自定义||
| 调试 | ai_debug | 调试 |单项数据|<details><summary>打开聊天界面</summary></details>||
| 调试逻辑 | debug_context | 调试 |单项数据|用户自定义||
| 执行 | run | 执行 |单项数据|<details><summary>打开聊天界面</summary></details>||
| 执行逻辑 | run_context | 执行 |单项数据|用户自定义||
| PLM智能助手 | plm_ai_agent | PLM智能助手 |无数据|<details><summary>打开聊天界面</summary></details>||
| 确认结果 | accept | 确认采纳 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[accept_feedback](module/ai/ai_agent_session/uilogic/accept_feedback)|accept_feedback||
|[debug_context](module/ai/ai_agent_session/uilogic/debug_context)|debug_context||
|[dyna_context](module/ai/ai_agent_session/uilogic/dyna_context)|dyna_context||
|[jenkins_build](module/ai/ai_agent_session/uilogic/jenkins_build)|jenkins_build||
|[remark_feedback](module/ai/ai_agent_session/uilogic/remark_feedback)|remark_feedback||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_session?id=界面逻辑`">
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