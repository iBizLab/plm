# 自动化规则(PSDELogicflow_grid_view)  <!-- {docsify-ignore-all} -->




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
  * 工具栏(toolbar)
  * 搜索表单(searchform)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [新建计划规则](module/extension/PSDELogic#界面行为)
  * [扩展日志(EXTEND_LOG)](module/Base/Extend_log) : [打开详情信息](module/Base/Extend_log#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [新建自动化规则](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [打开配置视图](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [表格界面_删除操作](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [应用扩展模型](module/extension/PSDELogic#界面行为)

### 关联视图
  * [自动化规则(PSDELogicflow_main_view)](app/view/PSDELogicflow_main_view)
  * [实体处理逻辑(PSDELogicquick_cfg_view)](app/view/PSDELogicquick_cfg_view)
  * [自动化规则看板(PSDELogicflow_panel_view)](app/view/PSDELogicflow_panel_view)
  * [实体处理逻辑(PSDELogicquick_create_view_schedule)](app/view/PSDELogicquick_create_view_schedule)
  * [日志信息(extend_loginfo_view)](app/view/extend_loginfo_view)
  * [实体处理逻辑(PSDELogicLogicDesign)](app/view/PSDELogicLogicDesign)
  * [实体处理逻辑(PSDELogicEditView)](app/view/PSDELogicEditView)
  * [实体处理逻辑(PSDELogicquick_create_view_auto_flow)](app/view/PSDELogicquick_create_view_auto_flow)

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