# 用例(test_casenosuite_test_case_grid_view)  <!-- {docsify-ignore-all} -->




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
  * 工具栏(toolbar)
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 数据表格(grid)
  * 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [表格界面_导出操作（Excel）](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移动用例](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移入计划（气泡）](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [界面行为支持获取编辑列](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置重要程度](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [删除](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [表格界面_新建操作](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [复制用例](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [表格界面_数据导入栏](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移入计划（气泡）](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [表格界面_拷贝操作](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [删除](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置评审状态](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [移动](module/TestMgmt/Test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/Test_case) : [设置维护人](module/TestMgmt/Test_case#界面行为)

### 关联视图
  * [用例(test_caseRedirectView)](app/view/test_caseRedirectView)
  * [用例(test_caseset_state_view)](app/view/test_caseset_state_view)
  * [用例(test_caseset_level)](app/view/test_caseset_level)
  * [移动用例(test_casemove_case_view)](app/view/test_casemove_case_view)
  * [用例(test_caseset_maintenance_view)](app/view/test_caseset_maintenance_view)
  * [用例(test_casecase_move_plan_view)](app/view/test_casecase_move_plan_view)
  * [复制用例(test_casecopy_test_case_view)](app/view/test_casecopy_test_case_view)
  * [移动用例(test_casemove_test_case_view)](app/view/test_casemove_test_case_view)
  * [用例(test_caseEditView)](app/view/test_caseEditView)

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