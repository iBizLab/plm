# 附件(attachmentrun_re_attachment_grid_view)  <!-- {docsify-ignore-all} -->




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
  * 搜索表单(searchform)
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)


### 关联界面行为
  * [附件(ATTACHMENT)](module/Base/Attachment) : [附件删除（表格）](module/Base/Attachment#界面行为)
  * [附件(ATTACHMENT)](module/Base/Attachment) : [添加附件数据（表格）](module/Base/Attachment#界面行为)
  * [附件(ATTACHMENT)](module/Base/Attachment) : [附件下载](module/Base/Attachment#界面行为)

### 关联视图
  * [附件(attachmentEditView)](app/view/attachmentEditView)
  * [附件(attachmentRedirectView)](app/view/attachmentRedirectView)

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