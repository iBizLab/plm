# 工作台(recent_tab_exp_view)  <!-- {docsify-ignore-all} -->


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
#### CAPTIONBAR(captionbar)

#### 数据关系分页部件(tabexppanel)



### 关联视图
  * [关注(attention_tab_exp_view)](app/view/attention_tab_exp_view)
  * [需求(idea_my_attention_grid_view)](app/view/idea_my_attention_grid_view)
  * [仪表盘(recent_custom_dashboard_view)](app/view/recent_custom_dashboard_view)
  * [最近访问(recent_data_view)](app/view/recent_data_view)
  * [我负责的事项(recent_my_assignee_item_tap_exp_view)](app/view/recent_my_assignee_item_tap_exp_view)
  * [最近访问(recent_my_created_tab_exp_view)](app/view/recent_my_created_tab_exp_view)
  * [首页(recent_tree_exp_view)](app/view/recent_tree_exp_view)
  * [用例(test_case_my_attention_grid_view)](app/view/test_case_my_attention_grid_view)
  * [工单(ticket_my_attention_grid_view)](app/view/ticket_my_attention_grid_view)
  * [工作项(work_item_my_attention_grid_view)](app/view/work_item_my_attention_grid_view)
  * [工作项(work_item_my_todo_gird_view)](app/view/work_item_my_todo_gird_view)
  * [工时(workload_log_grid_view)](app/view/workload_log_grid_view)
  * [工时(workload_tab_exp_view)](app/view/workload_tab_exp_view)
  * [工时(workload_tab_search_view)](app/view/workload_tab_search_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>