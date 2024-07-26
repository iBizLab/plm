# 评审历史(review_content_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [返回](module/TestMgmt/review_content#界面行为)

### 关联视图
  * [评审内容(review_content_edit_view)](app/view/review_content_edit_view)
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