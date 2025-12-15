# 智能体业务上下文(ai_agent_context) :id=ai_agent_context
## 创建智能体业务上下文

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">system_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|
|<el-row justify="space-between"><el-col :span="20">generation_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|生成模式|
|<el-row justify="space-between"><el-col :span="20">context_debug_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|调试数据|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">scopes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务范围|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效|
|<el-row justify="space-between"><el-col :span="20">ai_agent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">ai_agent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体名称|
|<el-row justify="space-between"><el-col :span="20">ai_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">ai_model_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">custom_suggestion_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义建议提示词|
|<el-row justify="space-between"><el-col :span="20">default_system_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|默认系统提示词|
|<el-row justify="space-between"><el-col :span="20">enable_suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用问题建议|
|<el-row justify="space-between"><el-col :span="20">enable_thinking</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用思考链|
|<el-row justify="space-between"><el-col :span="20">enable_tools</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|调用工具|
|<el-row justify="space-between"><el-col :span="20">is_default</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否默认Agent|
|<el-row justify="space-between"><el-col :span="20">max_input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输入token数|
|<el-row justify="space-between"><el-col :span="20">memory_max_turns</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|记忆对话轮数|
|<el-row justify="space-between"><el-col :span="20">memory_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|记忆模式|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">stream</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|流式输出|
|<el-row justify="space-between"><el-col :span="20">suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|预置建议问题|
|<el-row justify="space-between"><el-col :span="20">temperature</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|模型随机性参数|
|<el-row justify="space-between"><el-col :span="20">tool_exceed_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具调用超限提示语|
|<el-row justify="space-between"><el-col :span="20">tool_max_calls</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大工具调用次数|
|<el-row justify="space-between"><el-col :span="20">top_p</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|概率核采样|
|<el-row justify="space-between"><el-col :span="20">trimming_strategy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|截断策略|
|<el-row justify="space-between"><el-col :span="20">welcome_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|欢迎消息模板|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## 获取智能体业务上下文

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能体业务上下文标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## 删除智能体业务上下文

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能体业务上下文标识|





