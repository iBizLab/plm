# 规划快照(baseline_work_item_gantt_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 甘特部件(gantt)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [规划快照查看](module/ProjMgmt/baseline_work_item/uilogic/plan_snapshot_check)


### 关联界面行为
  * [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item) : [快照设立基线](module/ProjMgmt/baseline_work_item#界面行为)

### 关联界面逻辑
  * [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item) : [规划快照查看](module/ProjMgmt/baseline_work_item/uilogic/plan_snapshot_check)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>