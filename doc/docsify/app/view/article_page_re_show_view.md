# 页面(article_page_re_show_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 列表(list)
#### 工具栏(toolbar)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [收藏](module/Wiki/article_page#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [回复](module/Base/comment#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [取消收藏](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [AI+](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [最小化](module/Wiki/article_page#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [编辑](module/Base/comment#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [评论](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [关闭](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [发送评论（知识库）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [清空评论（知识库）](module/Wiki/article_page#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏（知识库）](module/Base/comment/uilogic/comment_icon_hidden_wiki)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示（知识库）](module/Base/comment/uilogic/comment_icon_show_wiki)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>