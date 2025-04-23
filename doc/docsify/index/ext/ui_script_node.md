
## 使用脚本的界面逻辑节点<sup class="footnote-symbol"> <font color=orange>[458]</font></sup>

#### [资源组件(ADDON_RESOURCE)](module/Base/addon_resource)的处理逻辑[资源删除逻辑(resource_del)](module/Base/addon_resource/uilogic/resource_del)

节点：计算删除的资源标识
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.default.id === context.cur_resource) {
    context.srfdefaulttoroutedepth = 2;
    context.addon_resource = 'all_resource';
}
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[添加附件数据(表格)(add_attachment_grid)](module/Base/attachment/uilogic/add_attachment_grid)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件删除(remove_attachment)](module/Base/attachment/uilogic/remove_attachment)

节点：设置附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: uiLogic.default, silent: true };
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件删除（表格）(remove_attachment_grid)](module/Base/attachment/uilogic/remove_attachment_grid)

节点：设置附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: data, silent: true };
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[添加附件数据（移动端）(mob_add_attachment)](module/Base/attachment/uilogic/mob_add_attachment)

节点：设置附件列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = uiLogic.files.map(item =>{
	return {
	  name: item.name,
	  file_id: item.id,
	  id: item.uuid,
	}
})
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[添加附件数据（移动端）(mob_add_attachment)](module/Base/attachment/uilogic/mob_add_attachment)

节点：显示
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.mdctrl.state.visible = true
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件预览(attachment_preview)](module/Base/attachment/uilogic/attachment_preview)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const url = window.location;
var file_name = uiLogic.default.name;
var file_id = uiLogic.default.id;
var file_preview_address = ibiz.env.customParams.file_preview_address;

if (file_preview_address !== null && file_preview_address !== undefined && file_preview_address !== '') {
    const windowInfo = getCurrentWindowInfo(url);

    let uploadUrl = `${ibiz.env.baseUrl}/${ibiz.env.appId}${ibiz.env.downloadFileUrl}`;
    const app = ibiz.hub.getApp(context.srfappid);
    const OSSCat = app.model.userParam?.DefaultOSSCat;
    uploadUrl = uploadUrl.replace('/{cat}', OSSCat ? `/${OSSCat}` : '');

    var filedownloadurl = windowInfo + uploadUrl + '/'+file_id+'?fullfilename='+file_name;

    var b64Encoded = ibiz.util.base64.encode(filedownloadurl);
    var previewUrl = file_preview_address + '/onlinePreview?url='+encodeURIComponent(b64Encoded);

    window.open(previewUrl);
} else {
  util.message.error('无附件预览服务，请联系管理员添加!');
}

function getCurrentWindowInfo(url) {
    const protocol = url.protocol;
    const host = url.hostname; 
    const port = url.port || (protocol === "https:" ? "443" : "80"); 
    const isIPAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(host);
    if (isIPAddress) {
        return  protocol +"//" + host + ":" + port ;
    } else {
        return  protocol +"//" + host + ":" + port ;
    }
}
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件删除（移动端）(mob_remove_attachment)](module/Base/attachment/uilogic/mob_remove_attachment)

节点：设置附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: uiLogic.default, silent: true };
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件删除（移动端）(mob_remove_attachment)](module/Base/attachment/uilogic/mob_remove_attachment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("附件数据",uiLogic.attach)
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[计算附件是否隐藏逻辑(calc_attachment_hidden)](module/Base/attachment/uilogic/calc_attachment_hidden)

节点：上下文中srfreadonly禁用删除附件行为
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.mdController.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
        // 删除附件行为禁用
		const uiActionId = row.uaColStates.uagridcolumn1.u44d00e2;
        if(srfreadonly == true && uiActionId.hasOwnProperty('disabled')){
            uiActionId.disabled = true;
        }    
	})
}	

```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[关注人员更新（移动端）(attention_personnel_update)](module/Base/attention/uilogic/attention_personnel_update)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const default_data =uiLogic.default;
let select_data =uiLogic.select_data;
for (let i = 0; i < default_data.length; i++){
  select_data.push(default_data[i]);
  select_data[i].owner_id = uiLogic.ctx.principal_id;
  if(default_data[i].user_id){
    select_data[i].user_id = default_data[i].user_id;
  }else{
    select_data[i].user_id = default_data[i].srfkey;
  }
  
}

```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[关注人员更新（移动端）(attention_personnel_update)](module/Base/attention/uilogic/attention_personnel_update)

节点：先暂时先删后加
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmmob.attention');
    const list = service.local.getList();
    // 临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
        
    })
    } 
)();

```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[关注人员更新（移动端）(attention_personnel_update)](module/Base/attention/uilogic/attention_personnel_update)

节点：缓存数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
var attentions = uiLogic.commit_object.attentions;
for (var i = 0; i < attentions.length; i++) {
    ibiz.hub.getApp(context.srfappid).deService.exec(
        'plmmob.attention',
        'Create',
        context,
        uiLogic.commit_object.attentions[i],
    );
}

```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[关注人员更新（移动端）(attention_personnel_update)](module/Base/attention/uilogic/attention_personnel_update)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey:context.principal_id})
```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[关注人员更新（移动端）(attention_personnel_update)](module/Base/attention/uilogic/attention_personnel_update)

节点：刷新页面实体
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: "article_page",srfkey:context.principal_id})
```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[取消关注（移动端）(un_attention)](module/Base/attention/uilogic/un_attention)

节点：删除
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmmob.attention');
    const list = service.local.getList();
    var attention_data = uiLogic.attention_data;
    // 临时数据删除
    list.forEach(item => {
        if(item.id ==uiLogic.default.id){
            service.local.delete(context, item.id);
        }else{
            attention_data.push(item);
        }
    })
    } 
)();

```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[取消关注（移动端）(un_attention)](module/Base/attention/uilogic/un_attention)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey:context.principal_id})
```
#### [关注(ATTENTION)](module/Base/attention)的处理逻辑[取消关注（移动端）(un_attention)](module/Base/attention/uilogic/un_attention)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: "article_page",srfkey:context.principal_id})
```
#### [基线(BASELINE)](module/Base/baseline)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/Base/baseline/uilogic/calc_column_action_state)

节点：根据状态是否显示设立完成行为
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.name;
		const status = row.data.status;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				// 设立完成
				if (action.uiActionId === 'set_complete_library@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_project@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_product@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_space@baseline') {
					action.visible = status == '1';
				}
			})
		}
	})
}	

```
#### [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)的处理逻辑[返回(back)](module/TestMgmt/baseline_test_case/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.baseline.state.visible=false;

```
#### [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)的处理逻辑[规划快照查看(plan_snapshot_check)](module/ProjMgmt/baseline_work_item/uilogic/plan_snapshot_check)

节点：设立基线按钮不显示
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.toolbar.state.visible = false;
```
#### [看板(BOARD)](module/ProjMgmt/board)的处理逻辑[看板删除逻辑(board_remove)](module/ProjMgmt/board/uilogic/board_remove)

节点：计算删除看板标识
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.default.id === context.curboard) {
    context.srfdefaulttoroutedepth = 3;
    context.board = context.project;
}
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[控制评论按钮显示（知识库）(comment_icon_show_wiki)](module/Base/comment/uilogic/comment_icon_show_wiki)

节点：控制评论按钮显示（知识库）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.send = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_send.state;
uiLogic.reset = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_cancel.state;
uiLogic.icon = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_icon.state;
uiLogic.icon.visible = false;
uiLogic.send.visible = uiLogic.context.srfreadonly !== true;
uiLogic.reset.visible = uiLogic.context.srfreadonly !== true;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[添加回复(客户沟通)(add_comment_client)](module/Base/comment/uilogic/add_comment_client)

节点：设置评论输入框默认展开
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.clear();
uiLogic.view.edit_comment_id=null;
uiLogic.view.reply_comment_id=null;
uiLogic.comment.toggleCollapse(true);
uiLogic.comment.focus();
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[编辑评论(edit_comment)](module/Base/comment/uilogic/edit_comment)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.toggleCollapse(true);
uiLogic.comment.setValue(uiLogic.default.content);
uiLogic.comment.reply.value = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[获取客户沟通总条数(get_customer_comment_total)](module/Base/comment/uilogic/get_customer_comment_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
const totalEditor=uiLogic.view.layoutPanel.panelItems.total;
if (totalEditor) {
    totalEditor.setDataValue(total);
}
if(!total){
    uiLogic.ctrl.state.visible = false
}else{
    uiLogic.ctrl.state.visible = true
}
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[获取列表总条数(get_list_total)](module/Base/comment/uilogic/get_list_total)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.items.length;
uiLogic.view.layoutPanel.state.data.total = total;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[回复评论（移动端）(reply_comment_mob)](module/Base/comment/uilogic/reply_comment_mob)

节点：展开评论输入框并设值回复
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment = uiLogic.view.layoutPanel.panelItems.field_textbox.editor;
const _app = ibiz.hub.getApp(context.srfappid);
_app.codeList.get('SysOperator', context, params).then(items => {
	const create_man = uiLogic.default.create_man;
	const findItem = items.find(item => item.value == create_man);
	const name = findItem ? findItem.text : create_man;
	const content = uiLogic.default.content;
	uiLogic.comment.setReply({name, content});
	uiLogic.comment.toggleCollapse(true);
})
uiLogic.view.edit_comment_id='';
uiLogic.view.reply_comment_id=uiLogic.default.id;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论（移动端）(send_comment_mob)](module/Base/comment/uilogic/send_comment_mob)

节点：获取评论框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论（移动端）(send_comment_mob)](module/Base/comment/uilogic/send_comment_mob)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.clearReply();
// uiLogic.editor.toggleCollapse(false)

```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论（移动端）(send_comment_mob)](module/Base/comment/uilogic/send_comment_mob)

节点：填入临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmmob.comment',
    'Create',
    context,
    uiLogic.comment,
);

```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论（移动端）(send_comment_mob)](module/Base/comment/uilogic/send_comment_mob)

节点：通知刷新主表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey: context.principal_id})
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论（移动端）(send_comment_mob)](module/Base/comment/uilogic/send_comment_mob)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: "article_page",srfkey:context.principal_id})
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[回复评论(reply_comment)](module/Base/comment/uilogic/reply_comment)

节点：展开评论输入框并设值回复
<p class="panel-title"><b>执行代码</b></p>

```javascript
const _app = ibiz.hub.getApp(context.srfappid);
_app.codeList.get('SysOperator', context, params).then(items => {
	const create_man = uiLogic.default.create_man;
	const findItem = items.find(item => item.value == create_man);
	const name = findItem ? findItem.text : create_man;
	const content = uiLogic.default.content;
	uiLogic.comment.setReply({name, content});
	uiLogic.comment.toggleCollapse(true);
})
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[编辑评论（知识库）(edit_comment_wiki)](module/Base/comment/uilogic/edit_comment_wiki)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.editor;
uiLogic.comment.toggleCollapse(true);
uiLogic.comment.setValue(uiLogic.default.content);
uiLogic.comment.reply.value = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(send_comment)](module/Base/comment/uilogic/send_comment)

节点：获取评论框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(send_comment)](module/Base/comment/uilogic/send_comment)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.reply.value = null;
uiLogic.editor.toggleCollapse(false)

```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[清空评论(客户沟通)(clear_comment_client)](module/Base/comment/uilogic/clear_comment_client)

节点：清空评论(客户沟通)
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.client_field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.client_field_textbox.data.client_field_textbox = '';
uiLogic.commentcustomer_connect_list_view.edit_comment_id = null;
uiLogic.commentcustomer_connect_list_view.reply_comment_id = null;
uiLogic.editor.reply.value = null;
const panelItems = view.layoutPanel.panelItems;
panelItems.client_panel_container.state.visible = false;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(知识库)(send_comment_wiki)](module/Base/comment/uilogic/send_comment_wiki)

节点：获取评论框内容和编辑器对象
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.value;
uiLogic.editor = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.editor
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(知识库)(send_comment_wiki)](module/Base/comment/uilogic/send_comment_wiki)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.reply.value = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(知识库)(send_comment_wiki)](module/Base/comment/uilogic/send_comment_wiki)

节点：刷新评论列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.send({ srfdecodename: 'comment' }, 'OBJECTUPDATED');
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[清空评论（知识库）(clear_comment_wiki)](module/Base/comment/uilogic/clear_comment_wiki)

节点：清空评论（知识库）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.editor.clear();
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[清空评论(clear_comment)](module/Base/comment/uilogic/clear_comment)

节点：清空评论
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.editor.clear();
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(客户沟通)(send_comment_customer_comment)](module/Base/comment/uilogic/send_comment_customer_comment)

节点：获取评论框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.client_field_textbox.value;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(客户沟通)(send_comment_customer_comment)](module/Base/comment/uilogic/send_comment_customer_comment)

节点：刷新沟通列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'ticket'})
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(客户沟通)(send_comment_customer_comment)](module/Base/comment/uilogic/send_comment_customer_comment)

节点：隐藏评论区
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panelItems = view.layoutPanel.panelItems;
panelItems.client_panel_container.state.visible = false;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(客户沟通)(send_comment_customer_comment)](module/Base/comment/uilogic/send_comment_customer_comment)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.client_field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.client_field_textbox.data.client_field_textbox = '';
uiLogic.commentcustomer_connect_list_view.edit_comment_id = null;
uiLogic.commentcustomer_connect_list_view.reply_comment_id = null;
uiLogic.editor.reply.value = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[控制评论按钮隐藏（知识库）(comment_icon_hidden_wiki)](module/Base/comment/uilogic/comment_icon_hidden_wiki)

节点：控制评论按钮隐藏（知识库）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.send = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_send.state;
uiLogic.reset = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_cancel.state;
uiLogic.icon = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_icon.state;
const text_box = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox;


uiLogic.send.visible = uiLogic.context.srfreadonly !== true && text_box.value ? true : false;
uiLogic.reset.visible = uiLogic.context.srfreadonly !== true && text_box.value ? true : false;
uiLogic.icon.visible = text_box.value ? false : true;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[刷新评论列表（移动端）(refresh_comment)](module/Base/comment/uilogic/refresh_comment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
'plmmob.comment',
'Update',
context,
uiLogic.Default,
);
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[回复评论（知识库）(reply_comment_wiki)](module/Base/comment/uilogic/reply_comment_wiki)

