# 基线用例(baseline_test_case_relation_version_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case) : [返回](module/TestMgmt/baseline_test_case#界面行为)
  * [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case) : [版本对比（基线列表）](module/TestMgmt/baseline_test_case#界面行为)

### 关联视图
  * [基线用例(baseline_test_case_edit_view)](app/view/baseline_test_case_edit_view)
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