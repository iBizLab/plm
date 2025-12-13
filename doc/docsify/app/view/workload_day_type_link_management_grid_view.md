# 工时日志(workload_day_type_link_management_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [工时打开对应事项详情视图](module/Base/workload#界面行为)

### 关联视图
  * [工时(workload_edit_view)](app/view/workload_edit_view)
  * [修改实际工时(workload_update_view)](app/view/workload_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>