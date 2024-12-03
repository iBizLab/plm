# 产品(product_mob_product_tree)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品设置（移动端）](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品高级设置（移动端）](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品成员（移动端）](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [产品回收站（移动端）](module/ProdMgmt/product#界面行为)

### 关联视图
  * [需求(idea_mob_idea_recycle)](app/view/idea_mob_idea_recycle)
  * [需求(idea_mob_md_view)](app/view/idea_mob_md_view)
  * [产品成员(product_member_mob_list_view)](app/view/product_member_mob_list_view)
  * [高级设置(product_mob_ad_setting_view)](app/view/product_mob_ad_setting_view)
  * [回收站(product_mob_recycle_tab_view)](app/view/product_mob_recycle_tab_view)
  * [产品设置(product_mob_setting_view)](app/view/product_mob_setting_view)
  * [工单(ticket_mob_md_view)](app/view/ticket_mob_md_view)
  * [工单(ticket_mob_ticket_recycle)](app/view/ticket_mob_ticket_recycle)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>