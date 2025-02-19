# 资源分配(work_item_project_resource_gantt_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 甘特部件(gantt)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
* `onBeforeLoadDraft`
```javascript
// 获取当前日期
const currentDate = new Date();
// 根据指定日期获取该周的周一日期
const monday = new Date(currentDate);
monday.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1)); // 如果日期为周日，则减去6天
// 根据周一日期获取周末日期
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);
// 格式化周一和周日的日期  
const n_date_scope_gtandeq = monday.getFullYear() + '-' + (monday.getMonth() + 1 < 10 ? '0' + (monday.getMonth() + 1) : monday.getMonth() + 1) + '-' + (monday.getDate() < 10 ? '0' + monday.getDate() : monday.getDate());
const n_date_scope_ltandeq = sunday.getFullYear() + '-' + (sunday.getMonth() + 1 < 10 ? '0' + (sunday.getMonth() + 1) : sunday.getMonth() + 1) + '-' + (sunday.getDate() < 10 ? '0' + sunday.getDate() : sunday.getDate());
// 合并日期范围
const date_range = n_date_scope_gtandeq + ',' + n_date_scope_ltandeq;
Object.assign(viewParam, {
  n_date_scope_gtandeq,
  n_date_scope_ltandeq,
  date_range,
});
```


### 关联界面行为
  * [资源组件(ADDON_RESOURCE)](module/Base/addon_resource) : [项目容量设置](module/Base/addon_resource#界面行为)
  * [资源组件(ADDON_RESOURCE)](module/Base/addon_resource) : [项目资源成员设置(设置回显数据)](module/Base/addon_resource#界面行为)

### 关联视图
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>