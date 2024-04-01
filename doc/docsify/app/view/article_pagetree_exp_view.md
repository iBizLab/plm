# 空间页面(article_pagetree_exp_view)  <!-- {docsify-ignore-all} -->




<el-skeleton style="width:60%">
	<template #template>
		<div style="padding-bottom: 5px;display: flex;">
			<div style="display: flex;align-items: center;justify-content: space-between;flex-direction: column;">
				<el-tooltip content="页面标题">
					<el-skeleton-item variant="text" style="width:180px;height:40px;"></el-skeleton-item>
				</el-tooltip>
				<el-tooltip content="树视图">
					<el-skeleton-item variant="text" style="margin-top: 10px;width:180px;height:300px;"></el-skeleton-item>
				</el-tooltip>
			</div>
			<el-tooltip content="导航区域">
				<el-skeleton-item variant="p" style="margin-left: 10px;height:350px"></el-skeleton-item>
			</el-tooltip>
		</div>
	</template>
</el-skeleton>


## 控件
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)
  * 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [快速新建文档](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [新建分组](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [从模板新建](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面模板(STENCIL)](module/Wiki/Stencil) : [使用此模板](module/Wiki/Stencil#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [树界面_刷新全部操作](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)

### 关联视图
  * [页面模板(stenciledit_view_show)](app/view/stenciledit_view_show)
  * [模板中心(stencillist_exp_view)](app/view/stencillist_exp_view)
  * [页面(article_pageshow_view)](app/view/article_pageshow_view)
  * [新建页面(article_pagecreate_view_document)](app/view/article_pagecreate_view_document)

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