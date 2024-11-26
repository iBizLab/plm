# 标签管理(product_tag_tag_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag) : [表格界面_新建操作_通用](module/ProdMgmt/product_tag#界面行为)
  * [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag) : [删除标签](module/ProdMgmt/product_tag#界面行为)
  * [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag) : [编辑标签](module/ProdMgmt/product_tag#界面行为)

### 关联视图
  * [编辑标签(product_tag_edit_option_view)](app/view/product_tag_edit_option_view)
  * [新建标签(product_tag_new_option_view)](app/view/product_tag_new_option_view)
  * [确认删除(product_tag_product_tag_confirm_remove_view)](app/view/product_tag_product_tag_confirm_remove_view)
  * [本标签-工单(ticket_tags_tciket_grid_view)](app/view/ticket_tags_tciket_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>