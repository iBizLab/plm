# 附件(attachment_run_re_attachment_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [附件(ATTACHMENT)](module/Base/attachment) : [添加附件数据（表格）](module/Base/attachment#界面行为)
  * [附件(ATTACHMENT)](module/Base/attachment) : [附件预览](module/Base/attachment#界面行为)
  * [附件(ATTACHMENT)](module/Base/attachment) : [附件删除（表格）](module/Base/attachment#界面行为)
  * [附件(ATTACHMENT)](module/Base/attachment) : [附件下载](module/Base/attachment#界面行为)

### 关联视图
  * [附件(attachment_edit_view)](app/view/attachment_edit_view)
  * [附件(attachment_redirect_view)](app/view/attachment_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>