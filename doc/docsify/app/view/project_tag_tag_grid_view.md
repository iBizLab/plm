# 标签管理(project_tag_tag_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag) : [表格界面_新建操作](module/ProjMgmt/project_tag#界面行为)
  * [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag) : [删除标签](module/ProjMgmt/project_tag#界面行为)
  * [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag) : [编辑标签](module/ProjMgmt/project_tag#界面行为)

### 关联视图
  * [新建标签(project_tag_new_option_view)](app/view/project_tag_new_option_view)
  * [编辑标签(project_tag_option_view)](app/view/project_tag_option_view)
  * [确认删除(project_tag_project_tag_confirm_remove_view)](app/view/project_tag_project_tag_confirm_remove_view)
  * [项目标签(project_tag_redirect_view)](app/view/project_tag_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>