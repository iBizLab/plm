# 智能(ai) <!-- {docsify-ignore-all} -->



### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[智能体(AI_AGENT)](module/ai/ai_agent)|ai_agent|主实体|SQL|AI_AGENT|否|否|自控制|否||
|[智能体分配(AI_AGENT_ASSIGNMENT)](module/ai/ai_agent_assignment)|ai_agent_assignment|主实体|SQL|AI_AGENT_ASSIGNMENT|否|否|自控制|否||
|[智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context)|ai_agent_context|主实体|SQL|AI_AGENT_CONTEXT|否|否|自控制|否||
|[智能体会话(AI_AGENT_CONVERSATION)](module/ai/ai_agent_conversation)|ai_agent_conversation|主实体|SQL|AI_AGENT_CONVERSATION|否|否|自控制|否||
|[智能体回复反馈(AI_AGENT_FEEDBACK)](module/ai/ai_agent_feedback)|ai_agent_feedback|主实体|SQL|AI_AGENT_FEEDBACK|否|否|自控制|否||
|[智能体知识库引用(AI_AGENT_KNOWLEDGE_REL)](module/ai/ai_agent_knowledge_rel)|ai_agent_knowledge_rel|关系实体|SQL|AI_AGENT_KNOWLEDGE_REL|是|否|附属主实体控制|否||
|[智能体会话消息(AI_AGENT_MESSAGE)](module/ai/ai_agent_message)|ai_agent_message|主实体|SQL|AI_AGENT_MESSAGE|否|否|自控制|否||
|[智能体会话(AI_AGENT_SESSION)](module/ai/ai_agent_session)|ai_agent_session|主实体|无存储||否|否|无控制|否||
|[智能体工具引用(AI_AGENT_TOOL_REL)](module/ai/ai_agent_tool_rel)|ai_agent_tool_rel|关系实体|SQL|AI_AGENT_TOOL_REL|是|否|附属主实体控制|否||
|[AI凭证(AI_CREDENTIAL)](module/ai/ai_credential)|ai_credential|主实体|SQL|AI_CREDENTIAL|否|否|自控制|否||
|[知识库文档分块(AI_KB_CHUNK)](module/ai/ai_kb_chunk)|ai_kb_chunk|主实体|SQL|AI_KB_CHUNK|否|否|自控制|否||
|[知识库文档切片策略(AI_KB_CHUNKING_STRATEGY)](module/ai/ai_kb_chunking_strategy)|ai_kb_chunking_strategy|主实体|无存储||否|否|自控制|否||
|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document)|ai_kb_document|主实体|SQL|AI_KB_DOCUMENT|否|否|自控制|否||
|[知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync)|ai_kb_document_sync|主实体|SQL|AI_KB_DOCUMENT_SYNC|否|否|自控制|否|用于知识库整体文档同步|
|[知识库文档向导(AI_KB_DOCUMENT_WIZARD)](module/ai/ai_kb_document_wizard)|ai_kb_document_wizard|主实体|无存储||否|否|自控制|否||
|[知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base)|ai_knowledge_base|主实体|SQL|AI_KNOWLEDGE_BASE|否|否|自控制|否||
|[知识库源(AI_KNOWLEDGE_SOURCE)](module/ai/ai_knowledge_source)|ai_knowledge_source|主实体|SQL|AI_KNOWLEDGE_SOURCE|否|否|自控制|否||
|[AI大模型(AI_MODEL)](module/ai/ai_model)|ai_model|主实体|SQL|AI_MODEL|否|否|自控制|否||
|[AI调用工具(AI_TOOL)](module/ai/ai_tool)|ai_tool|主实体|SQL|AI_TOOL|否|否|自控制|否||

