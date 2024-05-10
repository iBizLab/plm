# 项目管理(project_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [发布阶段(dictionary_data_global_grid_view)](app/view/dictionary_data_global_grid_view)
  * [发布配置(dictionary_data_global_tab_exp_view)](app/view/dictionary_data_global_tab_exp_view)
  * [项目集管理(portfolio_deleted_grid_view)](app/view/portfolio_deleted_grid_view)
  * [项目集管理(portfolio_in_progress_grid_view)](app/view/portfolio_in_progress_grid_view)
  * [项目集管理(portfolio_project_set_tab_exp_view)](app/view/portfolio_project_set_tab_exp_view)
  * [项目管理(project_archived_grid_view)](app/view/project_archived_grid_view)
  * [项目管理(project_deleted_grid_view)](app/view/project_deleted_grid_view)
  * [项目管理(project_in_progress_grid_view)](app/view/project_in_progress_grid_view)
  * [项目管理(project_management_tab_exp_view)](app/view/project_management_tab_exp_view)
  * [scrum项目(project_scrum_flow_setting_tab_view)](app/view/project_scrum_flow_setting_tab_view)
  * [标签管理(project_tag_tag_grid_view)](app/view/project_tag_tag_grid_view)
  * [实体属性(psde_field_grid_view)](app/view/psde_field_grid_view)
  * [工作项配置(work_item_global_setting_view)](app/view/work_item_global_setting_view)
  * [工作项状态(work_item_state_grid_view)](app/view/work_item_state_grid_view)
  * [工作项类型(work_item_type_global_grid_view)](app/view/work_item_type_global_grid_view)
  * [工时类别(workload_type_pick_up_tap_exp_view)](app/view/workload_type_pick_up_tap_exp_view)
  * [类别设置(workload_type_setup_grid_view)](app/view/workload_type_setup_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>