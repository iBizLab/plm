# 用例模块(test_suiteGridView)  <!-- {docsify-ignore-all} -->




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
  * 数据表格(grid)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)
  * 搜索栏(searchbar)
  * 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_搜索栏](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_导出操作（Excel）](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_编辑操作](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_删除操作](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_新建操作](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_帮助操作](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_数据导入栏](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_导出数据模型](module/TestMgmt/Test_suite#界面行为)
  * [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite) : [表格界面_拷贝操作](module/TestMgmt/Test_suite#界面行为)

### 关联视图
  * [用例模块(test_suiteEditView)](app/view/test_suiteEditView)

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