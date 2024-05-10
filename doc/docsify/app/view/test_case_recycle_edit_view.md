# 用例(test_case_recycle_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)


### 关联界面逻辑
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线用例(baseline_test_case_relation_version_list_view)](app/view/baseline_test_case_relation_version_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [关联(relation_test_case_re_bug_grid_view)](app/view/relation_test_case_re_bug_grid_view)
  * [关联(relation_test_case_re_idea_grid_view)](app/view/relation_test_case_re_idea_grid_view)
  * [关联(relation_test_case_re_work_item_grid_view)](app/view/relation_test_case_re_work_item_grid_view)
  * [执行用例(run_history_grid_view)](app/view/run_history_grid_view)
  * [用例选择树视图(test_case_pick_up_tree_view)](app/view/test_case_pick_up_tree_view)
  * [版本(version_test_case_grid_view)](app/view/version_test_case_grid_view)
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