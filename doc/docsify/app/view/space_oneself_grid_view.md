# 个人空间(space_oneself_grid_view)  <!-- {docsify-ignore-all} -->


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
  * [空间(SPACE)](module/Wiki/space) : [更多设置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [回收站](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [新开窗口（空间）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间成员](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [编辑空间基本信息](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [表格界面_新建空间](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间信息](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [设置星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [移出分类](module/Wiki/space#界面行为)

### 关联界面逻辑
  * [空间(SPACE)](module/Wiki/space) : [计算表格列行为状态](module/Wiki/space/uilogic/calc_column_action_state)

### 关联视图
  * [新建空间(space_create_wizard_view)](app/view/space_create_wizard_view)
  * [空间信息(space_info_view)](app/view/space_info_view)
  * [空间(space_redirect_view)](app/view/space_redirect_view)
  * [空间配置(space_setting_view)](app/view/space_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>