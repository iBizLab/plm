# 工时(workload_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 分页导航面板(tabexppanel)
#### 工具栏(toolbar)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [工作台登记工时](module/Base/workload#界面行为)

### 关联视图
  * [工时(workload_log_grid_view)](app/view/workload_log_grid_view)
  * [登记工时(workload_quick_create_view_workbench)](app/view/workload_quick_create_view_workbench)
  * [工时(workload_tab_search_view)](app/view/workload_tab_search_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>