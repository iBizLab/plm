# 客户(customermain_view)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [发送评论](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [清空评论](module/ProdMgmt/Customer#界面行为)

### 关联视图
  * [工单(ticketcustomer_re_ticket_grid_view)](app/view/ticketcustomer_re_ticket_grid_view)
  * [评论(commentlist_view)](app/view/commentlist_view)
  * [客户(customerPickupTreeView)](app/view/customerPickupTreeView)

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