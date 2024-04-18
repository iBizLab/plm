# 空间(space_product_re_tree_exp_view)  <!-- {docsify-ignore-all} -->


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
#### CAPTIONBAR(captionbar)

#### 搜索栏(searchbar)

#### 树视图导航栏(treeexpbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [取消关联（其他实体关联）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [树界面_刷新全部操作](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [项目关联空间](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [产品关联空间](module/Wiki/space#界面行为)

### 关联视图
  * [页面(article_page_re_show_view)](app/view/article_page_re_show_view)
  * [关联空间(space_product_re_space_choose_option_view)](app/view/space_product_re_space_choose_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>