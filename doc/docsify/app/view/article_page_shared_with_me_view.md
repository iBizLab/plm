# 页面(article_page_shared_with_me_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 列表(list)
#### 工具栏(toolbar)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [删除评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [回复](module/Wiki/article_page#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [刷新评论列表](module/Base/comment#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [与我共享_编辑](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [最小化](module/Wiki/article_page#界面行为)

### 关联视图
  * [页面(article_page_document_edit_view)](app/view/article_page_document_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>