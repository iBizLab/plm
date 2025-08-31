# 用例(test_case_pick_up_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [删除](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移入计划（气泡）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [界面行为支持获取编辑列](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置维护人](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [复制](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置重要程度](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [设置状态](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移入计划（气泡）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [复制](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移动](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移动用例](module/TestMgmt/test_case#界面行为)

### 关联视图
  * [移入计划(test_case_case_move_plan_option_view)](app/view/test_case_case_move_plan_option_view)
  * [复制用例(test_case_copy_test_case_option_view)](app/view/test_case_copy_test_case_option_view)
  * [移动用例(test_case_move_case_option_view)](app/view/test_case_move_case_option_view)
  * [移动用例(test_case_move_test_case_view)](app/view/test_case_move_test_case_view)
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