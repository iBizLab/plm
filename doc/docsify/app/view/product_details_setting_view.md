# 产品详情配置(product_details_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [需求(idea_recycle_grid_view)](app/view/idea_recycle_grid_view)
  * [高级设置(product_advanced_setting_edit_view)](app/view/product_advanced_setting_edit_view)
  * [基本信息(product_base_information_edit_view)](app/view/product_base_information_edit_view)
  * [产品成员(product_member_config_grid_view)](app/view/product_member_config_grid_view)
  * [产品(product_recover_tab_exp_view)](app/view/product_recover_tab_exp_view)
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