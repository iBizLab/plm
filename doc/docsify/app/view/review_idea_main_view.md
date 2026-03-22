# 评审(review_idea_main_view)  <!-- {docsify-ignore-all} -->



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

## 视图界面逻辑
* `onCloseView`
```javascript
ibiz.mc.command.create.send({ srfdecodename: 'review'});
```
* `onMounted`
```javascript
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        if (!panelItems.container_comment) {
            return;
        }
        if (form.details.tabpanel3) {
            const activeTab = form.details.tabpanel3.state.activeTab;
            panelItems.container_comment.state.visible = activeTab === 'tabpage3';
        }
    });
}
```


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [清空评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [发送评论](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [添加评审内容](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [添加页面评审内容](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [撤销评审](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑界面_保存操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [添加需求评审内容](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [添加工作项评审内容](module/TestMgmt/review#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [选择页面(article_page_review_re_page_view)](app/view/article_page_review_re_page_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [选择需求(idea_review_re_idea_view)](app/view/idea_review_re_idea_view)
  * [评审内容(review_content_idea_grid_view_all)](app/view/review_content_idea_grid_view_all)
  * [评审内容(review_content_idea_no_grid_view_all)](app/view/review_content_idea_no_grid_view_all)
  * [评审结果(review_content_idea_set_result_edit_view)](app/view/review_content_idea_set_result_edit_view)
  * [评审阶段(review_stage_list_view)](app/view/review_stage_list_view)
  * [选择用例(test_case_mpick_up_view_review)](app/view/test_case_mpick_up_view_review)
  * [选择工作项(work_item_review_re_work_item_view)](app/view/work_item_review_re_work_item_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>