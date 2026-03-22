# 标签(ai_kb_tag_nested_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [知识库标签(AI_KB_TAG)](module/ai/ai_kb_tag) : [表格界面_新建操作](module/ai/ai_kb_tag#界面行为)
  * [知识库标签(AI_KB_TAG)](module/ai/ai_kb_tag) : [表格界面_新建行](module/ai/ai_kb_tag#界面行为)
  * [知识库标签(AI_KB_TAG)](module/ai/ai_kb_tag) : [表格界面_编辑操作](module/ai/ai_kb_tag#界面行为)
  * [知识库标签(AI_KB_TAG)](module/ai/ai_kb_tag) : [表格界面_行编辑开关操作](module/ai/ai_kb_tag#界面行为)
  * [知识库标签(AI_KB_TAG)](module/ai/ai_kb_tag) : [表格界面_删除操作](module/ai/ai_kb_tag#界面行为)

### 关联视图
  * [标签(ai_kb_tag_edit_view)](app/view/ai_kb_tag_edit_view)
  * [标签(ai_kb_tag_quick_create_view)](app/view/ai_kb_tag_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>