# 用例(test_casePickupGridView)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 数据表格(grid)
  * 搜索栏(searchbar)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移入计划（气泡）](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移动用例](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移动](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [表格界面_拷贝操作](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置评审状态](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [复制用例](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [删除](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置维护人](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [删除](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [界面行为支持获取编辑列](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置重要程度](module/TestMgmt/Test_case#界面行为)

### 关联视图
  * [用例(test_caseset_state_view)](app/view/test_caseset_state_view)
  * [用例(test_caseset_level)](app/view/test_caseset_level)
  * [移动用例(test_casemove_case_view)](app/view/test_casemove_case_view)
  * [用例(test_caseset_maintenance_view)](app/view/test_caseset_maintenance_view)
  * [用例(test_casecase_move_plan_view)](app/view/test_casecase_move_plan_view)
  * [复制用例(test_casecopy_test_case_view)](app/view/test_casecopy_test_case_view)
  * [移动用例(test_casemove_test_case_view)](app/view/test_casemove_test_case_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>