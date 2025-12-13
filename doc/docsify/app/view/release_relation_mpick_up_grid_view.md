# 项目发布(release_relation_mpick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面逻辑
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [计算进度](module/ProjMgmt/release/uilogic/cal_schedule)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>