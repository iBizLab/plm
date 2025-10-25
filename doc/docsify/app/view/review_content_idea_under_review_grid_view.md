# 评审内容(review_content_idea_under_review_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea) : [表格界面_保存行](module/ProdMgmt/review_content_idea#界面行为)
  * [产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea) : [表格界面_新建操作](module/ProdMgmt/review_content_idea#界面行为)
  * [产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea) : [移出需求（无权限）](module/ProdMgmt/review_content_idea#界面行为)

### 关联视图
  * [选择需求(idea_review_re_idea_view)](app/view/idea_review_re_idea_view)
  * [产品需求评审内容(review_content_idea_edit_view)](app/view/review_content_idea_edit_view)
  * [产品需求评审内容(review_content_idea_redirect_view)](app/view/review_content_idea_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>