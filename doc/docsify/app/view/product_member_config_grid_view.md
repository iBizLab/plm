# 产品成员(product_member_config_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [表格界面_删除操作](module/ProdMgmt/product_member#界面行为)
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [添加产品成员](module/ProdMgmt/product_member#界面行为)
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [设置角色](module/ProdMgmt/product_member#界面行为)

### 关联视图
  * [产品成员(product_member_edit_view)](app/view/product_member_edit_view)
  * [产品成员(product_member_redirect_view)](app/view/product_member_redirect_view)
  * [设置角色(product_member_role_edit_view)](app/view/product_member_role_edit_view)
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