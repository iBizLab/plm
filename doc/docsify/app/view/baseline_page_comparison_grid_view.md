# 基线页面(baseline_page_comparison_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page) : [页面版本对比](module/Wiki/baseline_page#界面行为)

### 关联视图
  * [版本对比(article_page_version_comparison_view)](app/view/article_page_version_comparison_view)
  * [页面(article_page_with_version_view)](app/view/article_page_with_version_view)
  * [基线页面(baseline_page_edit_view)](app/view/baseline_page_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>