节点：展开评论输入框并设值回复
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.editor;
const _app = ibiz.hub.getApp(context.srfappid);
_app.codeList.get('SysOperator', context, params).then(items => {
	const create_man = uiLogic.default.create_man;
	const findItem = items.find(item => item.value == create_man);
	const name = findItem ? findItem.text : create_man;
	const content = uiLogic.default.content;
	uiLogic.comment.setReply({name, content});
	uiLogic.comment.toggleCollapse(true);
})
uiLogic.view.edit_comment_id='';
uiLogic.view.reply_comment_id=uiLogic.default.id;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[编辑评论（知识库）(客户沟通)(edit_comment_wiki_client)](module/Base/comment/uilogic/edit_comment_wiki_client)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.toggleCollapse(true);
uiLogic.comment.setValue(uiLogic.default.content);
uiLogic.comment.reply.value = null;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[回复评论（知识库）(客户沟通)(reply_comment_wiki_client)](module/Base/comment/uilogic/reply_comment_wiki_client)

节点：展开评论输入框并设值回复
<p class="panel-title"><b>执行代码</b></p>

```javascript
const _app = ibiz.hub.getApp(context.srfappid);
_app.codeList.get('SysOperator', context, params).then(items => {
	const create_man = uiLogic.default.create_man;
	const findItem = items.find(item => item.value == create_man);
	const name = findItem ? findItem.text : create_man;
	const content = uiLogic.default.content;
	uiLogic.comment.setReply({name, content});
	uiLogic.comment.toggleCollapse(true);
})
uiLogic.view.edit_comment_id='';
uiLogic.view.reply_comment_id=uiLogic.default.id;
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[需求关联客户(idea_relation_customer)](module/ProdMgmt/customer/uilogic/idea_relation_customer)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_level = view.layoutPanel.panelItems.choose_level.value;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
// 重要程度
if (choose_level != null && choose_level != '') {
    uiLogic.dto.level = choose_level;
}
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[需求关联客户(idea_relation_customer)](module/ProdMgmt/customer/uilogic/idea_relation_customer)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[需求关联客户(idea_relation_customer)](module/ProdMgmt/customer/uilogic/idea_relation_customer)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[需求关联客户(idea_relation_customer)](module/ProdMgmt/customer/uilogic/idea_relation_customer)

节点：刷新主视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'idea', srfkey: context.idea})
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[返回(back)](module/ProdMgmt/customer/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel9.state.visible=false;

```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[触发计数器刷新(refresh_counter)](module/ProdMgmt/customer/uilogic/refresh_counter)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[获取客户分数(初始化使用)(get_customer_score_2)](module/ProdMgmt/customer/uilogic/get_customer_score_2)

节点：设置客户分数值
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.state.data.score_precent = uiLogic.result.score_precent
view.layoutPanel.state.data.score = uiLogic.result.score
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/Base/deliverable/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.create_time;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
                        console.log("123")
					    // 提交
					    if (action.uiActionId === 'submit_form@deliverable') {
                            action.disabled = true;
                        }
                        // 删除
					    if (action.uiActionId === 'del_form@deliverable') {
                            action.disabled = true;
                        }
                        // 提交
					    if (action.uiActionId === 'submit@deliverable') {
                            action.visible = false;
                        }
                        // 删除
					    if (action.uiActionId === 'del@deliverable') {
                            action.visible = false;;
                        }
                        // 编辑
					    if (action.uiActionId === 'edit@deliverable') {
                            action.visible = false;;
                        }
					}
				})
			}
		})
	}
}, 1000);
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[提交（表单中）(submit_form)](module/Base/deliverable/uilogic/submit_form)

节点：获取文件名称
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.default.name = uiLogic.files[0].name;
uiLogic.default.file_id = uiLogic.files[0].id;
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[提交（表单中）(submit_form)](module/Base/deliverable/uilogic/submit_form)

节点：提交（表单中）
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.deliverable',
    'update',
    context,
    uiLogic.default,
);
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[通知刷新（移动端）(notify_refresh)](module/Base/deliverable/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'deliverable'})
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[提交(submit)](module/Base/deliverable/uilogic/submit)

节点：获取文件名称
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.default.name = uiLogic.files[0].name;
uiLogic.default.file_id = uiLogic.files[0].id;
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[计算交付物表格列行为状态(calc_grid_column_action_state)](module/Base/deliverable/uilogic/calc_grid_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.title;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 提交
					    if (action.uiActionId === 'submit_form@deliverable') {
                            action.disabled = true;
                        }
                        // 删除
					    if (action.uiActionId === 'del_form@deliverable') {
                            action.disabled = true;
                        }
                        // 提交
					    if (action.uiActionId === 'submit@deliverable') {
                            action.visible = false;
                        }
                        // 删除
					    if (action.uiActionId === 'del_grid@deliverable') {
                            action.visible = false;;
                        }
                        // 编辑
					    if (action.uiActionId === 'edit@deliverable') {
                            action.visible = false;;
                        }
					}
				})
			}
		})
	}
}, 1000);
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[输入框区域隐藏(hidden_input_area)](module/Base/deliverable/uilogic/hidden_input_area)

节点：输入框区域隐藏
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.input_data.value="";
uiLogic.view.layoutPanel.panelItems.container1.state.visible=false;
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[获取交付目标总条数(get_deliverable_total)](module/Base/deliverable/uilogic/get_deliverable_total)

节点：获取交付目标总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.total.data.total = uiLogic.view.layoutPanel.panelItems.grid.control.state.items.length;
if(uiLogic.view.layoutPanel.panelItems.total.data.total == 0){
    view.layoutPanel.panelItems.grid.state.visible = false
}else{
    view.layoutPanel.panelItems.grid.state.visible = true
}

```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[获取交付目标总条数(get_deliverable_total)](module/Base/deliverable/uilogic/get_deliverable_total)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item'})
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[删除（表单中）(del)](module/Base/deliverable/uilogic/del)

节点：执行删除方法
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.deliverable',
    'remove',
    context,
    uiLogic.default,
);


```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[删除（表单中）(del)](module/Base/deliverable/uilogic/del)

节点：根据条件隐藏表格
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.view.layoutPanel.panelItems.total.data.total == 0){
    view.layoutPanel.panelItems.grid.state.visible = false;
}
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[新建交付目标(create_deliverable)](module/Base/deliverable/uilogic/create_deliverable)

节点：添加交付物实体临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.grid.state.visible = true;
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.deliverable',
    'create',
    context,
    uiLogic.deliverable,
);

```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[输入框区域展示(show_input_area)](module/Base/deliverable/uilogic/show_input_area)

节点：输入框区域展示
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.container1.state.visible=true;
```
#### [数据字典(DICTIONARY)](module/Base/dictionary_data)的处理逻辑[判断操作列是否禁用(judge_column_state)](module/Base/dictionary_data/uilogic/judge_column_state)

节点：判断操作列是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    console.log(rows);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const is_system = row.data.is_system;
					 if (is_system === 1) {
						// 禁用
                        row.uaColStates.uagridcolumn1.visible = false;
                        Object.values(row.uaColStates.uagridcolumn1).forEach(item => {
                            item.visible = false;
                            item.disabled = true;
                        })
					} 	
		})
	}

```
#### [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member)的处理逻辑[新建协作默认临时成员(create_default_temp_members)](module/Team/discuss_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.discuss_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[编辑回复(edit_reply)](module/Team/discuss_post/uilogic/edit_reply)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript

uiLogic.editor.toggleCollapse(true);
uiLogic.editor.setValue(uiLogic.default.content);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[讨论关闭时隐藏回复输入框(status_control_visible)](module/Team/discuss_post/uilogic/status_control_visible)

节点：判断回复框是否显示并填充附加属性
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems; // 视图面板对象
// 回复框是否显示
panel.container_comment.state.visible = (panel.form.control.state.data.status == '1');
panel.form.control.state.data.discuss_num = uiLogic.default.discuss_num;
panel.form.control.state.data.reply_num = uiLogic.default.reply_num;
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[删除讨论下评论(del_comment)](module/Team/discuss_post/uilogic/del_comment)

节点：回复数量-1
<p class="panel-title"><b>执行代码</b></p>

```javascript

var comment_count = uiLogic.ctrl.formItems.comment_count;
if (comment_count.value == 1) {
    uiLogic.ctrl.formItems.comments.state.visible = false;
    comment_count.value = 0;
    comment_count.state.visible = false;
} else {
    comment_count.value = comment_count.value - 1;
}
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[添加回复(add_reply)](module/Team/discuss_post/uilogic/add_reply)

节点：获取回复框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.discuss_reply.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[添加回复(add_reply)](module/Team/discuss_post/uilogic/add_reply)

节点：修改讨论下的comments
<p class="panel-title"><b>执行代码</b></p>

```javascript
debugger;
var comments_control = uiLogic.view.layoutPanel.panelItems.form.control.formItems.find(item => item.name == "comments").editor;
var comment = uiLogic.comment;
if (view.operation_type == "send_post_comment") {
    comments_control.addItem(comment);
} else if (view.operation_type == "edit_post_comment") {
    comments_control.deleteItem(comment.comment_id);
    comments_control.addItem(comment);
}
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[添加回复(add_reply)](module/Team/discuss_post/uilogic/add_reply)

节点：修改回复下的comments
<p class="panel-title"><b>执行代码</b></p>

```javascript
null
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[添加回复(add_reply)](module/Team/discuss_post/uilogic/add_reply)

节点：清空回复框与回复id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.operation_type = null;
uiLogic.view.operation_id = null;
uiLogic.view.reply_id = null;
uiLogic.editor.reply.value = null;
uiLogic.editor.toggleCollapse(false)

```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[编辑讨论下评论(edit_comment)](module/Team/discuss_post/uilogic/edit_comment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 获取底部编辑器，设置打开状态并设置值

var editor = uiLogic.view.layoutPanel.panelItems.field_textbox.editor;
editor.toggleCollapse(true);
editor.setValue(uiLogic.default.content);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[刷新(refresh)](module/Team/discuss_post/uilogic/refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'discuss_post', srfkey: context.principal_id});
ibiz.mc.command.update.send({ srfdecodename: 'discuss_reply', srfkey: context.principal_id})
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[编辑回复下评论(edit_reply_comment)](module/Team/discuss_post/uilogic/edit_reply_comment)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript

uiLogic.editor.toggleCollapse(true);
uiLogic.editor.setValue(uiLogic.default.content);
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送评论（移动端讨论）(send_comment_mob)](module/Team/discuss_post/uilogic/send_comment_mob)

节点：获取评论框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox1.value;
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送评论（移动端讨论）(send_comment_mob)](module/Team/discuss_post/uilogic/send_comment_mob)

节点：通知刷新主表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey: context.principal_id})
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送评论（移动端讨论）(send_comment_mob)](module/Team/discuss_post/uilogic/send_comment_mob)

节点：填入临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmmob.comment',
    'Create',
    context,
    uiLogic.comment,
);

```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送评论（移动端讨论）(send_comment_mob)](module/Team/discuss_post/uilogic/send_comment_mob)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox1.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox1 = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.clearReply();
view.layoutPanel.panelItems.send_comment_container.state.visible=false;
view.layoutPanel.panelItems.comment_container.state.visible=true;

```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[清空回复(clear_reply)](module/Team/discuss_post/uilogic/clear_reply)

节点：清空回复
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.editor.clear();
uiLogic.view.edit_comment_id = null;
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送讨论下评论(send_comment)](module/Team/discuss_post/uilogic/send_comment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 获取底部编辑器，设置打开状态并设置空值

var editor = uiLogic.view.layoutPanel.panelItems.field_textbox.editor;
editor.toggleCollapse(true);
editor.setValue(" ");
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[刷新（移动端）(mob_refresh)](module/Team/discuss_post/uilogic/mob_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'discuss_post', srfkey: context.discuss_post});
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[添加附件数据(add_attachment)](module/Team/discuss_post/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[发送回复下评论(send_reply_comment)](module/Team/discuss_post/uilogic/send_reply_comment)

节点：展开评论输入框并设值
<p class="panel-title"><b>执行代码</b></p>

```javascript

uiLogic.editor.toggleCollapse(true);
uiLogic.editor.setValue(" ");
```
#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[回复下删除评论(rely_del_comment)](module/Team/discuss_reply/uilogic/rely_del_comment)

节点：回复数量-1
<p class="panel-title"><b>执行代码</b></p>

```javascript

var comments_count = uiLogic.ctrl.panelItems.comment_count;
if (comments_count.value == 1) {
    uiLogic.ctrl.panelItems.comments.state.visible = false;
    comments_count.value = 0;
    comments_count.state.visible = false;
} else {
    comments_count.value = comments_count.value - 1;
}
```
#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[获取回复列表总条数（移动端）(mob_get_reply_total)](module/Team/discuss_reply/uilogic/mob_get_reply_total)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.items.length;
uiLogic.view.layoutPanel.state.data.total = total;
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[计算表格列行为状态(discuss_topic)(calc_column_action_state)](module/Team/discuss_topic/uilogic/calc_column_action_state)

节点：依据is_favorite显示星标按钮
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.name;
		const is_favorite = row.data.is_favorite;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				// 星标
				if (action.uiActionId === 'add_favorite@discuss_topic') {
					action.visible = is_favorite == 0;
				} else if (action.uiActionId === 'cancel_favorite@discuss_topic') {
					// 取消星标
					action.visible = is_favorite != 0;
				}
			})
		}
	})
}

```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[通知刷新(notify_refresh)](module/Team/discuss_topic/uilogic/notify_refresh)

节点：通知实体刷新界面
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'discuss_topic', srfkey: params.owner_id})
```
#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[批量删除话题成员临时数据(remove_batch_temp)](module/Team/discuss_topic/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.discuss_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[仪表盘操作列(control_del)](module/Base/dyna_dashboard/uilogic/control_del)

节点：剩余一个仪表盘禁止删除
<p class="panel-title"><b>执行代码</b></p>

```javascript
  const rows = uiLogic.grid.state.rows;
//   console.log(rows);
  if (rows && rows.length === 1) {
    rows.forEach(row => {
        row.uaColStates.uagridcolumn1.u36f5de4.disabled = true
    })
  }
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[通知刷新(notify_refresh)](module/Base/dyna_dashboard/uilogic/notify_refresh)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'dynadashboard'})
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(禁止关闭)(use_cur_template_no_closed)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'insight_view', srfkey: context.insight_view})
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(禁止关闭)(use_cur_template_no_closed)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)

