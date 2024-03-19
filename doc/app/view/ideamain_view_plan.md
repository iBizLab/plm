# 计划内容(ideamain_view_plan)  <!-- {docsify-ignore-all} -->




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
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)
  * 数据表格(grid)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/Idea) : [添加需求（排期）](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [取消关联（计划批操作）](module/ProdMgmt/Idea#界面行为)

### 关联视图
  * [需求(ideaEditView)](app/view/ideaEditView)
  * [需求(ideamain_view)](app/view/ideamain_view)
  * [选择需求(ideaproduct_plan_re_idea_view2)](app/view/ideaproduct_plan_re_idea_view2)

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