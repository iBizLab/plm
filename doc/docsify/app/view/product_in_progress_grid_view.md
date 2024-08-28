# 产品管理(product_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [设置管理员](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [进行中_归档](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品首页视图](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [进行中_删除](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品配置](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品导航页](module/ProdMgmt/product#界面行为)

### 关联视图
  * [查询结果(idea_idea_filter_grid_view)](app/view/idea_idea_filter_grid_view)
  * [全部产品(product_all_grid_view)](app/view/product_all_grid_view)
  * [产品中心配置(product_config_tree_exp_view)](app/view/product_config_tree_exp_view)
  * [产品(product_edit_view)](app/view/product_edit_view)
  * [产品(product_filter_tab_exp_view)](app/view/product_filter_tab_exp_view)
  * [产品(product_index_view)](app/view/product_index_view)
  * [归档产品(product_is_archived_grid_view)](app/view/product_is_archived_grid_view)
  * [组织产品(product_org_grid_view)](app/view/product_org_grid_view)
  * [产品信息(product_show_edit_view)](app/view/product_show_edit_view)
  * [团队产品(product_team_grid_view)](app/view/product_team_grid_view)
  * [产品管理(product_tree_exp_view)](app/view/product_tree_exp_view)
  * [查询结果(ticket_filter_grid_view)](app/view/ticket_filter_grid_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>