# 页面(article_pageshow_customView)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 编辑表单(form)
  * 工具栏(toolbar)
  * 列表(list)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/Article_page) : [打开界面编辑页](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [收藏](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [发送评论（知识库）](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [评论](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [另存为模板](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [取消收藏](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除评论](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [关闭](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [编辑](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [回复](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [清空评论](module/Wiki/Article_page#界面行为)

### 关联视图
  * [页面(article_pageedit_view_document)](app/view/article_pageedit_view_document)
  * [另存为模板(stencilsave_option_view)](app/view/stencilsave_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>