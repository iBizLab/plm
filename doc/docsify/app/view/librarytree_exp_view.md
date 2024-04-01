# 测试管理(librarytree_exp_view)  <!-- {docsify-ignore-all} -->




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
  * 搜索栏(searchbar)
  * 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [树界面_刷新全部操作](module/TestMgmt/Test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [新建模块](module/TestMgmt/Test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [设置星标](module/TestMgmt/Library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [新建分组](module/TestMgmt/Test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [编辑基本信息](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [测试库信息](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [取消星标](module/TestMgmt/Library#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [打开测试库导航页](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [测试库成员](module/TestMgmt/Library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [回收站](module/TestMgmt/Library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [树界面_刷新全部操作](module/TestMgmt/Test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [新建类别](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [更多设置](module/TestMgmt/Library#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)

### 关联视图
  * [测试库信息(libraryshow_edit_view)](app/view/libraryshow_edit_view)
  * [测试库成员(library_membergrid_view_config)](app/view/library_membergrid_view_config)
  * [新建用例模块(test_suitequick_create_view)](app/view/test_suitequick_create_view)
  * [高级设置(libraryedit_view_advanced_setting)](app/view/libraryedit_view_advanced_setting)
  * [全部用例(test_casegrid_view_all)](app/view/test_casegrid_view_all)
  * [用例模块(test_suitetree_exp_view)](app/view/test_suitetree_exp_view)
  * [测试库(libraryindex_view)](app/view/libraryindex_view)
  * [全部计划(test_plangrid_view_all)](app/view/test_plangrid_view_all)
  * [基本信息(libraryedit_view_base_info)](app/view/libraryedit_view_base_info)
  * [回收站(test_caserecycle_grid_view)](app/view/test_caserecycle_grid_view)
  * [测试计划(test_plantree_exp_view)](app/view/test_plantree_exp_view)
  * [测试库配置(librarytree_exp_view_details_setting)](app/view/librarytree_exp_view_details_setting)
  * [用例(test_casenosuite_test_case_grid_view)](app/view/test_casenosuite_test_case_grid_view)

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