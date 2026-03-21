# 执行用例(run_main_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
* `onChange`
```
var executor_id = ctrl.details.executor_id;
var executor_name = ctrl.details.executor_name;
var executors = ctrl.details.executors.value;
if(executors != null && executors != undefined && executors.length > 0){
    // 默认取第一个执行人作为主执行人
    var first_executor = executors[0];
    first_executor.is_assignee = 1;
    if(first_executor.user_id != null){
        executor_id.setDataValue(first_executor.user_id)
    }
    if(first_executor.user_name != null){
        executor_name.setDataValue(first_executor.user_name)
    }
    for (var i = 0; i < executors.length; i++) {
        if(executors[i].is_assignee != null && executors[i].is_assignee != undefined && executors[i].is_assignee == 1) {
            // 根据重复器中的是否主执行人按钮，进行设置。只会有一个
            executor_id.setDataValue(executors[i].user_id)
            executor_name.setDataValue(executors[i].user_name)
        }
    }
} else {
    executor_id.setDataValue(null)
    executor_name.setDataValue(null)
}
```
* `null` : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)
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
        }
    });
}
```
* `onCloseView`
```javascript
ibiz.mc.command.create.send({ srfdecodename: 'run'});
```


### 关联界面行为
  * [执行用例(RUN)](module/TestMgmt/run) : [编辑界面_上一个记录](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [清空评论](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [编辑界面_下一个记录](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [移出（主视图）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [最小化](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [发送评论](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关联用例](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [重置为未测](module/TestMgmt/run#界面行为)

### 关联界面逻辑
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [执行用例(RUN)](module/TestMgmt/run) : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [关联(relation_run_re_bug_grid_view)](app/view/relation_run_re_bug_grid_view)
  * [关联(relation_run_re_idea_grid_view)](app/view/relation_run_re_idea_grid_view)
  * [关联(relation_run_re_work_item_grid_view)](app/view/relation_run_re_work_item_grid_view)
  * [执行用例结果附件(run_attachment_grid_view)](app/view/run_attachment_grid_view)
  * [执行用例(run_run_re_run_history_edit_view)](app/view/run_run_re_run_history_edit_view)
  * [用例(test_case_only_attchment_view)](app/view/test_case_only_attchment_view)
  * [用例(test_case_re_run_main_view)](app/view/test_case_re_run_main_view)
  * [测试计划(test_plan_pick_up_view)](app/view/test_plan_pick_up_view)
  * [工时(workload_run_list_view)](app/view/workload_run_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>