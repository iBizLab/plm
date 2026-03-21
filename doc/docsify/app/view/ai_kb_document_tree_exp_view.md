# 知识库文档(ai_kb_document_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [树界面_刷新全部操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [重新索引](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档向导视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档信息视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [重新切片](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [表格界面_删除操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开切片树表格](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [设置元数据](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档切片视图](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [文档重新解析](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [打开知识库文档同步表格视图](module/ai/ai_kb_document#界面行为)

### 关联视图
  * [文档分块(ai_kb_chunk_card_view)](app/view/ai_kb_chunk_card_view)
  * [知识库文档分块(ai_kb_chunk_tree_grid_view)](app/view/ai_kb_chunk_tree_grid_view)
  * [文档信息(ai_kb_document_base_info_view)](app/view/ai_kb_document_base_info_view)
  * [切片(ai_kb_document_chunk_view)](app/view/ai_kb_document_chunk_view)
  * [文档元数据(ai_kb_document_meta_data_view)](app/view/ai_kb_document_meta_data_view)
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