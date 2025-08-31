# 项目预警(project_waring_custom_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看已逾期工作项](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看当日到期预警](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看三日到期预警](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [查看全部工作项](module/ProjMgmt/project#界面行为)

### 关联视图
  * [今日到期预警(work_item_cur_warning_grid_view)](app/view/work_item_cur_warning_grid_view)
  * [逾期工作项(work_item_overdue_grid_view)](app/view/work_item_overdue_grid_view)
  * [三日到期预警(work_item_three_day_warning_grid_view)](app/view/work_item_three_day_warning_grid_view)
  * [未完成工作项(work_item_work_item_grid_view)](app/view/work_item_work_item_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>