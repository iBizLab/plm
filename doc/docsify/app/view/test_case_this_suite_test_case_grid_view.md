# 用例(test_case_this_suite_test_case_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [表格界面_新建操作](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [删除](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移入计划（气泡）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [删除](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置状态](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [表格界面_导出操作（Excel）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移入计划（气泡）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [复制](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移动](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [界面行为支持获取编辑列](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置维护人](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置重要程度](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [复制](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移动用例](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [自定义测试用例导入](module/TestMgmt/test_case#界面行为)

### 关联视图
  * [测试用例应用数据导入视图(test_case_app_data_upload_view)](app/view/test_case_app_data_upload_view)
  * [移入计划(test_case_case_move_plan_option_view)](app/view/test_case_case_move_plan_option_view)
  * [复制用例(test_case_copy_test_case_option_view)](app/view/test_case_copy_test_case_option_view)
  * [用例(test_case_main_view)](app/view/test_case_main_view)
  * [移动用例(test_case_move_case_option_view)](app/view/test_case_move_case_option_view)
  * [移动用例(test_case_move_test_case_view)](app/view/test_case_move_test_case_view)
  * [新建用例(test_case_quick_create_view)](app/view/test_case_quick_create_view)
  * [用例(test_case_set_level_option_view)](app/view/test_case_set_level_option_view)
  * [用例(test_case_set_maintenance_option_view)](app/view/test_case_set_maintenance_option_view)
  * [用例(test_case_set_state_option_view)](app/view/test_case_set_state_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>