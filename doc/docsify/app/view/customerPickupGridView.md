# 客户(customerPickupGridView)  <!-- {docsify-ignore-all} -->

系统自动添加




## 控件
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)
  * 数据表格(grid)
  * 搜索表单(searchform)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [添加至类别（多选）](module/ProdMgmt/Customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/Customer) : [删除](module/ProdMgmt/Customer#界面行为)

### 关联视图
  * [选择类别(customeradd_categorys_view)](app/view/customeradd_categorys_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>