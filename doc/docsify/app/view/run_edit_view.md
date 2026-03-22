# 执行用例(run_edit_view)  <!-- {docsify-ignore-all} -->



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


### 关联界面逻辑
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)
  * [执行用例(RUN)](module/TestMgmt/run) : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [关联(relation_run_re_bug_grid_view)](app/view/relation_run_re_bug_grid_view)
  * [关联(relation_run_re_idea_grid_view)](app/view/relation_run_re_idea_grid_view)
  * [关联(relation_run_re_work_item_grid_view)](app/view/relation_run_re_work_item_grid_view)
  * [执行用例结果附件(run_attachment_grid_view)](app/view/run_attachment_grid_view)
  * [执行用例(run_run_re_run_history_edit_view)](app/view/run_run_re_run_history_edit_view)
  * [用例(test_case_only_attchment_view)](app/view/test_case_only_attchment_view)
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