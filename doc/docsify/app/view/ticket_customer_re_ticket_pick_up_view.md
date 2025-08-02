# 选择工单(ticket_customer_re_ticket_pick_up_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 选择视图面板(pickupviewpanel)
#### 列表(simplelist)
#### 树视图导航栏(treeexpbar)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [视图_取消](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [视图_确定](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [全部工单(ticket_all_grid_view)](app/view/ticket_all_grid_view)
  * [工单(ticket_customer_re_ticket_pick_up_grid_view)](app/view/ticket_customer_re_ticket_pick_up_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>