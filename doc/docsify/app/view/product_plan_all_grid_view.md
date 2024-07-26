# 全部计划(product_plan_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [表格界面_新建操作_子数据](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [编辑](module/ProdMgmt/product_plan#界面行为)
  * [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan) : [删除](module/ProdMgmt/product_plan#界面行为)

### 关联视图
  * [计划内容(idea_plan_count_grid_view)](app/view/idea_plan_count_grid_view)
  * [编辑计划(product_plan_edit_option_view)](app/view/product_plan_edit_option_view)
  * [新建计划(product_plan_quick_create_view)](app/view/product_plan_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>