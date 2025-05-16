# 排期模块(product_plan_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [新建类别](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [删除](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [删除](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [编辑](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [树界面_刷新全部操作](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [编辑](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [新建分组](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [删除](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [编辑](module/ProdMgmt/product_plan#界面行为)

### 关联视图
  * [全部计划(product_plan_all_grid_view)](app/view/product_plan_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>