节点：设置上下文
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.selecteddata && uiLogic.selecteddata.length >0){
    uiLogic.ctx.dynadashboard = uiLogic.selecteddata[0].dynadashboardid;
    uiLogic.dyna_dashboard_info = uiLogic.selecteddata[0];
    uiLogic.dyna_dashboard_info.owner_id = uiLogic.ctx.insight_view_id;
}
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(禁止关闭)(use_cur_template_no_closed)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)

节点：打开视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
const new_dynadashboard = uiLogic.new_dynadashboard;
const insight_view_id = context.insight_view_id;
const dyna_dashboard_id = new_dynadashboard.dyna_dashboard_id;
 window.location.hash= `/-/index/insight_view=${insight_view_id}/insight_view_index_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmweb.insight_view_all_grid_view%2540plmweb.insight_view.all_grid_view_grid%2522%257D;srfnav=usrdrgroup0517936766/insight_view_custom_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%252C%2522dyna_dashboard%2522%253A%2522${dyna_dashboard_id}%2522%257D`


```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(禁止关闭)(use_cur_template_no_closed)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)

节点：关闭当前视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.state.isLoading = false;
view.closeView();
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[使用此模板(禁止关闭)(use_cur_template_no_closed)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'dynadashboard'})
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[列表加载完成(list_load_success)](module/Base/dyna_dashboard/uilogic/list_load_success)

节点：设置默认仪盘表标题
<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectData = uiLogic.ctrl.state.selectedData;
if(selectData != null &&  selectData.length > 0){
    const firstObject = selectData[0];
    if(firstObject.dyna_dashboard_name != null && firstObject.dyna_dashboard_name != undefined){
        view.layoutPanel.panelItems.board_title.setDataValue(firstObject.dyna_dashboard_name);
    }  
}
```
#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[获取选中模板名称(fill_choosed_board_name)](module/Base/dyna_dashboard/uilogic/fill_choosed_board_name)

节点：设置仪表盘标题
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.board_title.setDataValue(uiLogic.ctrl.inputData.dyna_dashboard_name);


```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[计算表格列行为状态(idea)(calc_column_action_state)](module/ProdMgmt/idea/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@project') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@project') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[新建需求并关联客户(create_and_relation_customer)](module/ProdMgmt/idea/uilogic/create_and_relation_customer)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.customer;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = choose.split(',').map(id => ({ id }));
    uiLogic.dto.principal_id = uiLogic.idea.id;
    uiLogic.dto.id = uiLogic.idea.id;
    uiLogic.dto.principal_type = "idea";
    uiLogic.dto.target_type = "customer";
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[新建需求并关联客户(create_and_relation_customer)](module/ProdMgmt/idea/uilogic/create_and_relation_customer)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript

ibiz.mc.command.update.send({ srfdecodename: 'idea', srfkey: context.idea})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProdMgmt/idea/uilogic/toolbar_link_ticket)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_ticket'
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProdMgmt/idea/uilogic/toolbar_link_ticket)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[上传附件（工具栏）(toolbar_add_attachment)](module/ProdMgmt/idea/uilogic/toolbar_add_attachment)

节点：上传附件（工具栏）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpage1'
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProdMgmt/idea/uilogic/toolbar_link_work_item)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_work_item'
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProdMgmt/idea/uilogic/toolbar_link_work_item)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取工单数量(get_ticket_num)](module/ProdMgmt/idea/uilogic/get_ticket_num)

节点：设置值至表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
let count_num = uiLogic.result.count_num
let sum_num = uiLogic.result.sum_num
if (count_num == '' || count_num == 0) {
    view.layoutPanel.panelItems.form.control.data.ticket_num = '0/0'
    view.layoutPanel.panelItems.form.control.data.ticket_num_percent = 0
} else {
    view.layoutPanel.panelItems.form.control.data.ticket_num = sum_num + '/' + count_num
    view.layoutPanel.panelItems.form.control.data.ticket_num_percent = sum_num / count_num
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[查看工单统计信息(check_ticket_info)](module/ProdMgmt/idea/uilogic/check_ticket_info)

节点：切换显示组件(主界面)
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel12.state.visible=true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[查看工单统计信息(check_ticket_info)](module/ProdMgmt/idea/uilogic/check_ticket_info)

节点：切换显示组件(关系界面)
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.parent.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.parent.controllersMap.get("form").details.grouppanel12.state.visible=true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[需求展示评论显隐控制(idea_comment_visible)](module/ProdMgmt/idea/uilogic/idea_comment_visible)

节点：评论显隐控制
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.view.layoutPanel.panelItems.list.control.state.items.length==0){
    uiLogic.view.parentView.layoutPanel.panelItems.form.control.details.grouppanel3.state.visible=false
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[通知刷新(flush)](module/ProdMgmt/idea/uilogic/flush)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'idea'})
console.log('通知刷新',params)
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联测试用例（工具栏）(toolbar_link_test_case)](module/ProdMgmt/idea/uilogic/toolbar_link_test_case)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_test_case'
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联测试用例（工具栏）(toolbar_link_test_case)](module/ProdMgmt/idea/uilogic/toolbar_link_test_case)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取表格总条数(get_grid_total)](module/ProdMgmt/idea/uilogic/get_grid_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;
if(!total){
    view.layoutPanel.panelItems.grid.state.visible = false;
}else{
    view.layoutPanel.panelItems.grid.state.visible = true;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[查看工时明细(check_workload_detail)](module/ProdMgmt/idea/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel9.state.visible=true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工单关联需求(ticket_relation_idea)](module/ProdMgmt/idea/uilogic/ticket_relation_idea)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_level = view.layoutPanel.panelItems.choose_level.value;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
// 重要程度
if (choose_level != null && choose_level != '') {
    uiLogic.dto.level = choose_level;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工单关联需求(ticket_relation_idea)](module/ProdMgmt/idea/uilogic/ticket_relation_idea)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工单关联需求(ticket_relation_idea)](module/ProdMgmt/idea/uilogic/ticket_relation_idea)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[门户编辑(edit_to_design)](module/ProdMgmt/idea/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[门户编辑(edit_to_design)](module/ProdMgmt/idea/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[用例关联需求(test_case_relation_idea)](module/ProdMgmt/idea/uilogic/test_case_relation_idea)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[用例关联需求(test_case_relation_idea)](module/ProdMgmt/idea/uilogic/test_case_relation_idea)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[用例关联需求(test_case_relation_idea)](module/ProdMgmt/idea/uilogic/test_case_relation_idea)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[需求关联需求(idea_relation_idea)](module/ProdMgmt/idea/uilogic/idea_relation_idea)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
    uiLogic.viewctx.product = view.context.curproduct;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[需求关联需求(idea_relation_idea)](module/ProdMgmt/idea/uilogic/idea_relation_idea)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[需求关联需求(idea_relation_idea)](module/ProdMgmt/idea/uilogic/idea_relation_idea)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[门户刷新(portlet_refresh)](module/ProdMgmt/idea/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[显示表单侧边栏(show_form_sidebar)](module/ProdMgmt/idea/uilogic/show_form_sidebar)

节点：显示侧边栏
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;

```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/idea/uilogic/work_item_relation_idea)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/idea/uilogic/work_item_relation_idea)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/idea/uilogic/work_item_relation_idea)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取客户分数(get_customer_score)](module/ProdMgmt/idea/uilogic/get_customer_score)

节点：获取客户分数
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.form.control.data.customer_score = uiLogic.result.customer_score
view.layoutPanel.panelItems.form.control.data.customer_score_precent = uiLogic.result.customer_score_precent
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[添加附件数据(add_attachment)](module/ProdMgmt/idea/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[查看客户统计信息(check_customer_info)](module/ProdMgmt/idea/uilogic/check_customer_info)

节点：切换显示组件(主界面)
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel11.state.visible=true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[查看客户统计信息(check_customer_info)](module/ProdMgmt/idea/uilogic/check_customer_info)

节点：切换显示组件(关系界面)
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.parent.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.parent.controllersMap.get("form").details.grouppanel11.state.visible=true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取需求工时进度(get_workload_schedule)](module/ProdMgmt/idea/uilogic/get_workload_schedule)

节点：计算工时进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
var form_data = view.layoutPanel.panelItems.form.control.data;
var remaining_workload = form_data.remaining_workload;
var actual_workload = form_data.actual_workload;
var estimated_workload = form_data.estimated_workload;  
var estimated = 0; // 预估工时
if(estimated_workload){
	estimated = Number(estimated_workload);
}
var actual = 0; // 之前登记的实际工时
if(actual_workload){
	actual = Number(actual_workload);
}
var remaining = 0;
if(remaining_workload){
	remaining = Number(remaining_workload);
}
// 计算工时进度
if((actual + remaining) != 0){
	var schedule = ((actual / (actual + remaining)) * 100).toFixed(1);
	form_data.workload_schedule = schedule;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取需求工时进度(get_workload_schedule)](module/ProdMgmt/idea/uilogic/get_workload_schedule)

节点：动态显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly === true || srfreadonly === 'true'){
    form.grouppanel4.state.visible=false;
    form.button3.state.visible=false;
    form.grouppanel5.state.actionGroupState.u3a6466f.visible=false;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[刷新需求表格(refresh_idea_grid)](module/ProdMgmt/idea/uilogic/refresh_idea_grid)

节点：刷新需求表格
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'idea', srfkey: context.idea})
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[显示下拉并展开选项（嵌入视图）(toolbar_show_dorpdown_data)](module/ProdMgmt/idea/uilogic/toolbar_show_dorpdown_data)

节点：计算嵌入视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { activetab, details } = uiLogic;
if (activetab) {
    const druipart = details[`${activetab}_druipart`]
    if (druipart && druipart.embedView) {
        uiLogic.curview = druipart.embedView;
    }
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[显示下拉并展开选项（嵌入视图）(toolbar_show_dorpdown_data)](module/ProdMgmt/idea/uilogic/toolbar_show_dorpdown_data)

节点：展开下拉
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic. choose_data_state_obj) {
    uiLogic.choose_data_state_obj.editor.toggleMenu(true);
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联产品需求（工具栏）(toolbar_link_idea)](module/ProdMgmt/idea/uilogic/toolbar_link_idea)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_relation'
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联产品需求（工具栏）(toolbar_link_idea)](module/ProdMgmt/idea/uilogic/toolbar_link_idea)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[门户全屏(full_screen)](module/ProdMgmt/idea/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member)的处理逻辑[新建视图默认临时成员(create_default_temp_members)](module/Insight/insight_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.insight_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[导出表格(export_excel)](module/Insight/insight_report/uilogic/export_excel)

节点：整合表格数据并导出
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.grid) {
    uiLogic.grid.exportData({params: {}});
}
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_report/uilogic/use_cur_template)

节点：获取卡片视图选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const controllersMap = view.ctx.controllersMap;
const card_view = controllersMap.get("insight_reportcustom_card_view");
const selectdata = card_view.layoutPanel.panelItems.dataview.control.state.selectedData;
uiLogic.selecteddata = selectdata;
console.log(selectdata);

```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_report/uilogic/use_cur_template)

节点：设置上下文
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.selecteddata && uiLogic.selecteddata.length >0){
    uiLogic.ctx.dynadashboard = uiLogic.selecteddata[0].dynadashboardid;
    uiLogic.dyna_dashboard_info = uiLogic.selecteddata[0];
    uiLogic.dyna_dashboard_info.insight_view_id = uiLogic.ctx.insight_view_id;
}
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_report/uilogic/use_cur_template)

节点：关闭当前视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.state.isLoading = false;
view.closeView();
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[使用此模板(use_cur_template)](module/Insight/insight_report/uilogic/use_cur_template)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'insight_report'})
```
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[导出为pdf(export_pdf)](module/Insight/insight_report/uilogic/export_pdf)

节点：导出图片脚本
<p class="panel-title"><b>执行代码</b></p>

```javascript
const viewDom = document.getElementById(view.id);
if (viewDom) {
    const content = viewDom.querySelector('.ibiz-bi-report-panel-content>.el-collapse');
    const fileName = view.model.caption;
    ibiz.util.html2canvas.exportCanvas(content, { fileName });
}
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[计算表格列行为状态(insight)(calc_column_action_state)](module/Insight/insight_view/uilogic/calc_column_action_state)

节点：依据is_favorite显示星标按钮
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 星标
					if (action.uiActionId === 'add_favorite@insight_view') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@insight_view') {
						// 取消星标
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[通知刷新(notify_refresh)](module/Insight/insight_view/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'insight_view', srfkey: params.owner_id})
```
#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[批量删除视图成员临时数据(remove_batch_temp)](module/Insight/insight_view/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.insight_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[计算表格列行为状态(library)(calc_column_action_state)](module/TestMgmt/library/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'star@library') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'unstar@library') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[通知刷新(notify_refresh)](module/TestMgmt/library/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'library', srfkey: params.owner_id})
```
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[批量删除测试库成员临时数据(remove_batch_temp)](module/TestMgmt/library/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.library_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)的处理逻辑[新建测试库默认临时成员(create_default_temp_members)](module/TestMgmt/library_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.library_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)的处理逻辑[跳转至成员设置(jump_to_member_set)](module/TestMgmt/library_member/uilogic/jump_to_member_set)

节点：设置路由
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 如果当前视图打开方式为普通模态，则先关闭模态再跳转
if (view.modal && view.modal.mode === 'MODAL') {
	view.modal.ignoreDismissCheck = true
	view.closeView({ ok: true })
}
ibiz.openView.push(`/-/index/library=${context.library}/library_index_view/srfnav=usrdrgroup1227882118/library_details_setting_tree_exp_view/srfnav=root%3Anormal%3Amember/library_member_config_grid_view/-`);
```
#### [登录日志(LOGIN_LOG)](module/Base/login_log)的处理逻辑[计算活跃成员数据信息(calc_active_member_info)](module/Base/login_log/uilogic/calc_active_member_info)

节点：计算活跃成员数据信息
<p class="panel-title"><b>执行代码</b></p>

```javascript
let nums = uiLogic.view.layoutPanel.panelItems;
if (uiLogic && uiLogic.datas.lastday_active_count) {
    //昨日活跃人数
    nums.lastday_active_count.data.lastday_active_count = uiLogic.datas.lastday_active_count;
}
if (uiLogic && uiLogic.datas.lastday_active_rate) {
    //昨日活跃率
    nums.lastday_active_rate.data.lastday_active_rate = uiLogic.datas.lastday_active_rate;
}
if (uiLogic && uiLogic.datas.sevenday_active_count) {
    //近七日活跃人数
    nums.sevenday_active_count.data.sevenday_active_count = Math.floor(uiLogic.datas.sevenday_active_count);
}
if (uiLogic && uiLogic.datas.sevenday_active_rate) {
    //近七日活跃率
    nums.sevenday_active_rate.data.sevenday_active_rate = uiLogic.datas.sevenday_active_rate;
}


      
    

```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[添加页面共享成员(add_shared_member)](module/Base/member/uilogic/add_shared_member)

