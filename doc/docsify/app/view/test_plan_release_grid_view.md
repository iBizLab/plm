# 发布测试(test_plan_release_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [表格界面_新建操作](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [开始测试](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [结束测试](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)

### 关联界面逻辑
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)

### 关联视图
  * [全部用例(run_all_grid_view)](app/view/run_all_grid_view)
  * [执行用例导航(run_tree_exp_view)](app/view/run_tree_exp_view)
  * [测试计划(test_plan_conclude_edit_view)](app/view/test_plan_conclude_edit_view)
  * [测试计划(test_plan_main_view)](app/view/test_plan_main_view)
  * [新建测试计划(test_plan_quick_create_view)](app/view/test_plan_quick_create_view)
  * [测试报告(test_plan_report_dashboard_view)](app/view/test_plan_report_dashboard_view)
  * [报告概览(test_plan_report_survey_custom_view)](app/view/test_plan_report_survey_custom_view)
  * [编辑测试计划(test_plan_update_option_view)](app/view/test_plan_update_option_view)
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