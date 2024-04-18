# 工单导航(ticket_tree_exp_view)  <!-- {docsify-ignore-all} -->


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
  * [全部工单(ticket_all_grid_view)](app/view/ticket_all_grid_view)
  * [已归档的工单(ticket_archived_grid_view)](app/view/ticket_archived_grid_view)
  * [我负责的工单(ticket_my_assignee_grid_view)](app/view/ticket_my_assignee_grid_view)
  * [进行中的工单(ticket_progress_grid_view)](app/view/ticket_progress_grid_view)
  * [我提交的工单(ticket_submit_grid_view)](app/view/ticket_submit_grid_view)
  * [待计划的工单(ticket_un_plan_grid_view)](app/view/ticket_un_plan_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>