# 工作台(recenttab_exp_view)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-skeleton style="width:250px;">
					<template #template>
						<el-tooltip content="分页栏">
							<div style="display: flex;align-items: center;justify-content:end">
								<el-skeleton-item variant="text" style="height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
							</div>
						</el-tooltip>
					</template>
				</el-skeleton>
			</div>
		</div>
		<el-tooltip content="导航区占位">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
  * CAPTIONBAR(captionbar)
  * 数据关系分页部件(tabexppanel)


### 关联视图
  * [需求(ideamy_attention_grid_view)](app/view/ideamy_attention_grid_view)
  * [我负责的事项(recentmy_assignee_item_tap_exp_view)](app/view/recentmy_assignee_item_tap_exp_view)
  * [仪表盘(recentcustom_dashboard_view)](app/view/recentcustom_dashboard_view)
  * [最近访问(recentmy_created_tab_exp_view)](app/view/recentmy_created_tab_exp_view)
  * [首页(recenttree_exp_view)](app/view/recenttree_exp_view)
  * [用例(test_casemy_attention_grid_view)](app/view/test_casemy_attention_grid_view)
  * [工作项(work_itemmy_todo_gird_view)](app/view/work_itemmy_todo_gird_view)
  * [工作项(work_itemmy_attention_grid_view)](app/view/work_itemmy_attention_grid_view)
  * [关注(attentiontab_exp_view)](app/view/attentiontab_exp_view)
  * [工单(ticketmy_attention_grid_view)](app/view/ticketmy_attention_grid_view)
  * [最近访问(recentdata_view)](app/view/recentdata_view)

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