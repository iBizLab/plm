# 全部空间(space_all_grid_view)  <!-- {docsify-ignore-all} -->


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
#### CAPTIONBAR(captionbar)

#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态](module/Wiki/space/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)

#### 搜索表单(searchform)

#### 工具栏(toolbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [回收站](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间配置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间主页面](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [快速新建文档](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间导航页](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [查看空间成员](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [编辑空间基本信息](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间信息](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [设置星标](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面模板(STENCIL)](module/Wiki/stencil) : [使用此模板](module/Wiki/stencil#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建分组](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [回收站](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [更多设置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [移出分类](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间成员](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [树界面_刷新全部操作](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [新开窗口（空间）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [回收站](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [从模板新建](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [切换草稿](module/Wiki/article_page#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间成员](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [更多设置](module/Wiki/space#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)

### 关联界面逻辑
  * [空间(SPACE)](module/Wiki/space) : [计算表格列行为状态](module/Wiki/space/uilogic/calc_column_action_state)

### 关联视图
  * [草稿(article_page_draft_show_edit_view)](app/view/article_page_draft_show_edit_view)
  * [我的收藏(article_page_my_favorite_page_grid_view)](app/view/article_page_my_favorite_page_grid_view)
  * [新建页面(article_page_qucik_create_view)](app/view/article_page_qucik_create_view)
  * [页面(article_page_show_view)](app/view/article_page_show_view)
  * [空间页面(article_page_tree_exp_view)](app/view/article_page_tree_exp_view)
  * [最近访问(recent_recent_page_grid_view)](app/view/recent_recent_page_grid_view)
  * [全部空间(space_category_grid_view)](app/view/space_category_grid_view)
  * [配置中心(space_config_tree_exp_view)](app/view/space_config_tree_exp_view)
  * [新建空间(space_create_wizard_view)](app/view/space_create_wizard_view)
  * [空间(space_index_view)](app/view/space_index_view)
  * [空间信息(space_info_view)](app/view/space_info_view)
  * [空间配置(space_setting_view)](app/view/space_setting_view)
  * [知识管理(space_tree_exp_view)](app/view/space_tree_exp_view)
  * [模板中心(stencil_list_exp_view)](app/view/stencil_list_exp_view)
  * [页面模板(stencil_show_edit_view)](app/view/stencil_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>