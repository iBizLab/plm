# 立方体数据管理(ps_sys_bi_cube_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [数据管理(insight_view_tab_exp_view)](app/view/insight_view_tab_exp_view)
  * [BI维度(ps_sys_bi_cube_dimension_all_grid_view)](app/view/ps_sys_bi_cube_dimension_all_grid_view)
  * [BI指标(ps_sys_bi_cube_measure_all_grid_view)](app/view/ps_sys_bi_cube_measure_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>