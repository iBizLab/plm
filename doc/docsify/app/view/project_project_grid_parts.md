# 项目列表(project_project_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目(project_edit_view)](app/view/project_edit_view)
  * [项目(project_kanban_index_view)](app/view/project_kanban_index_view)
  * [项目(project_redirect_view)](app/view/project_redirect_view)
  * [项目(project_scrum_index_view)](app/view/project_scrum_index_view)
  * [项目(project_waterfall_index_view)](app/view/project_waterfall_index_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>