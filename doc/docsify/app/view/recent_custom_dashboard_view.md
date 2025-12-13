# 仪表盘(recent_custom_dashboard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据看板(dashboard)


### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [我负责的工作项图表跳转](module/ProjMgmt/work_item/uilogic/my_assign_chart_jump)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)

### 关联视图
  * [最近访问的项目(recent_recent_project_grid_view)](app/view/recent_recent_project_grid_view)
  * [我的事项(recent_recent_summary_view)](app/view/recent_recent_summary_view)
  * [最近访问的用例(recent_recent_test_case_grid_view)](app/view/recent_recent_test_case_grid_view)
  * [我的日历(work_item_calendar_view)](app/view/work_item_calendar_view)
  * [我负责的工作项(work_item_index_my_assignee_gird_view)](app/view/work_item_index_my_assignee_gird_view)
  * [我创建的工作项(work_item_index_my_created_grid_view)](app/view/work_item_index_my_created_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>