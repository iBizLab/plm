<p class="panel-title"><b>执行代码</b></p>

```javascript
const tree = uiLogic.treeexpbar_tree;
if (tree) {
    const openview = (item) => {
        const nav_pos = uiLogic.view.layoutPanel.panelItems.nav_pos;
        if (nav_pos) {
            const context = tree.context.clone();
            Object.assign(context, {article_page: item.id})
            const openViewMsg = {
                viewId: "plmweb.article_page_show_view",
                fullPath: '',
                isCache: false,
                isRoutePushed: false,
                key: item.id,
                params: tree.params,
                context: context,
            }
            nav_pos.openView(openViewMsg)
        }
    }
    tree.setFilterData('草稿', uiLogic.items, openview);
}
```
