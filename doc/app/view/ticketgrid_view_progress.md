# 进行中的工单(ticketgrid_view_progress)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
				</el-tooltip>
				<el-tooltip content="搜索栏">
				    <el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:300px;"></el-skeleton-item>
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
		<el-tooltip content="数据表格">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
  * 搜索栏(searchbar)
  * 搜索表单(searchform)
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 数据表格(grid)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [表格界面_数据导入栏](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [表格界面_导出操作（Excel）](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [设置标签](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [工单归档](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [工单删除](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [表格界面_新建操作](module/ProdMgmt/Ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/Ticket) : [分配负责人](module/ProdMgmt/Ticket#界面行为)

### 关联视图
  * [工单(ticketEditView)](app/view/ticketEditView)
  * [工单(ticketRedirectView)](app/view/ticketRedirectView)
  * [工单(tickettag_choose_view)](app/view/tickettag_choose_view)
  * [工单(ticketallocate_person_view)](app/view/ticketallocate_person_view)

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