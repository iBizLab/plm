# 测试用例(test_case_summary_case_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [表格界面_导出操作（Excel）](module/TestMgmt/test_case#界面行为)

### 关联视图
  * [用例(test_case_edit_view)](app/view/test_case_edit_view)
  * [用例(test_case_main_view)](app/view/test_case_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>