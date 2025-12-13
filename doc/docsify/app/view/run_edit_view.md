# 执行用例(run_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
* `null` : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)


### 关联界面逻辑
  * [执行用例(RUN)](module/TestMgmt/run) : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)

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