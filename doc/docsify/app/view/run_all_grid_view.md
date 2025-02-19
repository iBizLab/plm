# 全部用例(run_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [执行用例(RUN)](module/TestMgmt/run) : [选择用例](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [表格界面_导出操作（Excel）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [选择用例（迭代）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [设置执行人](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [重置为未测](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [移出](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [选择用例（工作项）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [选择用例（发布）](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [设置执行结果](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [重置为未测](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [移出](module/TestMgmt/run#界面行为)

### 关联视图
  * [执行用例(run_main_view)](app/view/run_main_view)
  * [执行用例(run_set_run_status_option_view)](app/view/run_set_run_status_option_view)
  * [执行人(run_setting_actual_executor_view)](app/view/run_setting_actual_executor_view)
  * [选择用例(test_case_mpick_up_view2_review)](app/view/test_case_mpick_up_view2_review)
  * [用例(test_case_re_case_by_release_pickup_view)](app/view/test_case_re_case_by_release_pickup_view)
  * [用例(test_case_re_case_by_sprint_pickup_view)](app/view/test_case_re_case_by_sprint_pickup_view)
  * [用例(test_case_re_case_by_workitem_pickup_view)](app/view/test_case_re_case_by_workitem_pickup_view)
  * [用例(test_case_test_plan_re_test_case_prickup_view)](app/view/test_case_test_plan_re_test_case_prickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>