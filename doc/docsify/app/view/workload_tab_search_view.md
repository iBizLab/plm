# 工时(workload_tab_search_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(tab_toolbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [自定义导出](module/Base/workload#界面行为)
  * [工时(WORKLOAD)](module/Base/workload) : [AI登记预估工时](module/Base/workload#界面行为)

### 关联视图
  * [工时(workload_calendar_idea_grid_view)](app/view/workload_calendar_idea_grid_view)
  * [工时(workload_calendar_test_case_grid_view)](app/view/workload_calendar_test_case_grid_view)
  * [工时(workload_calendar_work_item_grid_view)](app/view/workload_calendar_work_item_grid_view)
  * [工时(workload_library_gird_view)](app/view/workload_library_gird_view)
  * [工时(workload_product_grid_view)](app/view/workload_product_grid_view)
  * [工时(workload_project_grid_view)](app/view/workload_project_grid_view)
  * [工时(workload_work_type_grid_view)](app/view/workload_work_type_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>