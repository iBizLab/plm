# 测试库(library_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 分页导航面板(tabexppanel)
#### 工具栏(toolbar)


### 关联界面行为
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [树界面_刷新全部操作](module/TestMgmt/test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [回收站](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [设置星标](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库信息](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [树界面_刷新全部操作](module/TestMgmt/test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [新建模块](module/TestMgmt/test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [取消星标](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [更多设置](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [新建类别](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库成员](module/TestMgmt/library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [编辑基本信息](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [新建分组](module/TestMgmt/test_plan#界面行为)

### 关联视图
  * [测试库配置(library_setting_view)](app/view/library_setting_view)
  * [测试库信息(library_show_edit_view)](app/view/library_show_edit_view)
  * [全部用例(test_case_all_grid_view)](app/view/test_case_all_grid_view)
  * [用例(test_case_nosuite_test_case_grid_view)](app/view/test_case_nosuite_test_case_grid_view)
  * [全部计划(test_plan_all_grid_view)](app/view/test_plan_all_grid_view)
  * [普通测试(test_plan_general_grid_view)](app/view/test_plan_general_grid_view)
  * [发布测试(test_plan_release_grid_view)](app/view/test_plan_release_grid_view)
  * [迭代测试(test_plan_sprint_grid_view)](app/view/test_plan_sprint_grid_view)
  * [测试计划(test_plan_tree_exp_view)](app/view/test_plan_tree_exp_view)
  * [新建用例模块(test_suite_quick_create_view)](app/view/test_suite_quick_create_view)
  * [用例模块(test_suite_tree_exp_view)](app/view/test_suite_tree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>