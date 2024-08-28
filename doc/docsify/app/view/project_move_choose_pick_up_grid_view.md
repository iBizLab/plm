# 项目(project_move_choose_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(project)](module/ProjMgmt/project/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目成员](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [更多设置](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [新开窗口（项目）](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [项目信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [编辑基本信息](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [回收站](module/ProjMgmt/project#界面行为)

### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [计算表格列行为状态(project)](module/ProjMgmt/project/uilogic/calc_column_action_state)

### 关联视图
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