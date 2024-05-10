# 客户(customer_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [添加至类别（多选）](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [删除](module/ProdMgmt/customer#界面行为)

### 关联视图
  * [选择类别(customer_add_category_option_view)](app/view/customer_add_category_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>