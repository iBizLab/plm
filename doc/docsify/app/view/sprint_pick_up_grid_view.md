# 迭代(sprint_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算进度](module/ProjMgmt/sprint/uilogic/cal_schedule)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [结束迭代](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [开始迭代](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)

### 关联界面逻辑
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [计算进度](module/ProjMgmt/sprint/uilogic/cal_schedule)

### 关联视图
  * [确认完成(sprint_confirm_finish_view)](app/view/sprint_confirm_finish_view)
  * [编辑迭代(sprint_update_view)](app/view/sprint_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>