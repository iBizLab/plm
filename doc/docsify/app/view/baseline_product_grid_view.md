# 全部基线(baseline_product_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [基线(BASELINE)](module/Base/baseline) : [删除](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [表格界面_新建操作_子数据](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [设立完成（产品）](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [编辑基线（产品）](module/Base/baseline#界面行为)

### 关联界面逻辑
  * [基线(BASELINE)](module/Base/baseline) : [计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)

### 关联视图
  * [基线对比(baseline_idea_comparison_grid_view)](app/view/baseline_idea_comparison_grid_view)
  * [需求(baseline_idea_relation_grid_view)](app/view/baseline_idea_relation_grid_view)
  * [新建基线(baseline_product_create_view)](app/view/baseline_product_create_view)
  * [基线(baseline_product_main_view)](app/view/baseline_product_main_view)
  * [编辑基线(baseline_product_update_view)](app/view/baseline_product_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>