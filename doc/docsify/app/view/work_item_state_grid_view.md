# 工作项状态(work_item_state_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * [获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)
  * [系统工作项状态隐藏操作列](module/ProjMgmt/work_item_state/uilogic/cal_is_system)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [编辑状态](module/ProjMgmt/work_item_state#界面行为)
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [删除状态](module/ProjMgmt/work_item_state#界面行为)
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [表格界面_新建操作](module/ProjMgmt/work_item_state#界面行为)

### 关联界面逻辑
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [系统工作项状态隐藏操作列](module/ProjMgmt/work_item_state/uilogic/cal_is_system)
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)

### 关联视图
  * [新建状态(work_item_state_quick_create_view)](app/view/work_item_state_quick_create_view)
  * [编辑状态(work_item_state_update_view)](app/view/work_item_state_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>