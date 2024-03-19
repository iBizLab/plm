# 测试库成员(library_membergrid_view_assigned)  <!-- {docsify-ignore-all} -->




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
  * 搜索栏(searchbar)
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 工具栏(toolbar)

## 视图界面逻辑
  * [新建测试库默认临时成员](module/TestMgmt/Library_member/uilogic/create_default_temp_members)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) : [删除成员](module/TestMgmt/Library_member#界面行为)
  * [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) : [表格界面_删除操作](module/TestMgmt/Library_member#界面行为)
  * [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) : [表格界面_新建操作](module/TestMgmt/Library_member#界面行为)

### 关联界面逻辑
  * [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) : [新建测试库默认临时成员](module/TestMgmt/Library_member/uilogic/create_default_temp_members)

### 关联视图
  * [选择成员(userm_pick_up_view2)](app/view/userm_pick_up_view2)
  * [测试库成员(library_memberRedirectView)](app/view/library_memberRedirectView)
  * [测试库成员(library_memberEditView)](app/view/library_memberEditView)

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