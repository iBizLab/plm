# 全部用例(run_all_grid_view)  <!-- {docsify-ignore-all} -->


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

#### 搜索栏(searchbar)

#### 工具栏(toolbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [执行用例(RUN)](module/TestMgmt/run) : [设置执行结果](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [选择用例](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [移出](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [设置执行人](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [重置为未测](module/TestMgmt/run#界面行为)
  * [执行用例(RUN)](module/TestMgmt/run) : [用户实体界面行为1](module/TestMgmt/run#界面行为)

### 关联视图
  * [执行用例(run_main_view)](app/view/run_main_view)
  * [执行用例(run_set_run_status_option_view)](app/view/run_set_run_status_option_view)
  * [执行人(run_setting_actual_executor_view)](app/view/run_setting_actual_executor_view)
  * [用例(test_case_mpick_up_view)](app/view/test_case_mpick_up_view)
  * [用例(test_case_test_plan_re_test_case_prickup_view)](app/view/test_case_test_plan_re_test_case_prickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>