# 资源管理(resource_plm_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [资源分配(work_item_resource_gantt_view)](app/view/work_item_resource_gantt_view)
  * [工时(workload_log_management_view)](app/view/workload_log_management_view)
  * [工时(workload_management_tab_search_view)](app/view/workload_management_tab_search_view)
  * [工时管理(workload_management_view)](app/view/workload_management_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>