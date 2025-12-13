# 产品工单类型(product_ticket_type_global_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/product_ticket_type) : [表格界面_删除操作](module/ProdMgmt/product_ticket_type#界面行为)
  * [产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/product_ticket_type) : [新建工单类型](module/ProdMgmt/product_ticket_type#界面行为)

### 关联视图
  * [编辑工单类型(product_ticket_type_edit_view)](app/view/product_ticket_type_edit_view)
  * [新建工单类型(product_ticket_type_quick_create_view)](app/view/product_ticket_type_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>