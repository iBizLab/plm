# 需求(idea_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取需求工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)

##### 属性注入
* `状态` 注入属性 `clearable`

```javascript
false
```
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
  * [已归档或已删除需求显示隐藏](module/ProdMgmt/idea/uilogic/archived_or_deleted_visible)
  * [显示表单侧边栏](module/ProdMgmt/idea/uilogic/show_form_sidebar)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [查看工单统计信息](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [工具栏上传附件](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [最小化](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [查看客户统计信息](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [清空评论](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求复制](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [关联工单（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [编辑界面_下一个记录](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求归档（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [添加实际工时](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [删除（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [关联测试用例（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [需求移动（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [关联工作项（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [关联需求（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [激活（工具栏）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [发送评论](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [编辑界面_上一个记录](module/ProdMgmt/idea#界面行为)

### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取需求工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线需求(baseline_idea_relation_version_list_view)](app/view/baseline_idea_relation_version_list_view)
  * [评论(comment_idea_list_view)](app/view/comment_idea_list_view)
  * [客户(customer_idea_customer_info_view)](app/view/customer_idea_customer_info_view)
  * [复制需求(idea_copy_option_view)](app/view/idea_copy_option_view)
  * [移动需求(idea_move_option_view)](app/view/idea_move_option_view)
  * [需求选择树视图(idea_pick_up_tree_view)](app/view/idea_pick_up_tree_view)
  * [关联(relation_idea_re_customer_grid_view)](app/view/relation_idea_re_customer_grid_view)
  * [关联(relation_idea_re_idea_grid_view)](app/view/relation_idea_re_idea_grid_view)
  * [关联(relation_idea_re_test_case_grid_view)](app/view/relation_idea_re_test_case_grid_view)
  * [关联(relation_idea_re_ticket_grid_view)](app/view/relation_idea_re_ticket_grid_view)
  * [关联(relation_idea_re_work_item_grid_view)](app/view/relation_idea_re_work_item_grid_view)
  * [评审历史(review_content_list_view)](app/view/review_content_list_view)
  * [工单(ticket_idea_re_ticket_statistics_view)](app/view/ticket_idea_re_ticket_statistics_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)
  * [版本(version_idea_grid_view)](app/view/version_idea_grid_view)
  * [工时(workload_list_view)](app/view/workload_list_view)
  * [登记工时(workload_quick_create_view)](app/view/workload_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>