# 页面选择(article_page_pick_up_tree_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图(tree)

##### 部件逻辑
* `onFilterNode`
```
const tree = view.getController('treeexpbar_tree');
// 隐藏搜索栏与底部工具栏
if (tree) {
    const toolbar = tree.layoutPanel.panelItems.toolbar;
    if (toolbar) {
        toolbar.state.visible = false;
    }
    const searchbar = tree.layoutPanel.panelItems.searchbar;
    if (searchbar) {
        searchbar.state.visible = false;
    }
}
```
* `onBack`
```
const tree = view.getController('treeexpbar_tree');
// 显示搜索栏与底部工具栏
if (tree) {
    const toolbar = tree.layoutPanel.panelItems.toolbar;
    if (toolbar) {
        toolbar.state.visible = true;
    }
    const searchbar = tree.layoutPanel.panelItems.searchbar;
    if (searchbar) {
        searchbar.state.visible = true;
    }
}
```


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>