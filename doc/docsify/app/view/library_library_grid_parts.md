# 测试库列表(library_library_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库配置](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库主视图](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [打开测试库导航页](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [取消星标](module/TestMgmt/library#界面行为)

### 关联视图
  * [全部测试库(library_all_grid_view)](app/view/library_all_grid_view)
  * [测试库配置(library_config_tree_exp_view)](app/view/library_config_tree_exp_view)
  * [测试库(library_filter_tab_exp_view)](app/view/library_filter_tab_exp_view)
  * [测试库(library_index_view)](app/view/library_index_view)
  * [归档测试库(library_is_archived_grid_view)](app/view/library_is_archived_grid_view)
  * [组织测试库(library_org_grid_view)](app/view/library_org_grid_view)
  * [团队测试库(library_team_grid_view)](app/view/library_team_grid_view)
  * [测试管理(library_tree_exp_view)](app/view/library_tree_exp_view)
  * [进行中的(test_plan_in_progress_grid_view)](app/view/test_plan_in_progress_grid_view)
  * [我负责的(test_plan_my_assignee_grid_view)](app/view/test_plan_my_assignee_grid_view)
  * [我参与的(test_plan_my_part_grid_view)](app/view/test_plan_my_part_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>