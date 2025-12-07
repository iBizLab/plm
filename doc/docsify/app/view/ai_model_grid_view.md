# AI大模型(ai_model_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [AI大模型(AI_MODEL)](module/ai/ai_model) : [表格界面_新建操作](module/ai/ai_model#界面行为)
  * [AI大模型(AI_MODEL)](module/ai/ai_model) : [表格界面_删除操作](module/ai/ai_model#界面行为)

### 关联视图
  * [AI大模型(ai_model_edit_view)](app/view/ai_model_edit_view)
  * [AI大模型(ai_model_main_view)](app/view/ai_model_main_view)
  * [AI大模型(ai_model_quick_create_view)](app/view/ai_model_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>