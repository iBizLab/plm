# 评审(review_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [提交评审](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [发送评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [清空评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [撤回评审](module/TestMgmt/review#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)

### 关联视图
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [评审内容(review_content_wf_grid_view)](app/view/review_content_wf_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>