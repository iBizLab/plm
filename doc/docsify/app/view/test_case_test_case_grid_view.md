# 测试用例列表(test_case_test_case_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [打开更多测试用例](module/TestMgmt/test_case#界面行为)

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