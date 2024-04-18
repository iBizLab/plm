# 交付物(deliverable_target_grid_view)  <!-- {docsify-ignore-all} -->


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



### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [取消](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [添加控件显示](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [交付物下载](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [提交（表单中）](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [删除（表单中）](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [确定](module/Base/deliverable#界面行为)

### 关联界面逻辑
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [新建交付目标](module/Base/deliverable/uilogic/create_deliverable)

### 关联视图
  * [交付物(deliverable_edit_view)](app/view/deliverable_edit_view)
  * [交付物(deliverable_redirect_view)](app/view/deliverable_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>