# 测试库(libraryPickupGridView)  <!-- {docsify-ignore-all} -->

系统自动添加




## 控件
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 数据表格(grid)
  * 搜索栏(searchbar)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [测试库成员](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [取消星标](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [更多设置](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [回收站](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [新开窗口（测试库）](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [测试库信息](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [编辑基本信息](module/TestMgmt/Library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/Library) : [设置星标](module/TestMgmt/Library#界面行为)

### 关联视图
  * [基本信息(libraryedit_view_base_info)](app/view/libraryedit_view_base_info)
  * [测试库信息(libraryshow_edit_view)](app/view/libraryshow_edit_view)
  * [回收站(test_caserecycle_grid_view)](app/view/test_caserecycle_grid_view)
  * [测试库成员(library_membergrid_view_config)](app/view/library_membergrid_view_config)
  * [高级设置(libraryedit_view_advanced_setting)](app/view/libraryedit_view_advanced_setting)
  * [测试库配置(librarytree_exp_view_details_setting)](app/view/librarytree_exp_view_details_setting)

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