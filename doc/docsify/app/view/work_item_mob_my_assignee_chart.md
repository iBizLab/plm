# 我负责的工作项(work_item_mob_my_assignee_chart)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据图表(chart)

##### 部件逻辑
* `onLoadSuccess` : [图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)


### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>