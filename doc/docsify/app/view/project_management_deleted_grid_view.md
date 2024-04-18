# 项目管理(project_management_deleted_grid_view)  <!-- {docsify-ignore-all} -->


<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
				</el-tooltip>
				<el-tooltip content="搜索栏">
				    <el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:300px;"></el-skeleton-item>
				</el-tooltip>
				<el-skeleton style="width:250px;">
					<template #template>
						<el-tooltip content="工具栏">
							<div style="display: flex;align-items: center;justify-content:end">
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
							</div>
						</el-tooltip>
					</template>
				</el-skeleton>
			</div>
		</div>
		<el-tooltip content="数据表格">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
#### CAPTIONBAR(captionbar)

#### 数据表格(grid)

#### 搜索栏(searchbar)

#### 搜索表单(searchform)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [设置星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [取消星标](module/Base/portfolio#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建类别](module/ProjMgmt/release#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集信息](module/Base/portfolio#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目信息](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [更多设置](module/ProjMgmt/project#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [产品关联空间](module/Wiki/space#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集成员](module/Base/portfolio#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消关联（其他实体关联）](module/Wiki/space#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [打开项目导航页](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [更多设置（项目集）](module/Base/portfolio#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建类别](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [项目关联空间](module/Wiki/space#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [根据类型打开项目主视图](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [打开项目集主视图](module/Base/portfolio#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [树界面_刷新全部操作](module/ProjMgmt/sprint#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [树界面_刷新全部操作](module/ProjMgmt/release#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开项目配置(全局)](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建分组](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [编辑基本信息（项目集）](module/Base/portfolio#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [树界面_刷新全部操作](module/Wiki/space#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [打开项目导航页](module/ProjMgmt/project#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建分组](module/ProjMgmt/release#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [已删除_恢复](module/ProjMgmt/project#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)

### 关联视图
  * [页面(article_page_re_show_view)](app/view/article_page_re_show_view)
  * [全部报表(insight_scrum_grid_view)](app/view/insight_scrum_grid_view)
  * [Scrum报表(insight_scrum_tree_exp_view)](app/view/insight_scrum_tree_exp_view)
  * [项目集(portfolio_project_grid_view)](app/view/portfolio_project_grid_view)
  * [文件夹(portfolio_project_index_view)](app/view/portfolio_project_index_view)
  * [文件夹(portfolio_project_show_view)](app/view/portfolio_project_show_view)
  * [全部项目(project_all_grid_view)](app/view/project_all_grid_view)
  * [基本信息(project_baseinfo_over_view)](app/view/project_baseinfo_over_view)
  * [项目管理(project_config_tree_exp_view)](app/view/project_config_tree_exp_view)
  * [项目(project_edit_view)](app/view/project_edit_view)
  * [项目(project_kanban_index_view)](app/view/project_kanban_index_view)
  * [概览(project_over_view)](app/view/project_over_view)
  * [项目(project_redirect_view)](app/view/project_redirect_view)
  * [项目(project_scrum_index_view)](app/view/project_scrum_index_view)
  * [项目信息(project_show_edit_view)](app/view/project_show_edit_view)
  * [项目管理(project_tree_exp_view)](app/view/project_tree_exp_view)
  * [项目(project_waterfall_index_view)](app/view/project_waterfall_index_view)
  * [全部发布(release_all_grid_view)](app/view/release_all_grid_view)
  * [发布模块(release_tree_exp_view)](app/view/release_tree_exp_view)
  * [关联空间(space_product_re_space_choose_option_view)](app/view/space_product_re_space_choose_option_view)
  * [空间(space_product_re_tree_exp_view)](app/view/space_product_re_tree_exp_view)
  * [全部迭代(sprint_all_grid_view)](app/view/sprint_all_grid_view)
  * [迭代(sprint_tree_exp_view)](app/view/sprint_tree_exp_view)
  * [全部计划(test_plan_project_grid_view)](app/view/test_plan_project_grid_view)
  * [测试计划(test_plan_project_tree_exp_view)](app/view/test_plan_project_tree_exp_view)
  * [工作项(work_item_all_scrum_grid_view)](app/view/work_item_all_scrum_grid_view)
  * [查询结果(work_item_filter_grid_view)](app/view/work_item_filter_grid_view)
  * [工作项甘特图(work_item_gantt_view)](app/view/work_item_gantt_view)
  * [全部需求(work_item_requirement_tree_grid_view)](app/view/work_item_requirement_tree_grid_view)
  * [全部缺陷(work_item_scrum_bug_grid_view)](app/view/work_item_scrum_bug_grid_view)
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