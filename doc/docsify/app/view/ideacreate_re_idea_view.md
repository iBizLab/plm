# 需求(ideacreate_re_idea_view)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
				</el-tooltip>
			</div>
		</div>
		<el-tooltip content="编辑表单">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
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
  * 编辑表单(form)
  * CAPTIONBAR(captionbar)
  * DATAINFOBAR(datainfobar)


### 关联界面行为
  * [需求(IDEA)](module/ProdMgmt/Idea) : [视图_确定](module/ProdMgmt/Idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/Idea) : [视图_取消](module/ProdMgmt/Idea#界面行为)

### 关联视图
  * [产品(productPickupView)](app/view/productPickupView)
  * [需求选择树视图(ideaPickupTreeView)](app/view/ideaPickupTreeView)

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