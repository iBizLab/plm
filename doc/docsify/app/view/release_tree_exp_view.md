# 发布模块(release_tree_exp_view)  <!-- {docsify-ignore-all} -->


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
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建类别](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [树界面_刷新全部操作](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [新建分组](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)

### 关联视图
  * [全部发布(release_all_grid_view)](app/view/release_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>