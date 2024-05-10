# 状态管理(dictionary_data_ticket_state_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [工单配置_删除](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [新建状态](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [表格界面_编辑操作](module/Base/dictionary_data#界面行为)

### 关联界面逻辑
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)

### 关联视图
  * [新建状态(dictionary_data_quick_create_view)](app/view/dictionary_data_quick_create_view)
  * [编辑状态(dictionary_data_state_edit_view)](app/view/dictionary_data_state_edit_view)
  * [确认删除(dictionary_data_ticket_confirm_remove_view)](app/view/dictionary_data_ticket_confirm_remove_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>