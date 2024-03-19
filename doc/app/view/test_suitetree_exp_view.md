# 用例模块(test_suitetree_exp_view)  <!-- {docsify-ignore-all} -->




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
  * 树视图导航栏(treeexpbar)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [新建模块](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [删除](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [树界面_刷新全部操作](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [编辑](module/TestMgmt/Test_suite#界面行为)

### 关联视图
  * [新建用例模块(test_suitequick_create_view)](app/view/test_suitequick_create_view)
  * [全部用例(test_casegrid_view_all)](app/view/test_casegrid_view_all)
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