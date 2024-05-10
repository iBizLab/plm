
## 使用脚本的界面逻辑节点<sup class="footnote-symbol"> <font color=orange>[286]</font></sup>

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
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[添加附件数据(add_attachment)](module/Base/attachment/uilogic/add_attachment)

节点：添加附件实体临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.attachment',
    'create',
    context,
    uiLogic.attach[0],
);
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[添加附件数据(add_attachment)](module/Base/attachment/uilogic/add_attachment)

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
uiLogic.attach = { data: data, silent: true };
```
#### [附件(ATTACHMENT)](module/Base/attachment)的处理逻辑[附件删除（表格）(remove_attachment_grid)](module/Base/attachment/uilogic/remove_attachment_grid)

节点：设置附件数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: data, silent: true };
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
        if(srfreadonly == true){
            uiActionId.disabled = true;
        }    
	})
}	

```
#### [基线(BASELINE)](module/Base/baseline)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/Base/baseline/uilogic/calc_column_action_state)

节点：根据状态是否显示设立完成行为
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
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
			})
		}
	})
}	

```
#### [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)的处理逻辑[返回(back)](module/ProdMgmt/baseline_idea/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.baseline.state.visible=false;

```
#### [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)的处理逻辑[返回(back)](module/TestMgmt/baseline_test_case/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.baseline.state.visible=false;

```
#### [看板(BOARD)](module/ProjMgmt/board)的处理逻辑[看板删除后附加逻辑(after_board_remove)](module/ProjMgmt/board/uilogic/after_board_remove)

节点：计算删除看板id
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (context.board === context.curboard) {
    context.srfdefaulttoroutedepth = 3;
    context.board = context.project;
}
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[添加回复(客户沟通)(add_comment_client)](module/Base/comment/uilogic/add_comment_client)

节点：设置评论输入框默认展开
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.panelitems.client_field_textbox.editor.toggleCollapse(true);
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
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[清空评论(客户沟通)(clear_comment_client)](module/Base/comment/uilogic/clear_comment_client)

节点：注入脚本代码
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

节点：获取评论框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
```
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[发送评论(知识库)(send_comment_wiki)](module/Base/comment/uilogic/send_comment_wiki)

节点：清空评论框与评论id
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox = '';
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
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[清空评论(clear_comment)](module/Base/comment/uilogic/clear_comment)

