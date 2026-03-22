# 计划任务作业(extend_scheduled_task_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [扩展执行计划(EXTEND_SCHEDULE)](module/Base/extend_schedule) : [打开执行计划编辑视图](module/Base/extend_schedule#界面行为)
  * [扩展执行计划(EXTEND_SCHEDULE)](module/Base/extend_schedule) : [表格界面_删除操作](module/Base/extend_schedule#界面行为)

### 关联视图
  * [执行计划(extend_schedule_edit_view)](app/view/extend_schedule_edit_view)
  * [扩展计划任务(extend_scheduled_task_edit_view)](app/view/extend_scheduled_task_edit_view)
  * [扩展计划任务(extend_scheduled_task_grid_view)](app/view/extend_scheduled_task_grid_view)
  * [计划任务(extend_scheduled_task_tree_exp_view)](app/view/extend_scheduled_task_tree_exp_view)
  * [扩展任务类型(extend_task_type_grid_view)](app/view/extend_task_type_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>