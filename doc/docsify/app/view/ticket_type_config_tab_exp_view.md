# 工单配置(ticket_type_config_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [配置](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [数据字典(dictionary_data_ticket_dictionary_grid_view)](app/view/dictionary_data_ticket_dictionary_grid_view)
  * [实体属性(psde_field_global_ticket_grid_view)](app/view/psde_field_global_ticket_grid_view)
  * [表单设计(psdeformdesign_modal)](app/view/psdeformdesign_modal)
  * [工单设计(ticket_dyna_tab_exp_view)](app/view/ticket_dyna_tab_exp_view)
  * [工单(ticket_global_setting_view)](app/view/ticket_global_setting_view)
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