节点：注入脚本代码
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
#### [评论(COMMENT)](module/Base/comment)的处理逻辑[回复评论（知识库）(reply_comment_wiki)](module/Base/comment/uilogic/reply_comment_wiki)

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
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
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
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[刷新客户表格(refresh_customer_grid)](module/ProdMgmt/customer/uilogic/refresh_customer_grid)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'customer', srfkey: context.customer})
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[关联客户值变更(relation_customer_change)](module/ProdMgmt/customer/uilogic/relation_customer_change)

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
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[关联客户值变更(relation_customer_change)](module/ProdMgmt/customer/uilogic/relation_customer_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[关联客户值变更(relation_customer_change)](module/ProdMgmt/customer/uilogic/relation_customer_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[触发计数器刷新(refresh_counter)](module/ProdMgmt/customer/uilogic/refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/Base/deliverable/uilogic/calc_column_action_state)

节点：注入脚本代码
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
					    // 提交
					    if (action.uiActionId === 'submit_form@deliverable') {
                            action.disabled = true;
                        }
                        // 删除
					    if (action.uiActionId === 'del_form@deliverable') {
                            action.disabled = true;
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

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.deliverable',
    'update',
    context,
    uiLogic.default,
);
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[提交(submit)](module/Base/deliverable/uilogic/submit)

节点：获取文件名称
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.default.name = uiLogic.files[0].name;
uiLogic.default.file_id = uiLogic.files[0].id;
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[输入框区域隐藏(hidden_input_area)](module/Base/deliverable/uilogic/hidden_input_area)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.input_data.value="";
uiLogic.view.layoutPanel.panelItems.container1.state.visible=false;
```
#### [交付物(DELIVERABLE)](module/Base/deliverable)的处理逻辑[获取交付目标总条数(get_deliverable_total)](module/Base/deliverable/uilogic/get_deliverable_total)

节点：注入脚本代码
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

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.container1.state.visible=true;
```
#### [数据字典(DICTIONARY)](module/Base/dictionary_data)的处理逻辑[判断操作列是否禁用(judge_column_state)](module/Base/dictionary_data/uilogic/judge_column_state)

节点：注入脚本代码
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

节点：注入脚本代码
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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取需求总条数(get_idea_total)](module/ProdMgmt/idea/uilogic/get_idea_total)

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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[触发计数器刷新(refresh_counter)](module/ProdMgmt/idea/uilogic/refresh_counter)

节点：注入脚本代码
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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联需求值变更(relation_idea_change)](module/ProdMgmt/idea/uilogic/relation_idea_change)

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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联需求值变更(relation_idea_change)](module/ProdMgmt/idea/uilogic/relation_idea_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;

```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[关联需求值变更(relation_idea_change)](module/ProdMgmt/idea/uilogic/relation_idea_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript

ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取工时进度(get_workload_schedule)](module/ProdMgmt/idea/uilogic/get_workload_schedule)

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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取工时进度(get_workload_schedule)](module/ProdMgmt/idea/uilogic/get_workload_schedule)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly == true){
    form.grouppanel4.state.visible=false;
    form.grouppanel5.state.actionGroupState.u3a6466f.visible=false;
}
```
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[刷新需求表格(refresh_idea_grid)](module/ProdMgmt/idea/uilogic/refresh_idea_grid)

节点：注入脚本代码
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
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
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
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[计算表格列行为状态(library)(calc_column_action_state)](module/TestMgmt/library/uilogic/calc_column_action_state)

节点：注入脚本代码
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

节点：注入脚本代码
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
#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[刷新当前表格(refresh_current_grid)](module/TestMgmt/library/uilogic/refresh_current_grid)

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

节点：注入脚本代码
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
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[恢复历史版本并通知刷新(page_refresh)](module/Wiki/article_page/uilogic/page_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.parentView.state.isLoading = false;
view.parentView.closeView();
ibiz.mc.command.send({srfdecodename: 'article_page',srfkey:uiLogic.context.article_page}, 'OBJECTUPDATED',uiLogic.form.triggerKey);
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

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.send({srfdecodename: 'article_page'}, 'OBJECTCREATED');
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[刷新当前表格(refresh_current_grid)](module/Wiki/article_page/uilogic/refresh_current_grid)

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
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[计算表格列行为状态(portfolio)(calc_column_action_state)](module/Base/portfolio/uilogic/calc_column_action_state)

节点：注入脚本代码
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

节点：注入脚本代码
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
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[刷新当前表格(refresh_current_grid)](module/Base/portfolio/uilogic/refresh_current_grid)

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

节点：注入脚本代码
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
					if (action.uiActionId === 'add_favorite@product') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@product') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[通知刷新(notify_refresh)](module/ProdMgmt/product/uilogic/notify_refresh)

节点：注入脚本代码
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
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[刷新当前表格(refresh_current_grid)](module/ProdMgmt/product/uilogic/refresh_current_grid)

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
#### [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)的处理逻辑[建立产品成员(create_product_member)](module/ProdMgmt/product_member/uilogic/create_product_member)

节点：获取选中数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
let selecteddata=uiLogic.view.ctx.controllersMap.get("user_pickupgridview_user").ctx.controllersMap.get("grid").state.selectedData;
if (selecteddata.length > 0) {
    uiLogic.temp_obj.selectdata = selecteddata;
}
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

节点：注入脚本代码
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
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[通知刷新(notify_refresh)](module/ProjMgmt/project/uilogic/notify_refresh)

节点：注入脚本代码
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

节点：注入脚本代码
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
#### [关联(RELATION)](module/Base/relation)的处理逻辑[触发计数器刷新(refresh_counter)](module/Base/relation/uilogic/refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[计算表格列行为状态(project)(calc_column_action_state)](module/TestMgmt/review/uilogic/calc_column_action_state)

节点：注入脚本代码
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
					if (action.uiActionId === 'add_favorite@review') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@review') {
						// 取消收藏
						action.visible = is_favorite != 0;
					}
				})
			}
		})
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
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[批量删除评审用例临时数据(remove_batch_temp)](module/TestMgmt/review/uilogic/remove_batch_temp)

