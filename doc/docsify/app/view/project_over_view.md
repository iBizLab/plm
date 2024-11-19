# 概览(project_over_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据看板(dashboard)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看当日到期预警](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看已逾期工作项](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看三日到期预警](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看全部工作项](module/ProjMgmt/project#界面行为)

### 关联视图
  * [基本信息(project_baseinfo_over_view)](app/view/project_baseinfo_over_view)
  * [项目(project_notice_show_view)](app/view/project_notice_show_view)
  * [项目属性(project_property_edit_view)](app/view/project_property_edit_view)
  * [项目预警(project_waring_custom_view)](app/view/project_waring_custom_view)
  * [今日到期预警(work_item_cur_warning_grid_view)](app/view/work_item_cur_warning_grid_view)
  * [逾期工作项(work_item_overdue_grid_view)](app/view/work_item_overdue_grid_view)
  * [三日到期预警(work_item_three_day_warning_grid_view)](app/view/work_item_three_day_warning_grid_view)
  * [未完成工作项(work_item_work_item_grid_view)](app/view/work_item_work_item_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>