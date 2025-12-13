# 迭代(sprint_release_relation_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算进度](module/ProjMgmt/sprint/uilogic/cal_schedule)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * 跳转迭代概览页面
  * newdata(预置新建数据逻辑)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [发布取消关联迭代](module/ProjMgmt/sprint#界面行为)

### 关联界面逻辑
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [计算进度](module/ProjMgmt/sprint/uilogic/cal_schedule)

### 关联视图
  * [迭代(sprint_edit_view)](app/view/sprint_edit_view)
  * [迭代(sprint_redirect_view)](app/view/sprint_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>