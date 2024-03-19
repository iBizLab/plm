# 产品成员(product_membergrid_view_config)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 数据表格(grid)
  * 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member) : [表格界面_新建操作](module/ProdMgmt/Product_member#界面行为)
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member) : [表格界面_删除操作](module/ProdMgmt/Product_member#界面行为)
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member) : [移除成员](module/ProdMgmt/Product_member#界面行为)

### 关联视图
  * [产品成员(product_memberEditView)](app/view/product_memberEditView)
  * [选择成员(userm_pick_up_view2)](app/view/userm_pick_up_view2)
  * [产品成员(product_memberRedirectView)](app/view/product_memberRedirectView)

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