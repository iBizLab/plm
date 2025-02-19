# 客户关联工单(ticket_mob_cus_re_ticket)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [获取关联列表总条数](module/Base/relation/uilogic/get_list_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [客户新建工单（移动端）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [客户关联工单（移动端）](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [选择工单11(ticket_mob_customer_re_ticket)](app/view/ticket_mob_customer_re_ticket)
  * [新建工单(ticket_mob_ticket_create_option_view)](app/view/ticket_mob_ticket_create_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>