节点：批量删除临时数据（临时）
<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
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
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[跳转至工作流编辑视图(jump_wf_edit_view)](module/TestMgmt/review/uilogic/jump_wf_edit_view)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.commands.execute("ibiz.app-view.open", "review_wf_dyna_edit_view", uiLogic.context,uiLogic.params);
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
        const state = row.data.review_result;
    if (state !== null && state !== undefined) {
        total_already++;
    }
    });
    uiLogic.view.layoutPanel.state.data.total_already = total_already;

    const floatTotal = parseFloat(rows.length);
    const floatTotalAlready = parseFloat(total_already);

    console.log("floatTotal:", floatTotal);
    console.log("floatTotalAlready:", floatTotalAlready);
    
    const ratio = Math.round((floatTotalAlready / floatTotal) * 100); 
    console.log(ratio);
    uiLogic.view.layoutPanel.state.data.schedule = ratio;
} else {
    console.log("Error: No rows found");
}

```
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[刷新用例表格(refresh_run_grid)](module/TestMgmt/run/uilogic/refresh_run_grid)

节点：刷新视图
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.change.sendCommand({
    srfdecodename:'Run'
},"OBJECTUPDATED")

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
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取执行结果总条数(get_run_result_total)](module/TestMgmt/run/uilogic/get_run_result_total)

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
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[触发计数器刷新(run)(refresh_counter_run)](module/TestMgmt/run/uilogic/refresh_counter_run)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename:'run'})
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
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[计算表格列行为状态(space)(calc_column_action_state)](module/Wiki/space/uilogic/calc_column_action_state)

节点：注入脚本代码
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
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[刷新当前表格(refresh_current_grid)](module/Wiki/space/uilogic/refresh_current_grid)

节点：通过实体刷新表格、树
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'space', srfkey: params.owner_id})
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

节点：注入脚本代码
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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取测试用例总条数(get_test_case_total)](module/TestMgmt/test_case/uilogic/get_test_case_total)

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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[触发计数器刷新(refresh_counter)](module/TestMgmt/test_case/uilogic/refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[刷新测试用例表格(refresh_test_case_grid)](module/TestMgmt/test_case/uilogic/refresh_test_case_grid)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'test_case', srfkey: context.test_case})
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联测试用例值变更(relation_test_case_change)](module/TestMgmt/test_case/uilogic/relation_test_case_change)

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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联测试用例值变更(relation_test_case_change)](module/TestMgmt/test_case/uilogic/relation_test_case_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[关联测试用例值变更(relation_test_case_change)](module/TestMgmt/test_case/uilogic/relation_test_case_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取工时进度(get_workload_schedule)](module/TestMgmt/test_case/uilogic/get_workload_schedule)

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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取工时进度(get_workload_schedule)](module/TestMgmt/test_case/uilogic/get_workload_schedule)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly == true){
    form.grouppanel5.state.visible=false;
    form.grouppanel6.state.actionGroupState.u69bc7c7.visible=false;
}
```
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[显示下拉并展开选项（嵌入视图）(toolbar_show_dorpdown_data)](module/TestMgmt/test_case/uilogic/toolbar_show_dorpdown_data)

节点：展开下拉
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic. choose_data_state_obj) {
    uiLogic.choose_data_state_obj.editor.toggleMenu(true);
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
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[计算表格列行为状态(library)(calc_column_action_state)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)

节点：注入脚本代码
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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/ProdMgmt/ticket/uilogic/calc_column_action_state)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 归档
					if (action.uiActionId === 'archive@ticket') {
						action.disabled = is_archived !== 0;
					} else if (action.uiActionId === 'activate@ticket') {
						// 激活
						action.disabled = is_archived === 0;
					} 
				})
			}
		})
	}
}, 1000);
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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[只读隐藏(readonly_hide)](module/ProdMgmt/ticket/uilogic/readonly_hide)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript

    const toolbar_state = uiLogic.toolbar.state.buttonsState;
    const srfreadonly = context.srfreadonly;
    if (srfreadonly === "true") {
        toolbar_state.visible = false;
        console.log("进入")
    }
    console.log(toolbar_state);


