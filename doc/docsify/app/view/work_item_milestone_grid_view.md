# 里程碑(work_item_milestone_grid_view)  <!-- {docsify-ignore-all} -->



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
  * 表格界面_刷新操作(Refresh)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [表格界面_导出操作（Excel）](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [新建里程碑（waterfall）](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [工作项(work_item_main_view)](app/view/work_item_main_view)
  * [新建工作项(work_item_quick_create_view)](app/view/work_item_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>