## 更新智能体业务上下文

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能体业务上下文标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">system_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|
|<el-row justify="space-between"><el-col :span="20">generation_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|生成模式|
|<el-row justify="space-between"><el-col :span="20">context_debug_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|调试数据|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">scopes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务范围|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效|
|<el-row justify="space-between"><el-col :span="20">ai_agent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">ai_agent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体名称|
|<el-row justify="space-between"><el-col :span="20">ai_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">ai_model_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">custom_suggestion_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义建议提示词|
|<el-row justify="space-between"><el-col :span="20">default_system_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|默认系统提示词|
|<el-row justify="space-between"><el-col :span="20">enable_suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用问题建议|
|<el-row justify="space-between"><el-col :span="20">enable_thinking</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用思考链|
|<el-row justify="space-between"><el-col :span="20">enable_tools</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|调用工具|
|<el-row justify="space-between"><el-col :span="20">is_default</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否默认Agent|
|<el-row justify="space-between"><el-col :span="20">max_input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输入token数|
|<el-row justify="space-between"><el-col :span="20">memory_max_turns</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|记忆对话轮数|
|<el-row justify="space-between"><el-col :span="20">memory_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|记忆模式|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">stream</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|流式输出|
|<el-row justify="space-between"><el-col :span="20">suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|预置建议问题|
|<el-row justify="space-between"><el-col :span="20">temperature</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|模型随机性参数|
|<el-row justify="space-between"><el-col :span="20">tool_exceed_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具调用超限提示语|
|<el-row justify="space-between"><el-col :span="20">tool_max_calls</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大工具调用次数|
|<el-row justify="space-between"><el-col :span="20">top_p</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|概率核采样|
|<el-row justify="space-between"><el-col :span="20">trimming_strategy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|截断策略|
|<el-row justify="space-between"><el-col :span="20">welcome_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|欢迎消息模板|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## 检查智能体业务上下文主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">system_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|
|<el-row justify="space-between"><el-col :span="20">generation_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|生成模式|
|<el-row justify="space-between"><el-col :span="20">context_debug_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|调试数据|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">scopes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务范围|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效|
|<el-row justify="space-between"><el-col :span="20">ai_agent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">ai_agent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体名称|
|<el-row justify="space-between"><el-col :span="20">ai_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">ai_model_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">custom_suggestion_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义建议提示词|
|<el-row justify="space-between"><el-col :span="20">default_system_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|默认系统提示词|
|<el-row justify="space-between"><el-col :span="20">enable_suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用问题建议|
|<el-row justify="space-between"><el-col :span="20">enable_thinking</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用思考链|
|<el-row justify="space-between"><el-col :span="20">enable_tools</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|调用工具|
|<el-row justify="space-between"><el-col :span="20">is_default</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否默认Agent|
|<el-row justify="space-between"><el-col :span="20">max_input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输入token数|
|<el-row justify="space-between"><el-col :span="20">memory_max_turns</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|记忆对话轮数|
|<el-row justify="space-between"><el-col :span="20">memory_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|记忆模式|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">stream</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|流式输出|
|<el-row justify="space-between"><el-col :span="20">suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|预置建议问题|
|<el-row justify="space-between"><el-col :span="20">temperature</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|模型随机性参数|
|<el-row justify="space-between"><el-col :span="20">tool_exceed_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具调用超限提示语|
|<el-row justify="space-between"><el-col :span="20">tool_max_calls</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大工具调用次数|
|<el-row justify="space-between"><el-col :span="20">top_p</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|概率核采样|
|<el-row justify="space-between"><el-col :span="20">trimming_strategy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|截断策略|
|<el-row justify="space-between"><el-col :span="20">welcome_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|欢迎消息模板|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 填充智能体参数

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/{key}/fill_with_agent" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能体业务上下文标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## 获取智能体业务上下文草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">system_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|
|<el-row justify="space-between"><el-col :span="20">generation_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|生成模式|
|<el-row justify="space-between"><el-col :span="20">context_debug_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|调试数据|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">scopes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务范围|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效|
|<el-row justify="space-between"><el-col :span="20">ai_agent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">ai_agent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体名称|
|<el-row justify="space-between"><el-col :span="20">ai_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">ai_model_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">custom_suggestion_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义建议提示词|
|<el-row justify="space-between"><el-col :span="20">default_system_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|默认系统提示词|
|<el-row justify="space-between"><el-col :span="20">enable_suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用问题建议|
|<el-row justify="space-between"><el-col :span="20">enable_thinking</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用思考链|
|<el-row justify="space-between"><el-col :span="20">enable_tools</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|调用工具|
|<el-row justify="space-between"><el-col :span="20">is_default</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否默认Agent|
|<el-row justify="space-between"><el-col :span="20">max_input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输入token数|
|<el-row justify="space-between"><el-col :span="20">memory_max_turns</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|记忆对话轮数|
|<el-row justify="space-between"><el-col :span="20">memory_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|记忆模式|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">stream</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|流式输出|
|<el-row justify="space-between"><el-col :span="20">suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|预置建议问题|
|<el-row justify="space-between"><el-col :span="20">temperature</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|模型随机性参数|
|<el-row justify="space-between"><el-col :span="20">tool_exceed_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具调用超限提示语|
|<el-row justify="space-between"><el-col :span="20">tool_max_calls</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大工具调用次数|
|<el-row justify="space-between"><el-col :span="20">top_p</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|概率核采样|
|<el-row justify="space-between"><el-col :span="20">trimming_strategy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|截断策略|
|<el-row justify="space-between"><el-col :span="20">welcome_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|欢迎消息模板|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## 保存智能体业务上下文

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">system_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|
|<el-row justify="space-between"><el-col :span="20">generation_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|生成模式|
|<el-row justify="space-between"><el-col :span="20">context_debug_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|调试数据|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">scopes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务范围|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效|
|<el-row justify="space-between"><el-col :span="20">ai_agent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">ai_agent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体名称|
|<el-row justify="space-between"><el-col :span="20">ai_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">ai_model_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">custom_suggestion_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义建议提示词|
|<el-row justify="space-between"><el-col :span="20">default_system_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|默认系统提示词|
|<el-row justify="space-between"><el-col :span="20">enable_suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用问题建议|
|<el-row justify="space-between"><el-col :span="20">enable_thinking</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用思考链|
|<el-row justify="space-between"><el-col :span="20">enable_tools</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|调用工具|
|<el-row justify="space-between"><el-col :span="20">is_default</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否默认Agent|
|<el-row justify="space-between"><el-col :span="20">max_input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输入token数|
|<el-row justify="space-between"><el-col :span="20">memory_max_turns</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|记忆对话轮数|
|<el-row justify="space-between"><el-col :span="20">memory_mode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|记忆模式|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序|
|<el-row justify="space-between"><el-col :span="20">stream</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|流式输出|
|<el-row justify="space-between"><el-col :span="20">suggested_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|预置建议问题|
|<el-row justify="space-between"><el-col :span="20">temperature</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|模型随机性参数|
|<el-row justify="space-between"><el-col :span="20">tool_exceed_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具调用超限提示语|
|<el-row justify="space-between"><el-col :span="20">tool_max_calls</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大工具调用次数|
|<el-row justify="space-between"><el-col :span="20">top_p</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|概率核采样|
|<el-row justify="space-between"><el-col :span="20">trimming_strategy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|截断策略|
|<el-row justify="space-between"><el-col :span="20">welcome_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|欢迎消息模板|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "system_flag" : null,
  "generation_mode" : null,
  "context_debug_data" : null,
  "description" : null,
  "scopes" : null,
  "active" : null,
  "ai_agent_id" : null,
  "ai_agent_name" : null,
  "ai_model_id" : null,
  "ai_model_name" : null,
  "code_name" : null,
  "custom_suggestion_prompt" : null,
  "default_system_prompt" : null,
  "enable_suggested_questions" : null,
  "enable_thinking" : null,
  "enable_tools" : null,
  "is_default" : null,
  "max_input_tokens" : null,
  "memory_max_turns" : null,
  "memory_mode" : null,
  "sequence" : null,
  "stream" : null,
  "suggested_questions" : null,
  "temperature" : null,
  "tool_exceed_message" : null,
  "tool_max_calls" : null,
  "top_p" : null,
  "trimming_strategy" : null,
  "welcome_message" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_ai_agent_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">n_ai_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_system_flag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_ai_agent_id_eq" : null,
  "n_ai_model_id_eq" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_system_flag_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "system_flag" : null,
    "generation_mode" : null,
    "context_debug_data" : null,
    "description" : null,
    "scopes" : null,
    "active" : null,
    "ai_agent_id" : null,
    "ai_agent_name" : null,
    "ai_model_id" : null,
    "ai_model_name" : null,
    "code_name" : null,
    "custom_suggestion_prompt" : null,
    "default_system_prompt" : null,
    "enable_suggested_questions" : null,
    "enable_thinking" : null,
    "enable_tools" : null,
    "is_default" : null,
    "max_input_tokens" : null,
    "memory_max_turns" : null,
    "memory_mode" : null,
    "sequence" : null,
    "stream" : null,
    "suggested_questions" : null,
    "temperature" : null,
    "tool_exceed_message" : null,
    "tool_max_calls" : null,
    "top_p" : null,
    "trimming_strategy" : null,
    "welcome_message" : null,
  }
]
```

## 业务过滤

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/fetch_filter" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_ai_agent_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">n_ai_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_system_flag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_ai_agent_id_eq" : null,
  "n_ai_model_id_eq" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_system_flag_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "system_flag" : null,
    "generation_mode" : null,
    "context_debug_data" : null,
    "description" : null,
    "scopes" : null,
    "active" : null,
    "ai_agent_id" : null,
    "ai_agent_name" : null,
    "ai_model_id" : null,
    "ai_model_name" : null,
    "code_name" : null,
    "custom_suggestion_prompt" : null,
    "default_system_prompt" : null,
    "enable_suggested_questions" : null,
    "enable_thinking" : null,
    "enable_tools" : null,
    "is_default" : null,
    "max_input_tokens" : null,
    "memory_max_turns" : null,
    "memory_mode" : null,
    "sequence" : null,
    "stream" : null,
    "suggested_questions" : null,
    "temperature" : null,
    "tool_exceed_message" : null,
    "tool_max_calls" : null,
    "top_p" : null,
    "trimming_strategy" : null,
    "welcome_message" : null,
  }
]
```

## 全部数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/fetch_full_info" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_ai_agent_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体标识|
|<el-row justify="space-between"><el-col :span="20">n_ai_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能体业务上下文标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_system_flag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|系统标记|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_ai_agent_id_eq" : null,
  "n_ai_model_id_eq" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_system_flag_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "system_flag" : null,
    "generation_mode" : null,
    "context_debug_data" : null,
    "description" : null,
    "scopes" : null,
    "active" : null,
    "ai_agent_id" : null,
    "ai_agent_name" : null,
    "ai_model_id" : null,
    "ai_model_name" : null,
    "code_name" : null,
    "custom_suggestion_prompt" : null,
    "default_system_prompt" : null,
    "enable_suggested_questions" : null,
    "enable_thinking" : null,
    "enable_tools" : null,
    "is_default" : null,
    "max_input_tokens" : null,
    "memory_max_turns" : null,
    "memory_mode" : null,
    "sequence" : null,
    "stream" : null,
    "suggested_questions" : null,
    "temperature" : null,
    "tool_exceed_message" : null,
    "tool_max_calls" : null,
    "top_p" : null,
    "trimming_strategy" : null,
    "welcome_message" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/exportdata/{param},/ai_agent_contexts/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_contexts/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




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