```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[上传附件（工具栏）(toolbar_add_attachment)](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)

节点：注入脚本代码
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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[刷新工单表格(refresh_ticket_grid)](module/ProdMgmt/ticket/uilogic/refresh_ticket_grid)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'ticket', srfkey: context.ticket})
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

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[建立关联数据(create_relation)](module/ProdMgmt/ticket/uilogic/create_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码</b></p>

```javascript
let relationobj = uiLogic.relation;
relationobj.id = relationobj.principal_id + "_" + relationobj.target_id;
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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[获取工单总条数(get_ticket_total)](module/ProdMgmt/ticket/uilogic/get_ticket_total)

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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[添加附件数据(add_attachment)](module/ProdMgmt/ticket/uilogic/add_attachment)

节点：添加附件实体临时数据
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmweb.attachment',
    'create',
    context,
    uiLogic.attach[0],
);
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
#### [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)的处理逻辑[判断是否禁用(is_disabled)](module/ProdMgmt/ticket_type/uilogic/is_disabled)

节点：注入脚本代码
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
    ibiz.util.action.execAndResolved(
      'change_password',
      {
        context: uiLogic.form.context,
        params: uiLogic.form.params,
        data: [uiLogic.default],
        view: uiLogic.view,
      },
      uiLogic.form.model.appId,
    );
} else {
    ibiz.message.error('请检查表单填写！');
}
} )();
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
#### [版本(VERSION)](module/Base/version)的处理逻辑[版本表格列行为是否启用(action_disabled)](module/Base/version/uilogic/action_disabled)

节点：根据上下文中srfreadonly判断取消关联是否启用
<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const actionColumn = row.uiActionGroupStates.create_time;
		if (actionColumn && Object.values(actionColumn).length > 0) {
			Object.values(actionColumn).forEach(action => {
                if(srfreadonly == true){
					// 恢复版本
					if (action.uiActionId === 'restore@version') {
                        action.disabled = true;
                    }
                    //编辑版本
					if (action.uiActionId === 'edit_version@version') {
                        action.disabled = true;
                    }
				}
			})
		}
	})
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
					action.disabled = version_id == cur_version_id;
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
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[工时日历打开工时日志视图（管理）(calendar_management_link_log_view)](module/Base/workload/uilogic/calendar_management_link_log_view)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/ProjMgmt/work_item/uilogic/calc_column_action_state)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const newRowHiddenList = ['kanban_bug', 'kanban_issue', 'waterfall_bug', 'scrum_task', 'scrum_bug'];
            const changeParentHiddenList = ['scrum_epic', 'kanban_epic', 'kanban_issue'];
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
						action.visible = !newRowHiddenList.includes(type);
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = !changeParentHiddenList.includes(type);
					}
				})
			}
		})
	}
}, 1000);
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

