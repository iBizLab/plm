# 工作台2(recent_index_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系栏(drbar)
#### 编辑表单(form)


### 关联界面行为
  * [最近访问(RECENT)](module/Base/recent) : [首页](module/Base/recent#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品配置](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品首页视图](module/ProdMgmt/product#界面行为)

### 关联视图
  * [关注(attention_tab_exp_view)](app/view/attention_tab_exp_view)
  * [查询结果(idea_idea_filter_grid_view)](app/view/idea_idea_filter_grid_view)
  * [需求(idea_my_assign_grid_view)](app/view/idea_my_assign_grid_view)
  * [需求(idea_my_attention_grid_view)](app/view/idea_my_attention_grid_view)
  * [全部产品(product_all_grid_view)](app/view/product_all_grid_view)
  * [产品中心配置(product_config_tree_exp_view)](app/view/product_config_tree_exp_view)
  * [产品(product_edit_view)](app/view/product_edit_view)
  * [产品(product_filter_tab_exp_view)](app/view/product_filter_tab_exp_view)
  * [产品(product_index_view)](app/view/product_index_view)
  * [归档产品(product_is_archived_grid_view)](app/view/product_is_archived_grid_view)
  * [组织产品(product_org_grid_view)](app/view/product_org_grid_view)
  * [团队产品(product_team_grid_view)](app/view/product_team_grid_view)
  * [产品管理(product_tree_exp_view)](app/view/product_tree_exp_view)
  * [仪表盘(recent_custom_dashboard_view)](app/view/recent_custom_dashboard_view)
  * [最近访问(recent_data_view)](app/view/recent_data_view)
  * [我负责的事项(recent_my_assignee_item_tap_exp_view)](app/view/recent_my_assignee_item_tap_exp_view)
  * [最近访问(recent_my_created_tab_exp_view)](app/view/recent_my_created_tab_exp_view)
  * [首页(recent_tree_exp_view)](app/view/recent_tree_exp_view)
  * [用例(test_case_my_attention_grid_view)](app/view/test_case_my_attention_grid_view)
  * [用例(test_case_my_test_case_grid_view)](app/view/test_case_my_test_case_grid_view)
  * [查询结果(ticket_filter_grid_view)](app/view/ticket_filter_grid_view)
  * [工单(ticket_my_assign_grid_view)](app/view/ticket_my_assign_grid_view)
  * [工单(ticket_my_attention_grid_view)](app/view/ticket_my_attention_grid_view)
  * [工作项(work_item_my_assignee_gird_view)](app/view/work_item_my_assignee_gird_view)
  * [工作项(work_item_my_attention_grid_view)](app/view/work_item_my_attention_grid_view)
  * [工作项(work_item_my_todo_gird_view)](app/view/work_item_my_todo_gird_view)
  * [工时(workload_log_grid_view)](app/view/workload_log_grid_view)
  * [工时(workload_tab_exp_view)](app/view/workload_tab_exp_view)
  * [工时(workload_tab_search_view)](app/view/workload_tab_search_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>