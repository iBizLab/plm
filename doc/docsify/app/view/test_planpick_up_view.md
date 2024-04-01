# 选择计划(test_planpick_up_view)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;display: flex;">
			<div style="display: flex;align-items: center;justify-content: space-between;flex-direction: column;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="width:180px;height:40px;"></el-skeleton-item>
				</el-tooltip>
				<el-tooltip content="数据导航">
					<el-skeleton-item variant="text" style="margin-top: 10px;width:180px;height:300px;"></el-skeleton-item>
				</el-tooltip>
			</div>
			<el-tooltip content="数据选择表格">
				<el-skeleton-item variant="p" style="margin-left: 10px;height:350px"></el-skeleton-item>
			</el-tooltip>
		</div>
		<el-skeleton style="display: flex;align-items: center;justify-content:end">
			<template #template>
				<div style="">
					<el-tooltip content="确认">
						<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
					</el-tooltip>
					<el-tooltip content="取消">
						<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
					</el-tooltip>
				</div>
			</template>
		</el-skeleton>
	</template>
</el-skeleton>


## 控件
  * 选择视图面板(pickupviewpanel)
  * 树视图导航栏(treeexpbar)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [确定](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [视图_取消](module/TestMgmt/Test_plan#界面行为)

### 关联视图
  * [测试计划(test_planpick_up_view_PickupGridView)](app/view/test_planpick_up_view_PickupGridView)
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