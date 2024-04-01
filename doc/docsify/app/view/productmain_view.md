# 产品(productmain_view)  <!-- {docsify-ignore-all} -->




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
  * 工具栏(toolbar)
  * 分页导航面板(tabexppanel)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [回收站](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [设置星标](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [产品成员](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [编辑基本信息](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [产品信息](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [取消星标](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [更多设置](module/ProdMgmt/Product#界面行为)

### 关联视图
  * [标签管理(product_taggrid_view_tag)](app/view/product_taggrid_view_tag)
  * [高级设置(productedit_view_advanced_setting)](app/view/productedit_view_advanced_setting)
  * [产品成员(product_membergrid_view_config)](app/view/product_membergrid_view_config)
  * [产品信息(productshow_eidt_view)](app/view/productshow_eidt_view)
  * [基本信息(productedit_view_base_information)](app/view/productedit_view_base_information)
  * [产品(productrecover_tab_exp_view)](app/view/productrecover_tab_exp_view)
  * [工单(ticketrecover_grid_view)](app/view/ticketrecover_grid_view)
  * [产品详情配置(productdetails_setting_view)](app/view/productdetails_setting_view)
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