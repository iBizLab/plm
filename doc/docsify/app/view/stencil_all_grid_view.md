# 页面模板(stencil_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [页面模板(STENCIL)](module/Wiki/stencil) : [表格界面_编辑操作](module/Wiki/stencil#界面行为)
  * [页面模板(STENCIL)](module/Wiki/stencil) : [表格界面_新建操作](module/Wiki/stencil#界面行为)
  * [页面模板(STENCIL)](module/Wiki/stencil) : [删除](module/Wiki/stencil#界面行为)

### 关联视图
  * [页面模板(stencil_edit_view)](app/view/stencil_edit_view)
  * [页面模板(stencil_model_edit_view)](app/view/stencil_model_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>