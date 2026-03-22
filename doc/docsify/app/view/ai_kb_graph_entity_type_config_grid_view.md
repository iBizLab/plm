# 知识库图谱实体类型(ai_kb_graph_entity_type_config_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [知识库图谱实体类型(AI_KB_GRAPH_ENTITY_TYPE)](module/ai/ai_kb_graph_entity_type) : [表格界面_新建操作_通用](module/ai/ai_kb_graph_entity_type#界面行为)
  * [知识库图谱实体类型(AI_KB_GRAPH_ENTITY_TYPE)](module/ai/ai_kb_graph_entity_type) : [打开快速配置视图](module/ai/ai_kb_graph_entity_type#界面行为)
  * [知识库图谱实体类型(AI_KB_GRAPH_ENTITY_TYPE)](module/ai/ai_kb_graph_entity_type) : [表格界面_删除操作](module/ai/ai_kb_graph_entity_type#界面行为)

### 关联视图
  * [知识库图谱实体类型(ai_kb_graph_entity_type_edit_view)](app/view/ai_kb_graph_entity_type_edit_view)
  * [知识库图谱实体类型(ai_kb_graph_entity_type_quick_cfg_view)](app/view/ai_kb_graph_entity_type_quick_cfg_view)
  * [新建知识库图谱实体类型(ai_kb_graph_entity_type_quick_create_view)](app/view/ai_kb_graph_entity_type_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>