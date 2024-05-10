# 工作项(work_item_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
* `开始时间` 注入属性 `disabledDate`

```javascript
(time) => {
    if (!data.end_at) {
        return false;
    }
    const end_at = new Date(data.end_at);
    // 比对天
    time.setHours(0, 0, 0, 0);
    end_at.setHours(0, 0, 0, 0);
    return time.getTime() > end_at.getTime();
}
```

* `结束时间` 注入属性 `disabledDate`

```javascript
(time) => {
    if (!data.start_at) {
        return false;
    }
    const start_at = new Date(data.start_at);
    // 比对天
    start_at.setHours(0, 0, 0, 0);
    time.setHours(0, 0, 0, 0);
    return time.getTime() < start_at.getTime();
}
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
* `onLoadSuccess`
```javascript
const type = view.layoutPanel.panelItems.form.control.data.work_item_type_id;
const hiddenList = ['scrum_task', 'scrum_bug', 'kanban_bug', 'kanban_task', 'waterfall_bug']
if (hiddenList.includes(type)) {
    ctrl.details.tabpanel1_child.state.visible = false;
    view.layoutPanel.panelItems.toolbar.control.state.buttonsState.deuiaction1.visible = false;
}

```
  * [测试判断只读用户](module/ProjMgmt/work_item/uilogic/test_get_only_read)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [发送评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联需求（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [复制工作项](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [移动（表单中）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [激活（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [清空评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [添加实际工时](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联工作项（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联工单（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [工具栏上传附件](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联测试用例（工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开项目主视图](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [归档(工具栏)](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [获取工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线工作项(baseline_work_item_realtion_version_list_view)](app/view/baseline_work_item_realtion_version_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [交付物(deliverable_target_grid_view)](app/view/deliverable_target_grid_view)
  * [关联(relation_work_item_re_idea_grid_view)](app/view/relation_work_item_re_idea_grid_view)
  * [关联(relation_work_item_re_self_grid_view)](app/view/relation_work_item_re_self_grid_view)
  * [关联(relation_work_item_re_test_case_grid_view)](app/view/relation_work_item_re_test_case_grid_view)
  * [关联(relation_work_item_re_ticket_grid_view)](app/view/relation_work_item_re_ticket_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)
  * [版本(version_work_item_grid_view)](app/view/version_work_item_grid_view)
  * [工作项(work_item_child_grid_view)](app/view/work_item_child_grid_view)
  * [复制工作项(work_item_copy_view)](app/view/work_item_copy_view)
  * [移动工作项(work_item_move_view)](app/view/work_item_move_view)
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