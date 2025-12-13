# 工作项操作向导明细(work_item_wizard_detail_change_confirm_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项操作向导明细(work_item_wizard_detail_edit_view)](app/view/work_item_wizard_detail_edit_view)
  * [工作项操作向导明细(work_item_wizard_detail_redirect_view)](app/view/work_item_wizard_detail_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>