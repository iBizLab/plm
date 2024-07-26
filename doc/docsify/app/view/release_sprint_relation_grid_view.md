# 项目发布(release_sprint_relation_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * 跳转发布主视图
  * newdata(预置新建数据逻辑)


### 关联界面行为
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [迭代取消关联发布](module/ProjMgmt/release#界面行为)

### 关联界面逻辑
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)

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