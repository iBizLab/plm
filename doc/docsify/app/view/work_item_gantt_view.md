# 工作项甘特图(work_item_gantt_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 甘特部件(gantt)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [快照管理](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建阶段（waterfall）](module/ProjMgmt/work_item#界面行为)
  * 编辑界面_刷新操作(Refresh)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建计划（waterfall）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建里程碑（waterfall）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除计划](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建快照](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [新建快照(baseline_create_plan_snapshot_view)](app/view/baseline_create_plan_snapshot_view)
  * [快照管理(baseline_snapshot_management_gird_view)](app/view/baseline_snapshot_management_gird_view)
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [新建工作项(work_item_quick_create_view)](app/view/work_item_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>