节点：计算看板项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 事务类型与史诗类型无父工作项
if (!type || type === 'issue' || type === 'epic') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 1) {
    uiLogic.parent_type = `kanban_${list[0]}`;
} else if (index === 2) {
    uiLogic.parent_type = `kanban_${list[1]}`;
} else if (index === 3 || index === 4) {
    uiLogic.parent_type = `kanban_${list[2]}`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型（表单）(calc_parent_work_item_type_form)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

节点：计算瀑布项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
if (!type) {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.parent_type = `waterfall_milestone,waterfall_stage`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.parent_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.parent_type = `waterfall_requirement,waterfall_task`;
} else if (type === 'bug') {
    // 缺陷
    uiLogic.parent_type = `waterfall_requirement`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型（表单）(calc_parent_work_item_type_form)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)

节点：计算敏捷项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 史诗类型无父工作项
if (!type || type === 'epic') {
    return;
}
if (type === 'feature') {
    // 特性
    uiLogic.parent_type = `scrum_epic`;
} else if (type === 'story') {
    // 用户故事
    uiLogic.parent_type = `scrum_feature`;
} else if (type === 'task' || type === 'bug') {
    // 任务与缺陷
    uiLogic.parent_type = `scrum_story`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算面板项行为状态(calc_kanban_item_action_state)](module/ProjMgmt/work_item/uilogic/calc_kanban_item_action_state)

节点：看板中工作项的归档或激活按钮的禁用判定
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const items = uiLogic.kanban.state.items;
    const uaState = uiLogic.kanban.state.uaState;
	if (items && items.length > 0) {
		items.forEach(item => {
            const actions = uaState[item.srfkey];
            Object.values(actions).forEach(action=>{
               // 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = item.is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = item.is_archived === 0;
					} 
            })
        })
	}
}, 1000);
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算选择版本（表格）(calc_choose_version_grid)](module/ProjMgmt/work_item/uilogic/calc_choose_version_grid)

节点：计算表格items
<p class="panel-title"><b>执行代码</b></p>