节点：添加页面共享成员
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.choose_member.setDataValue(null);
```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[打开页面共享成员选择页（移动端）(open_choose_shared_member)](module/Base/member/uilogic/open_choose_shared_member)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const check_type = view.layoutPanel.panelItems.check_type.value;
uiLogic.default.check_type = 'reader';
if(check_type) {
    uiLogic.default.check_type = check_type;
}
```
#### [成员(MEMBER)](module/Base/member)的处理逻辑[成员权限值变更(member_role_change)](module/Base/member/uilogic/member_role_change)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const view = uiLogic.view;
const ctx = uiLogic.ctx;
ctx.check_type = view.panelItems.check_type.value;
view.context.check_type = view.panelItems.check_type.value;

```
#### [通知事件(NOTIFY_EVENT)](module/extension/notify_event)的处理逻辑[保存列表多数据部件(save_list_mdctrl)](module/extension/notify_event/uilogic/save_list_mdctrl)

节点：更新列表数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const list = uiLogic.setting_model_list;
const items = list.getAllData() || [];
if (uiLogic.listservice) {
    uiLogic.listservice.updateBatch(list.context, items).then((res) => {
        if (res.data) {
            list.setData(res.data);
        }
        list.evt.emit('onSaveSuccess', undefined);
    })
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[关闭评论区(close_comment)](module/Wiki/article_page/uilogic/close_comment)

节点：记录评论状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
const operator = context.loginname;

localStorage.removeItem(operator);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[关闭评论区(close_comment)](module/Wiki/article_page/uilogic/close_comment)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'article_page'})
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[恢复历史版本并通知刷新(page_refresh)](module/Wiki/article_page/uilogic/page_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.parentView.state.isLoading = false;
view.parentView.closeView();
ibiz.mc.command.send({srfdecodename: 'article_page',srfkey:uiLogic.context.article_page}, 'OBJECTUPDATED',uiLogic.form.triggerKey);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[复制共享链接(copy_shared_url)](module/Wiki/article_page/uilogic/copy_shared_url)

节点：复制共享链接
<p class="panel-title"><b>执行代码</b></p>

```javascript
var _default = uiLogic.default;
var shared_url = _default.shared_page_url;
if(shared_url !== null && shared_url !== undefined){
    var textArea = document.createElement("textarea");
    // 在 textarea 中放入需要复制的文本
    textArea.readOnly = true;
    textArea.value = shared_url;
    // 将 textarea 添加到 DOM 中
    document.body.appendChild(textArea);
    // 选中 textarea 中的文本
    textArea.select();
    // 执行复制命令
    var successful = document.execCommand('copy');
    var msg = successful ? '' : '复制失败';
    if(successful){
        util.message.success('复制共享链接成功');
    } else {
        util.message.error('复制共享链接失败!');
    }
} else {
    util.message.error('复制共享链接失败!');
}

```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[后续刷新(refresh)](module/Wiki/article_page/uilogic/refresh)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'space', srfkey: uiLogic.default.id});
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[添加附件数据(add_attachment)](module/Wiki/article_page/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[新建发布并通知刷新(save_notify_refresh)](module/Wiki/article_page/uilogic/save_notify_refresh)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const page_info = uiLogic.page_info;
if(page_info.format_type === "MD"){
    page_info.content = page_info.formitem;
}
if(page_info.format_type === "EXCEL"){
    page_info.content = page_info.formitem1;
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[新建发布并通知刷新(save_notify_refresh)](module/Wiki/article_page/uilogic/save_notify_refresh)

节点：设置表单是否变更
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.form) {
    uiLogic.form.state.modified = false;
}
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[新建发布并通知刷新(save_notify_refresh)](module/Wiki/article_page/uilogic/save_notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.send({srfdecodename: 'article_page'}, 'OBJECTCREATED');
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[共享设置表单加载数据(shared_form_data)](module/Wiki/article_page/uilogic/shared_form_data)

节点：设置共享页面默认参数
<p class="panel-title"><b>执行代码</b></p>

```javascript

var form = view.layoutPanel.panelItems.form.control.details
var shared_scope = form.shared_scope;
var enable_password = form.enable_password;
var enable_expiration = form.enable_expiration;
var access_password = form.access_password;
var expiration_date = form.expiration_date;
var _url = uiLogic.default.shared_page_url;
if(_url !== null && _url !== undefined) {
    var shared_url = form.shared_page_url;
    shared_url.setDataValue(_url);
}
if(expiration_date.value !== null && expiration_date.value !== undefined) {
    enable_expiration.setDataValue(1);
} else {
    enable_expiration.setDataValue(0);
    var today = new Date();  // 获取当前日期
    // 获取 30 天后的日期
    var nextDate = new Date();
    nextDate.setDate(today.getDate() + 30);

    // 获取年、月、日
    var nextYear = nextDate.getFullYear();
    var nextMonth = ('0' + (nextDate.getMonth() + 1)).slice(-2);
    var nextDay = ('0' + nextDate.getDate()).slice(-2);
    // 格式化成 YYYY-MM-DD 的字符串
    var _date = nextYear + '-' + nextMonth + '-' + nextDay;
    expiration_date.setDataValue(_date);
}
if(access_password.value !== null && access_password.value !== undefined) {
    enable_password.setDataValue(1);
} else {
    enable_password.setDataValue(0);
    // 生成4位随机数
    var randomNumber = Math.floor(Math.random() * 9000) + 1000;
    access_password.setDataValue(randomNumber);
}

```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[显示评论区(show_commnet)](module/Wiki/article_page/uilogic/show_commnet)

节点：记录评论状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
const operator = context.loginname;

localStorage.setItem(operator, 'true');
```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[计算表格列行为状态(portfolio)(calc_column_action_state)](module/Base/portfolio/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@portfolio') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@portfolio') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[通知刷新(notify_refresh)](module/Base/portfolio/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'portfolio', srfkey: params.owner_id})
```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[批量删除项目集成员临时数据(remove_batch_temp)](module/Base/portfolio/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.portfolio_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[计算项目集资源成员(calc_project_set_resouce_member)](module/Base/portfolio/uilogic/calc_project_set_resouce_member)

节点：设置选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { gantt } = uiLogic;
if (gantt) {
    const selecteddata = JSON.stringify(gantt.getNodeDataByNodeId('member_node'));
    if (selecteddata) {
        params.selecteddata = selecteddata;
    }
}
```
#### [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)的处理逻辑[新建项目集默认临时成员(default_project_member)](module/Base/portfolio_member/uilogic/default_project_member)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.portfolio_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[计算表格列行为状态(product)(calc_column_action_state)](module/ProdMgmt/product/uilogic/calc_column_action_state)

节点：依据is_favorite显示星标按钮
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 星标
					if (action.uiActionId === 'add_favorite@product') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@product') {
						// 取消星标
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[通知刷新(notify_refresh)](module/ProdMgmt/product/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'product', srfkey: params.owner_id})
```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[批量删除产品成员临时数据(remove_batch_temp)](module/ProdMgmt/product/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.product_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[获取表格当前页大小(get_table_size)](module/ProdMgmt/product/uilogic/get_table_size)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;
```
#### [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)的处理逻辑[新建产品默认临时成员(create_default_temp_members)](module/ProdMgmt/product_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.product_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)的处理逻辑[跳转至成员设置(jump_to_member_set)](module/ProdMgmt/product_member/uilogic/jump_to_member_set)

节点：设置路由
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 如果当前视图打开方式为普通模态，则先关闭模态再跳转
if (view.modal && view.modal.mode === 'MODAL') {
	view.modal.ignoreDismissCheck = true
	view.closeView({ ok: true })
}
ibiz.openView.push(`/-/index/product=${context.product}/product_index_view/srfnav=usrdrgroup1228809432/product_details_setting_view/srfnav=root%3Anormal%3Amember/product_member_config_grid_view/-`);
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[计算表格列行为状态(project)(calc_column_action_state)](module/ProjMgmt/project/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@project') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@project') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/project/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/project/uilogic/edit_to_design)

节点：部件刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[通知刷新(notify_refresh)](module/ProjMgmt/project/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'project', srfkey: params.owner_id})
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[批量删除项目成员临时数据(remove_batch_temp)](module/ProjMgmt/project/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.project_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[图表全屏（移动端）(mob_full_screen)](module/ProjMgmt/project/uilogic/mob_full_screen)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('执行全屏逻辑');
if (uiLogic.ctrl) {
   const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement,{srftitle:'测试标题',showClose:true});
    }
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[设置默认项目成员（移动端）(mob_set_default_project_member)](module/ProjMgmt/project/uilogic/mob_set_default_project_member)

节点：绑定当前人
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.state.data.members = [uiLogic.members];
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[门户刷新(portlet_refresh)](module/ProjMgmt/project/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[刷新当前表格(refresh_current_grid)](module/ProjMgmt/project/uilogic/refresh_current_grid)

节点：刷新视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.call('Refresh');
setTimeout(() => {
    if (view.layoutPanel.panelItems.nav_pos && view.layoutPanel.panelItems.nav_pos.curNavViewMsg) {
        // 找到当前的右侧视图
        const viewId = view.layoutPanel.panelItems.nav_pos.curNavViewMsg.viewId;
        if (viewId) {
            const key = viewId.split('.').pop();
            const viewPos = view.getController(key);
            if (viewPos) {
                viewPos.call('Refresh');
            }
        }
    }
}, 300)
```
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[门户全屏(full_screen)](module/ProjMgmt/project/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)的处理逻辑[新建项目默认临时成员(create_default_temp_members)](module/ProjMgmt/project_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.project_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)的处理逻辑[跳转至成员设置(jump_to_member_set)](module/ProjMgmt/project_member/uilogic/jump_to_member_set)

节点：设置路由
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 如果当前视图打开方式为普通模态，则先关闭模态再跳转
if(view.modal && view.modal.mode === 'MODAL'){
	view.modal.ignoreDismissCheck = true
	view.closeView({ ok: true })
}
ibiz.openView.push(`/-/index/project=${context.project}/project_redirect_view/-/project_setting_view/srfnav=member/project_member_config_grid_view/-`);
```
#### [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state)的处理逻辑[判断操作列是否禁用(judge_column_state)](module/ProjMgmt/project_state/uilogic/judge_column_state)

节点：判断操作列是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    console.log(rows);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const is_system = row.data.is_system;
					 if (is_system === 1) {
						// 禁用
                        row.uaColStates.uagridcolumn1.visible = false;
                        Object.values(row.uaColStates.uagridcolumn1).forEach(item => {
                            item.visible = false;
                            item.disabled = true;
                        })
					} 	
		})
	}

```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[跳转设置页面(skip_setting)](module/extension/PSCorePrdFunc/uilogic/skip_setting)

节点：跳转
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { settingurl } = uiLogic.default;

window.open(settingurl, '_self');

```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[clone此应用(clone_git)](module/extension/PSCorePrdFunc/uilogic/clone_git)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
var { httpurltorepo } = uiLogic.default;

var aux = document.createElement("textarea");
// aux.setAttribute("value", info); 
aux.value='git clone ' + httpurltorepo;
document.body.appendChild(aux); 
aux.select(); 
document.execCommand("copy"); 
document.body.removeChild(aux); 

util.message.success('复制成功!');
```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[初始化插件信息(init_plugin_info)](module/extension/PSCorePrdFunc/uilogic/init_plugin_info)

节点：初始化
<p class="panel-title"><b>执行代码</b></p>

```javascript
var data = uiLogic.form.state.data;
var setting_json = JSON.parse(data.settings, null, 4);
data.rt_object_repo = setting_json.rTObjectRepo || "";
data.plugin_code = setting_json.pluginCode || "";
```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[跳转应用详情页面(open_app_info)](module/extension/PSCorePrdFunc/uilogic/open_app_info)

节点：刷新导航占位
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
  parentView.layoutPanel.panelItems.nav_pos.openView({
    key: uiLogic.default.pscoreprdfuncid,
    viewId: 'plmweb.ps_core_prd_func_info_view',
    isRoutePushed: true,
  });
}, 0);
```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[跳转gitlab(skip_gitlab)](module/extension/PSCorePrdFunc/uilogic/skip_gitlab)

节点：跳转
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { httpurltorepo } = uiLogic.default;
window.open(httpurltorepo, '_blank');
```
#### [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)的处理逻辑[更新插件设置(update_plugin_setting)](module/extension/PSCorePrdFunc/uilogic/update_plugin_setting)

节点：更新settings字段
<p class="panel-title"><b>执行代码</b></p>

```javascript
var rt_object_repo = uiLogic.default.rt_object_repo;
var data = uiLogic.form.state.data;
var setting_json = JSON.parse(data.settings);
setting_json.rTObjectRepo = rt_object_repo;
data.settings = JSON.stringify(setting_json, null, 4);
```
#### [实体属性(PSDEFIELD)](module/extension/PSDEField)的处理逻辑[判断操作列是否禁用(judge_column_state)](module/extension/PSDEField/uilogic/judge_column_state)

节点：判断操作列是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    console.log(rows);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const dynamodelflag = row.data.dynamodelflag;
            const psdeid = row.data.psdeid;
					 if (dynamodelflag !== 1 || psdeid != context.psdataentity) {
						// 禁用
                        row.uaColStates.uagridcolumn1.visible = false;
                        Object.values(row.uaColStates.uagridcolumn1).forEach(item => {
                            item.visible = false;
                            item.disabled = true;
                        })
					} 	
		})
	}

```
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[移动端最近访问跳转其他视图(mob_recent_jump_other_view)](module/Base/recent/uilogic/mob_recent_jump_other_view)

节点：获取选中数据详情
<p class="panel-title"><b>执行代码</b></p>

```javascript
let selecteddata=uiLogic.selecteddata;
if (selecteddata.length > 0) {
    uiLogic.selectobj = selecteddata[0];
}
```
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[最近访问跳转其他视图(recent_jump_other_view)](module/Base/recent/uilogic/recent_jump_other_view)

节点：获取选中数据详情
<p class="panel-title"><b>执行代码</b></p>

