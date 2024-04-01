# 需求(ideaEditView)  <!-- {docsify-ignore-all} -->

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
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 编辑表单(form)
  * DATAINFOBAR(datainfobar)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/Idea) : [编辑界面_保存操作](module/ProdMgmt/Idea#界面行为)

### 关联视图
  * [需求(ideaidea_re_idea_grid_view)](app/view/ideaidea_re_idea_grid_view)
  * [活动历史列表(activitiyHistoryListView)](app/view/activitiyHistoryListView)
  * [流转记录(transition_historywork_item_calendar_view)](app/view/transition_historywork_item_calendar_view)
  * [需求关联客户(customeridea_re_customer_grid_view)](app/view/customeridea_re_customer_grid_view)
  * [工单(ticketidea_re_ticket_grid_view)](app/view/ticketidea_re_ticket_grid_view)
  * [评论(commentlist_view)](app/view/commentlist_view)
  * [工作项(work_itemidea_re_work_item_grid_view)](app/view/work_itemidea_re_work_item_grid_view)
  * [需求选择树视图(ideaPickupTreeView)](app/view/ideaPickupTreeView)
  * [用例(test_caseidea_re_test_case_grid_view)](app/view/test_caseidea_re_test_case_grid_view)

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