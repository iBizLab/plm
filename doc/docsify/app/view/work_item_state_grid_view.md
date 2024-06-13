# 工作项状态(work_item_state_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [表格界面_删除操作](module/ProjMgmt/work_item_state#界面行为)
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [表格界面_编辑操作](module/ProjMgmt/work_item_state#界面行为)
  * [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state) : [表格界面_新建操作](module/ProjMgmt/work_item_state#界面行为)

### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)

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