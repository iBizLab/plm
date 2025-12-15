# 知识库文档(ai_kb_document_nested_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



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
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档编辑视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档同步表格视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_删除操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_新建操作](module/ai/ai_kb_document#界面行为)

### 关联视图
  * [文档分块(ai_kb_chunk_tree_view)](app/view/ai_kb_chunk_tree_view)
  * [知识库文档(ai_kb_document_edit_view)](app/view/ai_kb_document_edit_view)
  * [同步设置(ai_kb_document_sync_grid_view)](app/view/ai_kb_document_sync_grid_view)
  * [知识库文档向导(ai_kb_document_wizard_create_wizard_view)](app/view/ai_kb_document_wizard_create_wizard_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>