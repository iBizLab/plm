# 产品管理(product_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品配置](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [打开产品首页视图](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)

### 关联视图
  * [查询结果(idea_idea_filter_grid_view)](app/view/idea_idea_filter_grid_view)
  * [全部产品(product_all_grid_view)](app/view/product_all_grid_view)
  * [产品中心配置(product_config_tree_exp_view)](app/view/product_config_tree_exp_view)
  * [产品(product_edit_view)](app/view/product_edit_view)
  * [产品(product_filter_tab_exp_view)](app/view/product_filter_tab_exp_view)
  * [产品(product_index_view)](app/view/product_index_view)
  * [归档产品(product_is_archived_grid_view)](app/view/product_is_archived_grid_view)
  * [组织产品(product_org_grid_view)](app/view/product_org_grid_view)
  * [团队产品(product_team_grid_view)](app/view/product_team_grid_view)
  * [查询结果(ticket_filter_grid_view)](app/view/ticket_filter_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>