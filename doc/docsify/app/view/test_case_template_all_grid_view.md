# 用例模板(test_case_template_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template) : [编辑模板](module/TestMgmt/test_case_template#界面行为)
  * [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template) : [删除模板](module/TestMgmt/test_case_template#界面行为)
  * [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template) : [表格界面_新建操作](module/TestMgmt/test_case_template#界面行为)

### 关联视图
  * [模板(test_case_template_edit_view)](app/view/test_case_template_edit_view)
  * [新建(test_case_template_new_edit_view)](app/view/test_case_template_new_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>