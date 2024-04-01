# 工作项类型(work_item_typesetting_view_scrum)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 搜索表单(searchform)
  * 列表(list)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type) : [配置](module/ProjMgmt/Work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type) : [配置](module/ProjMgmt/Work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type) : [配置](module/ProjMgmt/Work_item_type#界面行为)

### 关联视图
  * [属性变更(PSDENotifyfield_change_hook_grid_view)](app/view/PSDENotifyfield_change_hook_grid_view)
  * [设计(PSDELogicMSLogicDesign)](app/view/PSDELogicMSLogicDesign)
  * [表单设计(PSDEFormdesign_Modal)](app/view/PSDEFormdesign_Modal)
  * [通知配置(PSDENotifytab_exp_view)](app/view/PSDENotifytab_exp_view)
  * [事件通知(PSDENotifyevent_hook_grid_view)](app/view/PSDENotifyevent_hook_grid_view)
  * [工作项类型(work_item_typeEditView)](app/view/work_item_typeEditView)

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