# 全部缺陷(work_item_scrum_bug_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态](module/ProjMgmt/work_item/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [修改时间](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [归档](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [Scrum缺陷导入](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [移入发布](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [激活](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [移入迭代](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [界面行为支持获取编辑列](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [变更父工作项](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [变更状态](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [复制工作项](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [关联工作项](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [表格界面_导出操作（Excel）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [分配负责人](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建缺陷（scrum动态）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [移动](module/ProjMgmt/work_item#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [计算表格列行为状态](module/ProjMgmt/work_item/uilogic/calc_column_action_state)

### 关联视图
  * [项目发布(release_pick_up_around_view)](app/view/release_pick_up_around_view)
  * [应用数据导入视图(scrum_bug_app_data_upload_view)](app/view/scrum_bug_app_data_upload_view)
  * [迭代(sprint_pick_up_around_view)](app/view/sprint_pick_up_around_view)
  * [工作项(work_item_change_assignee_view)](app/view/work_item_change_assignee_view)
  * [选择工作项(work_item_change_parent_pick_up_view)](app/view/work_item_change_parent_pick_up_view)
  * [工作项(work_item_change_state_view)](app/view/work_item_change_state_view)
  * [工作项(work_item_change_time_view)](app/view/work_item_change_time_view)
  * [复制工作项(work_item_copy_view)](app/view/work_item_copy_view)
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [工作项(work_item_dyna_scrum_quick_create_view)](app/view/work_item_dyna_scrum_quick_create_view)
  * [移动工作项(work_item_move_view)](app/view/work_item_move_view)
  * [新建缺陷(work_item_quick_create_bug_view)](app/view/work_item_quick_create_bug_view)
  * [工作项(work_item_re_self_mpick_up_view)](app/view/work_item_re_self_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>