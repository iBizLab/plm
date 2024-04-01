# 页面(article_pageshow_view_model)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;">
			<div style="height:40px;display: flex;align-items: center;justify-content: space-between;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="height:40px;"></el-skeleton-item>
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
		<el-tooltip content="编辑表单">
			<el-skeleton-item variant="p" style="height:300px"></el-skeleton-item>
		</el-tooltip>
	</template>
</el-skeleton>


## 控件
  * 列表(list)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)
  * DATAINFOBAR(datainfobar)
  * 编辑表单(form)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/Article_page) : [另存为模板](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除评论](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [评论](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [取消收藏](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [关闭](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [打开界面编辑页](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [收藏](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [发送评论（知识库）](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [回复](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [编辑](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [清空评论](module/Wiki/Article_page#界面行为)

### 关联视图
  * [页面(article_pageedit_view_document)](app/view/article_pageedit_view_document)
  * [另存为模板(stencilsave_option_view)](app/view/stencilsave_option_view)

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