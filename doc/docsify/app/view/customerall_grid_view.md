# 全部客户(customerall_grid_view)  <!-- {docsify-ignore-all} -->




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
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)
  * 搜索栏(searchbar)
  * 数据表格(grid)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [表格界面_导出操作（Excel）](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [表格界面_新建操作](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [删除](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [添加至类别（多选）](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [表格界面_数据导入栏](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [表格界面_删除操作](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [添加至类别（多选）](module/ProdMgmt/Customer#界面行为)

### 关联视图
  * [选择类别(customeradd_categorys_view)](app/view/customeradd_categorys_view)
  * [新建客户(customerquick_create_view)](app/view/customerquick_create_view)
  * [客户(customermain_view)](app/view/customermain_view)

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