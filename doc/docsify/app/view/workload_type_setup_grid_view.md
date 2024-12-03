# 工时设置(workload_type_setup_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时类别(WORKLOAD_TYPE)](module/Base/workload_type) : [删除](module/Base/workload_type#界面行为)
  * [工时类别(WORKLOAD_TYPE)](module/Base/workload_type) : [新建类别](module/Base/workload_type#界面行为)
  * [工时类别(WORKLOAD_TYPE)](module/Base/workload_type) : [表格界面_编辑操作](module/Base/workload_type#界面行为)

### 关联视图
  * [确认删除(workload_type_confirm_remove_view)](app/view/workload_type_confirm_remove_view)
  * [新建类别(workload_type_quick_create_view)](app/view/workload_type_quick_create_view)
  * [编辑类别(workload_type_quick_edit_view)](app/view/workload_type_quick_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>