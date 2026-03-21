# 需求(idea_show_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 列表(list)
#### 工具栏(toolbar)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [最小化](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [关闭](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [评论](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [AI+](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [发送评论（知识库）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [打开需求编辑页](module/ProdMgmt/idea#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [编辑](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [回复](module/Base/comment#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [清空评论](module/ProdMgmt/idea#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏（知识库）](module/Base/comment/uilogic/comment_icon_hidden_wiki)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示（知识库）](module/Base/comment/uilogic/comment_icon_show_wiki)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
  * [评论(comment_list_view_idea)](app/view/comment_list_view_idea)
  * [编辑需求(idea_update_view)](app/view/idea_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>