# 自动化规则(PSDELogicflow_main_view)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-skeleton style="width:250px;">
					<template #template>
						<el-tooltip content="分页栏">
							<div style="display: flex;align-items: center;justify-content:end">
								<el-skeleton-item variant="text" style="height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
								<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
							</div>
						</el-tooltip>
					</template>
				</el-skeleton>
			</div>
		</div>
		<el-tooltip content="导航区占位">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
  * CAPTIONBAR(captionbar)
  * 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [扩展日志(EXTEND_LOG)](module/Base/Extend_log) : [打开详情信息](module/Base/Extend_log#界面行为)

### 关联视图
  * [自动化规则看板(PSDELogicflow_panel_view)](app/view/PSDELogicflow_panel_view)
  * [日志信息(extend_loginfo_view)](app/view/extend_loginfo_view)
  * [实体处理逻辑(PSDELogicLogicDesign)](app/view/PSDELogicLogicDesign)

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