```javascript
let selecteddata=uiLogic.selecteddata;
if (selecteddata.length > 0) {
    uiLogic.selectobj = selecteddata[0];
}
```
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[建立双向关联数据(create_double_relation)](module/Base/recent/uilogic/create_double_relation)

节点：隐藏下拉框
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[建立双向关联数据(create_double_relation)](module/Base/recent/uilogic/create_double_relation)

节点：更新srfdecodename
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项添加依赖关系(add_dependency)](module/Base/relation/uilogic/add_dependency)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_type = uiLogic.ctrl.panelItems.choose_data.data.choose_type;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
}
// 依赖类型
if (choose_type != null && choose_type != '') {
    uiLogic.dto.relation_type = choose_type;
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项添加依赖关系(add_dependency)](module/Base/relation/uilogic/add_dependency)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_relation_data = view.layoutPanel.panelItems.choose_relation_data;
const panel = view.layoutPanel.panelItems.choose_data;
if (choose_relation_data) {
    panel.state.visible = false;
}
uiLogic.default.choose_relation_data = null;
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[工作项添加依赖关系(add_dependency)](module/Base/relation/uilogic/add_dependency)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[取消关联行为是否启用(del_relation_disabled)](module/Base/relation/uilogic/del_relation_disabled)

节点：根据上下文中srfreadonly判断取消关联是否启用
<p class="panel-title"><b>执行代码</b></p>

```javascript

	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.target_priority;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 取消关联
					    if (action.uiActionId === 'del_relation@relation') {
                            action.disabled = true;
                        }
					    if (action.uiActionId === 'work_item_del_relation_test_case@relation') {
                            action.disabled = true;
                        }
                        if (action.uiActionId === 'test_case_del_relation_bug@relation') {
                            action.disabled = true;
                        }
                        if (action.uiActionId === 'run_del_relation_bug@relation') {
                            action.disabled = true;
                        }
					}
				})
			}
		})
	}

```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[通知刷新产品需求（移动端）(notify_refresh)](module/Base/relation/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'idea'})
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[依赖列表视图加载完成(dependency_load_success)](module/Base/relation/uilogic/dependency_load_success)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;


```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[依赖列表视图加载完成(dependency_load_success)](module/Base/relation/uilogic/dependency_load_success)

节点：当无数据时隐藏列表部件
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
if(!total){
    view.layoutPanel.panelItems.list.state.visible = false;
}else{
    view.layoutPanel.panelItems.list.state.visible = true;
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[建立双向关联数据（移动端）(create_double_relation)](module/Base/relation/uilogic/create_double_relation)

节点：更新srfdecodename
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
ibiz.mc.command.create.send({ srfdecodename: 'relation'})
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[建立双向关联数据（移动端）(create_double_relation)](module/Base/relation/uilogic/create_double_relation)

节点：隐藏下拉框
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[获取关联列表总条数(get_list_total)](module/Base/relation/uilogic/get_list_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = "共" + total;
```
#### [关联(RELATION)](module/Base/relation)的处理逻辑[触发计数器刷新及表格刷新(refresh_counter)](module/Base/relation/uilogic/refresh_counter)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename:context.principal_type , srfkey: context.principal_id})
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/release/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/release/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[计算进度(cal_schedule)](module/ProjMgmt/release/uilogic/cal_schedule)

节点：通过已完成数量/总数量计算进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
        row.data.schedule = 0;
		const completed_work_items = row.data.completed_work_items;
        const all_work_items = row.data.all_work_items;
        if(all_work_items !== 0 && completed_work_items !== 0){
            row.data.schedule = Math.round((completed_work_items / all_work_items) * 100);
        }
	})
}
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[门户刷新(portlet_refresh)](module/ProjMgmt/release/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[门户全屏(full_screen)](module/ProjMgmt/release/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[计算表格列行为状态(review)(calc_column_action_state)](module/TestMgmt/review/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    const ctx = uiLogic.ctx;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const cur_user = ctx.srfuserid;
			const state = row.data.state;
			const create_man = row.data.create_man;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
                    action.visible = false;
                    if(action.uiActionId === 'delete@review'&& create_man == cur_user){
                        action.visible = true;
                    }else if (action.uiActionId === 'repeal_review@review'&& create_man == cur_user && state == '20' ) {
						action.visible = true;
					} else if (action.uiActionId === 'submit_review@review'&& create_man == cur_user && (state == '10'||state == '50') ) {
						action.visible = true;
					}else if (action.uiActionId === 'set_category@review'&& create_man == cur_user){
                        action.visible = true;
                    }
				})
			}
		})
	}

```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/review/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/review/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[添加附件数据（通用）(add_attachment)](module/TestMgmt/review/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[刷新评审主视图(refresh_main_view)](module/TestMgmt/review/uilogic/refresh_main_view)

节点：控制显隐
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parent_form.control.details.grouppanel6.state.visible=true;
uiLogic.parent_form.control.details.review_results.state.keepAlive=true;
uiLogic.parent_form.control.details.review_results.state.visible=false;

const choose_data = uiLogic.parent_form.control.details.choosed_content;
choose_data.setDataValue(null);
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[刷新评审主视图(refresh_main_view)](module/TestMgmt/review/uilogic/refresh_main_view)

节点：刷新页面
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'review', srfkey: context.review})
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[批量删除评审用例临时数据(remove_batch_temp)](module/TestMgmt/review/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('遍历临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.review_content');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[门户刷新(portlet_refresh)](module/TestMgmt/review/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[门户全屏(full_screen)](module/TestMgmt/review/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[计算表格列行为状态(review)(calc_column_action_state)](module/TestMgmt/review_content/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.target_title;
		const review_state = row.data.review_data.state;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				if (action.uiActionId === 'remove_case@review_content') {
					action.visible = review_state == '10';
				}
                if(action.uiActionId === 'remove_case@review_content' && context.srfreadonly ==true){
                    action.visible = false;
                }
			})
		}
	})
}

```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[提交评审(commit_review)](module/TestMgmt/review_content/uilogic/commit_review)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'review', srfkey: context.review})
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[提交评审(commit_review)](module/TestMgmt/review_content/uilogic/commit_review)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_data = uiLogic.parent_form.details.choosed_content;
choose_data.setDataValue(null);
uiLogic.parent_form.details.grouppanel6.state.keepAlive=true;
uiLogic.parent_form.details.grouppanel6.state.visible=true;
uiLogic.parent_form.details.review_results.state.visible=false;
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[获取评审内容总条数(get_review_content_total)](module/TestMgmt/review_content/uilogic/get_review_content_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
const rows = uiLogic.grid.state.rows;
uiLogic.view.layoutPanel.state.data.total = rows.length;
if (rows && rows.length > 0) {
    let total_already = 0;
    rows.forEach(row => {
        const state = row.data.final_stage_results;
    if (state !== null && state !== undefined) {
        total_already++;
    }
    });
    uiLogic.view.layoutPanel.state.data.total_already = total_already;
    const floatTotal = parseFloat(rows.length);
    const floatTotalAlready = parseFloat(total_already);
    const ratio = Math.round((floatTotalAlready / floatTotal) * 100); 
    uiLogic.view.layoutPanel.state.data.schedule = ratio;
} else {
    uiLogic.view.layoutPanel.state.data.total_already = 0;
    uiLogic.view.layoutPanel.state.data.schedule = 0;
}

```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[评审内容版本比对(review_content_version_comparison)](module/TestMgmt/review_content/uilogic/review_content_version_comparison)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const review_content = uiLogic.review_content;
const content_version = review_content.change_version;


if(content_version && content_version.length >0){
    content_version.forEach((c_version, index) => {
        if(c_version.srflistmapfield == 'from'){
            review_content.base_version = c_version.id;
        }
        if(c_version.srflistmapfield == 'to'){
            review_content.compare_version = c_version.id;
        }
    })

}


```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[返回（历史）(back_history)](module/TestMgmt/review_content/uilogic/back_history)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel11.state.visible=false;

```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[完成当前阶段评审(complete_cur_stage_review)](module/TestMgmt/review_content/uilogic/complete_cur_stage_review)

节点：默认显示阶段列表，隐藏评审结果
<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_data = uiLogic.parent_form.details.choosed_content;
choose_data.setDataValue(null);
// uiLogic.parent_form.details.grouppanel6.state.keepAlive=true;
uiLogic.parent_form.details.grouppanel6.state.visible=true;
// uiLogic.parent_form.details.review_results.state.keepAlive=true;
uiLogic.parent_form.details.review_results.state.visible=false;

```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[完成当前阶段评审(complete_cur_stage_review)](module/TestMgmt/review_content/uilogic/complete_cur_stage_review)

节点：为主表单设置值
<p class="panel-title"><b>执行代码</b></p>

```javascript
const need_refresh = uiLogic.parent_form.details.need_refresh;
need_refresh.setDataValue(true);
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[完成当前阶段评审(complete_cur_stage_review)](module/TestMgmt/review_content/uilogic/complete_cur_stage_review)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'review', srfkey: context.review})
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[完成当前阶段评审(complete_cur_stage_review)](module/TestMgmt/review_content/uilogic/complete_cur_stage_review)

节点：通过call刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parent_form.details.druipart2.embedView.call('Refresh')
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[返回(back)](module/TestMgmt/review_content/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parent_form.control.details.grouppanel6.state.visible=true;
uiLogic.parent_form.control.details.review_results.state.keepAlive=true;
uiLogic.parent_form.control.details.review_results.state.visible=false;

const choose_data = uiLogic.parent_form.control.details.choosed_content;
choose_data.setDataValue(null);
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[打开评审结果(open_result)](module/TestMgmt/review_content/uilogic/open_result)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_data = uiLogic.parent_form.control.details.choosed_content;
choose_data.setDataValue(uiLogic.default.id);
uiLogic.parent_form.control.details.grouppanel6.state.keepAlive=true;
uiLogic.parent_form.control.details.grouppanel6.state.visible=false;
uiLogic.parent_form.control.details.review_results.state.visible=true;
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[开始当前阶段评审(start_cur_stage_review)](module/TestMgmt/review_content/uilogic/start_cur_stage_review)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const need_refresh = uiLogic.parent_form.details.need_refresh;
need_refresh.setDataValue(true);
```
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[开始当前阶段评审(start_cur_stage_review)](module/TestMgmt/review_content/uilogic/start_cur_stage_review)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'review', srfkey: context.review})
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[拒绝(refuse)](module/TestMgmt/review_result/uilogic/refuse)

节点：控制表单状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.content_grid.state.rows;
const ctx = uiLogic.ctx;

if (rows && rows.length > 0) {
    const cur_content_id = ctx.review_content;
    let next_content = null;
    let foundMatch = false;

    rows.forEach((row, index) => {
        const for_id = row.data.id;
        if (foundMatch) {
            next_content = row.data;
            foundMatch = false;
        }
        if (!foundMatch && for_id == cur_content_id) {
            foundMatch = true;
        }
    });

    const review_results_state = uiLogic.parent_form.control.details.review_results.state;
    review_results_state.keepAlive = true;
    review_results_state.visible = false;
    const grouppanel6_state = uiLogic.parent_form.control.details.grouppanel6.state;

    if (next_content) {
        ctx.review_content = next_content.id;
        grouppanel6_state.visible = false;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(next_content.id);
    } else {
        grouppanel6_state.visible = true;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(null);
    }
}
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[拒绝(refuse)](module/TestMgmt/review_result/uilogic/refuse)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'review_content'})
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[拒绝(refuse)](module/TestMgmt/review_result/uilogic/refuse)

节点：控制表单状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
        uiLogic.parent_form.control.details.grouppanel6.state.visible=true;
        uiLogic.parent_form.control.details.review_results.state.keepAlive=true;
        uiLogic.parent_form.control.details.review_results.state.visible=false;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(null);
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[通过(pass)](module/TestMgmt/review_result/uilogic/pass)

节点：下一阶段评审
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.content_grid.state.rows;
const ctx = uiLogic.ctx;

if (rows && rows.length > 0) {
    const cur_content_id = ctx.review_content;
    let next_content = null;
    let foundMatch = false;

    rows.forEach((row, index) => {
        const for_id = row.data.id;
        if (foundMatch) {
            next_content = row.data;
            foundMatch = false;
        }
        if (!foundMatch && for_id == cur_content_id) {
            foundMatch = true;
        }
    });

    const review_results_state = uiLogic.parent_form.control.details.review_results.state;
    review_results_state.keepAlive = true;
    review_results_state.visible = false;
    const grouppanel6_state = uiLogic.parent_form.control.details.grouppanel6.state;

    if (next_content) {
        ctx.review_content = next_content.id;
        grouppanel6_state.visible = false;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(next_content.id);
    } else {
        grouppanel6_state.visible = true;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(null);
    }
}
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[通过(pass)](module/TestMgmt/review_result/uilogic/pass)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'review_content'})
```
#### [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)的处理逻辑[通过(pass)](module/TestMgmt/review_result/uilogic/pass)

节点：控制非下一阶段
<p class="panel-title"><b>执行代码</b></p>

```javascript
        uiLogic.parent_form.control.details.grouppanel6.state.visible=true;
        uiLogic.parent_form.control.details.review_results.state.keepAlive=true;
        uiLogic.parent_form.control.details.review_results.state.visible=false;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(null);
```
#### [评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)的处理逻辑[选中阶段(choose_stage)](module/TestMgmt/review_stage/uilogic/choose_stage)

节点：设置选中值
<p class="panel-title"><b>执行代码</b></p>

```javascript
const cur_reviewer_id = uiLogic.parent_form.control.details.cur_reviewer_id;
cur_reviewer_id.setDataValue(uiLogic.default.reviewer);

const curstage_id = uiLogic.parent_form.control.details.curstage_id;
curstage_id.setDataValue(uiLogic.default.id);


```
#### [评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)的处理逻辑[选中阶段(choose_stage)](module/TestMgmt/review_stage/uilogic/choose_stage)

节点：设置选中值
<p class="panel-title"><b>执行代码</b></p>

```javascript
const cur_reviewer_id = uiLogic.parent_form.control.details.cur_reviewer_id;
cur_reviewer_id.setDataValue(uiLogic.review_info.cur_reviewer_id);

