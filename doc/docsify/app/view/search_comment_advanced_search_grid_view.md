# 评论搜索(search_comment_advanced_search_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(tabsearchform)

##### 部件逻辑
* `onBeforeLoadDraft`
```
viewParam.queryconds=["n_content_like"];
```

## 视图界面逻辑
  * [打开详情视图](module/Base/search_comment/uilogic/open_main_view)
  * newdata(预置新建数据逻辑)


### 关联界面行为
  * [评论搜索(SEARCH_COMMENT)](module/Base/search_comment) : [打开所属主页视图](module/Base/search_comment#界面行为)

### 关联界面逻辑
  * [评论搜索(SEARCH_COMMENT)](module/Base/search_comment) : [打开详情视图](module/Base/search_comment/uilogic/open_main_view)

### 关联视图
  * [评论搜索(search_comment_edit_view)](app/view/search_comment_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>