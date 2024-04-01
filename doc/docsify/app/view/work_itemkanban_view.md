# 工作项看板(work_itemkanban_view)  <!-- {docsify-ignore-all} -->

SRFNAVCTX.BOARD=fdbc1f55-cd26-6bc6-1163-51a0683402ed




## 控件
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 搜索表单(searchform)
  * 看板(kanban)
  * 搜索栏(searchbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建缺陷（kanban）（工具栏）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建用户故事（kanban）（工具栏）](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建任务（kanban）（工具栏）](module/ProjMgmt/Work_item#界面行为)

### 关联视图
  * [工作项(work_itemEditView)](app/view/work_itemEditView)
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