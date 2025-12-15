# 同步设置(ai_kb_document_sync_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync) : [删除文档同步数据](module/ai/ai_kb_document_sync#界面行为)

### 关联视图
  * [知识库文档同步(ai_kb_document_sync_edit_view)](app/view/ai_kb_document_sync_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>