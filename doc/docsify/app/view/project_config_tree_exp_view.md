# 项目管理(project_config_tree_exp_view)  <!-- {docsify-ignore-all} -->


<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;display: flex;">
			<div style="display: flex;align-items: center;justify-content: space-between;flex-direction: column;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="width:180px;height:40px;"></el-skeleton-item>
				</el-tooltip>
				<el-tooltip content="树视图">
					<el-skeleton-item variant="text" style="margin-top: 10px;width:180px;height:300px;"></el-skeleton-item>
				</el-tooltip>
			</div>
			<el-tooltip content="导航区域">
				<el-skeleton-item variant="p" style="margin-left: 10px;height:350px"></el-skeleton-item>
			</el-tooltip>
		</div>
	</template>
</el-skeleton>


## 控件
#### CAPTIONBAR(captionbar)

#### 搜索栏(searchbar)

#### 树视图导航栏(treeexpbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [已删除(portfolio_project_set_delete_grid_view)](app/view/portfolio_project_set_delete_grid_view)
  * [进行中(portfolio_project_set_going_view)](app/view/portfolio_project_set_going_view)
  * [项目集管理(portfolio_project_set_tab_exp_view)](app/view/portfolio_project_set_tab_exp_view)
  * [项目管理(project_management_archived_grid_view)](app/view/project_management_archived_grid_view)
  * [项目管理(project_management_deleted_grid_view)](app/view/project_management_deleted_grid_view)
  * [项目管理(project_management_in_progress_grid_view)](app/view/project_management_in_progress_grid_view)
  * [项目管理(project_management_tab_exp_view)](app/view/project_management_tab_exp_view)
  * [scrum项目(project_scrum_flow_setting_tab_view)](app/view/project_scrum_flow_setting_tab_view)
  * [标签管理(project_tag_tag_grid_view)](app/view/project_tag_tag_grid_view)
  * [实体属性(psde_field_grid_view)](app/view/psde_field_grid_view)
  * [工作项配置(work_item_global_setting_view)](app/view/work_item_global_setting_view)
  * [工作项全局状态(work_item_state_grid_view)](app/view/work_item_state_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>