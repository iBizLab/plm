# 知识管理(space_tree_exp_view)  <!-- {docsify-ignore-all} -->


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


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [打开空间配置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间主页面](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)

### 关联视图
  * [我的收藏(article_page_my_favorite_page_grid_view)](app/view/article_page_my_favorite_page_grid_view)
  * [最近访问(recent_recent_page_grid_view)](app/view/recent_recent_page_grid_view)
  * [全部空间(space_all_grid_view)](app/view/space_all_grid_view)
  * [全部空间(space_category_grid_view)](app/view/space_category_grid_view)
  * [配置中心(space_config_tree_exp_view)](app/view/space_config_tree_exp_view)
  * [空间(space_index_view)](app/view/space_index_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>