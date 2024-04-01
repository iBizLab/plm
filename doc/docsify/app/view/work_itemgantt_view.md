# 工作项甘特图(work_itemgantt_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 工具栏(toolbar)
  * 甘特部件(gantt)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建里程碑（waterfall）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建阶段（waterfall）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建计划（waterfall）](module/ProjMgmt/Work_item#界面行为)
  * 表格界面_刷新操作(Refresh)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [删除计划](module/ProjMgmt/Work_item#界面行为)

### 关联视图
  * [新建工作项(work_itemquick_create_view)](app/view/work_itemquick_create_view)
  * [工作项(work_itemmain_view)](app/view/work_itemmain_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>