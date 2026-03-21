# 知识库文档分块(ai_kb_chunk_tree_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)
#### 数据树表格(treegrid)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库文档分块(AI_KB_CHUNK)](module/ai/ai_kb_chunk) : [切换显示模式](module/ai/ai_kb_chunk#界面行为)

### 关联视图
  * [知识库文档分块(ai_kb_chunk_edit_view)](app/view/ai_kb_chunk_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>