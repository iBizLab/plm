# 页面(article_page_show_custom_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 编辑表单(form)
#### 列表(list)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [关闭评论区](module/Wiki/article_page/uilogic/close_comment)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [回复](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [共享设置](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑界面_下一个记录](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [演示](module/Wiki/article_page#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [刷新评论列表](module/Base/comment#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [锁定页面](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开界面编辑页](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [开启页面共享](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [关闭](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [另存为模板](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [清空评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [关闭共享](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开历史版本视图](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [取消收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [解锁页面](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [复制页面](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [最小化](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [编辑界面_上一个记录](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [移动页面](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [发送评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面版本(PAGE_VERSION)](module/Wiki/page_version) : [查看已发布版本](module/Wiki/page_version#界面行为)

### 关联界面逻辑
  * [页面版本(PAGE_VERSION)](module/Wiki/page_version) : [查看已发布版本](module/Wiki/page_version/uilogic/is_published_version)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏（知识库）](module/Base/comment/uilogic/comment_icon_hidden_wiki)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示（知识库）](module/Base/comment/uilogic/comment_icon_show_wiki)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [复制页面(article_page_copy_page_option_view)](app/view/article_page_copy_page_option_view)
  * [页面(article_page_document_edit_view)](app/view/article_page_document_edit_view)
  * [移动页面(article_page_move_page_option_view)](app/view/article_page_move_page_option_view)
  * [共享设置(article_page_shared_setting_view)](app/view/article_page_shared_setting_view)
  * [页面(article_page_show_version_view)](app/view/article_page_show_version_view)
  * [历史版本(page_version_list_exp_view)](app/view/page_version_list_exp_view)
  * [另存为模板(stencil_save_option_view)](app/view/stencil_save_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>