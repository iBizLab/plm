# 全部计划(product_plangrid_view_all)  <!-- {docsify-ignore-all} -->




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
  * 数据表格(grid)
  * 搜索表单(searchform)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan) : [编辑](module/ProdMgmt/Product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan) : [删除](module/ProdMgmt/Product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan) : [表格界面_新建操作](module/ProdMgmt/Product_plan#界面行为)

### 关联视图
  * [新建计划(product_planquick_create_view)](app/view/product_planquick_create_view)
  * [计划内容(ideamain_view_plan)](app/view/ideamain_view_plan)
  * [编辑计划(product_planupdate_view)](app/view/product_planupdate_view)

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