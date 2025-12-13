# 工作台(recent_mob_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(righttoolbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(待完成事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我关注的事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我创建的事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开最近访问（移动端）](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我负责的事项)](module/Base/recent#界面行为)

### 关联视图
  * [仪表盘(recent_mob_dashboard_view)](app/view/recent_mob_dashboard_view)
  * [最近访问(recent_mob_home_view)](app/view/recent_mob_home_view)
  * [最近访问(recent_mob_recent_md_view)](app/view/recent_mob_recent_md_view)
  * [最近访问(recent_my_mob_tab_view)](app/view/recent_my_mob_tab_view)
  * [最近访问的用例(recent_recent_access_case_mobbash)](app/view/recent_recent_access_case_mobbash)
  * [最近访问的项目(recent_recent_access_project_mobbash)](app/view/recent_recent_access_project_mobbash)
  * [工作日历(work_item_mob_calendar_exp_view)](app/view/work_item_mob_calendar_exp_view)
  * [个人工作项统计(work_item_mob_my_assignee_chart)](app/view/work_item_mob_my_assignee_chart)
  * [我负责的工作项(work_item_my_assignee_mobboard)](app/view/work_item_my_assignee_mobboard)
  * [我创建的工作项(work_item_my_created_mobdash)](app/view/work_item_my_created_mobdash)
  * [工时(workload_mob_calendar_view)](app/view/workload_mob_calendar_view)
  * [工时(workload_mob_list_view)](app/view/workload_mob_list_view)
  * [工时(workload_mob_workload_exp_view)](app/view/workload_mob_workload_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>