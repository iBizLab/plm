# 新建(ticket_mob_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [编辑界面_保存并退出操作](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [人员选择(product_member_mob_more_mem_selected)](app/view/product_member_mob_more_mem_selected)
  * [人员选择(product_member_mob_product_member_selected)](app/view/product_member_mob_product_member_selected)
  * [选择产品(product_mob_product_pickup_view)](app/view/product_mob_product_pickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>