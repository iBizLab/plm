# 用例(test_caserecycle_edit_view)  <!-- {docsify-ignore-all} -->




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
  * 编辑表单(form)
  * DATAINFOBAR(datainfobar)
  * CAPTIONBAR(captionbar)


### 关联视图
  * [需求(ideatest_case_re_idea_grid_view)](app/view/ideatest_case_re_idea_grid_view)
  * [工作项(work_itemtest_case_re_work_item_grid_view)](app/view/work_itemtest_case_re_work_item_grid_view)
  * [活动历史列表(activitiyHistoryListView)](app/view/activitiyHistoryListView)
  * [执行历史(rungrid_view_history)](app/view/rungrid_view_history)
  * [工作项(work_itemtest_case_re_bug_grid_view)](app/view/work_itemtest_case_re_bug_grid_view)
  * [用例模块(test_suitePickupView)](app/view/test_suitePickupView)
  * [评论(commentlist_view)](app/view/commentlist_view)

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