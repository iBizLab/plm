# 工作项(work_item_dyna_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### 编辑表单(_form_kanban_bug)
#### 编辑表单(_form_kanban_epic)
#### 编辑表单(_form_kanban_feature)
#### 编辑表单(_form_kanban_issue)
#### 编辑表单(_form_kanban_story)
#### 编辑表单(_form_kanban_task)
#### 编辑表单(_form_scrum_bug)
#### 编辑表单(_form_scrum_epic)
#### 编辑表单(_form_scrum_feature)
#### 编辑表单(_form_scrum_story)
#### 编辑表单(_form_scrum_task)
#### 编辑表单(_form_waterfall_bug)
#### 编辑表单(_form_waterfall_milestone)
#### 编辑表单(_form_waterfall_requirement)
#### 编辑表单(_form_waterfall_stage)
#### 编辑表单(_form_waterfall_task)
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
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开项目主视图](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [清空评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [发送评论](module/ProjMgmt/work_item#界面行为)

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
  * [需求(idea_work_item_re_idea_grid_view)](app/view/idea_work_item_re_idea_grid_view)
  * [项目(project_pick_up_view)](app/view/project_pick_up_view)
  * [关联(relation_work_item_re_idea_grid_view)](app/view/relation_work_item_re_idea_grid_view)
  * [关联(relation_work_item_re_self_grid_view)](app/view/relation_work_item_re_self_grid_view)
  * [关联(relation_work_item_re_test_case_grid_view)](app/view/relation_work_item_re_test_case_grid_view)
  * [关联(relation_work_item_re_ticket_grid_view)](app/view/relation_work_item_re_ticket_grid_view)
  * [用例(test_case_work_item_re_case_grid_view)](app/view/test_case_work_item_re_case_grid_view)
  * [工单(ticket_work_item_re_ticket_grid_view)](app/view/ticket_work_item_re_ticket_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)
  * [版本(version_work_item_grid_view)](app/view/version_work_item_grid_view)
  * [工作项(work_item_child_grid_view)](app/view/work_item_child_grid_view)
  * [工作项(work_item_re_self_grid_view)](app/view/work_item_re_self_grid_view)
  * [工时(workload_list_view)](app/view/workload_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>