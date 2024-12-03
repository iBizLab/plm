# 回收站(article_page_recycle_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [恢复](module/Wiki/article_page#界面行为)

### 关联视图
  * [页面(article_page_edit_view)](app/view/article_page_edit_view)
  * [页面(article_page_model_show_view)](app/view/article_page_model_show_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>