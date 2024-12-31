# 快照管理(baseline_snapshot_management_gird_view)  <!-- {docsify-ignore-all} -->



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
  * [基线(BASELINE)](module/Base/baseline) : [编辑快照](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [新建快照](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [删除快照](module/Base/baseline#界面行为)
  * [基线(BASELINE)](module/Base/baseline) : [查看快照](module/Base/baseline#界面行为)

### 关联视图
  * [新建快照(baseline_create_plan_snapshot_view)](app/view/baseline_create_plan_snapshot_view)
  * [编辑快照(baseline_edit_snapshot_view)](app/view/baseline_edit_snapshot_view)
  * [基线(baseline_edit_view)](app/view/baseline_edit_view)
  * [基线(baseline_redirect_view)](app/view/baseline_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>