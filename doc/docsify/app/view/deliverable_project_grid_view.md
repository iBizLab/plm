# 交付物(deliverable_project_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算交付物表格列行为状态](module/Base/deliverable/uilogic/calc_grid_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [编辑](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [提交](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [交付物下载](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [删除](module/Base/deliverable#界面行为)
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [新建交付目标](module/Base/deliverable#界面行为)

### 关联界面逻辑
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [计算交付物表格列行为状态](module/Base/deliverable/uilogic/calc_grid_column_action_state)

### 关联视图
  * [交付物(deliverable_edit_view)](app/view/deliverable_edit_view)
  * [新建交付目标(deliverable_quick_create_view)](app/view/deliverable_quick_create_view)
  * [交付物(deliverable_redirect_view)](app/view/deliverable_redirect_view)
  * [编辑交付目标(deliverable_target_edit_view)](app/view/deliverable_target_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>