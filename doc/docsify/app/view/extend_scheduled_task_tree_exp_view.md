# 计划任务(extend_scheduled_task_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [扩展执行计划(EXTEND_SCHEDULE)](module/Base/extend_schedule) : [打开执行计划编辑视图](module/Base/extend_schedule#界面行为)
  * [扩展执行计划(EXTEND_SCHEDULE)](module/Base/extend_schedule) : [表格界面_删除操作](module/Base/extend_schedule#界面行为)

### 关联视图
  * [执行计划(extend_schedule_edit_view)](app/view/extend_schedule_edit_view)
  * [扩展计划任务(extend_scheduled_task_edit_view)](app/view/extend_scheduled_task_edit_view)
  * [扩展计划任务(extend_scheduled_task_grid_view)](app/view/extend_scheduled_task_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>