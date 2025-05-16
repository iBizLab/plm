# 组织项目(project_org_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(project)](module/ProjMgmt/project/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建分组](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建类别](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [更多设置](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [树界面_刷新全部操作](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [新开窗口（项目）](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [计算表格列行为状态(project)](module/ProjMgmt/project/uilogic/calc_column_action_state)

### 关联视图
  * [基本信息(project_baseinfo_over_view)](app/view/project_baseinfo_over_view)
  * [新建项目(project_create_wizard_view)](app/view/project_create_wizard_view)
  * [项目(project_notice_show_view)](app/view/project_notice_show_view)
  * [概览(project_over_view)](app/view/project_over_view)
  * [项目属性(project_property_edit_view)](app/view/project_property_edit_view)
  * [项目(project_scrum_main_view)](app/view/project_scrum_main_view)
  * [项目信息(project_show_edit_view)](app/view/project_show_edit_view)
  * [项目预警(project_waring_custom_view)](app/view/project_waring_custom_view)
  * [全部迭代(sprint_all_grid_view)](app/view/sprint_all_grid_view)
  * [迭代(sprint_tree_exp_view)](app/view/sprint_tree_exp_view)
  * [全部计划(test_plan_cur_project_grid_view)](app/view/test_plan_cur_project_grid_view)
  * [全部计划(test_plan_project_grid_view)](app/view/test_plan_project_grid_view)
  * [测试计划(test_plan_project_tree_exp_view)](app/view/test_plan_project_tree_exp_view)
  * [工作项(work_item_all_scrum_grid_view)](app/view/work_item_all_scrum_grid_view)
  * [工作项甘特图(work_item_gantt_view)](app/view/work_item_gantt_view)
  * [全部缺陷(work_item_scrum_bug_grid_view)](app/view/work_item_scrum_bug_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>