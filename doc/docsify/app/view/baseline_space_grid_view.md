# 全部基线(baseline_space_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [基线(BASELINE)](module/Base/baseline) : [表格界面_导出操作（Excel）](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [删除基线](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [设立完成（空间）](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [表格界面_新建操作](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [编辑基线（空间）](module/Base/baseline#界面行为)

### 关联界面逻辑
  * [基线(BASELINE)](module/Base/baseline) : [计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)

### 关联视图
  * [基线页面(baseline_page_comparison_grid_view)](app/view/baseline_page_comparison_grid_view)
  * [基线页面(baseline_page_relation_grid_view)](app/view/baseline_page_relation_grid_view)
  * [新建基线(baseline_space_create_view)](app/view/baseline_space_create_view)
  * [基线(baseline_space_main_view)](app/view/baseline_space_main_view)
  * [编辑基线(baseline_space_update_view)](app/view/baseline_space_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>