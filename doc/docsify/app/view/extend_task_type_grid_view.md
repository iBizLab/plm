# 扩展任务类型(extend_task_type_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [扩展任务类型(EXTEND_TASK_TYPE)](module/Base/extend_task_type) : [表格界面_新建操作](module/Base/extend_task_type#界面行为)

### 关联视图
  * [扩展任务类型(extend_task_type_edit_view)](app/view/extend_task_type_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>