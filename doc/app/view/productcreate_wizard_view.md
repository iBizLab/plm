# 新建产品(productcreate_wizard_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 向导面板(wizardpanel)
  * CAPTIONBAR(captionbar)


### 关联视图
  * [产品成员(product_membergrid_view_assigned)](app/view/product_membergrid_view_assigned)

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