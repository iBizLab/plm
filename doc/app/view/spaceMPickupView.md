# 空间(spaceMPickupView)  <!-- {docsify-ignore-all} -->

系统自动添加


<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;display: flex;">
			<el-tooltip content="数据选择表格">
				<el-skeleton-item variant="p" style="margin-left: 10px;height:350px"></el-skeleton-item>
			</el-tooltip>
			<el-skeleton style="width:100px;margin-left: 10px;display: flex;align-items: center;flex-direction: column;justify-content:center;">
				<template #template>
					<el-tooltip content="选择操作">
						<div style="">
							<el-skeleton-item variant="text" style="height:40px;width:60px"></el-skeleton-item>
							<el-skeleton-item variant="text" style="margin-top: 10px;height:40px;width:60px"></el-skeleton-item>
						</div>
					</el-tooltip>
				</template>
			</el-skeleton>
			<el-tooltip content="已选数据">
				<el-skeleton-item variant="p" style="margin-left: 10px;width:300px;height:350px"></el-skeleton-item>
			</el-tooltip>
		</div>
		<el-skeleton style="display: flex;align-items: center;justify-content:end">
			<template #template>
				<div style="">
					<el-tooltip content="确认">
						<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
					</el-tooltip>
					<el-tooltip content="取消">
						<el-skeleton-item variant="text" style="margin-left: 10px;height:40px;width:80px"></el-skeleton-item>
					</el-tooltip>
				</div>
			</template>
		</el-skeleton>
	</template>
</el-skeleton>


## 控件
  * 列表(simplelist)
  * 选择视图面板(pickupviewpanel)
  * CAPTIONBAR(captionbar)


### 关联视图
  * [空间(spacePickupGridView)](app/view/spacePickupGridView)

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