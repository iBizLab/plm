# 发布阶段(dictionary_data_global_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [表格界面_编辑操作](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [表格界面_删除操作](module/Base/dictionary_data#界面行为)
  * [数据字典(DICTIONARY)](module/Base/dictionary_data) : [新建阶段](module/Base/dictionary_data#界面行为)

### 关联视图
  * [新建阶段(dictionary_data_global_create_view)](app/view/dictionary_data_global_create_view)
  * [编辑阶段(dictionary_data_global_edit_view)](app/view/dictionary_data_global_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>