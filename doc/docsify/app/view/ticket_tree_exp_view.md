# 工单导航(ticket_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [全部工单(ticket_all_grid_view)](app/view/ticket_all_grid_view)
  * [已归档的工单(ticket_archived_grid_view)](app/view/ticket_archived_grid_view)
  * [我负责的工单(ticket_my_assignee_grid_view)](app/view/ticket_my_assignee_grid_view)
  * [进行中的工单(ticket_progress_grid_view)](app/view/ticket_progress_grid_view)
  * [我提交的工单(ticket_submit_grid_view)](app/view/ticket_submit_grid_view)
  * [待计划的工单(ticket_un_plan_grid_view)](app/view/ticket_un_plan_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>