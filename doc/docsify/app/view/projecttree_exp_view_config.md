# 项目管理(projecttree_exp_view_config)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * 树视图导航栏(treeexpbar)
  * 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目管理(projectgrid_view_management_deleted)](app/view/projectgrid_view_management_deleted)
  * [scrum项目(projectsetting_tab_view_scrum_flow)](app/view/projectsetting_tab_view_scrum_flow)
  * [已删除(portfolioproject_set_delete_grid_view)](app/view/portfolioproject_set_delete_grid_view)
  * [实体属性(PSDEFieldgrid_view)](app/view/PSDEFieldgrid_view)
  * [项目管理(projectgrid_view_management_archived)](app/view/projectgrid_view_management_archived)
  * [进行中(portfolioproject_set_going_view)](app/view/portfolioproject_set_going_view)
  * [工作项全局状态(work_item_stateGridView)](app/view/work_item_stateGridView)
  * [项目管理(projecttab_exp_view_management)](app/view/projecttab_exp_view_management)
  * [项目集管理(portfolioproject_set_tab_exp_view)](app/view/portfolioproject_set_tab_exp_view)
  * [工作项配置(work_itemglobal_setting_view)](app/view/work_itemglobal_setting_view)
  * [项目管理(projectgrid_view_management_in_progress)](app/view/projectgrid_view_management_in_progress)
  * [标签管理(project_taggrid_view_tag)](app/view/project_taggrid_view_tag)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>