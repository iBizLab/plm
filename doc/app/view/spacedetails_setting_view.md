# 空间配置(spacedetails_setting_view)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [基本信息(spaceedit_view_base_info)](app/view/spaceedit_view_base_info)
  * [空间成员(space_membergrid_view_config)](app/view/space_membergrid_view_config)
  * [数据统计(article_pagestatistical_grid_view)](app/view/article_pagestatistical_grid_view)
  * [回收站(article_pagerecycle_grid_view)](app/view/article_pagerecycle_grid_view)
  * [页面模板(stencilspace_all_grid_view)](app/view/stencilspace_all_grid_view)
  * [高级设置(spaceadvanced_setting_view)](app/view/spaceadvanced_setting_view)

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