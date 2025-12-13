# 查询结果(idea_idea_filter_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(idea)](module/ProdMgmt/idea/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [计算表格列行为状态(idea)](module/ProdMgmt/idea/uilogic/calc_column_action_state)

### 关联视图
  * [需求(idea_edit_view)](app/view/idea_edit_view)
  * [需求(idea_main_view)](app/view/idea_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>