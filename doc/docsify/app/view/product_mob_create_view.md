# 产品新建(product_mob_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 属性注入
* `产品名称` 注入属性 `type`

```javascript
'search'
```
#### 工具栏(righttoolbar)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [编辑界面_保存并退出操作](module/ProdMgmt/product#界面行为)

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