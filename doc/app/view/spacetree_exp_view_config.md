# 配置中心(spacetree_exp_view_config)  <!-- {docsify-ignore-all} -->




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
  * 树视图导航栏(treeexpbar)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [页面模板(stencilall_grid_view)](app/view/stencilall_grid_view)
  * [空间管理(spaceis_deleted_grid_view)](app/view/spaceis_deleted_grid_view)
  * [空间管理(spacetab_exp_view)](app/view/spacetab_exp_view)
  * [空间管理(spaceis_running_grid_view)](app/view/spaceis_running_grid_view)
  * [空间分类(spacecategory_tree__exp_view)](app/view/spacecategory_tree__exp_view)
  * [空间管理(spaceis_archived_grid_view)](app/view/spaceis_archived_grid_view)

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