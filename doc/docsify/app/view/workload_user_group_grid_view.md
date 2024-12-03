# 工时(workload_user_group_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
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
  * [打开团队下成员工时日历](module/Base/workload/uilogic/open_group_member_calendar)
  * newdata(预置新建数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [表格界面_导出操作（Excel）](module/Base/workload#界面行为)
  * [工时(WORKLOAD)](module/Base/workload) : [团队维度表格列行为](module/Base/workload#界面行为)

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