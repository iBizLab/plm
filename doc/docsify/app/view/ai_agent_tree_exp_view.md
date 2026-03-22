# 智能体(ai_agent_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [返回](module/ai/ai_knowledge_base#界面行为)
  * [智能体(AI_AGENT)](module/ai/ai_agent) : [打开知识库配置](module/ai/ai_agent#界面行为)

### 关联视图
  * [智能体(ai_agent_context_grid_view)](app/view/ai_agent_context_grid_view)
  * [智能体会话(ai_agent_conversation_grid_view)](app/view/ai_agent_conversation_grid_view)
  * [智能体模板(ai_agent_grid_view)](app/view/ai_agent_grid_view)
  * [AI凭证(ai_credential_grid_view)](app/view/ai_credential_grid_view)
  * [知识库图谱实体类型(ai_kb_graph_entity_type_config_grid_view)](app/view/ai_kb_graph_entity_type_config_grid_view)
  * [标签集(ai_kb_tag_set_grid_view)](app/view/ai_kb_tag_set_grid_view)
  * [知识库(ai_knowledge_base_actived_grid_view)](app/view/ai_knowledge_base_actived_grid_view)
  * [配置中心(ai_knowledge_base_config_tree_exp_view2)](app/view/ai_knowledge_base_config_tree_exp_view2)
  * [知识库(ai_knowledge_base_deleted_grid_view)](app/view/ai_knowledge_base_deleted_grid_view)
  * [知识库(ai_knowledge_base_grid_view)](app/view/ai_knowledge_base_grid_view)
  * [知识库(ai_knowledge_base_management_tab_exp_view)](app/view/ai_knowledge_base_management_tab_exp_view)
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