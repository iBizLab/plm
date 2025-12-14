# 智能体(ai_agent)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|有效|ACTIVE|是否逻辑||是||
|模型标识|AI_MODEL_ID|外键值|100|是||
|模型名称|AI_MODEL_NAME|外键值文本|200|是||
|代码标识|CODE_NAME|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|自定义建议提示词|CUSTOM_SUGGESTION_PROMPT|长文本，没有长度限制|1048576|是||
|默认系统提示词|DEFAULT_SYSTEM_PROMPT|长文本，没有长度限制|1048576|是||
|启用问题建议|ENABLE_SUGGESTED_QUESTIONS|真假逻辑||是||
|启用思考链|ENABLE_THINKING|真假逻辑||是||
|调用工具|ENABLE_TOOLS|真假逻辑||是||
|生成模式|GENERATION_MODE|[单项选择(文本值)](index/dictionary_index#ai_mode "AI生成模式")|60|是||
|智能体标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否默认Agent|IS_DEFAULT|是否逻辑||否||
|最大输入token数|MAX_INPUT_TOKENS|整型||否||
|记忆对话轮数|MEMORY_MAX_TURNS|整型||是||
|记忆模式|MEMORY_MODE|[单项选择(文本值)](index/dictionary_index#memory_mode "记忆模式")|200|是||
|智能体名称|NAME|文本，可指定长度|200|是||
|排序|SEQUENCE|整型||是||
|流式输出|STREAM|真假逻辑||是||
|预置建议问题|SUGGESTED_QUESTIONS|文本数组（没有长度限制）|1000|是||
|模型随机性参数|TEMPERATURE|数值||是||
|工具调用超限提示语|TOOL_EXCEED_MESSAGE|长文本，没有长度限制|1048576|是||
|最大工具调用次数|TOOL_MAX_CALLS|整型||是||
|概率核采样|TOP_P|数值||是||
|截断策略|TRIMMING_STRATEGY|[单项选择(文本值)](index/dictionary_index#trimming_strategy "截断策略")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|欢迎消息模板|WELCOME_MESSAGE|长文本，没有长度限制|1048576|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_CONTEXT_AI_AGENT_AI_AGENT_ID](der/DER1N_AI_AGENT_CONTEXT_AI_AGENT_AI_AGENT_ID)|[智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context)|1:N关系||
|[DER1N_AI_AGENT_KNOWLEDGE_REL_AI_AGENT_AI_AGENT_ID](der/DER1N_AI_AGENT_KNOWLEDGE_REL_AI_AGENT_AI_AGENT_ID)|[智能体知识库引用(AI_AGENT_KNOWLEDGE_REL)](module/ai/ai_agent_knowledge_rel)|1:N关系||
|[DER1N_AI_AGENT_TOOL_REL_AI_AGENT_AI_AGENT_ID](der/DER1N_AI_AGENT_TOOL_REL_AI_AGENT_AI_AGENT_ID)|[智能体工具引用(AI_AGENT_TOOL_REL)](module/ai/ai_agent_tool_rel)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_AGENT_AI_MODEL_AI_MODEL_ID](der/DER1N_AI_AGENT_AI_MODEL_AI_MODEL_ID)|[AI大模型(AI_MODEL)](module/ai/ai_model)|1:N关系||

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
|[DEFAULT](module/ai/ai_agent/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_agent/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_agent/dataset/Default)|DEFAULT|数据查询|是|||
|[全部数据(full_info)](module/ai/ai_agent/dataset/full_info)|full_info|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=ai_agent-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_agent-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AI_MODEL_ID_EQ|模型标识|EQ||
|N_AI_MODEL_NAME_EQ|模型名称|EQ||
|N_AI_MODEL_NAME_LIKE|模型名称|LIKE||
|N_GENERATION_MODE_EQ|生成模式|EQ||
|N_ID_EQ|智能体标识|EQ||
|N_NAME_LIKE|智能体名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_agent?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent?id=搜索模式`">
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