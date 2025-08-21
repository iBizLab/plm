# 项目管理(project_archived_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [已归档_删除](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [已归档_激活](module/ProjMgmt/project#界面行为)

### 关联视图
  * [项目(project_edit_view)](app/view/project_edit_view)
  * [项目信息(project_show_edit_view)](app/view/project_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>