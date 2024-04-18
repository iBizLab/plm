# 团队项目(project_team_grid_view)  <!-- {docsify-ignore-all} -->


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

#### 工具栏(toolbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [更多设置](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [新开窗口（项目）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [树界面_刷新全部操作](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建分组](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [新建类别](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)

### 关联视图
  * [基本信息(project_baseinfo_over_view)](app/view/project_baseinfo_over_view)
  * [新建项目(project_create_wizard_view)](app/view/project_create_wizard_view)
  * [概览(project_over_view)](app/view/project_over_view)
  * [项目(project_scrum_main_view)](app/view/project_scrum_main_view)
  * [项目信息(project_show_edit_view)](app/view/project_show_edit_view)
  * [全部迭代(sprint_all_grid_view)](app/view/sprint_all_grid_view)
  * [迭代(sprint_tree_exp_view)](app/view/sprint_tree_exp_view)
  * [全部计划(test_plan_project_grid_view)](app/view/test_plan_project_grid_view)
  * [测试计划(test_plan_project_tree_exp_view)](app/view/test_plan_project_tree_exp_view)
  * [工作项(work_item_all_scrum_grid_view)](app/view/work_item_all_scrum_grid_view)
  * [全部需求(work_item_all_story_scrum_grid_view)](app/view/work_item_all_story_scrum_grid_view)
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