# 工作项树表测试(work_itemTreeGridTestView)  <!-- {docsify-ignore-all} -->






## 控件
  * 数据树表格(treegrid)
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 工具栏(toolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [激活](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [变更状态](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [树状](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [表格](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [切换显示模式](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [分配负责人](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [表格界面_拷贝操作](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [删除](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移入迭代](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移动](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [归档](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [修改时间](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [移入发布](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [删除](module/ProjMgmt/Work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/Work_item) : [新建行测试](module/ProjMgmt/Work_item#界面行为)

### 关联视图
  * [项目发布(releasepick_up_view)](app/view/releasepick_up_view)
  * [迭代(sprintpick_up_view)](app/view/sprintpick_up_view)
  * [工作项(work_itemchange_time_view)](app/view/work_itemchange_time_view)
  * [工作项(work_itemEditView)](app/view/work_itemEditView)
  * [移动工作项(work_itemmove_view)](app/view/work_itemmove_view)
  * [工作项(work_itemchange_assignee_view)](app/view/work_itemchange_assignee_view)
  * [工作项(work_itemchange_state_view)](app/view/work_itemchange_state_view)

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