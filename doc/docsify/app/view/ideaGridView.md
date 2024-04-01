# 需求(ideaGridView)  <!-- {docsify-ignore-all} -->

系统自动添加


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
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 数据表格(grid)
  * 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/Idea) : [变更需求状态](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [需求移动](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [激活](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [删除](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [需求排期](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [需求复制](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [需求归档](module/ProdMgmt/Idea#界面行为)

### 关联视图
  * [移动需求(ideaidea_move)](app/view/ideaidea_move)
  * [需求(ideaEditView)](app/view/ideaEditView)
  * [需求(ideaidea_re_plan_view)](app/view/ideaidea_re_plan_view)
  * [需求(ideachange_state_view)](app/view/ideachange_state_view)
  * [复制需求(ideaidea_copy)](app/view/ideaidea_copy)

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