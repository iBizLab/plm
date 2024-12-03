# 工时(workload_calendar_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

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
  * [工时打开对应事项详情视图](module/Base/workload/uilogic/open_main_view)
  * newdata(预置新建数据逻辑)


### 关联视图
  * [工时(workload_edit_view)](app/view/workload_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>