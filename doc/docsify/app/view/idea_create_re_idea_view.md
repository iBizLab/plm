# 需求(idea_create_re_idea_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onChange` : [重置上下文产品ID](module/ProdMgmt/idea/uilogic/reset_product_id)


### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [重置上下文产品ID](module/ProdMgmt/idea/uilogic/reset_product_id)

### 关联视图
  * [选择客户(customer_pc_customer_pickup_tree_view)](app/view/customer_pc_customer_pickup_tree_view)
  * [需求选择树视图(idea_pick_up_tree_view)](app/view/idea_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>