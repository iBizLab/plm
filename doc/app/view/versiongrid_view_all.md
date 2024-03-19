# 全部发布(versiongrid_view_all)  <!-- {docsify-ignore-all} -->




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
  * 搜索栏(searchbar)
  * 工具栏(toolbar)
  * 数据表格(grid)
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)


### 关联界面行为
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [编辑](module/ProjMgmt/Version#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [删除](module/ProjMgmt/Version#界面行为)
  * [版本（temp）(VERSION)](module/ProjMgmt/Version) : [表格界面_新建操作](module/ProjMgmt/Version#界面行为)

### 关联视图
  * [新建发布(versionquick_create_view)](app/view/versionquick_create_view)
  * [全部工作项(work_itemgrid_view_version)](app/view/work_itemgrid_view_version)
  * [版本（temp）(versionmain_view)](app/view/versionmain_view)
  * [编辑发布(versionupdate_view)](app/view/versionupdate_view)

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