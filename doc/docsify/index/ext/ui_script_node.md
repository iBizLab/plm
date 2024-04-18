
## 使用脚本的界面逻辑节点<sup class="footnote-symbol"> <font color=orange>[203]</font></sup>

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
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[显示下拉并展开选项（嵌入视图）(show_dorpdown_data)](module/ProdMgmt/idea/uilogic/show_dorpdown_data)

节点：展开下拉
<p class="panel-title"><b>执行代码</b></p>

```javascript
if (uiLogic. choose_data_state_obj) {
    uiLogic.choose_data_state_obj.editor.toggleMenu(true);
}
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
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[恢复历史版本并通知刷新(page_refresh)](module/Wiki/article_page/uilogic/page_refresh)

节点：通知刷新
<p class="panel-title"><b>执行代码</b></p>

```javascript
view.parentView.state.isLoading = false;
view.parentView.closeView();
ibiz.mc.command.send({srfdecodename: 'article_page',srfkey:uiLogic.context.article_page}, 'OBJECTUPDATED',uiLogic.form.triggerKey);
```
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取草稿数据(get_draft_data)](module/Wiki/article_page/uilogic/get_draft_data)

节点：切换显示草稿页
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
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[查看工时明细(check_workload_detail)](module/TestMgmt/run/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.tabpanel2.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel1.state.visible=true;
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
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[计算表格列行为状态(calc_column_action_state)](module/Wiki/space/uilogic/calc_column_action_state)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@space') {
						action.disabled = is_favorite !== 0;
					} else if (action.uiActionId === 'cancel_favorite@space') {
						// 取消收藏
						action.disabled = is_favorite === 0;
					} 
				})
			}
		})
	}
}, 1000);
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
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[查看工时明细(check_workload_detail)](module/TestMgmt/test_case/uilogic/check_workload_detail)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel8.state.visible=false;
uiLogic.view.ctx.controllersMap.get("form").details.grouppanel9.state.visible=true;
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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[工具栏上传附件(toolbar_add_attachment)](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)

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
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联产品需求(link_product)](module/ProdMgmt/ticket/uilogic/link_product)

节点：切换分页
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.form.details.tabpanel1.state.activeTab = 'tabpanel1_idea'
```
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[关联产品需求(link_product)](module/ProdMgmt/ticket/uilogic/link_product)

节点：嵌入视图不存在
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.druipart.navContext.srfshowchoose = true;
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
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开项目管理工时记录列表视图(open_management_project_detail)](module/Base/workload/uilogic/open_management_project_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[返回(back)](module/Base/workload/uilogic/back)

节点：切换显示组件
<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel8.state.visible=true;
uiLogic.parentview.ctx.controllersMap.get("form").details.grouppanel9.state.visible=false;

```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开项目工时记录列表视图(open_project_workload_detail)](module/Base/workload/uilogic/open_project_workload_detail)

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
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开测试库工时记录列表视图(open_library_workload_detail)](module/Base/workload/uilogic/open_library_workload_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开产品工时记录列表视图(open_product_workload_detail)](module/Base/workload/uilogic/open_product_workload_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("工时", view);
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开产品管理工时记录列表视图(open_management_product_detail)](module/Base/workload/uilogic/open_management_product_detail)

节点：获取搜索表单的日期范围条件
<p class="panel-title"><b>执行代码</b></p>

```javascript
var n_register_date_gtandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_gtandeq;
var n_register_date_ltandeq = view.layoutPanel.panelItems.searchform.control.data.n_register_date_ltandeq;
uiLogic.default.n_register_date_gtandeq=n_register_date_gtandeq;
uiLogic.default.n_register_date_ltandeq=n_register_date_ltandeq;
```
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[打开测试库管理工时记录列表视图(open_management_library_detail)](module/Base/workload/uilogic/open_management_library_detail)

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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[甘特新建行测试(newrow_gantt)](module/ProjMgmt/work_item/uilogic/newrow_gantt)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const gantt = view.getController('gantt');
if (gantt) {
gantt.newRow({data: uiLogic.default})
}
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[设置时间范围(set_date_range)](module/ProjMgmt/work_item/uilogic/set_date_range)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const time = new Date();
const preTime = new Date(time.getTime() - 604800000);
const n_create_time_gtandeq = preTime.getFullYear() +'-' +(preTime.getMonth() + 1 < 10 ? '0' + (preTime.getMonth() + 1): preTime.getMonth() + 1) +'-' +(preTime.getDate() < 10 ? '0' + preTime.getDate() : preTime.getDate()) 
const n_create_time_ltandeq = time.getFullYear() +'-' +(time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1): time.getMonth() + 1) +'-' +(time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
const date_range = n_create_time_gtandeq + ',' + n_create_time_ltandeq;
Object.assign(viewParam, { n_create_time_gtandeq, n_create_time_ltandeq, date_range});
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[新建行测试(newrow_test)](module/ProjMgmt/work_item/uilogic/newrow_test)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
const treegrid = view.getController('treegrid');
if (treegrid) {
    treegrid.newRow({data: uiLogic.default});
}
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
    uiLogic.run_dto.srfactionparam = JSON.parse(choose);
    uiLogic.run_dto.principal_id = view.context.curtest_case;
    uiLogic.run_dto.principal_type = 'bug';
    uiLogic.run_dto.target_type = 'test_case';
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
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[子工作项刷新计数器(child_refresh_counter)](module/ProjMgmt/work_item/uilogic/child_refresh_counter)

节点：注入脚本代码
<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'work_item'})

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




