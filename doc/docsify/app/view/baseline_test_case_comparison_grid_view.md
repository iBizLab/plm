# 基线对比(baseline_test_case_comparison_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case) : [用例版本对比](module/TestMgmt/baseline_test_case#界面行为)

### 关联视图
  * [基线用例(baseline_test_case_edit_view)](app/view/baseline_test_case_edit_view)
  * [用例(test_case_main_view)](app/view/test_case_main_view)
  * [版本对比(test_case_version_comparison_view)](app/view/test_case_version_comparison_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>