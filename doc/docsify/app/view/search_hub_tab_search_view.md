# 高级搜索(search_hub_tab_search_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 分页导航面板(tabexppanel)

## 视图界面逻辑
* `onMounted`
```javascript
const searchBar = view.getController('searchbar');
if (searchBar) {
searchBar.state.query = view.params.srfquery ? view.params.srfquery : '';
}
```
* `onCreated`
```javascript
view.ctx.evt.on('onRegister', (name, c) => {
    if(name==='tabexppanel'){
        c.state.expViewParams={query: viewParam.srfquery}
    }
});
```


### 关联视图
  * [页面(article_page_advanced_search_grid_view)](app/view/article_page_advanced_search_grid_view)
  * [需求(idea_advanced_search_grid_view)](app/view/idea_advanced_search_grid_view)
  * [附件搜索(search_attachment_advanced_search_grid_view)](app/view/search_attachment_advanced_search_grid_view)
  * [评论搜索(search_comment_advanced_search_grid_view)](app/view/search_comment_advanced_search_grid_view)
  * [用例(test_case_advanced_search_grid_view)](app/view/test_case_advanced_search_grid_view)
  * [工单(ticket_advanced_search_grid_view)](app/view/ticket_advanced_search_grid_view)
  * [工作项(work_item_advanced_search_grid_view)](app/view/work_item_advanced_search_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>