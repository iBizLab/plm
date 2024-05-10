# 工作项配置(work_item_type_global_setting_view_scrum)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [配置](module/ProjMgmt/work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [配置](module/ProjMgmt/work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [配置](module/ProjMgmt/work_item_type#界面行为)

### 关联视图
  * [事件通知(psde_notify_event_hook_grid_view)](app/view/psde_notify_event_hook_grid_view)
  * [属性变更(psde_notify_field_change_hook_grid_view)](app/view/psde_notify_field_change_hook_grid_view)
  * [通知配置(psde_notify_tab_exp_view)](app/view/psde_notify_tab_exp_view)
  * [表单设计(psdeformdesign_modal)](app/view/psdeformdesign_modal)
  * [设计(psdelogicmslogicdesign_modal)](app/view/psdelogicmslogicdesign_modal)
  * [工作项类型(work_item_type_edit_view)](app/view/work_item_type_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>