# 更新(article_page_show_update_log_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 列表(list)

## 视图界面逻辑
  * [关闭评论区](module/Wiki/article_page/uilogic/close_comment)
  * [关闭评论区](module/Wiki/article_page/uilogic/close_comment)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [删除评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [清空评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [发送评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [回复](module/Wiki/article_page#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示（知识库）](module/Base/comment/uilogic/comment_icon_show_wiki)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏（知识库）](module/Base/comment/uilogic/comment_icon_hidden_wiki)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>