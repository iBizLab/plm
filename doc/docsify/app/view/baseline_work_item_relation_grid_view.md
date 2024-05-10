# 工作项(baseline_work_item_relation_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item) : [移出基线](module/ProjMgmt/baseline_work_item#界面行为)
  * [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item) : [基线规划工作项](module/ProjMgmt/baseline_work_item#界面行为)

### 关联视图
  * [基线工作项(baseline_work_item_edit_view)](app/view/baseline_work_item_edit_view)
  * [工作项(work_item_baseline_mpick_up_view)](app/view/work_item_baseline_mpick_up_view)
  * [工作项(work_item_main_view)](app/view/work_item_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>