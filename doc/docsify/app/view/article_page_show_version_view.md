# 页面(article_page_show_version_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [保存命名版本](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [恢复历史版本并通知刷新](module/Wiki/article_page#界面行为)

### 关联视图
  * [保存命名版本(article_page_set_name_version_option_view)](app/view/article_page_set_name_version_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>