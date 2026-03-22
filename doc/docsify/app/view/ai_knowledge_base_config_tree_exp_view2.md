# 配置中心(ai_knowledge_base_config_tree_exp_view2)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [返回](module/ai/ai_knowledge_base#界面行为)

### 关联视图
  * [知识库图谱实体类型(ai_kb_graph_entity_type_config_grid_view)](app/view/ai_kb_graph_entity_type_config_grid_view)
  * [知识库(ai_knowledge_base_actived_grid_view)](app/view/ai_knowledge_base_actived_grid_view)
  * [知识库(ai_knowledge_base_deleted_grid_view)](app/view/ai_knowledge_base_deleted_grid_view)
  * [知识库(ai_knowledge_base_management_tab_exp_view)](app/view/ai_knowledge_base_management_tab_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>