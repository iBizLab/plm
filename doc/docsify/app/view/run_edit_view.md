# 执行用例(run_edit_view)  <!-- {docsify-ignore-all} -->


<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
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
		<el-tooltip content="编辑表单">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
#### CAPTIONBAR(captionbar)

#### DATAINFOBAR(datainfobar)

#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)* `null` : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)


### 关联界面逻辑
  * [执行用例(RUN)](module/TestMgmt/run) : [获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)
  * [执行用例(RUN)](module/TestMgmt/run) : [打开关联用例](module/TestMgmt/run/uilogic/open_re_run)

### 关联视图
  * [活动历史列表(activity_history_list_view)](app/view/activity_history_list_view)
  * [评论(comment_list_view)](app/view/comment_list_view)
  * [需求(idea_run_re_idea_grid_view)](app/view/idea_run_re_idea_grid_view)
  * [执行用例结果附件(run_attachment_grid_view)](app/view/run_attachment_grid_view)
  * [执行用例(run_run_re_run_history_edit_view)](app/view/run_run_re_run_history_edit_view)
  * [用例(test_case_only_attchment_view)](app/view/test_case_only_attchment_view)
  * [测试计划(test_plan_pick_up_view)](app/view/test_plan_pick_up_view)
  * [工作项(work_item_run_re_work_item_bug_grid_view)](app/view/work_item_run_re_work_item_bug_grid_view)
  * [工作项(work_item_run_re_work_item_grid_view)](app/view/work_item_run_re_work_item_grid_view)
  * [工时(workload_run_list_view)](app/view/workload_run_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>