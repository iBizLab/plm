<p class="panel-title"><b>执行代码</b></p>

```javascript
// 如果当前视图打开方式为普通模态，则先关闭模态再跳转
if(view.modal && view.modal.mode === 'MODAL'){
	view.modal.ignoreDismissCheck = true
	view.closeView({ ok: true })
}
ibiz.openView.push(`/-/index/project=${context.project}/project_redirect_view/-/project_setting_view/srfnav=member/project_member_config_grid_view/-`);
```
