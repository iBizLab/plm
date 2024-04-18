# 产品(product_main_view)  <!-- {docsify-ignore-all} -->


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

#### 分页导航面板(tabexppanel)

#### 工具栏(toolbar)



### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品信息](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [编辑基本信息](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [设置星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [回收站](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品成员](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [更多设置](module/ProdMgmt/product#界面行为)

### 关联视图
  * [需求(idea_recycle_grid_view)](app/view/idea_recycle_grid_view)
  * [高级设置(product_advanced_setting_edit_view)](app/view/product_advanced_setting_edit_view)
  * [基本信息(product_base_information_edit_view)](app/view/product_base_information_edit_view)
  * [产品详情配置(product_details_setting_view)](app/view/product_details_setting_view)
  * [产品成员(product_member_config_grid_view)](app/view/product_member_config_grid_view)
  * [产品(product_recover_tab_exp_view)](app/view/product_recover_tab_exp_view)
  * [产品配置(product_setting_view)](app/view/product_setting_view)
  * [产品信息(product_show_eidt_view)](app/view/product_show_eidt_view)
  * [标签管理(product_tag_tag_grid_view)](app/view/product_tag_tag_grid_view)
  * [工单(ticket_recover_grid_view)](app/view/ticket_recover_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>