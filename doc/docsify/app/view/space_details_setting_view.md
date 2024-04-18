# 空间配置(space_details_setting_view)  <!-- {docsify-ignore-all} -->


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
  * [回收站(article_page_recycle_grid_view)](app/view/article_page_recycle_grid_view)
  * [数据统计(article_page_statistical_grid_view)](app/view/article_page_statistical_grid_view)
  * [高级设置(space_advanced_setting_view)](app/view/space_advanced_setting_view)
  * [基本信息(space_base_info_edit_view)](app/view/space_base_info_edit_view)
  * [空间成员(space_member_config_grid_view)](app/view/space_member_config_grid_view)
  * [页面模板(stencil_space_all_grid_view)](app/view/stencil_space_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>