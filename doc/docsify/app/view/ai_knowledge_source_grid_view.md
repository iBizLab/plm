# 知识库源(ai_knowledge_source_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [知识库源(AI_KNOWLEDGE_SOURCE)](module/ai/ai_knowledge_source) : [表格界面_新建操作](module/ai/ai_knowledge_source#界面行为)
  * [知识库源(AI_KNOWLEDGE_SOURCE)](module/ai/ai_knowledge_source) : [表格界面_删除操作](module/ai/ai_knowledge_source#界面行为)

### 关联视图
  * [知识库源(ai_knowledge_source_edit_view)](app/view/ai_knowledge_source_edit_view)
  * [知识库源(ai_knowledge_source_main_view)](app/view/ai_knowledge_source_main_view)
  * [知识库源(ai_knowledge_source_quick_create_view)](app/view/ai_knowledge_source_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>