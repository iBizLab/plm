# 评审(review_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess`
```
ctrl.details.formpage1.state.keepAlive=true;
```
#### 工具栏(toolbar)


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [添加评审内容](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [清空评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [发送评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [撤销评审](module/TestMgmt/review#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)

### 关联视图
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [评审内容(review_content_grid_view_all)](app/view/review_content_grid_view_all)
  * [评审内容(review_content_no_grid_view_all)](app/view/review_content_no_grid_view_all)
  * [评审结果(review_content_set_result_edit_view)](app/view/review_content_set_result_edit_view)
  * [评审阶段(review_stage_list_view)](app/view/review_stage_list_view)
  * [选择用例(test_case_mpick_up_view_review)](app/view/test_case_mpick_up_view_review)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>