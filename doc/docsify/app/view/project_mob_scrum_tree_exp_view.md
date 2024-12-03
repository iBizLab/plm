# 项目(project_mob_scrum_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目设置（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [高级设置（移动端）](module/ProjMgmt/project#界面行为)

### 关联视图
  * [项目成员(project_member_mob_list_view)](app/view/project_member_mob_list_view)
  * [高级设置(project_mob_advanced_setting_view)](app/view/project_mob_advanced_setting_view)
  * [项目(project_mob_baseinfo_over_view)](app/view/project_mob_baseinfo_over_view)
  * [项目属性(project_mob_edit_view)](app/view/project_mob_edit_view)
  * [公告(project_mob_notice_show_view)](app/view/project_mob_notice_show_view)
  * [项目(project_mob_over_view)](app/view/project_mob_over_view)
  * [项目设置(project_mob_setting_view)](app/view/project_mob_setting_view)
  * [项目发布(release_mob_list_view)](app/view/release_mob_list_view)
  * [迭代(sprint_mob_sprint_list_view)](app/view/sprint_mob_sprint_list_view)
  * [工作项(work_item_mob_bug_list_view)](app/view/work_item_mob_bug_list_view)
  * [工作项完成趋势(work_item_mob_complete_trend_chart_view)](app/view/work_item_mob_complete_trend_chart_view)
  * [工作项(work_item_mob_idea_list_view)](app/view/work_item_mob_idea_list_view)
  * [回收站(work_item_mob_recycle_bin_md_view)](app/view/work_item_mob_recycle_bin_md_view)
  * [工作项(work_item_mob_scrum_list_view)](app/view/work_item_mob_scrum_list_view)
  * [工作项(work_item_mob_sprint_work_item_list_view)](app/view/work_item_mob_sprint_work_item_list_view)
  * [工作项统计(work_item_mob_work_item_statistic_chart_view)](app/view/work_item_mob_work_item_statistic_chart_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>