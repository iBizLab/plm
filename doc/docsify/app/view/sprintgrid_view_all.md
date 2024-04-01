# 全部迭代(sprintgrid_view_all)  <!-- {docsify-ignore-all} -->




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
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 数据表格(grid)
  * 工具栏(toolbar)
  * 搜索栏(searchbar)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [编辑](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [表格界面_新建操作](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [结束迭代](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [删除](module/ProjMgmt/Sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/Sprint) : [开始迭代](module/ProjMgmt/Sprint#界面行为)

### 关联视图
  * [新建迭代(sprintquick_create_view)](app/view/sprintquick_create_view)
  * [确认完成(sprintconfirm_finish_view)](app/view/sprintconfirm_finish_view)
  * [全部工作项(work_itemgrid_view_sprint)](app/view/work_itemgrid_view_sprint)
  * [迭代(sprintmain_view)](app/view/sprintmain_view)
  * [编辑迭代(sprintupdate_view)](app/view/sprintupdate_view)

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