# 基线对比(baseline_work_item_comparison_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item) : [工作项版本对比](module/ProjMgmt/baseline_work_item#界面行为)

### 关联视图
  * [基线工作项(baseline_work_item_edit_view)](app/view/baseline_work_item_edit_view)
  * [工作项(work_item_main_view)](app/view/work_item_main_view)
  * [版本对比(work_item_version_comparison_view)](app/view/work_item_version_comparison_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>