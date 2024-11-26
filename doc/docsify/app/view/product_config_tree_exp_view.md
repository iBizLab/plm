# 产品中心配置(product_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [返回](module/ProdMgmt/product#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [配置](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [组件设置(addon_setting_grid_view)](app/view/addon_setting_grid_view)
  * [状态管理(dictionary_data_idea_state_grid_view)](app/view/dictionary_data_idea_state_grid_view)
  * [状态管理(dictionary_data_ticket_state_grid_view)](app/view/dictionary_data_ticket_state_grid_view)
  * [需求配置(idea_config_tab_exp_view)](app/view/idea_config_tab_exp_view)
  * [需求(idea_global_setting_view)](app/view/idea_global_setting_view)
  * [需求模板(idea_template_global_all_grid_view)](app/view/idea_template_global_all_grid_view)
  * [产品管理(product_archived_grid_view)](app/view/product_archived_grid_view)
  * [产品管理(product_deleted_grid_view)](app/view/product_deleted_grid_view)
  * [产品管理(product_in_progress_grid_view)](app/view/product_in_progress_grid_view)
  * [产品管理(product_management_tab_exp_view)](app/view/product_management_tab_exp_view)
  * [实体属性(psde_field_global_idea_grid_view)](app/view/psde_field_global_idea_grid_view)
  * [实体属性(psde_field_global_ticket_grid_view)](app/view/psde_field_global_ticket_grid_view)
  * [表单设计(psdeformdesign_modal)](app/view/psdeformdesign_modal)
  * [工单设计(ticket_dyna_tab_exp_view)](app/view/ticket_dyna_tab_exp_view)
  * [工单(ticket_global_setting_view)](app/view/ticket_global_setting_view)
  * [工单配置(ticket_type_config_tab_exp_view)](app/view/ticket_type_config_tab_exp_view)
  * [工单类型(ticket_type_global_setting_view)](app/view/ticket_type_global_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>