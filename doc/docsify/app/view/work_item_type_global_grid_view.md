# 工作项类型(work_item_type_global_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [表格界面_编辑操作](module/ProjMgmt/work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [新建工作项类型](module/ProjMgmt/work_item_type#界面行为)
  * [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type) : [表格界面_删除操作](module/ProjMgmt/work_item_type#界面行为)

### 关联界面逻辑
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)

### 关联视图
  * [新建工作项类型(work_item_type_global_create_view)](app/view/work_item_type_global_create_view)
  * [编辑工作项类型(work_item_type_global_edit_view)](app/view/work_item_type_global_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>