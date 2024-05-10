# 新建产品(product_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [产品(PRODUCT)](module/ProdMgmt/product) : [批量删除产品成员临时数据](module/ProdMgmt/product/uilogic/remove_batch_temp)

### 关联视图
  * [产品成员(product_member_assigned_grid_view)](app/view/product_member_assigned_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>