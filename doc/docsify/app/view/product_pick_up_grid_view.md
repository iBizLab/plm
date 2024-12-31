# 产品(product_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(product)](module/ProdMgmt/product/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [更多设置](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品成员](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品信息](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [回收站](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [编辑基本信息](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [设置星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [新开窗口（产品）](module/ProdMgmt/product#界面行为)

### 关联界面逻辑
  * [产品(PRODUCT)](module/ProdMgmt/product) : [计算表格列行为状态(product)](module/ProdMgmt/product/uilogic/calc_column_action_state)

### 关联视图
  * [需求(idea_recycle_grid_view)](app/view/idea_recycle_grid_view)
  * [高级设置(product_advanced_setting_edit_view)](app/view/product_advanced_setting_edit_view)
  * [基本信息(product_base_information_edit_view)](app/view/product_base_information_edit_view)
  * [产品详情配置(product_details_setting_view)](app/view/product_details_setting_view)
  * [产品成员(product_member_config_grid_view)](app/view/product_member_config_grid_view)
  * [产品(product_recover_tab_exp_view)](app/view/product_recover_tab_exp_view)
  * [产品配置(product_setting_view)](app/view/product_setting_view)
  * [产品信息(product_show_edit_view)](app/view/product_show_edit_view)
  * [标签管理(product_tag_tag_grid_view)](app/view/product_tag_tag_grid_view)
  * [工单(ticket_recover_grid_view)](app/view/ticket_recover_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>