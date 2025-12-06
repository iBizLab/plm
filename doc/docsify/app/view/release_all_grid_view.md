# 全部发布(release_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [删除](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [编辑](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [表格界面_新建操作](module/ProjMgmt/release#界面行为)
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [打开路线图视图_发布](module/ProjMgmt/release#界面行为)

### 关联界面逻辑
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)

### 关联视图
  * [项目发布(release_main_view)](app/view/release_main_view)
  * [新建发布(release_quick_create_view)](app/view/release_quick_create_view)
  * [路线图(release_road_map_view)](app/view/release_road_map_view)
  * [编辑发布(release_update_view)](app/view/release_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>