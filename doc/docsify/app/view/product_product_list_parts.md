# 产品列表(product_product_list_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品配置](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品导航页](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品首页视图](module/ProdMgmt/product#界面行为)

### 关联视图
  * [全部产品(product_all_grid_view)](app/view/product_all_grid_view)
  * [产品中心配置(product_config_tree_exp_view)](app/view/product_config_tree_exp_view)
  * [产品(product_edit_view)](app/view/product_edit_view)
  * [产品(product_filter_tab_exp_view)](app/view/product_filter_tab_exp_view)
  * [产品(product_index_view)](app/view/product_index_view)
  * [归档产品(product_is_archived_grid_view)](app/view/product_is_archived_grid_view)
  * [产品(product_main_view)](app/view/product_main_view)
  * [组织产品(product_org_grid_view)](app/view/product_org_grid_view)
  * [团队产品(product_team_grid_view)](app/view/product_team_grid_view)
  * [产品管理(product_tree_exp_view)](app/view/product_tree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>