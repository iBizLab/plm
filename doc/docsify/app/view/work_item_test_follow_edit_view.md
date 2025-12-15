# 工作项(work_item_test_follow_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [发送评论](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [编辑界面_保存操作](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [修改密码](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [清空评论](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>