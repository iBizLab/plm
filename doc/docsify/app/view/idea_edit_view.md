# 需求(idea_edit_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)
#### 工具栏(toolbar)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/idea) : [编辑界面_保存并退出操作](module/ProdMgmt/idea#界面行为)

### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [基线需求(baseline_idea_relation_version_list_view)](app/view/baseline_idea_relation_version_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [需求选择树视图(idea_pick_up_tree_view)](app/view/idea_pick_up_tree_view)
  * [关联(relation_idea_re_customer_grid_view)](app/view/relation_idea_re_customer_grid_view)
  * [关联(relation_idea_re_idea_grid_view)](app/view/relation_idea_re_idea_grid_view)
  * [关联(relation_idea_re_test_case_grid_view)](app/view/relation_idea_re_test_case_grid_view)
  * [关联(relation_idea_re_ticket_grid_view)](app/view/relation_idea_re_ticket_grid_view)
  * [关联(relation_idea_re_work_item_grid_view)](app/view/relation_idea_re_work_item_grid_view)
  * [流转记录(transition_history_work_item_calendar_view)](app/view/transition_history_work_item_calendar_view)
  * [版本(version_idea_grid_view)](app/view/version_idea_grid_view)
  * [工时(workload_list_view)](app/view/workload_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>