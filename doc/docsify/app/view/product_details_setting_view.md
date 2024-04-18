# 产品详情配置(product_details_setting_view)  <!-- {docsify-ignore-all} -->


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
  * [需求(idea_recycle_grid_view)](app/view/idea_recycle_grid_view)
  * [高级设置(product_advanced_setting_edit_view)](app/view/product_advanced_setting_edit_view)
  * [基本信息(product_base_information_edit_view)](app/view/product_base_information_edit_view)
  * [产品成员(product_member_config_grid_view)](app/view/product_member_config_grid_view)
  * [产品(product_recover_tab_exp_view)](app/view/product_recover_tab_exp_view)
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