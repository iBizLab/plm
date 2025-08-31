# 全部附件(search_attachment_cur_project_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [下载按钮是否显示](module/Base/search_attachment/uilogic/download_show)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment) : [附件下载](module/Base/search_attachment#界面行为)
  * [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment) : [打开主数据详情视图](module/Base/search_attachment#界面行为)
  * [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment) : [附件预览](module/Base/search_attachment#界面行为)

### 关联界面逻辑
  * [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment) : [下载按钮是否显示](module/Base/search_attachment/uilogic/download_show)

### 关联视图
  * [附件搜索(search_attachment_edit_view)](app/view/search_attachment_edit_view)
  * [附件搜索(search_attachment_redirect_view)](app/view/search_attachment_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>