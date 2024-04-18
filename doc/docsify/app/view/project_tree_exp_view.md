# 项目管理(project_tree_exp_view)  <!-- {docsify-ignore-all} -->


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


### 关联界面行为
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [设置星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [取消星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [编辑基本信息（项目集）](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集信息](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [打开项目导航页](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [更多设置（项目集）](module/Base/portfolio#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [根据类型打开项目主视图](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [打开项目集主视图](module/Base/portfolio#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开项目配置(全局)](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集成员](module/Base/portfolio#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)

### 关联视图
  * [项目集(portfolio_project_grid_view)](app/view/portfolio_project_grid_view)
  * [文件夹(portfolio_project_index_view)](app/view/portfolio_project_index_view)
  * [文件夹(portfolio_project_show_view)](app/view/portfolio_project_show_view)
  * [全部项目(project_all_grid_view)](app/view/project_all_grid_view)
  * [项目管理(project_config_tree_exp_view)](app/view/project_config_tree_exp_view)
  * [项目(project_edit_view)](app/view/project_edit_view)
  * [项目(project_kanban_index_view)](app/view/project_kanban_index_view)
  * [项目(project_redirect_view)](app/view/project_redirect_view)
  * [项目(project_scrum_index_view)](app/view/project_scrum_index_view)
  * [项目(project_waterfall_index_view)](app/view/project_waterfall_index_view)
  * [查询结果(work_item_filter_grid_view)](app/view/work_item_filter_grid_view)
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