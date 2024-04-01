# 工作台2(recentindex_view)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 数据关系栏(drbar)
  * 编辑表单(form)


### 关联界面行为
  * [最近访问(RECENT)](module/Base/Recent) : [首页](module/Base/Recent#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [取消星标](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [打开产品首页视图](module/ProdMgmt/Product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/Product) : [打开产品配置](module/ProdMgmt/Product#界面行为)

### 关联视图
  * [我负责的事项(recentmy_assignee_item_tap_exp_view)](app/view/recentmy_assignee_item_tap_exp_view)
  * [全部产品(productgrid_view_all)](app/view/productgrid_view_all)
  * [产品(productindex_view)](app/view/productindex_view)
  * [工作项(work_itemmy_gird_view)](app/view/work_itemmy_gird_view)
  * [最近访问(recentmy_created_tab_exp_view)](app/view/recentmy_created_tab_exp_view)
  * [工单(ticketmy_assign_grid_view)](app/view/ticketmy_assign_grid_view)
  * [用例(test_casemy_attention_grid_view)](app/view/test_casemy_attention_grid_view)
  * [用例(test_casemy_test_case_grid_view)](app/view/test_casemy_test_case_grid_view)
  * [工作项(work_itemmy_attention_grid_view)](app/view/work_itemmy_attention_grid_view)
  * [工单(ticketmy_attention_grid_view)](app/view/ticketmy_attention_grid_view)
  * [最近访问(recentdata_view)](app/view/recentdata_view)
  * [产品管理(producttree_exp_view)](app/view/producttree_exp_view)
  * [需求(ideamy_attention_grid_view)](app/view/ideamy_attention_grid_view)
  * [仪表盘(recentcustom_dashboard_view)](app/view/recentcustom_dashboard_view)
  * [首页(recenttree_exp_view)](app/view/recenttree_exp_view)
  * [工作项(work_itemmy_todo_gird_view)](app/view/work_itemmy_todo_gird_view)
  * [需求(ideamy_assign_grid_view)](app/view/ideamy_assign_grid_view)
  * [产品(productEditView)](app/view/productEditView)
  * [关注(attentiontab_exp_view)](app/view/attentiontab_exp_view)
  * [产品中心配置(producttree_exp_view_config)](app/view/producttree_exp_view_config)

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