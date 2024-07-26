# 客户(customer_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onViewMounted`
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
        }
    });
}
```


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [编辑界面_下一个记录](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [清空评论](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [编辑界面_上一个记录](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [发送评论](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [最小化](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [删除（工具栏）](module/ProdMgmt/customer#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)

### 关联视图
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [客户(customer_pick_up_tree_view)](app/view/customer_pick_up_tree_view)
  * [工单(ticket_customer_re_ticket_grid_view)](app/view/ticket_customer_re_ticket_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>