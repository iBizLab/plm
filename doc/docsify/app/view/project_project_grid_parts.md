# 项目列表(project_project_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集信息](module/Base/portfolio#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开项目配置(全局)](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开项目导航页](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [取消星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [编辑基本信息（项目集）](module/Base/portfolio#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [根据类型打开项目主视图](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [打开项目集主视图](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集成员](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [设置星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [更多设置（项目集）](module/Base/portfolio#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)

### 关联视图
  * [项目集(portfolio_project_grid_view)](app/view/portfolio_project_grid_view)
  * [文件夹(portfolio_project_index_view)](app/view/portfolio_project_index_view)
  * [文件夹(portfolio_project_show_view)](app/view/portfolio_project_show_view)
  * [全部项目(project_all_grid_view)](app/view/project_all_grid_view)
  * [项目管理(project_config_tree_exp_view)](app/view/project_config_tree_exp_view)
  * [项目(project_edit_view)](app/view/project_edit_view)
  * [项目(project_hybrid_index_view)](app/view/project_hybrid_index_view)
  * [归档项目(project_is_archived_grid_view)](app/view/project_is_archived_grid_view)
  * [项目(project_kanban_index_view)](app/view/project_kanban_index_view)
  * [组织项目(project_org_grid_view)](app/view/project_org_grid_view)
  * [项目(project_redirect_view)](app/view/project_redirect_view)
  * [项目(project_scrum_index_view)](app/view/project_scrum_index_view)
  * [团队项目(project_team_grid_view)](app/view/project_team_grid_view)
  * [项目管理(project_tree_exp_view)](app/view/project_tree_exp_view)
  * [项目(project_waterfall_index_view)](app/view/project_waterfall_index_view)
  * [工作项(work_item_filter_grid_view)](app/view/work_item_filter_grid_view)
  * [资源分配(work_item_project_set_resource_gantt_view)](app/view/work_item_project_set_resource_gantt_view)
  * [工作项(work_item_under_work_grid_view)](app/view/work_item_under_work_grid_view)
  * [工作(work_tree_grid_ex_view)](app/view/work_tree_grid_ex_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>