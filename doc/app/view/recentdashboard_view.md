# 仪表盘(recentdashboard_view)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 数据看板(dashboard)
  * 搜索栏(searchbar)


### 关联视图
  * [最近访问的用例(recentrecent_test_case_grid_view)](app/view/recentrecent_test_case_grid_view)
  * [我的日历(work_itemcalendar_view)](app/view/work_itemcalendar_view)
  * [我负责的工作项(work_itemmy_gird_view_index)](app/view/work_itemmy_gird_view_index)
  * [我创建的工作项(work_itemmy_created_grid_view_index)](app/view/work_itemmy_created_grid_view_index)
  * [最近访问的项目(recentrecent_project_grid_view)](app/view/recentrecent_project_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>