const curstage_id = uiLogic.parent_form.control.details.curstage_id;
curstage_id.setDataValue(uiLogic.default.id);
```
#### [评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)的处理逻辑[选中阶段(choose_stage)](module/TestMgmt/review_stage/uilogic/choose_stage)

节点：取消选中值
<p class="panel-title"><b>执行代码</b></p>

```javascript
const cur_reviewer_id = uiLogic.parent_form.control.details.cur_reviewer_id;
cur_reviewer_id.setDataValue(null);
const curstage_id = uiLogic.parent_form.control.details.curstage_id;
curstage_id.setDataValue(null);
```
#### [评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)的处理逻辑[批量删除评审用例临时数据(remove_batch_temp)](module/TestMgmt/review_wizard/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('遍历临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.review_content');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    const service2 = await serviceUtil.getService(context, 'plmweb.attention');
    const list2 = service2.local.getList();
    // 遍历临时数据删除
    list2.forEach(item => {
        service2.local.delete(context, item.id);
    })
    } 
)();

```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通知刷新（移动端）(send_refresh)](module/TestMgmt/run/uilogic/send_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'run'})
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/run/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/run/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[刷新用例表格(refresh_run_grid)](module/TestMgmt/run/uilogic/refresh_run_grid)

节点：刷新视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'run'})
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取实际工时(get_actual_workload)](module/TestMgmt/run/uilogic/get_actual_workload)

节点：计算工时进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
var form_data = view.layoutPanel.panelItems.form.control.data;
form_data.estimated_workload = uiLogic.temp.estimated_workload;
form_data.remaining_workload = uiLogic.temp.remaining_workload;
var remaining_workload = form_data.remaining_workload;
var actual_workload = uiLogic.temp.actual_workload;
form_data.actual_workload = actual_workload;
var estimated_workload = form_data.estimated_workload;  
var estimated = 0; // 预估工时
if(estimated_workload){
	estimated = Number(estimated_workload);
}
var actual = 0; // 之前登记的实际工时
if(actual_workload){
	actual = Number(actual_workload);
}
var remaining = 0;
if(remaining_workload){
	remaining = Number(remaining_workload);
}
// 计算工时进度
if((actual + remaining) != 0){
	var schedule = ((actual / (actual + remaining)) * 100).toFixed(1);
	form_data.workload_schedule = schedule;
}
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[门户刷新(portlet_refresh)](module/TestMgmt/run/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[查看工时明细(check_workload_detail)](module/TestMgmt/run/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.tabpanel2.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel1.state.visible=true;
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[填充并刷新门户数据（测试）(fill_and_refresh_portlet)](module/TestMgmt/run/uilogic/fill_and_refresh_portlet)

节点：过滤表单undefined数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const dataUIMap = uiLogic.default.$dataUIMap;
uiLogic.config = {};
dataUIMap.forEach((value, key) => {
    if (!value.isOriginField) {
        uiLogic.config[key] = uiLogic.default[key];
    }
})

uiLogic.config = Object.fromEntries(
  Object.entries(uiLogic.config).filter(([key, value]) => !!value)
);
```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[门户全屏(full_screen)](module/TestMgmt/run/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[获取结果附件总条数(get_run_attachment_total)](module/TestMgmt/run_attachment/uilogic/get_run_attachment_total)

节点：获取表格条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.total.data.total = uiLogic.view.layoutPanel.panelItems.grid.control.state.items.length;
if(uiLogic.view.layoutPanel.panelItems.total.data.total == 0){
    view.layoutPanel.panelItems.grid.state.visible = false
}else{
    view.layoutPanel.panelItems.grid.state.visible = true
}
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[获取移动端结果附件总条数(get_mob_run_attachment)](module/TestMgmt/run_attachment/uilogic/get_mob_run_attachment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.rows.length;
uiLogic.view.layoutPanel.state.data.total = "共" + total;
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[添加附件数据(add_attachment)](module/TestMgmt/run_attachment/uilogic/add_attachment)

节点：获取文件名称
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.run_attachment.name = uiLogic.files[0].name;
uiLogic.run_attachment.file_id = uiLogic.files[0].id;
uiLogic.run_attachment.owner_id = uiLogic.context.run;
uiLogic.run_attachment.owner_type = 'RUN';
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[添加附件数据(add_attachment)](module/TestMgmt/run_attachment/uilogic/add_attachment)

节点：添加结果附件实体临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.grid.state.visible = true;
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.run_attachment',
    'create',
    context,
    uiLogic.run_attachment,
);

```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[删除(del)](module/TestMgmt/run_attachment/uilogic/del)

节点：执行删除方法
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.run_attachment',
    'remove',
    context,
    uiLogic.default,
);


```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[删除(del)](module/TestMgmt/run_attachment/uilogic/del)

节点：根据条件隐藏表格
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.view.layoutPanel.panelItems.total.data.total == 0){
    view.layoutPanel.panelItems.grid.state.visible = false;
}
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[添加附件数据（移动端）(mob_add_attachment)](module/TestMgmt/run_attachment/uilogic/mob_add_attachment)

节点：设置附件列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = uiLogic.files.map(item =>{
	return {
	  name: item.name,
	  file_id: item.id,
	  id: item.uuid,
	}
})
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[添加附件数据（移动端）(mob_add_attachment)](module/TestMgmt/run_attachment/uilogic/mob_add_attachment)

节点：显示
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.mdctrl.state.visible = true
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[附件删除（移动端）(mob_remove_attachment)](module/TestMgmt/run_attachment/uilogic/mob_remove_attachment)

节点：设置附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: uiLogic.default, silent: true };
```
#### [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)的处理逻辑[附件删除（移动端）(mob_remove_attachment)](module/TestMgmt/run_attachment/uilogic/mob_remove_attachment)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("附件数据",uiLogic.attach)
```
#### [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)的处理逻辑[下载按钮是否显示(download_show)](module/Base/search_attachment/uilogic/download_show)

节点：是否隐藏下载按钮
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const actionColumn = row.uiActionGroupStates.name;
		if (actionColumn && Object.values(actionColumn).length > 0) {
			Object.values(actionColumn).forEach(action => {
                if(srfreadonly == true){
					// 下载
					if (action.uiActionId === 'download@search_attachment') {
                        action.visible = false;
                    }
                }
			})
		}
	})
}
```
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[复制共享链接(copy_shared_url)](module/Wiki/shared_space/uilogic/copy_shared_url)

节点：复制共享链接
<p class="panel-title"><b>执行代码</b></p>

```javascript
var _default = uiLogic.default;
var shared_url = _default.shared_url;
if(shared_url !== null && shared_url !== undefined){
    var textArea = document.createElement("textarea");
    // 在 textarea 中放入需要复制的文本
    textArea.value = shared_url;
    // 将 textarea 添加到 DOM 中
    document.body.appendChild(textArea);
    // 选中 textarea 中的文本
    textArea.select();
    // 执行复制命令
    var successful = document.execCommand('copy');
    var msg = successful ? '' : '复制失败';
    if(successful){
        util.message.success('复制共享链接成功');
    } else {
        util.message.error('复制共享链接失败!');
    }
} else {
    util.message.error('复制共享链接失败!');
}

```
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[后续刷新(refresh)](module/Wiki/shared_space/uilogic/refresh)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'space', srfkey: uiLogic.default.id});
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[计算表格列行为状态(space)(calc_column_action_state)](module/Wiki/space/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@space') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@space') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[批量删除空间成员临时数据(remove_batch_temp)](module/Wiki/space/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.space_member');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    } 
)();

```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[判断当前用户角色（关联）(recognize_cur_user_role)](module/Wiki/space/uilogic/recognize_cur_user_role)

节点：隐藏工具栏
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.treeexpbar.layoutPanel.panelItems.control_toolbar.state.visible=false;

```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[刷新当前表格(refresh_current_grid)](module/Wiki/space/uilogic/refresh_current_grid)

节点：刷新视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.call('Refresh');
setTimeout(() => {
    if (view.layoutPanel.panelItems.nav_pos && view.layoutPanel.panelItems.nav_pos.curNavViewMsg) {
        // 找到当前的右侧视图
        const viewId = view.layoutPanel.panelItems.nav_pos.curNavViewMsg.viewId;
        if (viewId) {
            const key = viewId.split('.').pop();
            const viewPos = view.getController(key);
            if (viewPos) {
                viewPos.call('Refresh');
            }
        }
    }
}, 300)
```
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[刷新当前表格(refresh_current_grid)](module/Wiki/space/uilogic/refresh_current_grid)

节点：通过实体刷新表格、树
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'space', srfkey: params.owner_id})
```
#### [空间成员(SPACE_MEMBER)](module/Wiki/space_member)的处理逻辑[新建空间默认临时成员(create_default_temp_members)](module/Wiki/space_member/uilogic/create_default_temp_members)

节点：创建临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.space_member',
    'Create',
    context,
    uiLogic.user,
);
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/sprint/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/sprint/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[计算进度(cal_schedule)](module/ProjMgmt/sprint/uilogic/cal_schedule)

节点：通过已完成数量/总数量计算进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
        row.data.schedule = 0;
		const completed_work_items = row.data.completed_work_items;
        const all_work_items = row.data.all_work_items;
        if(all_work_items !== 0 && completed_work_items !== 0){
            row.data.schedule = Math.round((completed_work_items / all_work_items) * 100);
        }
	})
}
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[门户刷新(portlet_refresh)](module/ProjMgmt/sprint/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[门户全屏(full_screen)](module/ProjMgmt/sprint/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [页面模板(STENCIL)](module/Wiki/stencil)的处理逻辑[打开新建页面并关闭模板中心(open_new_page)](module/Wiki/stencil/uilogic/open_new_page)

节点：设置上下文
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.selecteddata && uiLogic.selecteddata.length >0){
    uiLogic.context.stencil_id = uiLogic.selecteddata[0].id;
    uiLogic.stencil_info = uiLogic.selecteddata[0];
    uiLogic.stencil_info.space_id = uiLogic.context.stencil_space;

}
```
#### [页面模板(STENCIL)](module/Wiki/stencil)的处理逻辑[打开新建页面并关闭模板中心(open_new_page)](module/Wiki/stencil/uilogic/open_new_page)

节点：关闭当前视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.state.isLoading = false;
view.closeView();

```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/test_case/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/test_case/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[工作项关联用例(work_item_relation_test_case)](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[工作项关联用例(work_item_relation_test_case)](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[工作项关联用例(work_item_relation_test_case)](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[上传附件（工具栏）(toolbar_add_attachment)](module/TestMgmt/test_case/uilogic/toolbar_add_attachment)

节点：上传附件（工具栏）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpage1'
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/TestMgmt/test_case/uilogic/toolbar_link_work_item)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_work_item'
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/TestMgmt/test_case/uilogic/toolbar_link_work_item)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取关注人与评论数(fill_att_com_count)](module/TestMgmt/test_case/uilogic/fill_att_com_count)

节点：填充关注&评论数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const attention_counts = uiLogic.view.layoutPanel.panelItems.attention_count;
if (attention_counts && uiLogic.default.attention_count !== undefined) {
    attention_counts.setDataValue(uiLogic.default.attention_count);
}

const comment_counts = uiLogic.view.layoutPanel.panelItems.comment_count;
comment_counts.setDataValue(uiLogic.default.comment_count);


```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[查看评审历史(check_review_history)](module/TestMgmt/test_case/uilogic/check_review_history)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel11.state.visible=true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[门户刷新(portlet_refresh)](module/TestMgmt/test_case/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[显示表单侧边栏(show_form_sidebar)](module/TestMgmt/test_case/uilogic/show_form_sidebar)

节点：显示侧边栏
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;

```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[需求关联用例(idea_relation_test_case)](module/TestMgmt/test_case/uilogic/idea_relation_test_case)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[需求关联用例(idea_relation_test_case)](module/TestMgmt/test_case/uilogic/idea_relation_test_case)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[需求关联用例(idea_relation_test_case)](module/TestMgmt/test_case/uilogic/idea_relation_test_case)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[查看已规划基线(check_baseline_version)](module/TestMgmt/test_case/uilogic/check_baseline_version)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.baseline.state.visible=true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[通知刷新（移动端）(send_refresh)](module/TestMgmt/test_case/uilogic/send_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'test_case'})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联缺陷（工具栏）(toolbar_link_bug)](module/TestMgmt/test_case/uilogic/toolbar_link_bug)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_bug'
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联缺陷（工具栏）(toolbar_link_bug)](module/TestMgmt/test_case/uilogic/toolbar_link_bug)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[添加附件数据（通用）(add_attachment)](module/TestMgmt/test_case/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[清空表单关注人(clean_attentions)](module/TestMgmt/test_case/uilogic/clean_attentions)

节点：设置新关注人
<p class="panel-title"><b>执行代码</b></p>

```javascript
const old_data = uiLogic.form.data;
// 清空关注人数组
old_data.attentions = [];
const ctx = uiLogic.ctx;
// 创建新的数据对象
const new_data = {
    user_id: ctx.srfuserid,
    name: ctx.srfusername,
    type: 40
};
uiLogic.form.data.attentions.push(new_data);



```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[清空表单关注人(clean_attentions)](module/TestMgmt/test_case/uilogic/clean_attentions)

节点：清空附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const app2 = ibiz.hub.getApp(context.srfappid);
app2.deService.exec('plmweb.attachment', 'fetchdefault', {...context, test_case: viewParam.id}).then((res) => {
    const attachments = res.data || [];
    attachments.forEach((attachment) => {
        app2.deService.exec('plmweb.attachment', 'remove', {...context, attachment: attachment.srfkey}, attachment);
    })
})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取用例工时进度(get_workload_schedule)](module/TestMgmt/test_case/uilogic/get_workload_schedule)

节点：计算工时进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
var form_data = view.layoutPanel.panelItems.form.control.data;
var remaining_workload = form_data.remaining_workload;
var actual_workload = form_data.actual_workload;
var estimated_workload = form_data.estimated_workload;  
var estimated = 0; // 预估工时
if(estimated_workload){
	estimated = Number(estimated_workload);
}
var actual = 0; // 之前登记的实际工时
if(actual_workload){
	actual = Number(actual_workload);
}
var remaining = 0;
if(remaining_workload){
	remaining = Number(remaining_workload);
}
// 计算工时进度
if((actual + remaining) != 0){
	var schedule = ((actual / (actual + remaining)) * 100).toFixed(1);
	form_data.workload_schedule = schedule;
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取用例工时进度(get_workload_schedule)](module/TestMgmt/test_case/uilogic/get_workload_schedule)

