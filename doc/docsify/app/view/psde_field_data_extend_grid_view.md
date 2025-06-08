# 项目属性(psde_field_data_extend_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [判断操作列是否禁用](module/extension/PSDEField/uilogic/judge_column_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [实体属性(PSDEFIELD)](module/extension/PSDEField) : [表格界面_新建操作](module/extension/PSDEField#界面行为)
  * [实体属性(PSDEFIELD)](module/extension/PSDEField) : [删除属性](module/extension/PSDEField#界面行为)
  * [实体属性(PSDEFIELD)](module/extension/PSDEField) : [编辑属性](module/extension/PSDEField#界面行为)

### 关联界面逻辑
  * [实体属性(PSDEFIELD)](module/extension/PSDEField) : [判断操作列是否禁用](module/extension/PSDEField/uilogic/judge_column_state)

### 关联视图
  * [实体属性(psde_field_quick_cfg_view)](app/view/psde_field_quick_cfg_view)
  * [实体属性(psde_field_quick_create_view)](app/view/psde_field_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>