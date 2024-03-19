# 工单导航(tickettree_exp_view)  <!-- {docsify-ignore-all} -->




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
  * 树视图导航栏(treeexpbar)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [已归档的工单(ticketgrid_view_archived)](app/view/ticketgrid_view_archived)
  * [待计划的工单(ticketgrid_view_plan)](app/view/ticketgrid_view_plan)
  * [我提交的工单(ticketgrid_view_submit)](app/view/ticketgrid_view_submit)
  * [全部工单(ticketgrid_view_all)](app/view/ticketgrid_view_all)
  * [进行中的工单(ticketgrid_view_progress)](app/view/ticketgrid_view_progress)
  * [我负责的工单(ticketgrid_view_assignee)](app/view/ticketgrid_view_assignee)

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