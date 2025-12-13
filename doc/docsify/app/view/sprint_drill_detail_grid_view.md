# 迭代数量(sprint_drill_detail_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目发布(release_sprint_relation_grid_view)](app/view/release_sprint_relation_grid_view)
  * [基本信息(sprint_base_info_custom_view)](app/view/sprint_base_info_custom_view)
  * [迭代(sprint_edit_view)](app/view/sprint_edit_view)
  * [迭代(sprint_overview_dashboard_view)](app/view/sprint_overview_dashboard_view)
  * [测试计划(test_plan_sprint_relation_grid_view)](app/view/test_plan_sprint_relation_grid_view)
  * [工作项(work_item_burn_out_custom_view)](app/view/work_item_burn_out_custom_view)
  * [工作项(work_item_sprint_contribution_grid_view)](app/view/work_item_sprint_contribution_grid_view)
  * [工作项统计(work_item_sprint_work_item_custom_view)](app/view/work_item_sprint_work_item_custom_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>