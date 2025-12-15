# 智能体会话消息(ai_agent_message) :id=ai_agent_message
## 创建智能体会话消息

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">feedback_content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|反馈内容|
|<el-row justify="space-between"><el-col :span="20">is_dislike</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点踩|
|<el-row justify="space-between"><el-col :span="20">is_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点赞|
|<el-row justify="space-between"><el-col :span="20">resources</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引用资料|
|<el-row justify="space-between"><el-col :span="20">conversation_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标题|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息状态|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|消息内容|
|<el-row justify="space-between"><el-col :span="20">content_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|内容类型|
|<el-row justify="space-between"><el-col :span="20">conversation_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">conversation_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话名称|
|<el-row justify="space-between"><el-col :span="20">input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输入token数|
|<el-row justify="space-between"><el-col :span="20">metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息元数据|
|<el-row justify="space-between"><el-col :span="20">sender_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|发送者类型|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigInteger|消息序号|
|<el-row justify="space-between"><el-col :span="20">output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输出token数|
|<el-row justify="space-between"><el-col :span="20">total_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|总token数|
|<el-row justify="space-between"><el-col :span="20">latency_ms</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|处理耗时|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
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
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}

```

## 获取智能体会话消息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}

```

## 删除智能体会话消息

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新智能体会话消息

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">feedback_content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|反馈内容|
|<el-row justify="space-between"><el-col :span="20">is_dislike</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点踩|
|<el-row justify="space-between"><el-col :span="20">is_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点赞|
|<el-row justify="space-between"><el-col :span="20">resources</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引用资料|
|<el-row justify="space-between"><el-col :span="20">conversation_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标题|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息状态|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|消息内容|
|<el-row justify="space-between"><el-col :span="20">content_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|内容类型|
|<el-row justify="space-between"><el-col :span="20">conversation_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">conversation_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话名称|
|<el-row justify="space-between"><el-col :span="20">input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输入token数|
|<el-row justify="space-between"><el-col :span="20">metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息元数据|
|<el-row justify="space-between"><el-col :span="20">sender_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|发送者类型|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigInteger|消息序号|
|<el-row justify="space-between"><el-col :span="20">output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输出token数|
|<el-row justify="space-between"><el-col :span="20">total_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|总token数|
|<el-row justify="space-between"><el-col :span="20">latency_ms</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|处理耗时|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
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
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}

```

## 检查智能体会话消息主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">feedback_content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|反馈内容|
|<el-row justify="space-between"><el-col :span="20">is_dislike</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点踩|
|<el-row justify="space-between"><el-col :span="20">is_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点赞|
|<el-row justify="space-between"><el-col :span="20">resources</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引用资料|
|<el-row justify="space-between"><el-col :span="20">conversation_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标题|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息状态|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|消息内容|
|<el-row justify="space-between"><el-col :span="20">content_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|内容类型|
|<el-row justify="space-between"><el-col :span="20">conversation_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">conversation_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话名称|
|<el-row justify="space-between"><el-col :span="20">input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输入token数|
|<el-row justify="space-between"><el-col :span="20">metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息元数据|
|<el-row justify="space-between"><el-col :span="20">sender_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|发送者类型|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigInteger|消息序号|
|<el-row justify="space-between"><el-col :span="20">output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输出token数|
|<el-row justify="space-between"><el-col :span="20">total_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|总token数|
|<el-row justify="space-between"><el-col :span="20">latency_ms</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|处理耗时|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取智能体会话消息草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">feedback_content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|反馈内容|
|<el-row justify="space-between"><el-col :span="20">is_dislike</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点踩|
|<el-row justify="space-between"><el-col :span="20">is_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点赞|
|<el-row justify="space-between"><el-col :span="20">resources</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引用资料|
|<el-row justify="space-between"><el-col :span="20">conversation_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标题|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息状态|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|消息内容|
|<el-row justify="space-between"><el-col :span="20">content_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|内容类型|
|<el-row justify="space-between"><el-col :span="20">conversation_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">conversation_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话名称|
|<el-row justify="space-between"><el-col :span="20">input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输入token数|
|<el-row justify="space-between"><el-col :span="20">metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息元数据|
|<el-row justify="space-between"><el-col :span="20">sender_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|发送者类型|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigInteger|消息序号|
|<el-row justify="space-between"><el-col :span="20">output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输出token数|
|<el-row justify="space-between"><el-col :span="20">total_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|总token数|
|<el-row justify="space-between"><el-col :span="20">latency_ms</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|处理耗时|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
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
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}

```

## 保存智能体会话消息

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">feedback_content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|反馈内容|
|<el-row justify="space-between"><el-col :span="20">is_dislike</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点踩|
|<el-row justify="space-between"><el-col :span="20">is_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|是否点赞|
|<el-row justify="space-between"><el-col :span="20">resources</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引用资料|
|<el-row justify="space-between"><el-col :span="20">conversation_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标题|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息状态|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|消息内容|
|<el-row justify="space-between"><el-col :span="20">content_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|内容类型|
|<el-row justify="space-between"><el-col :span="20">conversation_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">conversation_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话名称|
|<el-row justify="space-between"><el-col :span="20">input_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输入token数|
|<el-row justify="space-between"><el-col :span="20">metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|消息元数据|
|<el-row justify="space-between"><el-col :span="20">sender_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|发送者类型|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigInteger|消息序号|
|<el-row justify="space-between"><el-col :span="20">output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|输出token数|
|<el-row justify="space-between"><el-col :span="20">total_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|总token数|
|<el-row justify="space-between"><el-col :span="20">latency_ms</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|处理耗时|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
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
  "feedback_content" : null,
  "is_dislike" : null,
  "is_like" : null,
  "resources" : null,
  "conversation_title" : null,
  "status" : null,
  "content" : null,
  "content_type" : null,
  "conversation_id" : null,
  "conversation_name" : null,
  "input_tokens" : null,
  "metadata" : null,
  "sender_type" : null,
  "sequence" : null,
  "output_tokens" : null,
  "total_tokens" : null,
  "latency_ms" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_conversation_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|会话标识|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_conversation_id_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
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
    "feedback_content" : null,
    "is_dislike" : null,
    "is_like" : null,
    "resources" : null,
    "conversation_title" : null,
    "status" : null,
    "content" : null,
    "content_type" : null,
    "conversation_id" : null,
    "conversation_name" : null,
    "input_tokens" : null,
    "metadata" : null,
    "sender_type" : null,
    "sequence" : null,
    "output_tokens" : null,
    "total_tokens" : null,
    "latency_ms" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_agent_messages/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/exportdata/{param},/ai_agent_messages/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_agent_messages/report" type="info" :closable="false" ></el-alert>
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