# 数据字典(dictionary_data_idea_dictionary_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [需求字典新建](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [数据字典删除](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [表格界面_编辑操作](module/Base/dictionary_data#界面行为)

### 关联界面逻辑
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)

### 关联视图
  * [数据字典(dictionary_data_delete_confirm_option_view)](app/view/dictionary_data_delete_confirm_option_view)
  * [数据字典(dictionary_data_edit_view)](app/view/dictionary_data_edit_view)
  * [数据字典(dictionary_data_idea_dictionary_create_view)](app/view/dictionary_data_idea_dictionary_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>