# 页面(article_page_model_show_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 列表(list)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [关闭评论区](module/Wiki/article_page/uilogic/close_comment)
  * [关闭评论区](module/Wiki/article_page/uilogic/close_comment)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [清空评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开界面编辑页](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [另存为模板](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [发送评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [关闭](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [回复](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [取消收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开历史版本视图](module/Wiki/article_page#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [页面(article_page_document_edit_view)](app/view/article_page_document_edit_view)
  * [页面(article_page_show_version_view)](app/view/article_page_show_version_view)
  * [另存为模板(stencil_save_option_view)](app/view/stencil_save_option_view)
  * [历史版本(version_list_exp_view)](app/view/version_list_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>