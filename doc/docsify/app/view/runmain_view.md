# 执行用例(runmain_view)  <!-- {docsify-ignore-all} -->

系统自动添加


<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
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
		<el-tooltip content="编辑表单">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
  * DATAINFOBAR(datainfobar)
  * 编辑表单(form)
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [执行用例(RUN)](module/TestMgmt/Run) : [打开关联用例](module/TestMgmt/Run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/Run) : [发送评论](module/TestMgmt/Run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/Run) : [清空评论](module/TestMgmt/Run#界面行为)

### 关联视图
  * [需求(idearun_re_idea_grid_view)](app/view/idearun_re_idea_grid_view)
  * [活动历史列表(activitiyHistoryListView)](app/view/activitiyHistoryListView)
  * [用例(test_casemain_view)](app/view/test_casemain_view)
  * [执行用例(runrun_histor_re_run_edit_view)](app/view/runrun_histor_re_run_edit_view)
  * [测试计划(test_planPickupView)](app/view/test_planPickupView)
  * [工作项(work_itemrun_re_work_item_grid_view)](app/view/work_itemrun_re_work_item_grid_view)
  * [评论(commentlist_view)](app/view/commentlist_view)
  * [工作项(work_itemrun_re_work_item_bug_grid_view)](app/view/work_itemrun_re_work_item_bug_grid_view)

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