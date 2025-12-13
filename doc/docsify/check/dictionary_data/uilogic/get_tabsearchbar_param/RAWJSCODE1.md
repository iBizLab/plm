<p class="panel-title"><b>执行代码</b></p>

```javascript
var tabsearchbar = uiLogic.tabsearchbar;
var catalog = tabsearchbar.state.selectedGroupItem.id
var type = ""

if (catalog == "work_item_pro") {
    catalog = "work_item_probability";
}
uiLogic.default.catalog = catalog;

if (catalog.includes("idea")) {
    type = "idea"
} else if (catalog.includes("ticket")) {
    type = "ticket"
} else if (catalog.includes("work_item")) {
    type = "work_item"
} else if (catalog.includes("test_case")) {
    type = "test_case"
}
uiLogic.default.type = type;

```