节点：动态显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly === true || srfreadonly === 'true'){
    form.grouppanel5.state.visible=false;
    form.button3.state.visible=false;
    form.button4.state.visible=false;
    form.grouppanel6.state.actionGroupState.u69bc7c7.visible=false;
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联需求（工具栏）(toolbar_link_idea)](module/TestMgmt/test_case/uilogic/toolbar_link_idea)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_product_idea'
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联需求（工具栏）(toolbar_link_idea)](module/TestMgmt/test_case/uilogic/toolbar_link_idea)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[查看工时明细(check_workload_detail)](module/TestMgmt/test_case/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel9.state.visible=true;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[门户全屏(full_screen)](module/TestMgmt/test_case/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[计算表格列行为状态(library)(calc_column_action_state)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const status = row.data.status;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'start_test_plan@test_plan') {
						action.visible = status == 'pending';
					} else if (action.uiActionId === 'end_test_plan@test_plan') {
						// 取消收藏
						action.visible = status == 'in_progress';
					}
				})
			}
		})
	}

```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/test_plan/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[门户编辑(edit_to_design)](module/TestMgmt/test_plan/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[设置门户默认搜索时间(set_portlet_search_date)](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)

节点：设置默认时间
<p class="panel-title"><b>执行代码</b></p>

```javascript
const currentDate = new Date();
const lastDate = new Date(currentDate.getTime() - 604800000);

const curYear = currentDate.getFullYear();
const curMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const curDay = currentDate.getDate().toString().padStart(2, '0');
const lastYear = lastDate.getFullYear();
const lastMonth = (lastDate.getMonth() + 1).toString().padStart(2, '0');
const lastDay = lastDate.getDate().toString().padStart(2, '0');

uiLogic.defaultDate = {
    n_create_time_gtandeq: `${lastYear}-${lastMonth}-${lastDay}`,
    n_create_time_ltandeq: `${curYear}-${curMonth}-${curDay}`
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[设置门户默认搜索时间(set_portlet_search_date)](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)

节点：设置门户参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { daily_test, daily_tendencies } = uiLogic;
if (daily_test) {
    Object.assign(daily_test.params, uiLogic.defaultDate);
}
if (daily_tendencies) {
    Object.assign(daily_tendencies.params, uiLogic.defaultDate);
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[移入计划(shift_in_test_plan)](module/TestMgmt/test_plan/uilogic/shift_in_test_plan)

节点：获取选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
let selecteddata=uiLogic.view.ctx.controllersMap.get("test_planpick_up_view_PickupGridView").ctx.controllersMap.get("grid").state.selectedData;
if (selecteddata.length > 0) {
    uiLogic.selectobj = selecteddata[0];
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[门户刷新(portlet_refresh)](module/TestMgmt/test_plan/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[门户全屏(full_screen)](module/TestMgmt/test_plan/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[门户编辑(edit_to_design)](module/ProdMgmt/ticket/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[门户编辑(edit_to_design)](module/ProdMgmt/ticket/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProdMgmt/ticket/uilogic/toolbar_link_ticket)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_ticket'
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProdMgmt/ticket/uilogic/toolbar_link_ticket)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[上传附件（工具栏）(toolbar_add_attachment)](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)

节点：上传附件（工具栏）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpage1'
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工单值变更(relation_ticket_change)](module/ProdMgmt/ticket/uilogic/relation_ticket_change)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
    uiLogic.viewctx.product = view.context.curproduct;
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工单值变更(relation_ticket_change)](module/ProdMgmt/ticket/uilogic/relation_ticket_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工单值变更(relation_ticket_change)](module/ProdMgmt/ticket/uilogic/relation_ticket_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProdMgmt/ticket/uilogic/toolbar_link_work_item)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_work_item'
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProdMgmt/ticket/uilogic/toolbar_link_work_item)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[返回(back)](module/ProdMgmt/ticket/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel12.state.visible=false;

```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[建立双向关联数据(create_double_relation)](module/ProdMgmt/ticket/uilogic/create_double_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码</b></p>

```javascript
let relationobj = uiLogic.relation;
relationobj.id = relationobj.principal_id + "_" + relationobj.target_id;
let relation2 = uiLogic.relation2;
relation2.id = relation2.principal_id + "_" + relation2.target_id;

```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[建立双向关联数据(create_double_relation)](module/ProdMgmt/ticket/uilogic/create_double_relation)

节点：隐藏下拉框
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;

}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[触发计数器刷新(refresh_counter)](module/ProdMgmt/ticket/uilogic/refresh_counter)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[门户刷新(portlet_refresh)](module/ProdMgmt/ticket/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[客户添加工单值变更(customer_add_change)](module/ProdMgmt/ticket/uilogic/customer_add_change)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[客户添加工单值变更(customer_add_change)](module/ProdMgmt/ticket/uilogic/customer_add_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[客户添加工单值变更(customer_add_change)](module/ProdMgmt/ticket/uilogic/customer_add_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[添加附件数据(add_attachment)](module/ProdMgmt/ticket/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[通知刷新(flush)](module/ProdMgmt/ticket/uilogic/flush)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'ticket'})
console.log('通知刷新',params)
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;

}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[显示下拉并展开选项（嵌入视图）(toolbar_show_dorpdown_data)](module/ProdMgmt/ticket/uilogic/toolbar_show_dorpdown_data)

节点：展开下拉
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic. choose_data_state_obj) {
    uiLogic.choose_data_state_obj.editor.toggleMenu(true);
}
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联产品需求（工具栏）(toolbar_link_idea)](module/ProdMgmt/ticket/uilogic/toolbar_link_idea)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_idea'
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联产品需求（工具栏）(toolbar_link_idea)](module/ProdMgmt/ticket/uilogic/toolbar_link_idea)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[门户全屏(full_screen)](module/ProdMgmt/ticket/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)的处理逻辑[判断是否禁用(is_disabled)](module/ProdMgmt/ticket_type/uilogic/is_disabled)

节点：判断是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
var disabled = view.layoutPanel.panelItems.form.control.state.data.disabled;
if(disabled === 1){
    view.layoutPanel.panelItems.button_okaction.state.disabled = true;
}

```
#### [企业用户(USER)](module/Base/user)的处理逻辑[修改密码（表单）(change_pas)](module/Base/user/uilogic/change_pas)

节点：校验表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
const bol = await uiLogic.form.validate();
if (bol) {
    const {old_password,new_password,sure_password} = uiLogic.default;
    const result = await ibiz.appUtil.changePwd(old_password,new_password,{surePwd: sure_password})
    if (result && result.ok) {
      ibiz.message.success('修改密码成功');
    } else {
      ibiz.message.error(`修改密码失败`);
    }
} else {
    ibiz.message.error('请检查表单填写！');
}
} )();
```
#### [企业用户(USER)](module/Base/user)的处理逻辑[修改密码（移动端表单）(mob_change_pas)](module/Base/user/uilogic/mob_change_pas)

节点：移动端校验表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
const bol = await uiLogic.form.validate();
if (bol) {
    const {old_password,new_password,sure_password} = uiLogic.default;
    const result = await ibiz.appUtil.changePwd(old_password,new_password,{surePwd: sure_password})
    if (result && result.ok) {
      ibiz.message.success('修改密码成功');
      uiLogic.view.modal.ignoreDismissCheck = true;
      uiLogic.view.closeView({ ok: true, data: [] })
    } else {
      ibiz.message.error(`修改密码失败`);
    }
} else {
    ibiz.message.error('请检查表单填写！');
}
} )();
```
#### [企业用户(USER)](module/Base/user)的处理逻辑[删除部门(trash_dept)](module/Base/user/uilogic/trash_dept)

节点：提示移除成员后才可删除
<p class="panel-title"><b>执行代码</b></p>

```javascript
const bol = await util.confirm.warning({
  title: '提示',
  desc: '请移除该部门下成员才可删除！',
});
```
#### [企业用户(USER)](module/Base/user)的处理逻辑[删除部门(trash_dept)](module/Base/user/uilogic/trash_dept)

节点：提示移除下级部门
<p class="panel-title"><b>执行代码</b></p>

```javascript
const bol = await util.confirm.warning({
  title: '提示',
  desc: '请先移除下级部门后才可删除！',
});
```
#### [版本(VERSION)](module/Base/version)的处理逻辑[获取版本总条数(get_version_total)](module/Base/version/uilogic/get_version_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;
if(!total){
    view.layoutPanel.panelItems.grid.state.visible = false;
}else{
    view.layoutPanel.panelItems.grid.state.visible = true;
}
```
#### [版本(VERSION)](module/Base/version)的处理逻辑[触发计数器刷新(refresh_counter)](module/Base/version/uilogic/refresh_counter)

节点：表格显示
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.layoutPanel.panelItems.grid.state.visible = true;

```
#### [版本(VERSION)](module/Base/version)的处理逻辑[触发计数器刷新(refresh_counter)](module/Base/version/uilogic/refresh_counter)

节点：计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type});
```
#### [版本(VERSION)](module/Base/version)的处理逻辑[计算表格列行为状态（version）(calc_column_button_state)](module/Base/version/uilogic/calc_column_button_state)

节点：判断恢复版本是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 主表单中的当前版本标识
const cur_version_id = uiLogic.view.parentView.layoutPanel.panelItems.form.control.data.cur_version_id;
console.log("主表单中的当前版本标识", cur_version_id);
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.create_time;
		const version_id = row.data.id;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				if (action.uiActionId === 'restore@version') {
                    // 版本标识为当前版本标识，禁用恢复版本
					action.disabled = uiLogic.ctx.srfreadonly || version_id == cur_version_id;
				}
			})
		}
	})
}

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[工时日历打开工时日志视图(calendar_link_log_view)](module/Base/workload/uilogic/calendar_link_log_view)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[门户编辑(edit_to_design)](module/Base/workload/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[门户编辑(edit_to_design)](module/Base/workload/uilogic/edit_to_design)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开工作类别管理工时记录列表视图(open_management_type_detail)](module/Base/workload/uilogic/open_management_type_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[返回（执行用例表单）(back_run_main_view)](module/Base/workload/uilogic/back_run_main_view)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.tabpanel2.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel1.state.visible=false;

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[返回(back)](module/Base/workload/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel9.state.visible=false;

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[门户刷新(portlet_refresh)](module/Base/workload/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开所属工时记录列表视图(open_project_workload_detail)](module/Base/workload/uilogic/open_project_workload_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开成员工时记录列表视图(open_member_detail)](module/Base/workload/uilogic/open_member_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开工作类别工时记录列表视图(open_type_detail)](module/Base/workload/uilogic/open_type_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开所属工时记录列表视图(管理)(open_parent_with_log_grid)](module/Base/workload/uilogic/open_parent_with_log_grid)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开团队总登记日志表格视图(open_group_duration_link)](module/Base/workload/uilogic/open_group_duration_link)

节点：获取搜索表单中的日期范围
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[工时日历打开工时日志视图（管理）(calendar_management_link_log_view)](module/Base/workload/uilogic/calendar_management_link_log_view)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开团队下成员工时日历(open_group_member_calendar)](module/Base/workload/uilogic/open_group_member_calendar)

节点：获取搜索表单中日期范围搜索条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
var date_range = view.layoutPanel.panelItems.searchform.control.data.date_range;
uiLogic.default.date_range=date_range;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[门户全屏(full_screen)](module/Base/workload/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/ProjMgmt/work_item/uilogic/calc_column_action_state)

节点：计算表格列行为状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const codelistItem = dataItems.find(x => x.id === type);
            const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = is_archived === 0;
					} else if (action.uiActionId === 'newrow_test@work_item') {
						// 新建行
						action.visible = !!codelistItem.data;
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = parentItems.length > 0;
					}
				})
			}
		})
	}
} )();
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联工作项值变更(relation_self_change)](module/ProjMgmt/work_item/uilogic/relation_self_change)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_type = view.layoutPanel.panelItems.choose_type.value;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
    uiLogic.viewctx.project = view.context.curproject;
}
// 关联类型
if (choose_type != null && choose_type != '') {
    uiLogic.dto.relation_type = choose_type;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联工作项值变更(relation_self_change)](module/ProjMgmt/work_item/uilogic/relation_self_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_relation_data = view.layoutPanel.panelItems.choose_relation_data;
const panel = view.layoutPanel.panelItems.choose_data;
if (choose_relation_data) {
    panel.state.visible = false;
}
uiLogic.default.choose_relation_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联工作项值变更(relation_self_change)](module/ProjMgmt/work_item/uilogic/relation_self_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加子工作项值变更(add_child_change)](module/ProjMgmt/work_item/uilogic/add_child_change)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加子工作项值变更(add_child_change)](module/ProjMgmt/work_item/uilogic/add_child_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加子工作项值变更(add_child_change)](module/ProjMgmt/work_item/uilogic/add_child_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item'})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型（表单）(calc_parent_work_item_type_form)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

节点：计算父工作项类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() {
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const type = uiLogic.type || '';
    const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
    if (parentItems.length > 0) {
        uiLogic.parent_type = parentItems.map(x => x.value).join(',');
        uiLogic.ctrl.state.data.n_work_item_type_id_in = uiLogic.parent_type;
    }
})();
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[刷新关联子工作项列表（移动端）(mob_refresh_child_list)](module/ProjMgmt/work_item/uilogic/mob_refresh_child_list)

节点：更新srfdecodename
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
ibiz.mc.command.create.send({ srfdecodename: 'work_item'})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[刷新关联子工作项列表（移动端）(mob_refresh_child_list)](module/ProjMgmt/work_item/uilogic/mob_refresh_child_list)

节点：隐藏下拉框
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项工时进度（移动端）(mob_get_workload_schedule)](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)

节点：计算工时进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
var form_data = view.layoutPanel.panelItems.form.control.data;
var remaining_workload = form_data.remaining_workload;
var actual_workload = form_data.actual_workload;
var estimated_workload = form_data.estimated_workload;  
var estimated = 0; // 预估工时
if(estimated_workload){
	estimated = Number(estimated_workload);
}
var actual = 0; // 之前登记的实际工时
if(actual_workload){
	actual = Number(actual_workload);
}
var remaining = 0;
if(remaining_workload){
	remaining = Number(remaining_workload);
}
// 计算工时进度
if((actual + remaining) != 0){
	var schedule = ((actual / (actual + remaining)) * 100).toFixed(1);
	form_data.workload_schedule = schedule;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项工时进度（移动端）(mob_get_workload_schedule)](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)

节点：动态显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly === true || srfreadonly === 'true'){
    // 工时按钮
    form.grouppanel9.state.visible=false; 
    // // 基线按钮
    // form.grouppanel12.state.visible=false;
    // // 附件按钮
    // form.grouppanel11.state.actionGroupState.uaa6fcf7.visible=false;
}
const _type = uiLogic.form.state.data.work_item_sub_type;
if (!_type) {
    // 子工作项分页
    form.tabpanel1_child.state.visible = false;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项总条数(get_work_item_total)](module/ProjMgmt/work_item/uilogic/get_work_item_total)

节点：设置总条数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;
if(!total){
    view.layoutPanel.panelItems.grid.state.visible = false
}else{
    view.layoutPanel.panelItems.grid.state.visible = true
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[查看工时明细(check_workload_detail)](module/ProjMgmt/work_item/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel9.state.visible=true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[通知刷新（移动端）(notify_refresh)](module/ProjMgmt/work_item/uilogic/notify_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'work_item'})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[门户刷新(portlet_refresh)](module/ProjMgmt/work_item/uilogic/portlet_refresh)

节点：门户刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    uiLogic.ctrl.refresh();
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[状态变更前逻辑——表格(before_state_change_grid)](module/ProjMgmt/work_item/uilogic/before_state_change_grid)

节点：判断类型是否匹配
<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectedData = uiLogic.selecteddata;
let needDisable = true;
if (selectedData && selectedData.length > 0) {
    const firstData = selectedData[0];
    for (let i = 0; i < selectedData.length; i++) {
        const curData = selectedData[i];
        const dataType = curData.work_item_type_id;
        if (firstData.work_item_type_id !== dataType) {
            needDisable = true;
            break; 
        } else {
            needDisable = false;
        }
    }
    if(needDisable === true){
        const cur_grid = uiLogic.cur_grid;
        let detoolbar = uiLogic.detoolbar;
        detoolbar = cur_grid.ctx.controllersMap.get("grid").batchToolbarController.state;
        const detoolbarbutton = detoolbar.buttonsState.children;
        for(let j = 0; j <detoolbarbutton.length;j++){
            const toolitem = detoolbarbutton[j];
            if (toolitem.uiActionId == "change_state@work_item"){
                toolitem.disabled = true;
            }
        }
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[执行用例关联工作项(缺陷)(run_relation_work_item_bug)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;

// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    uiLogic.test_case_dto.srfactionparam = JSON.parse(choose);
    uiLogic.test_case_dto.principal_id = view.context.case_id;
    uiLogic.test_case_dto.principal_type = 'test_case';
    uiLogic.test_case_dto.target_type = 'work_item';
}
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[执行用例关联工作项(缺陷)(run_relation_work_item_bug)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[执行用例关联工作项(缺陷)(run_relation_work_item_bug)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'run'})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[状态变更前逻辑(before_state_change)](module/ProjMgmt/work_item/uilogic/before_state_change)

节点：判断类型是否匹配
<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectedData = uiLogic.selecteddata;
let needDisable = true;
if (selectedData && selectedData.length > 0) {
    const firstData = selectedData[0];
    for (let i = 0; i < selectedData.length; i++) {
        const curData = selectedData[i];
        const dataType = curData.work_item_type_id;
        if (firstData.work_item_type_id !== dataType) {
            needDisable = true;
            break; 
        } else {
            needDisable = false;
        }
    }
    if(needDisable === true){
        const cur_grid = uiLogic.cur_grid;
        let detoolbar = uiLogic.detoolbar;
        detoolbar = cur_grid.ctx.controllersMap.get("treegrid").batchToolbarController.state;
        const detoolbarbutton = detoolbar.buttonsState.children;
        for(let j = 0; j <detoolbarbutton.length;j++){
            const toolitem = detoolbarbutton[j];
            if (toolitem.uiActionId == "change_state@work_item"){
                toolitem.disabled = true;
            }
        }
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(上下文)(calc_children_work_item_type_context)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)

节点：计算项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() {
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const type = uiLogic.type || '';
    const codelistItem = dataItems.find(x => x.id === type);
    
    if (codelistItem && codelistItem.data) {
        uiLogic.children_type = codelistItem.data;
        params.n_work_item_type_id_in = codelistItem.data;
    }
})();
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联子工作项表格行为列状态(relation_child_grid_action)](module/ProjMgmt/work_item/uilogic/relation_child_grid_action)

节点：关联子工作项表格行为列状态
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.end_at;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 取消关联
					    if (action.uiActionId === 'child_del_relation@work_item') {
                            action.disabled = true;
                        }
					    
					}
				})
			}
		})
	}
}, 1000);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型(calc_parent_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)

节点：计算项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() {
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const type = uiLogic.type || '';
    const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
    if (parentItems.length > 0) {
        uiLogic.parent_type = parentItems.map(x => x.value).join(',');
        uiLogic.grid.params.n_work_item_type_id_in = uiLogic.parent_type;
    }
})();
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProjMgmt/work_item/uilogic/toolbar_link_ticket)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_ticket'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工单（工具栏）(toolbar_link_ticket)](module/ProjMgmt/work_item/uilogic/toolbar_link_ticket)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[上传附件（工具栏）(toolbar_add_attachment)](module/ProjMgmt/work_item/uilogic/toolbar_add_attachment)

节点：上传附件（工具栏）
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpage1'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProjMgmt/work_item/uilogic/toolbar_link_work_item)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_relation'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工作项（工具栏）(toolbar_link_work_item)](module/ProjMgmt/work_item/uilogic/toolbar_link_work_item)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[导出为图片（甘特图）(export_gantt_image)](module/ProjMgmt/work_item/uilogic/export_gantt_image)

节点：导出图片
<p class="panel-title"><b>执行代码</b></p>

```javascript
const viewDom = document.getElementById(view.id);
const gantt = viewDom.querySelector('.ibiz-control-gantt');
if (gantt) {
    gantt.classList.add('is-exporting');
    await ibiz.util.html2canvas.exportCanvas(gantt, { fileName: view.model.caption });
    gantt.classList.remove('is-exporting');
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置执行人(setting_executors)](module/ProjMgmt/work_item/uilogic/setting_executors)

