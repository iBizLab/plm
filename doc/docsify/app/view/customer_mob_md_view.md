# 客户(customer_mob_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [客户(CUSTOMER)](module/ProdMgmt/customer) : [新建客户（移动端）](module/ProdMgmt/customer#界面行为)

### 关联视图
  * [客户(customer_mob_edit_view)](app/view/customer_mob_edit_view)
  * [客户信息(customer_mob_info_view)](app/view/customer_mob_info_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>