# 组织空间(spacegrid_view_org)  <!-- {docsify-ignore-all} -->




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
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 工具栏(toolbar)
  * 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/Space) : [表格界面_新建空间](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [设置星标](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [查看空间信息](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [编辑空间基本信息](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [查看空间成员](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [回收站](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [更多设置](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [新开窗口（空间）](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [移出分类](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [取消星标](module/Wiki/Space#界面行为)

### 关联视图
  * [空间(spaceRedirectView)](app/view/spaceRedirectView)
  * [基本信息(spaceedit_view_base_info)](app/view/spaceedit_view_base_info)
  * [空间成员(space_membergrid_view_config)](app/view/space_membergrid_view_config)
  * [数据统计(article_pagestatistical_grid_view)](app/view/article_pagestatistical_grid_view)
  * [回收站(article_pagerecycle_grid_view)](app/view/article_pagerecycle_grid_view)
  * [页面模板(stencilspace_all_grid_view)](app/view/stencilspace_all_grid_view)
  * [新建空间(spacecreate_wizard_view)](app/view/spacecreate_wizard_view)
  * [空间配置(spacedetails_setting_view)](app/view/spacedetails_setting_view)
  * [高级设置(spaceadvanced_setting_view)](app/view/spaceadvanced_setting_view)
  * [空间信息(spaceinfo_view)](app/view/spaceinfo_view)

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