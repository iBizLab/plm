# 用例(test_case_main_view)  <!-- {docsify-ignore-all} -->


main



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onViewMounted`
```javascript
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        if (!panelItems.container_comment) {
            return;
        }
        if (form.details.tabpanel1) {
            const activeTab = form.details.tabpanel1.state.activeTab;
            panelItems.container_comment.state.visible = activeTab === 'tabpage1';
        }
    });
}
```
  * [测试判断只读用户](module/TestMgmt/test_case/uilogic/test_get_only_read)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [清空评论](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [复制用例](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移入计划（气泡）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [删除（工具栏）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [移动（工具栏）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [发送评论](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [工具栏上传附件](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [关联缺陷（工具栏）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [关联需求（工具栏）](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [添加实际工时](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [关联工作项（工具栏）](module/TestMgmt/test_case#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线用例(baseline_test_case_relation_version_list_view)](app/view/baseline_test_case_relation_version_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [关联(relation_test_case_re_bug_grid_view)](app/view/relation_test_case_re_bug_grid_view)
  * [关联(relation_test_case_re_idea_grid_view)](app/view/relation_test_case_re_idea_grid_view)
  * [关联(relation_test_case_re_work_item_grid_view)](app/view/relation_test_case_re_work_item_grid_view)
  * [执行用例(run_history_grid_view)](app/view/run_history_grid_view)
  * [用例(test_case_case_move_plan_option_view)](app/view/test_case_case_move_plan_option_view)
  * [复制用例(test_case_copy_test_case_option_view)](app/view/test_case_copy_test_case_option_view)
  * [移动用例(test_case_move_test_case_view)](app/view/test_case_move_test_case_view)
  * [用例选择树视图(test_case_pick_up_tree_view)](app/view/test_case_pick_up_tree_view)
  * [版本(version_test_case_grid_view)](app/view/version_test_case_grid_view)
  * [工时(workload_list_view)](app/view/workload_list_view)
  * [登记工时(workload_quick_create_view)](app/view/workload_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>