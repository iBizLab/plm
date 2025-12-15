# 工单(ticket_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 属性注入
* `状态` 注入属性 `clearable`

```javascript
false
```
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        if (!panelItems.container_comment) {
            return;
        }
        if (form.details.tabpanel1) {
            const activeTab = form.details.tabpanel1.state.activeTab;
            panelItems.container_comment.state.visible = activeTab === 'tabpage1';
            panelItems.client_container_comment.state.visible = activeTab === 'tabpanel1_customer_comment';
        }
    });
}
```
  * [已归档或已删除工单显示隐藏](module/ProdMgmt/ticket/uilogic/archived_or_deleted_visible)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [发送评论](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工具栏上传附件](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [发送评论（客户沟通）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [最小化](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [关联产品需求（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [编辑界面_上一个记录](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [激活（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单归档（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [关联工单（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [编辑界面_下一个记录](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单删除（工具栏）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [AI+](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工作项](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [清空评论(客户沟通)](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [清空评论](module/ProdMgmt/ticket#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
  * [客户沟通(comment_customer_connect_list_view)](app/view/comment_customer_connect_list_view)
  * [评论(comment_ticket_list_view)](app/view/comment_ticket_list_view)
  * [客户(customer_pick_up_view)](app/view/customer_pick_up_view)
  * [关联(relation_ticket_re_idea_grid_view)](app/view/relation_ticket_re_idea_grid_view)
  * [关联(relation_ticket_re_self_grid_view)](app/view/relation_ticket_re_self_grid_view)
  * [关联(relation_ticket_re_work_item_grid_view)](app/view/relation_ticket_re_work_item_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>