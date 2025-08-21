# 项目(project_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [打开用户基本信息](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开用户设置](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开密码修改页](module/Base/user#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目设置（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [高级设置（移动端）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开搜索页](module/ProjMgmt/project#界面行为)

### 关联视图
  * [页面(article_page_search_mob_md_view)](app/view/article_page_search_mob_md_view)
  * [交付物(deliverable_mob_list_view)](app/view/deliverable_mob_list_view)
  * [移动端讨论搜索(discuss_post_mob_search_md_view)](app/view/discuss_post_mob_search_md_view)
  * [需求(idea_search_mob_md_view)](app/view/idea_search_mob_md_view)
  * [项目成员(project_member_mob_list_view)](app/view/project_member_mob_list_view)
  * [高级设置(project_mob_advanced_setting_view)](app/view/project_mob_advanced_setting_view)
  * [项目(project_mob_baseinfo_over_view)](app/view/project_mob_baseinfo_over_view)
  * [项目属性(project_mob_edit_view)](app/view/project_mob_edit_view)
  * [项目(project_mob_hybrid_tree_exp_view)](app/view/project_mob_hybrid_tree_exp_view)
  * [项目(project_mob_kanban_tree_exp_view)](app/view/project_mob_kanban_tree_exp_view)
  * [公告(project_mob_notice_show_view)](app/view/project_mob_notice_show_view)
  * [项目(project_mob_over_view)](app/view/project_mob_over_view)
  * [项目(project_mob_redirect_view)](app/view/project_mob_redirect_view)
  * [项目(project_mob_scrum_tree_exp_view)](app/view/project_mob_scrum_tree_exp_view)
  * [项目设置(project_mob_setting_view)](app/view/project_mob_setting_view)
  * [项目(project_mob_waterfall_tree_exp_view)](app/view/project_mob_waterfall_tree_exp_view)
  * [项目发布(release_mob_list_view)](app/view/release_mob_list_view)
  * [检索中心(search_hub_mob_tab_search_view)](app/view/search_hub_mob_tab_search_view)
  * [迭代(sprint_mob_sprint_list_view)](app/view/sprint_mob_sprint_list_view)
  * [移动端用例搜索(test_case_mob_search_md_view)](app/view/test_case_mob_search_md_view)
  * [移动端页面搜索(ticket_mob_search_md_view)](app/view/ticket_mob_search_md_view)
  * [修改密码(user_change_password_view)](app/view/user_change_password_view)
  * [企业用户(user_custom_setting_view)](app/view/user_custom_setting_view)
  * [企业用户(user_mob_user_info_view)](app/view/user_mob_user_info_view)
  * [工作项完成趋势(work_item_mob_complete_trend_chart_view)](app/view/work_item_mob_complete_trend_chart_view)
  * [工作项(work_item_mob_hybrid_list_view)](app/view/work_item_mob_hybrid_list_view)
  * [工作项(work_item_mob_hybrid_milestone_list_view)](app/view/work_item_mob_hybrid_milestone_list_view)
  * [工作项(work_item_mob_plan_md_view)](app/view/work_item_mob_plan_md_view)
  * [回收站(work_item_mob_recycle_bin_md_view)](app/view/work_item_mob_recycle_bin_md_view)
  * [工作项(work_item_mob_sprint_work_item_list_view)](app/view/work_item_mob_sprint_work_item_list_view)
  * [工作项统计(work_item_mob_work_item_statistic_chart_view)](app/view/work_item_mob_work_item_statistic_chart_view)
  * [工作项(work_item_search_mob_md_view)](app/view/work_item_search_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>