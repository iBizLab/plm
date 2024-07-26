# 系统模板仪表盘(dyna_dashboard_system_board_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [删除仪表盘](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [表格界面_编辑操作](module/Base/dyna_dashboard#界面行为)

### 关联视图
  * [动态数据看板(dyna_dashboard_edit_view)](app/view/dyna_dashboard_edit_view)
  * [仪表盘(dyna_dashboard_info_edit_view)](app/view/dyna_dashboard_info_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>