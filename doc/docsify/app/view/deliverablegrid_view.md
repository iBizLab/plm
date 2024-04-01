# 交付物(deliverablegrid_view)  <!-- {docsify-ignore-all} -->




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
  * 数据表格(grid)
  * 搜索表单(searchform)
  * 工具栏(toolbar)
  * 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/Deliverable) : [删除](module/Base/Deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/Deliverable) : [新建交付目标](module/Base/Deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/Deliverable) : [交付物下载](module/Base/Deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/Deliverable) : [提交](module/Base/Deliverable#界面行为)

### 关联视图
  * [新建交付目标(deliverablequick_create_view)](app/view/deliverablequick_create_view)
  * [交付物(deliverableRedirectView)](app/view/deliverableRedirectView)
  * [交付物(deliverableEditView)](app/view/deliverableEditView)

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