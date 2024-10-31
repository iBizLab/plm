# 测试页面导入(article_page_test_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [页面(PAGE)](module/Wiki/article_page) : [关闭共享（管理表格操作列）](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [快速新建文档](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [页面导入](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [共享设置（管理表格操作列）](module/Wiki/article_page#界面行为)

### 关联视图
  * [页面(article_page_edit_view)](app/view/article_page_edit_view)
  * [新建页面(article_page_qucik_create_view)](app/view/article_page_qucik_create_view)
  * [页面(article_page_redirect_view)](app/view/article_page_redirect_view)
  * [共享设置(article_page_shared_setting_view)](app/view/article_page_shared_setting_view)
  * [导入文档(article_page_upload_view)](app/view/article_page_upload_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>