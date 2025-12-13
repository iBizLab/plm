# 历史版本(version_list_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表视图导航栏(listexpbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [版本(VERSION)](module/Base/version) : [查看已发布版本](module/Base/version#界面行为)

### 关联界面逻辑
  * [页面版本(PAGE_VERSION)](module/Wiki/page_version) : [查看已发布版本](module/Wiki/page_version/uilogic/is_published_version)

### 关联视图
  * [页面(article_page_show_version_view)](app/view/article_page_show_version_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>