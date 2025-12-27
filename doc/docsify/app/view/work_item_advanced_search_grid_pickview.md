# 工作项(work_item_advanced_search_grid_pickview)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(tabsearchform)

##### 部件逻辑
* `onBeforeLoadDraft`
```
viewParam.queryconds=["n_title_like", "n_identifier_like", "n_description_like"];
```

## 视图界面逻辑
* `onSelectionChange`
```javascript
console.log("");
// data.srfdename="work_item"
data.forEach(item => {
  item.srfdename = 'work_item';
});
// view.evt.emit('onSelectionChange', { data });
//获取选择视图
view.parentView.parentView.state['srfpickupdata'] = data;
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>