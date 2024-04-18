# 测试库管理(library_archived_grid_view)  <!-- {docsify-ignore-all} -->


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
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [树界面_刷新全部操作](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [编辑基本信息](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [删除](module/TestMgmt/library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [新建模块](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [新建类别](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库主视图](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库信息](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库成员](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库导航页](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [设置星标](module/TestMgmt/library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [树界面_刷新全部操作](module/TestMgmt/test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [已归档_激活](module/TestMgmt/library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑](module/TestMgmt/test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [取消星标](module/TestMgmt/library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [删除](module/TestMgmt/test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [新建分组](module/TestMgmt/test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [更多设置](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库配置](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [回收站](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [取消星标](module/TestMgmt/library#界面行为)

### 关联视图
  * [全部报表(insight_library_grid_view)](app/view/insight_library_grid_view)
  * [测试库报表(insight_library_tree_exp_view)](app/view/insight_library_tree_exp_view)
  * [全部测试库(library_all_grid_view)](app/view/library_all_grid_view)
  * [测试库配置(library_config_tree_exp_view)](app/view/library_config_tree_exp_view)
  * [测试库(library_index_view)](app/view/library_index_view)
  * [测试库(library_redirect_view)](app/view/library_redirect_view)
  * [测试库配置(library_setting_view)](app/view/library_setting_view)
  * [测试库信息(library_show_edit_view)](app/view/library_show_edit_view)
  * [测试管理(library_tree_exp_view)](app/view/library_tree_exp_view)
  * [全部用例(test_case_all_grid_view)](app/view/test_case_all_grid_view)
  * [用例(test_case_nosuite_test_case_grid_view)](app/view/test_case_nosuite_test_case_grid_view)
  * [全部计划(test_plan_all_grid_view)](app/view/test_plan_all_grid_view)
  * [测试计划(test_plan_in_progress_grid_view)](app/view/test_plan_in_progress_grid_view)
  * [测试计划(test_plan_my_assignee_grid_view)](app/view/test_plan_my_assignee_grid_view)
  * [测试计划(test_plan_my_part_grid_view)](app/view/test_plan_my_part_grid_view)
  * [测试计划(test_plan_tree_exp_view)](app/view/test_plan_tree_exp_view)
  * [新建用例模块(test_suite_quick_create_view)](app/view/test_suite_quick_create_view)
  * [用例模块(test_suite_tree_exp_view)](app/view/test_suite_tree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>