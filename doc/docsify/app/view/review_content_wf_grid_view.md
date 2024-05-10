# 评审内容(review_content_wf_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取评审内容总条数](module/TestMgmt/review_content/uilogic/get_review_content_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [设置评审结果](module/TestMgmt/review_content#界面行为)

### 关联视图
  * [评审内容(review_content_edit_view)](app/view/review_content_edit_view)
  * [评审内容(review_content_result_option_view)](app/view/review_content_result_option_view)
  * [用例(test_case_main_view)](app/view/test_case_main_view)
  * [用例(test_case_mpick_up_view)](app/view/test_case_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>