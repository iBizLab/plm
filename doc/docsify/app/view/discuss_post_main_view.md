# 讨论(discuss_post_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `editreply` : [编辑讨论下评论](module/Team/discuss_post/uilogic/edit_comment)
* `onClick`
```
var comments = ctrl.formItems.find(item => item.name === "comments");
comments.state.visible = !comments.state.visible;
```
#### 工具栏(toolbar)

## 视图界面逻辑
  * [讨论关闭时隐藏回复输入框](module/Team/discuss_post/uilogic/status_control_visible)


### 关联界面行为
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [删除评论](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [关闭](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [移动](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [AI+](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [添加回复](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [删除](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [清空回复](module/Team/discuss_post#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [编辑讨论下评论](module/Team/discuss_post/uilogic/edit_comment)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [删除讨论下评论](module/Team/discuss_post/uilogic/del_comment)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
  * [移动讨论(discuss_post_move_choose_view)](app/view/discuss_post_move_choose_view)
  * [讨论回复(discuss_reply_list_view)](app/view/discuss_reply_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>