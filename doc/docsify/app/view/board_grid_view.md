# 看板管理(board_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [看板(BOARD)](module/ProjMgmt/board) : [删除](module/ProjMgmt/board#界面行为)
  * [看板(BOARD)](module/ProjMgmt/board) : [新建看板（看板表格）](module/ProjMgmt/board#界面行为)

### 关联视图
  * [确认删除看板(board_confirm_remove_view)](app/view/board_confirm_remove_view)
  * [看板(board_edit_view)](app/view/board_edit_view)
  * [新建看板(board_quick_create_view)](app/view/board_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>