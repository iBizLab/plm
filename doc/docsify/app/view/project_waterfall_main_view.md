# 项目(project_waterfall_main_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 分页导航面板(tabexppanel)
#### 工具栏(toolbar)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [更多设置](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)

### 关联视图
  * [基本信息(project_baseinfo_over_view)](app/view/project_baseinfo_over_view)
  * [项目(project_notice_show_view)](app/view/project_notice_show_view)
  * [概览(project_over_view)](app/view/project_over_view)
  * [项目属性(project_property_edit_view)](app/view/project_property_edit_view)
  * [项目信息(project_show_edit_view)](app/view/project_show_edit_view)
  * [项目预警(project_waring_custom_view)](app/view/project_waring_custom_view)
  * [全部计划(test_plan_project_grid_view)](app/view/test_plan_project_grid_view)
  * [测试计划(test_plan_project_tree_exp_view)](app/view/test_plan_project_tree_exp_view)
  * [工作项(work_item_all_waterfall_grid_view)](app/view/work_item_all_waterfall_grid_view)
  * [工作项甘特图(work_item_gantt_view)](app/view/work_item_gantt_view)
  * [里程碑(work_item_milestone_grid_view)](app/view/work_item_milestone_grid_view)
  * [全部缺陷(work_item_waterfall_bug_grid_view)](app/view/work_item_waterfall_bug_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>