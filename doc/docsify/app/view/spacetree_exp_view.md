# 知识管理(spacetree_exp_view)  <!-- {docsify-ignore-all} -->




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


### 关联界面行为
  * [空间(SPACE)](module/Wiki/Space) : [打开空间主页面](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [打开空间配置](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [取消星标](module/Wiki/Space#界面行为)

### 关联视图
  * [空间(spaceindex_view)](app/view/spaceindex_view)
  * [全部空间(spacegrid_view_all)](app/view/spacegrid_view_all)
  * [我的收藏(article_pagemy_favorite_page_grid_view)](app/view/article_pagemy_favorite_page_grid_view)
  * [最近访问(recentrecent_page_grid_view)](app/view/recentrecent_page_grid_view)
  * [全部空间(spacegrid_view_category)](app/view/spacegrid_view_category)
  * [配置中心(spacetree_exp_view_config)](app/view/spacetree_exp_view_config)

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