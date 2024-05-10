# 测试计划(test_plan_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面逻辑
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)

### 关联视图
  * [全部用例(run_all_grid_view)](app/view/run_all_grid_view)
  * [执行用例导航(run_tree_exp_view)](app/view/run_tree_exp_view)
  * [测试计划(test_plan_conclude_edit_view)](app/view/test_plan_conclude_edit_view)
  * [测试报告(test_plan_report_dashboard_view)](app/view/test_plan_report_dashboard_view)
  * [报告概览(test_plan_report_survey_custom_view)](app/view/test_plan_report_survey_custom_view)
  * [缺陷(work_item_test_plan_bug_grid_view)](app/view/work_item_test_plan_bug_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>