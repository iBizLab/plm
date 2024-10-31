# 全部基线(baseline_library_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线(BASELINE)](module/Base/baseline) : [设立完成（测试库）](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [表格界面_新建操作_子数据](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [编辑基线（测试库）](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [删除基线](module/Base/baseline#界面行为)

### 关联界面逻辑
  * [基线(BASELINE)](module/Base/baseline) : [计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)

### 关联视图
  * [新建基线(baseline_library_create_view)](app/view/baseline_library_create_view)
  * [基线(baseline_library_main_view)](app/view/baseline_library_main_view)
  * [编辑基线(baseline_library_update_view)](app/view/baseline_library_update_view)
  * [基线对比(baseline_test_case_comparison_grid_view)](app/view/baseline_test_case_comparison_grid_view)
  * [用例(baseline_test_case_relation_grid_view)](app/view/baseline_test_case_relation_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>