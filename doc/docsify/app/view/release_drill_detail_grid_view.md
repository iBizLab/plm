# 发布数量(release_drill_detail_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面逻辑
  * [项目发布(RELEASE)](module/ProjMgmt/release) : [控制关联迭代](module/ProjMgmt/release/uilogic/control_relation_sprint)

### 关联视图
  * [项目发布(release_edit_view)](app/view/release_edit_view)
  * [项目发布(release_main_view)](app/view/release_main_view)
  * [项目发布(release_overview_base_view)](app/view/release_overview_base_view)
  * [项目发布(release_overview_dashboard_view)](app/view/release_overview_dashboard_view)
  * [迭代(sprint_release_relation_grid_view)](app/view/sprint_release_relation_grid_view)
  * [测试计划(test_plan_release_relation_grid_view)](app/view/test_plan_release_relation_grid_view)
  * [全部工作项(work_item_release_grid_view)](app/view/work_item_release_grid_view)
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