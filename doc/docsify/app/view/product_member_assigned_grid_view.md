# 产品成员(product_member_assigned_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [新建产品默认临时成员](module/ProdMgmt/product_member/uilogic/create_default_temp_members)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [移除成员](module/ProdMgmt/product_member#界面行为)
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [表格界面_新建操作](module/ProdMgmt/product_member#界面行为)

### 关联界面逻辑
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [新建产品默认临时成员](module/ProdMgmt/product_member/uilogic/create_default_temp_members)

### 关联视图
  * [产品成员(product_member_edit_view)](app/view/product_member_edit_view)
  * [产品成员(product_member_redirect_view)](app/view/product_member_redirect_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>