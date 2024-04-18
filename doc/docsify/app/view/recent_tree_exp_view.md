# 首页(recent_tree_exp_view)  <!-- {docsify-ignore-all} -->


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
#### CAPTIONBAR(captionbar)

#### 搜索栏(searchbar)

#### 树视图导航栏(treeexpbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [关注(attention_tab_exp_view)](app/view/attention_tab_exp_view)
  * [需求(idea_my_assign_grid_view)](app/view/idea_my_assign_grid_view)
  * [需求(idea_my_attention_grid_view)](app/view/idea_my_attention_grid_view)
  * [最近访问(recent_data_view)](app/view/recent_data_view)
  * [我负责的事项(recent_my_assignee_item_tap_exp_view)](app/view/recent_my_assignee_item_tap_exp_view)
  * [最近访问(recent_my_created_tab_exp_view)](app/view/recent_my_created_tab_exp_view)
  * [用例(test_case_my_attention_grid_view)](app/view/test_case_my_attention_grid_view)
  * [用例(test_case_my_test_case_grid_view)](app/view/test_case_my_test_case_grid_view)
  * [工单(ticket_my_assign_grid_view)](app/view/ticket_my_assign_grid_view)
  * [工单(ticket_my_attention_grid_view)](app/view/ticket_my_attention_grid_view)
  * [工作项(work_item_my_assignee_gird_view)](app/view/work_item_my_assignee_gird_view)
  * [工作项(work_item_my_attention_grid_view)](app/view/work_item_my_attention_grid_view)
  * [工作项(work_item_my_todo_gird_view)](app/view/work_item_my_todo_gird_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>