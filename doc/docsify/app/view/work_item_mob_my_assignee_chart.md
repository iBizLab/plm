# 个人工作项统计(work_item_mob_my_assignee_chart)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据图表(chart)

##### 部件逻辑
* `onLoadSuccess` : [图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)
* `onActive` : [我负责的工作项图表跳转](module/ProjMgmt/work_item/uilogic/my_assign_chart_jump)


### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [我负责的工作项图表跳转](module/ProjMgmt/work_item/uilogic/my_assign_chart_jump)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>