# 发布列表(release_release_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [打开发布](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [刷新](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [全屏](module/ProjMgmt/release#界面行为)

### 关联视图
  * [项目发布(release_edit_view)](app/view/release_edit_view)
  * [项目发布(release_redirect_view)](app/view/release_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>