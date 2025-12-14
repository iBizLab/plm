# 智能体会话消息(ai_agent_message)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|消息内容|CONTENT|长文本，没有长度限制|1048576|否||
|内容类型|CONTENT_TYPE|文本，可指定长度|100|否||
|会话标识|CONVERSATION_ID|外键值|100|是||
|会话名称|CONVERSATION_NAME|外键值文本|200|是||
|会话标题|CONVERSATION_TITLE|外键值附加数据|200|是||
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|反馈内容|FEEDBACK_CONTENT|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|输入token数|INPUT_TOKENS|整型||是||
|是否点踩|IS_DISLIKE|文本，可指定长度|200|是||
|是否点赞|IS_LIKE|文本，可指定长度|200|是||
|处理耗时|LATENCY_MS|整型||是||
|消息元数据|METADATA|长文本，没有长度限制|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|输出token数|OUTPUT_TOKENS|整型||是||
|引用资料|RESOURCES|一对多动态对象|1048576|是||
|发送者类型|SENDER_TYPE|[单项选择(文本值)](index/dictionary_index#msg_sender_type "消息发送方类型")|60|否||
|消息序号|SEQUENCE|大整型||是||
|消息状态|STATUS|[单项选择(文本值)](index/dictionary_index#ai_message_status "AI消息状态")|60|是||
|总token数|TOTAL_TOKENS|整型||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_FEEDBACK_AI_AGENT_MESSAGE_MESSAGE_ID](der/DER1N_AI_AGENT_FEEDBACK_AI_AGENT_MESSAGE_MESSAGE_ID)|[智能体回复反馈(AI_AGENT_FEEDBACK)](module/ai/ai_agent_feedback)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_AGENT_MESSAGE_AI_AGENT_CONVERSATION_CONVERSATION_ID](der/DER1N_AI_AGENT_MESSAGE_AI_AGENT_CONVERSATION_CONVERSATION_ID)|[智能体会话(AI_AGENT_CONVERSATION)](module/ai/ai_agent_conversation)|1:N关系||

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

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_agent_message/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_agent_message/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_agent_message/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_agent_message-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_agent_message-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `READ`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CONVERSATION_ID_EQ|会话标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_message?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>