# 扩展计划任务历史(extend_scheduled_task_his_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(tab_toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [扩展计划任务历史(EXTEND_SCHEDULED_TASK_HIS)](module/Base/extend_scheduled_task_his) : [表格界面_新建操作](module/Base/extend_scheduled_task_his#界面行为)

### 关联视图
  * [扩展计划任务历史(extend_scheduled_task_his_edit_view)](app/view/extend_scheduled_task_his_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>