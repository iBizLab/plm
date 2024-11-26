# 项目状态(project_state_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * [系统工作项状态隐藏操作列](module/ProjMgmt/project_state/uilogic/cal_is_system)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state) : [表格界面_新建操作](module/ProjMgmt/project_state#界面行为)
  * [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state) : [删除项目状态](module/ProjMgmt/project_state#界面行为)
  * [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state) : [编辑项目状态](module/ProjMgmt/project_state#界面行为)

### 关联界面逻辑
  * [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state) : [系统工作项状态隐藏操作列](module/ProjMgmt/project_state/uilogic/cal_is_system)

### 关联视图
  * [项目状态(project_state_quick_create_option_view)](app/view/project_state_quick_create_option_view)
  * [项目状态(project_state_redirect_view)](app/view/project_state_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>