```javascript
const { grid } = uiLogic;
if (grid) {
    grid.state.items.map((item) => {
        item.choose_version_id = item.cur_version_id;
        item.choose_version_name = item.cur_version_name;
    })
    grid.state.rows.forEach((row) => {
        row.data.choose_version_id = row.data.cur_version_id;
        row.data.choose_version_name = row.data.cur_version_name;
    })
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[触发计数器刷新(refresh_counter)](module/ProjMgmt/work_item/uilogic/refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[甘特删除行测试(removerow_gantt)](module/ProjMgmt/work_item/uilogic/removerow_gantt)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const gantt = view.getController('gantt');
if (gantt) {
    gantt.remove({data: uiLogic.default})
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[刷新工作项表格(refresh_work_item_grid)](module/ProjMgmt/work_item/uilogic/refresh_work_item_grid)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item', srfkey: context.work_item})
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工作项值变更(relation_work_item_change)](module/ProjMgmt/work_item/uilogic/relation_work_item_change)

节点：获取选中列表
<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
    uiLogic.viewctx.project = view.context.curproject;
}
// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    uiLogic.dto2.srfactionparam = JSON.parse(choose);
    uiLogic.dto2.principal_id = view.context.test_case;
    uiLogic.dto2.principal_type = 'test_case';
    uiLogic.dto2.target_type = 'bug';
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工作项值变更(relation_work_item_change)](module/ProjMgmt/work_item/uilogic/relation_work_item_change)

节点：隐藏下拉框并清空下拉框内容
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联工作项值变更(relation_work_item_change)](module/ProjMgmt/work_item/uilogic/relation_work_item_change)

节点：触发计数器刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
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
}
// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    uiLogic.test_case_dto.srfactionparam = JSON.parse(choose);
    uiLogic.test_case_dto.principal_id = view.context.curtest_case;
    uiLogic.test_case_dto.principal_type = 'test_case';
    uiLogic.test_case_dto.target_type = 'work_item';
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(上下文)(calc_children_work_item_type_context)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)

节点：计算看板项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 任务类型与缺陷类型无子工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 0) {
    uiLogic.children_type = `kanban_${list[1]}`;
} else if (index === 1) {
    uiLogic.children_type = `kanban_${list[2]}`;
} else if (index === 2) {
    uiLogic.children_type = `kanban_task,kanban_bug`;
    // uiLogic.children_type = `kanban_task`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(上下文)(calc_children_work_item_type_context)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)

节点：计算瀑布项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 缺陷无子类型
if (!type || type === 'bug') {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.children_type = `waterfall_milestone,waterfall_stage`;
    // uiLogic.children_type = `waterfall_milestone`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.children_type = `waterfall_requirement,waterfall_task,waterfall_bug`;
    // uiLogic.children_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.children_type = `waterfall_task`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(上下文)(calc_children_work_item_type_context)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)

节点：计算敏捷项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 用户故事类型无父工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
if (type === 'epic') {
    // 史诗
    uiLogic.children_type = `scrum_feature`;
} else if (type === 'feature') {
    // 特性
    uiLogic.children_type = `scrum_story`;
} else if (type === 'story') {
    // 任务与缺陷
    uiLogic.children_type = `scrum_task,scrum_bug`;
    // uiLogic.children_type = `scrum_task`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加子工作项（工具栏）(toolbar_add_child)](module/ProjMgmt/work_item/uilogic/toolbar_add_child)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_child'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[添加子工作项（工具栏）(toolbar_add_child)](module/ProjMgmt/work_item/uilogic/toolbar_add_child)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联子工作项表格行为列状态(relation_child_grid_action)](module/ProjMgmt/work_item/uilogic/relation_child_grid_action)

节点：注入脚本代码
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

节点：计算看板项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 事务类型与史诗类型无父工作项
if (!type || type === 'issue' || type === 'epic') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 1) {
    uiLogic.parent_type = `kanban_${list[0]}`;
} else if (index === 2) {
    uiLogic.parent_type = `kanban_${list[1]}`;
} else if (index === 3 || index === 4) {
    uiLogic.parent_type = `kanban_${list[2]}`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型(calc_parent_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)

节点：计算瀑布项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
if (!type) {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.parent_type = `waterfall_milestone,waterfall_stage`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.parent_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.parent_type = `waterfall_requirement,waterfall_task`;
} else if (type === 'bug') {
    // 缺陷
    uiLogic.parent_type = `waterfall_requirement`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算父工作项类型(calc_parent_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)

节点：计算敏捷项目父类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 史诗类型无父工作项
if (!type || type === 'epic') {
    return;
}
if (type === 'feature') {
    // 特性
    uiLogic.parent_type = `scrum_epic`;
} else if (type === 'story') {
    // 用户故事
    uiLogic.parent_type = `scrum_feature`;
} else if (type === 'task' || type === 'bug') {
    // 任务与缺陷
    uiLogic.parent_type = `scrum_story`;
}
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

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpage1'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[甘特新建行测试(newrow_gantt)](module/ProjMgmt/work_item/uilogic/newrow_gantt)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const gantt = view.getController('gantt');
if (gantt) {
gantt.newRow({data: uiLogic.default})
}
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联交付物（工具栏）(toolbar_link_deliverable)](module/ProjMgmt/work_item/uilogic/toolbar_link_deliverable)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_deliverable'
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[关联交付物（工具栏）(toolbar_link_deliverable)](module/ProjMgmt/work_item/uilogic/toolbar_link_deliverable)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[图表显示总数(chart_show_count)](module/ProjMgmt/work_item/uilogic/chart_show_count)

节点：注入脚本代码
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[控制表单成功关注列表readonly(control_readonly)](module/ProjMgmt/work_item/uilogic/control_readonly)

节点：归档设置表单成员readonly为true
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.form.data){
    if(uiLogic.form.data.is_archived === 1 || uiLogic.form.data.is_deleted ===1) {
          uiLogic.form.formItems.forEach(item=>{
              item.state.readonly = true;
          })
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[控制表单成功关注列表readonly(control_readonly)](module/ProjMgmt/work_item/uilogic/control_readonly)

节点：上下文中提供是否归档参数和是否参数参数
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.form.data){
    if(uiLogic.form.data.is_archived === 1) {
         view.context.is_archived = true;
    }
    if(uiLogic.form.data.is_deleted ===1){
        view.context.is_deleted = true;
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[控制表单成功关注列表readonly(control_readonly)](module/ProjMgmt/work_item/uilogic/control_readonly)

节点：人员选择识别添加readonly
<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.form.data){
    if(uiLogic.form.data.is_archived === 1) {
         view.layoutPanel.panelItems['container_attention'].panelItems.attentions.state.readonly = true;
    }
    if(uiLogic.form.data.is_deleted ===1){
        view.layoutPanel.panelItems['container_attention'].panelItems.attentions.state.readonly = true;
    }
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置时间范围(set_date_range)](module/ProjMgmt/work_item/uilogic/set_date_range)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.ctx.evt.on('onRegister', (name, c) => {
    if(name==='searchform'){
        const time = new Date();
        const preTime = new Date(time.getTime() - 604800000);
        const n_create_time_gtandeq = preTime.getFullYear() +'-' +(preTime.getMonth() + 1 < 10 ? '0' + (preTime.getMonth() + 1): preTime.getMonth() + 1) +'-' +(preTime.getDate() < 10 ? '0' + preTime.getDate() : preTime.getDate()) 
        const n_create_time_ltandeq = time.getFullYear() +'-' +(time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1): time.getMonth() + 1) +'-' +(time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
        const date_range = n_create_time_gtandeq + ',' + n_create_time_ltandeq;
        Object.assign(c.params, {n_create_time_gtandeq,n_create_time_ltandeq,date_range})
    }
});
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[新建行(newrow_test)](module/ProjMgmt/work_item/uilogic/newrow_test)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const treegrid = view.getController('treegrid');
if (treegrid) {
    treegrid.newRow({data: uiLogic.default});
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置默认关注人(set_default_attention)](module/ProjMgmt/work_item/uilogic/set_default_attention)

节点：绑定关注人
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.state.data.attentions = [uiLogic.attention];
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[建立双向关联数据(create_double_relation)](module/ProjMgmt/work_item/uilogic/create_double_relation)

节点：拼接关联对象的主键
<p class="panel-title"><b>执行代码</b></p>

```javascript
let relationobj = uiLogic.relation;
relationobj.id = relationobj.principal_id + "_" + relationobj.target_id;
let relation2 = uiLogic.relation2;
relation2.id = relation2.principal_id + "_" + relation2.target_id;

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[建立双向关联数据(create_double_relation)](module/ProjMgmt/work_item/uilogic/create_double_relation)

