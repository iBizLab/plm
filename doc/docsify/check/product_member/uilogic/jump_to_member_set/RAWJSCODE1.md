<p class="panel-title"><b>执行代码</b></p>

```javascript
// 如果当前视图打开方式为普通模态，则先关闭模态再跳转
if (view.modal && view.modal.mode === 'MODAL') {
	view.modal.ignoreDismissCheck = true
	view.closeView({ ok: true })
}
ibiz.openView.push(`/-/index/product=${context.product}/product_index_view/srfnav=usrdrgroup1228809432/product_details_setting_view/srfnav=root%3Anormal%3Amember/product_member_config_grid_view/-`);
```
