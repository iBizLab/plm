# 知识库(ai_knowledge_base_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档同步表格视图](module/ai/ai_kb_document#界面行为)
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [打开智能体导航页](module/ai/ai_knowledge_base#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档切片与同步视图](module/ai/ai_kb_document#界面行为)
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [表格界面_删除操作](module/ai/ai_knowledge_base#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [树界面_刷新全部操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档信息视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档向导视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_删除操作](module/ai/ai_kb_document#界面行为)
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [打开知识库信息视图](module/ai/ai_knowledge_base#界面行为)
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [打开知识库切片策略视图](module/ai/ai_knowledge_base#界面行为)

### 关联视图
  * [智能体(ai_agent_context_grid_view)](app/view/ai_agent_context_grid_view)
  * [智能体会话(ai_agent_conversation_grid_view)](app/view/ai_agent_conversation_grid_view)
  * [智能体模板(ai_agent_grid_view)](app/view/ai_agent_grid_view)
  * [智能体(ai_agent_tree_exp_view)](app/view/ai_agent_tree_exp_view)
  * [AI凭证(ai_credential_grid_view)](app/view/ai_credential_grid_view)
  * [文档分块(ai_kb_chunk_card_view)](app/view/ai_kb_chunk_card_view)
  * [文档信息(ai_kb_document_base_info_view)](app/view/ai_kb_document_base_info_view)
  * [切片与同步(ai_kb_document_chunk_view)](app/view/ai_kb_document_chunk_view)
  * [同步设置(ai_kb_document_sync_grid_view)](app/view/ai_kb_document_sync_grid_view)
  * [知识库文档(ai_kb_document_tree_exp_view)](app/view/ai_kb_document_tree_exp_view)
  * [知识库文档向导(ai_kb_document_wizard_create_wizard_view)](app/view/ai_kb_document_wizard_create_wizard_view)
  * [知识库信息(ai_knowledge_base_base_info_view)](app/view/ai_knowledge_base_base_info_view)
  * [知识库切片策略(ai_knowledge_base_chunk_view)](app/view/ai_knowledge_base_chunk_view)
  * [知识库(ai_knowledge_base_index_view)](app/view/ai_knowledge_base_index_view)
  * [知识库(ai_knowledge_base_main_view)](app/view/ai_knowledge_base_main_view)
  * [知识库(ai_knowledge_base_quick_create_view)](app/view/ai_knowledge_base_quick_create_view)
  * [知识库源(ai_knowledge_source_grid_view)](app/view/ai_knowledge_source_grid_view)
  * [AI大模型(ai_model_grid_view)](app/view/ai_model_grid_view)
  * [AI调用工具(ai_tool_grid_view)](app/view/ai_tool_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>