节点：隐藏下拉框
<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(calc_children_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)

节点：计算看板项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 任务类型与缺陷类型无子工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 0) {
    uiLogic.children_type = `kanban_${list[1]}`;
} else if (index === 1) {
    uiLogic.children_type = `kanban_${list[2]}`;
} else if (index === 2) {
    uiLogic.children_type = `kanban_task,kanban_bug`;
    // uiLogic.children_type = `kanban_task`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(calc_children_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)

节点：计算敏捷项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 用户故事类型无父工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
if (type === 'epic') {
    // 史诗
    uiLogic.children_type = `scrum_feature`;
} else if (type === 'feature') {
    // 特性
    uiLogic.children_type = `scrum_story`;
} else if (type === 'story') {
    // 任务与缺陷
    uiLogic.children_type = `scrum_task,scrum_bug`;
    // uiLogic.children_type = `scrum_task`;
}
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[计算子工作项类型(calc_children_work_item_type)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)

节点：计算瀑布项目子类型
<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 缺陷无子类型
if (!type || type === 'bug') {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.children_type = `waterfall_milestone,waterfall_stage`;
    // uiLogic.children_type = `waterfall_milestone`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.children_type = `waterfall_requirement,waterfall_task,waterfall_bug`;
    // uiLogic.children_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.children_type = `waterfall_task`;
}
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

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const newRowHiddenList = ['kanban_bug', 'kanban_issue', 'waterfall_bug', 'scrum_story'];
            const changeParentHiddenList = ['scrum_epic', 'kanban_epic', 'kanban_issue'];
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
						action.visible = !newRowHiddenList.includes(type);
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = !changeParentHiddenList.includes(type);
					}
				})
			}
		})
	}
}, 1000);
```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[子工作项刷新计数器(child_refresh_counter)](module/ProjMgmt/work_item/uilogic/child_refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item'})

```
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工时进度(get_workload_schedule)](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工时进度(get_workload_schedule)](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

节点：是否显示按钮
<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly == true){
    form.grouppanel1.state.visible=false;
    form.grouppanel11.state.actionGroupState.uaa6fcf7.visible=false;
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




