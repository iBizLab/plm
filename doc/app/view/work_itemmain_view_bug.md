# 缺陷(work_itemmain_view_bug)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * DATAINFOBAR(datainfobar)
  * 编辑表单(form)


### 关联视图
  * [需求(ideawork_item_re_idea_gridview)](app/view/ideawork_item_re_idea_gridview)
  * [工单(ticketwork_item_re_grid_view)](app/view/ticketwork_item_re_grid_view)
  * [交付物(deliverabletarget_grid_view)](app/view/deliverabletarget_grid_view)
  * [工作项(work_itemre_self_grid_view)](app/view/work_itemre_self_grid_view)
  * [用例(test_casework_item_re_case_gridview)](app/view/test_casework_item_re_case_gridview)
  * [项目(projectPickupView)](app/view/projectPickupView)
  * [工作项(work_itemchild_grid_view)](app/view/work_itemchild_grid_view)
  * [工时(workloadlist_view_workitem)](app/view/workloadlist_view_workitem)
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