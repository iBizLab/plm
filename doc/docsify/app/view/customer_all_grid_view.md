# 全部客户(customer_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [客户自定义导入](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [删除](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [添加至类别（多选）](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [表格界面_新建操作](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [表格界面_导出操作（Excel）](module/ProdMgmt/customer#界面行为)
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [表格界面_删除操作](module/ProdMgmt/customer#界面行为)

### 关联视图
  * [选择类别(customer_add_category_option_view)](app/view/customer_add_category_option_view)
  * [客户应用数据导入视图(customer_app_data_upload_view)](app/view/customer_app_data_upload_view)
  * [客户(customer_main_view)](app/view/customer_main_view)
  * [新建客户(customer_quick_create_view)](app/view/customer_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>