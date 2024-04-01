# 团队项目(projectgrid_view_team)  <!-- {docsify-ignore-all} -->




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
  * 搜索栏(searchbar)
  * 搜索表单(searchform)
  * 工具栏(toolbar)
  * 数据表格(grid)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [删除](module/ProjMgmt/Version#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [项目信息](module/ProjMgmt/Project#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [删除](module/ProjMgmt/Version#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [编辑](module/ProjMgmt/Version#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [取消星标](module/ProjMgmt/Project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [树界面_刷新全部操作](module/ProjMgmt/Sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [设置星标](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [设置星标](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [更多设置](module/ProjMgmt/Project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [新建类别](module/ProjMgmt/Sprint#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [编辑](module/ProjMgmt/Version#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [编辑基本信息](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [编辑基本信息](module/ProjMgmt/Project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [删除](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [新建分组](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [删除](module/ProjMgmt/Sprint#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [编辑](module/ProjMgmt/Version#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [项目成员](module/ProjMgmt/Project#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [新建分组](module/ProjMgmt/Version#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [新建类别](module/ProjMgmt/Version#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [树界面_刷新全部操作](module/ProjMgmt/Version#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [编辑](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [编辑](module/ProjMgmt/Sprint#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [删除](module/ProjMgmt/Version#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [新开窗口（项目）](module/ProjMgmt/Project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [编辑](module/ProjMgmt/Sprint#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [项目成员](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [更多设置](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [回收站](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [回收站](module/ProjMgmt/Project#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [删除](module/ProjMgmt/Sprint#界面行为)

### 关联视图
  * [工作项甘特图(work_itemgantt_view)](app/view/work_itemgantt_view)
  * [全部发布(versiongrid_view_all)](app/view/versiongrid_view_all)
  * [自动化规则(PSDELogicflow_grid_view)](app/view/PSDELogicflow_grid_view)
  * [基本信息(projectoverview_view_baseinfo)](app/view/projectoverview_view_baseinfo)
  * [工作项(work_itemgrid_view_all_scrum)](app/view/work_itemgrid_view_all_scrum)
  * [回收站(work_itemrecycle_bin_grid_iew)](app/view/work_itemrecycle_bin_grid_iew)
  * [项目信息(projectshow_edit_view)](app/view/projectshow_edit_view)
  * [基本信息(projectedit_view_base_information)](app/view/projectedit_view_base_information)
  * [全部计划(test_plangrid_view_project)](app/view/test_plangrid_view_project)
  * [高级设置(projectedit_view_advanced_setting)](app/view/projectedit_view_advanced_setting)
  * [概览(projectoverview_view)](app/view/projectoverview_view)
  * [全部迭代(sprintgrid_view_all)](app/view/sprintgrid_view_all)
  * [测试计划(test_plantree_exp_view_project)](app/view/test_plantree_exp_view_project)
  * [全部缺陷(work_itemgrid_view_bug_scrum)](app/view/work_itemgrid_view_bug_scrum)
  * [项目设置(projectsetting_view)](app/view/projectsetting_view)
  * [全部需求(work_itemgrid_view_story_scrum)](app/view/work_itemgrid_view_story_scrum)
  * [迭代(sprinttree_exp_view)](app/view/sprinttree_exp_view)
  * [发布模块(versiontree_exp_view)](app/view/versiontree_exp_view)
  * [项目成员(project_membergrid_view_config)](app/view/project_membergrid_view_config)
  * [新建项目(projectcreate_wizard_view)](app/view/projectcreate_wizard_view)
  * [项目(projectmain_view_scrum)](app/view/projectmain_view_scrum)
  * [工作项类型(work_item_typesetting_view_scrum)](app/view/work_item_typesetting_view_scrum)

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