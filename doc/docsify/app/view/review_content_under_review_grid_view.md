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
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [规划评审页面](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [移出用例（无权限）](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [规划评审需求](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [规划评审工作项](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [规划评审用例](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [表格界面_保存行](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [评审内容版本比对](module/TestMgmt/review_content#界面行为)

### 关联视图
  * [选择页面(article_page_review_re_page_view)](app/view/article_page_review_re_page_view)
  * [选择需求(idea_review_re_idea_view)](app/view/idea_review_re_idea_view)
  * [评审内容(review_content_edit_view)](app/view/review_content_edit_view)
  * [评审内容(review_content_redirect_view)](app/view/review_content_redirect_view)
  * [选择用例(test_case_mpick_up_view2_review)](app/view/test_case_mpick_up_view2_review)
  * [选择工作项(work_item_review_re_work_item_view)](app/view/work_item_review_re_work_item_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>