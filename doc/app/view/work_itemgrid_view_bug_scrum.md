# 全部缺陷(work_itemgrid_view_bug_scrum)  <!-- {docsify-ignore-all} -->




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
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 数据表格(grid)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移动](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [激活](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [变更状态](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [关联工作项](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [变更父工作项](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [归档](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [删除](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移入迭代](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [分配负责人](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [复制工作项](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移入发布](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [表格界面_导出操作（Excel）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [归档](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建缺陷（scrum）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [删除](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [修改时间](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [界面行为支持获取编辑列](module/ProjMgmt/Work_item#界面行为)

### 关联视图
  * [项目发布(releasepick_up_view)](app/view/releasepick_up_view)
  * [迭代(sprintpick_up_view)](app/view/sprintpick_up_view)
  * [工作项(work_itemchange_time_view)](app/view/work_itemchange_time_view)
  * [复制工作项(work_itemcopy_view)](app/view/work_itemcopy_view)
  * [移动工作项(work_itemmove_view)](app/view/work_itemmove_view)
  * [工作项(work_itemmain_view)](app/view/work_itemmain_view)
  * [工作项(work_itemre_self_mpickup_view)](app/view/work_itemre_self_mpickup_view)
  * [新建缺陷(work_itemquick_create_view_bug)](app/view/work_itemquick_create_view_bug)
  * [选择工作项(work_itemparent_pick_up_view)](app/view/work_itemparent_pick_up_view)
  * [新建工作项(work_itemquick_create_view)](app/view/work_itemquick_create_view)
  * [工作项(work_itemchange_assignee_view)](app/view/work_itemchange_assignee_view)
  * [工作项(work_itemchange_state_view)](app/view/work_itemchange_state_view)

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