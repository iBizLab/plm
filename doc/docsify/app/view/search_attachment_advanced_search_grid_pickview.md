# 附件搜索(search_attachment_advanced_search_grid_pickview)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(tabsearchform)

## 视图界面逻辑
* `onSelectionChange`
```javascript

data.forEach(item => {
  item.srfdename = 'search_attachment';
});
//获取选择视图
view.parentView.parentView.state['srfpickupdata'] = data;
```
  * [打开详情视图](module/Base/search_attachment/uilogic/open_main_view)
  * newdata(预置新建数据逻辑)


### 关联界面逻辑
  * [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment) : [打开详情视图](module/Base/search_attachment/uilogic/open_main_view)

### 关联视图
  * [附件搜索(search_attachment_edit_view)](app/view/search_attachment_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>