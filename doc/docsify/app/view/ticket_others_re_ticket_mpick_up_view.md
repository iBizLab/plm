# 选择工单(ticket_others_re_ticket_mpick_up_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 选择视图面板(pickupviewpanel)
#### 列表(simplelist)
#### 树视图导航栏(treeexpbar)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [视图_取消](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [视图_确定](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [需求(idea_others_re_mpick_up_grid_view)](app/view/idea_others_re_mpick_up_grid_view)
  * [工单(ticket_others_re_ticket_mpick_up_grid_view)](app/view/ticket_others_re_ticket_mpick_up_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>