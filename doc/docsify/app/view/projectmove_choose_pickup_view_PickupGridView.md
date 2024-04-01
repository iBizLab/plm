# 项目(projectmove_choose_pickup_view_PickupGridView)  <!-- {docsify-ignore-all} -->

系统自动添加




## 控件
  * 搜索栏(searchbar)
  * 数据表格(grid)
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/Project) : [新开窗口（项目）](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [取消星标](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [项目信息](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [更多设置](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [回收站](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [设置星标](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [项目成员](module/ProjMgmt/Project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/Project) : [编辑基本信息](module/ProjMgmt/Project#界面行为)

### 关联视图
  * [项目设置(projectsetting_view)](app/view/projectsetting_view)
  * [自动化规则(PSDELogicflow_grid_view)](app/view/PSDELogicflow_grid_view)
  * [回收站(work_itemrecycle_bin_grid_iew)](app/view/work_itemrecycle_bin_grid_iew)
  * [项目信息(projectshow_edit_view)](app/view/projectshow_edit_view)
  * [基本信息(projectedit_view_base_information)](app/view/projectedit_view_base_information)
  * [项目成员(project_membergrid_view_config)](app/view/project_membergrid_view_config)
  * [高级设置(projectedit_view_advanced_setting)](app/view/projectedit_view_advanced_setting)
  * [工作项类型(work_item_typesetting_view_scrum)](app/view/work_item_typesetting_view_scrum)

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