# 测试库配置(library_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/library) : [返回](module/TestMgmt/library#界面行为)

### 关联视图
  * [组件设置(addon_setting_grid_view)](app/view/addon_setting_grid_view)
  * [评审配置(guideline_all_grid_view)](app/view/guideline_all_grid_view)
  * [测试库管理(library_archived_grid_view)](app/view/library_archived_grid_view)
  * [测试库管理(library_config_tab_exp_view)](app/view/library_config_tab_exp_view)
  * [测试库管理(library_deleted_grid_view)](app/view/library_deleted_grid_view)
  * [测试库管理(library_in_progress_grid_view)](app/view/library_in_progress_grid_view)
  * [实体属性(psde_field_global_test_case_grid_view)](app/view/psde_field_global_test_case_grid_view)
  * [用例(test_case_global_setting_tab_exp_view)](app/view/test_case_global_setting_tab_exp_view)
  * [用例(test_case_global_setting_view)](app/view/test_case_global_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>