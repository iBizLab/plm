# 评审内容(review_content_under_review_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [表格界面_保存行](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [移出用例（无权限）](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [评审内容版本比对](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [移出用例（无权限）](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [表格界面_新建操作](module/TestMgmt/review_content#界面行为)

### 关联视图
  * [评审内容(review_content_edit_view)](app/view/review_content_edit_view)
  * [评审内容(review_content_redirect_view)](app/view/review_content_redirect_view)
  * [选择用例(test_case_mpick_up_view2_review)](app/view/test_case_mpick_up_view2_review)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>