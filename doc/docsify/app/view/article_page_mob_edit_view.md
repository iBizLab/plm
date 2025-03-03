# 页面(article_page_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [取消收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开关注列表（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开评论列表（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开评论列表](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开界面编辑页（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [页面共享设置（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [开启页面共享（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [关闭共享（移动端）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开关注列表](module/Wiki/article_page#界面行为)

### 关联视图
  * [页面(article_page_mob_document_edit_view)](app/view/article_page_mob_document_edit_view)
  * [页面(article_page_mob_option_view)](app/view/article_page_mob_option_view)
  * [附件(attachment_mob_page_md_view)](app/view/attachment_mob_page_md_view)
  * [关注(attention_mob_md_view)](app/view/attention_mob_md_view)
  * [页面关注(attention_mob_page_md_view)](app/view/attention_mob_page_md_view)
  * [评论(comment_mob_comment_md_view)](app/view/comment_mob_comment_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>