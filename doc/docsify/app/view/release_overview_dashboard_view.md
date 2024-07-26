# 项目发布(release_overview_dashboard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据看板(dashboard)

##### 部件逻辑
* `onCreated` : [控制关联迭代](module/ProjMgmt/release/uilogic/control_relation_sprint)

## 视图界面逻辑
  * [控制关联迭代](module/ProjMgmt/release/uilogic/control_relation_sprint)


### 关联界面逻辑
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [控制关联迭代](module/ProjMgmt/release/uilogic/control_relation_sprint)

### 关联视图
  * [项目发布(release_overview_base_view)](app/view/release_overview_base_view)
  * [迭代(sprint_release_relation_grid_view)](app/view/sprint_release_relation_grid_view)
  * [测试计划(test_plan_release_relation_grid_view)](app/view/test_plan_release_relation_grid_view)
  * [工作项统计(work_item_release_work_item_custom_view)](app/view/work_item_release_work_item_custom_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>