# 产品成员(product_member_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member) : [产品添加成员（移动端）](module/ProdMgmt/product_member#界面行为)

### 关联视图
  * [添加人员(product_member_mob_add_person_md_view)](app/view/product_member_mob_add_person_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>