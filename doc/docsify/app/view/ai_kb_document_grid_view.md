# 知识库文档(ai_kb_document_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [文档重新解析](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档编辑视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_删除操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [重新索引](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_删除操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [重新切片](module/ai/ai_kb_document#界面行为)

### 关联视图
  * [文档信息(ai_kb_document_base_info_view)](app/view/ai_kb_document_base_info_view)
  * [知识库文档(ai_kb_document_edit_view)](app/view/ai_kb_document_edit_view)
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