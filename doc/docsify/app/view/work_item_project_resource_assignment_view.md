# 资源分配(work_item_project_resource_assignment_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
* `onBeforeLoadDraft`
```javascript
const today = new Date();
const currentDay = today.getDay(); 
const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1); 
const monday = new Date(today.setDate(diff)); 
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6); 
const n_date_scope_gtand = monday.getFullYear() + '-' + (monday.getMonth() + 1 < 10 ? '0' + (monday.getMonth() + 1) : monday.getMonth() + 1) + '-' + (monday.getDate() < 10 ? '0' + monday.getDate() : monday.getDate());
const n_date_scope_ltand = sunday.getFullYear() + '-' + (sunday.getMonth() + 1 < 10 ? '0' + (sunday.getMonth() + 1) : sunday.getMonth() + 1) + '-' + (sunday.getDate() < 10 ? '0' + sunday.getDate() : sunday.getDate());
const date_range = n_date_scope_gtand + ',' + n_date_scope_ltand;
Object.assign(viewParam, { n_date_scope_gtand, n_date_scope_ltand, date_range });

```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)
  * [工作项(work_item_main_view)](app/view/work_item_main_view)
  * [工作项(work_item_redirect_view)](app/view/work_item_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>