# 用例模块(test_suite_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [新建模块](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [树界面_刷新全部操作](module/TestMgmt/test_suite#界面行为)

### 关联视图
  * [全部用例(test_case_all_grid_view)](app/view/test_case_all_grid_view)
  * [用例(test_case_nosuite_test_case_grid_view)](app/view/test_case_nosuite_test_case_grid_view)
  * [新建用例模块(test_suite_quick_create_view)](app/view/test_suite_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>