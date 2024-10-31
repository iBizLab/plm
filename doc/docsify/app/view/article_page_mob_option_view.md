# 页面(article_page_mob_option_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [共享设置表单加载数据](module/Wiki/article_page/uilogic/shared_form_data)


### 关联界面逻辑
  * [页面(PAGE)](module/Wiki/article_page) : [共享设置表单加载数据](module/Wiki/article_page/uilogic/shared_form_data)

### 关联视图
  * [成员(member_mob_shared_md_view)](app/view/member_mob_shared_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>