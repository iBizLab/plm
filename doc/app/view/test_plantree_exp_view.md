# 测试计划(test_plantree_exp_view)  <!-- {docsify-ignore-all} -->




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


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [新建分组](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [树界面_刷新全部操作](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [新建类别](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)

### 关联视图
  * [全部计划(test_plangrid_view_all)](app/view/test_plangrid_view_all)

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