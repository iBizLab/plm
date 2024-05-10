# 客户(customer_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [编辑](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [删除](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [删除](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [树界面_刷新全部操作](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [新建类别](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [编辑](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [新建分组](module/ProdMgmt/customer#界面行为)

### 关联视图
  * [全部客户(customer_all_grid_view)](app/view/customer_all_grid_view)
  * [需求关联客户(customer_idea_re_customer_grid_view)](app/view/customer_idea_re_customer_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>