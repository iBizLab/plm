# 效能度量(insight_view_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [返回](module/Insight/insight_view#界面行为)

### 关联视图
  * [系统模板仪表盘(dyna_dashboard_system_board_grid_view)](app/view/dyna_dashboard_system_board_grid_view)
  * [系统预置报表(insight_report_system_report_grid_view)](app/view/insight_report_system_report_grid_view)
  * [效能度量(insight_view_deleted_grid_view)](app/view/insight_view_deleted_grid_view)
  * [效能度量(insight_view_in_progress_grid_view)](app/view/insight_view_in_progress_grid_view)
  * [效能度量(insight_view_management_tab_exp_view)](app/view/insight_view_management_tab_exp_view)
  * [数据管理(insight_view_tab_exp_view)](app/view/insight_view_tab_exp_view)
  * [立方体数据管理(ps_sys_bi_cube_tree_exp_view)](app/view/ps_sys_bi_cube_tree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>