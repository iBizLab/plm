# 产品管理(producttree_exp_view)  <!-- {docsify-ignore-all} -->




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


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [取消星标](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [打开产品首页视图](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [打开产品配置](module/ProdMgmt/Product#界面行为)

### 关联视图
  * [全部产品(productgrid_view_all)](app/view/productgrid_view_all)
  * [产品(productindex_view)](app/view/productindex_view)
  * [产品(productEditView)](app/view/productEditView)
  * [产品中心配置(producttree_exp_view_config)](app/view/producttree_exp_view_config)

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