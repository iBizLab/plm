# 工作项(work_item_mob_common_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取工作项工时进度（移动端）](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取工作项工时进度（移动端）](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)
  * 打开人员选择视图（移动端）
  * 打开最近访问选择视图（移动端）


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开评论列表](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [归档(工具栏)](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除（移动端工具栏）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开评论列表（移动端）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开关注列表（移动端）](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [获取工作项工时进度（移动端）](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)

### 关联视图
  * [活动(activity_mob_list_view)](app/view/activity_mob_list_view)
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [工作项关注(attention_mob_work_item_md_view)](app/view/attention_mob_work_item_md_view)
  * [评论(comment_mob_comment_md_view)](app/view/comment_mob_comment_md_view)
  * [项目成员(project_member_mob_pickup_view)](app/view/project_member_mob_pickup_view)
  * [关联(relation_mob_depend_on_list_view)](app/view/relation_mob_depend_on_list_view)
  * [关联(relation_mob_work_item_re_idea_list_view)](app/view/relation_mob_work_item_re_idea_list_view)
  * [关联(relation_mob_work_item_re_self_list_view)](app/view/relation_mob_work_item_re_self_list_view)
  * [关联(relation_ticket_mob_list_view)](app/view/relation_ticket_mob_list_view)
  * [工作项(work_item_mob_child_list_view)](app/view/work_item_mob_child_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>