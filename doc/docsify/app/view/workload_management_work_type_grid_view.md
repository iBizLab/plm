# 工时(workload_management_work_type_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

##### 部件逻辑
* `onChange` : [重置上下文工时类型](module/Base/workload/uilogic/reset_workload_category)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onBeforeLoadDraft`
```javascript
const time = new Date();
const preTime = new Date(time.getTime() - 604800000);
const n_register_date_gtandeq = preTime.getFullYear() +'-' +(preTime.getMonth() + 1 < 10 ? '0' + (preTime.getMonth() + 1): preTime.getMonth() + 1) +'-' +(preTime.getDate() < 10 ? '0' + preTime.getDate() : preTime.getDate()) 
const n_register_date_ltandeq = time.getFullYear() +'-' +(time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1): time.getMonth() + 1) +'-' +(time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
const date_range = n_register_date_gtandeq + ',' + n_register_date_ltandeq;
Object.assign(viewParam, { n_register_date_gtandeq, n_register_date_ltandeq, date_range });
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [表格界面_导出操作（Excel）](module/Base/workload#界面行为)
  * [工时(WORKLOAD)](module/Base/workload) : [工作类别总登记时长链接跳转（管理）](module/Base/workload#界面行为)

### 关联界面逻辑
  * [工时(WORKLOAD)](module/Base/workload) : [重置上下文工时类型](module/Base/workload/uilogic/reset_workload_category)

### 关联视图
  * [工时(workload_edit_view)](app/view/workload_edit_view)
  * [修改预估工时(workload_forecast_quick_update_view)](app/view/workload_forecast_quick_update_view)
  * [工时(workload_redirect_view)](app/view/workload_redirect_view)
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