节点：设置执行人回写主表单
<p class="panel-title"><b>执行代码</b></p>

```javascript
var main_form_executors = view.layoutPanel.panelItems.form.control.details.executors;
var executors = uiLogic.default.executors;
main_form_executors.setDataValue(executors)


```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算项目资源成员(calc_project_resouce_member)](module/ProjMgmt/work_item/uilogic/calc_project_resouce_member)

节点：设置选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { gantt } = uiLogic;
if (gantt) {
    const selecteddata = JSON.stringify(gantt.getNodeDataByNodeId('member_node'));
    if (selecteddata) {
        params.selecteddata = selecteddata;
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[图表显示总数(chart_show_count)](module/ProjMgmt/work_item/uilogic/chart_show_count)

节点：图表显示总数
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { chart } = uiLogic;
if (chart) {
  const { options } = chart;
  const count = chart.state.items.length || 0;
  const text = '总数：' + count;
  Object.assign(options.title, { text, show: true });
  chart.updateChart();
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[建立关联数据(create_relation)](module/ProjMgmt/work_item/uilogic/create_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码</b></p>

```javascript
let relationobj = uiLogic.relation;
relationobj.id = relationobj.principal_id + "_" + relationobj.target_id;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[图表全屏（移动端）(mob_full_screen)](module/ProjMgmt/work_item/uilogic/mob_full_screen)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('执行全屏逻辑');
if (uiLogic.ctrl) {
   const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement,{srftitle:'测试标题',showClose:true});
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联用例（工具栏）(toolbar_link_test_case)](module/ProjMgmt/work_item/uilogic/toolbar_link_test_case)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_test_case'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联用例（工具栏）(toolbar_link_test_case)](module/ProjMgmt/work_item/uilogic/toolbar_link_test_case)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算资源成员（全局）(calc_resouce_member)](module/ProjMgmt/work_item/uilogic/calc_resouce_member)

节点：设置选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { gantt } = uiLogic;
if (gantt) {
    const selecteddata = JSON.stringify(gantt.getNodeDataByNodeId('member_node'));
    if (selecteddata) {
        params.selecteddata = selecteddata;
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[新建行(newrow_test)](module/ProjMgmt/work_item/uilogic/newrow_test)

节点：新建行
<p class="panel-title"><b>执行代码</b></p>

```javascript
const treegrid = view.getController('treegrid');
if (treegrid) {
    treegrid.newRow({data: uiLogic.default});
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/work_item/uilogic/edit_to_design)

节点：打印报表数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('门户面板模型', uiLogic.ctrl.contentController.model);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/work_item/uilogic/edit_to_design)

节点：跳转设计页
<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[门户编辑(edit_to_design)](module/ProjMgmt/work_item/uilogic/edit_to_design)

节点：刷新部件
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
uiLogic.ctrl.refresh();
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[打开BI报表设计界面(open_bi_report_design)](module/ProjMgmt/work_item/uilogic/open_bi_report_design)

节点：打开BI报表设计界面
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.reportpanel){
    uiLogic.result = await uiLogic.reportpanel.openReportDesignPage();
}else{
    uiLogic.result = await uiLogic.reportpanel_portlet.contentController.openReportDesignPage();
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置默认关注人(set_default_attention)](module/ProjMgmt/work_item/uilogic/set_default_attention)

节点：绑定关注人
<p class="panel-title"><b>执行代码</b></p>

```javascript
const attentions = uiLogic.form.state.data.attentions;
if (attentions && attentions[0]) {
  uiLogic.form.state.data.attentions = [{ ...attentions[0], ...uiLogic.attention }]
  return;
}
uiLogic.form.state.data.attentions = [uiLogic.attention];
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[刷新(refresh)](module/ProjMgmt/work_item/uilogic/refresh)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item', srfkey: context.principal_id});

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(calc_children_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)

节点：计算看板项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type || '';
const codelistItem = uiLogic.codelistitems.find(x => x.id === type);

if (codelistItem && codelistItem.data) {
    uiLogic.children_type = codelistItem.data;
    uiLogic.default.srfUserData = {
        pickerData: uiLogic.children_type,
        codelistTag: 'plmweb.projmgmt__work_item_type',
        pickerField: 'work_item_type_id',
        defaultValue: uiLogic.children_type.split(',')[0]
    };
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[显示表单侧边栏(show_form_sidebar)](module/ProjMgmt/work_item/uilogic/show_form_sidebar)

节点：显示侧边栏
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
//var state_type = uiLogic.work_item_state.type;
//uiLogic.view.layoutPanel.panelItems.form.control.details.state_type.setDataValue(state_type);



```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加附件数据(add_attachment)](module/ProjMgmt/work_item/uilogic/add_attachment)

节点：设置附件参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
// 计算新建默认值
const defaultData = uiLogic.grid.calcDefaultValue({}, true);
uiLogic.attach = uiLogic.files.map(item => 
    {
        return {
            name: item.name,
            file_id: item.id,
            id: item.uuid,
            ...defaultData,
        }
    }
)
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算表格列行为状态(需求树表格)(calc_requirement_column_action)](module/ProjMgmt/work_item/uilogic/calc_requirement_column_action)

节点：动态显示界面行为
<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
    const rows = uiLogic.grid.state.rows;
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const codelistItem = dataItems.find(x => x.id === type);
            const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = is_archived === 0;
					} else if (action.uiActionId === 'newrow_test@work_item') {
                        // 新建行
                        action.visible = !!codelistItem.data;
                        // 需求树表格上 用户故事不显示新建行
                        if(type == 'scrum_story'){
						    action.visible = false;
                        }
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = parentItems.length > 0;
					}
				})
			}
		})
	}
} )();
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[子工作项刷新计数器(child_refresh_counter)](module/ProjMgmt/work_item/uilogic/child_refresh_counter)

节点：更新上下文信息
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({srfdecodename: 'work_item',srfkey: context.del_child_relation})

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项工时进度(get_workload_schedule)](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

节点：计算工时进度
<p class="panel-title"><b>执行代码</b></p>

```javascript
var form_data = view.layoutPanel.panelItems.form.control.data;
var remaining_workload = form_data.remaining_workload;
var actual_workload = form_data.actual_workload;
var estimated_workload = form_data.estimated_workload;  
var estimated = 0; // 预估工时
if(estimated_workload){
	estimated = Number(estimated_workload);
}
var actual = 0; // 之前登记的实际工时
if(actual_workload){
	actual = Number(actual_workload);
}
var remaining = 0;
if(remaining_workload){
	remaining = Number(remaining_workload);
}
// 计算工时进度
if((actual + remaining) != 0){
	var schedule = ((actual / (actual + remaining)) * 100).toFixed(1);
	form_data.workload_schedule = schedule;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项工时进度(get_workload_schedule)](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

节点：动态显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly === true || srfreadonly === 'true'){
    // 工时按钮
    form.grouppanel1.state.visible=false; 
    // 基线按钮
    form.grouppanel12.state.visible=false;
    // 附件按钮
    form.grouppanel11.state.actionGroupState.uaa6fcf7.visible=false;
}
const _type = uiLogic.form.state.data.work_item_sub_type;
if (!_type) {
    // 子工作项分页
    form.tabpanel1_child.state.visible = false;
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[显示下拉并展开选项（嵌入视图）(toolbar_show_dorpdown_data)](module/ProjMgmt/work_item/uilogic/toolbar_show_dorpdown_data)

节点：展开下拉
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic. choose_data_state_obj) {
    uiLogic.choose_data_state_obj.editor.toggleMenu(true);
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联需求（工具栏）(toolbar_link_idea)](module/ProjMgmt/work_item/uilogic/toolbar_link_idea)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_product_idea'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联需求（工具栏）(toolbar_link_idea)](module/ProjMgmt/work_item/uilogic/toolbar_link_idea)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[门户全屏(full_screen)](module/ProjMgmt/work_item/uilogic/full_screen)

节点：门户全屏
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic.ctrl) {
    const contentElement = uiLogic.ctrl.contentElement;
    if (contentElement) {
        ibiz.fullscreenUtil.openElementFullscreen(contentElement);
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state)的处理逻辑[判断操作列是否禁用(judge_column_state)](module/ProjMgmt/work_item_state/uilogic/judge_column_state)

节点：判断操作列是否禁用
<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    console.log(rows);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const is_system = row.data.is_system;
					 if (is_system === 1) {
						// 禁用
                        row.uaColStates.uagridcolumn1.visible = false;
                        Object.values(row.uaColStates.uagridcolumn1).forEach(item => {
                            item.visible = false;
                            item.disabled = true;
                        })
					} 	
		})
	}

```




