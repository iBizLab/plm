# 页面(article_page_advanced_search_grid_pickview)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(tabsearchform)

##### 部件逻辑
* `onBeforeLoadDraft`
```
viewParam.queryconds=["n_name_like", "n_content_like"];
```

## 视图界面逻辑
* `onSelectionChange`
```javascript
console.log("");
data.forEach(item => {
  item.srfdename = 'article_page';
});
//获取选择视图
view.parentView.parentView.state['srfpickupdata'] = data;

```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [页面(article_page_edit_view)](app/view/article_page_edit_view)
  * [页面(article_page_model_show_view)](app/view/article_page_model_show_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>