# 产品详情配置(productdetails_setting_view)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [标签管理(product_taggrid_view_tag)](app/view/product_taggrid_view_tag)
  * [高级设置(productedit_view_advanced_setting)](app/view/productedit_view_advanced_setting)
  * [产品成员(product_membergrid_view_config)](app/view/product_membergrid_view_config)
  * [基本信息(productedit_view_base_information)](app/view/productedit_view_base_information)
  * [产品(productrecover_tab_exp_view)](app/view/productrecover_tab_exp_view)
  * [工单(ticketrecover_grid_view)](app/view/ticketrecover_grid_view)
  * [需求(idearecycle_bin_grid_view)](app/view/idearecycle_bin_grid_view)

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