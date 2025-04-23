# 仪表盘管理(dyna_dashboard_insight_view_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [仪表盘操作列](module/Base/dyna_dashboard/uilogic/control_del)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [删除仪表盘](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [打开新建仪表盘（测试）](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [使用此模板](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [新建仪表盘_管理](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [列表导航加载完成](module/Base/dyna_dashboard#界面行为)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [表格界面_编辑操作](module/Base/dyna_dashboard#界面行为)

### 关联界面逻辑
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [仪表盘操作列](module/Base/dyna_dashboard/uilogic/control_del)
  * [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard) : [获取选中模板名称](module/Base/dyna_dashboard/uilogic/fill_choosed_board_name)

### 关联视图
  * [动态数据看板(dyna_dashboard_edit_view)](app/view/dyna_dashboard_edit_view)
  * [仪表盘(dyna_dashboard_info_edit_view)](app/view/dyna_dashboard_info_edit_view)
  * [仪表盘模板列表(dyna_dashboard_list_exp_view2)](app/view/dyna_dashboard_list_exp_view2)
  * [仪表盘(dyna_dashboard_show_edit_view)](app/view/dyna_dashboard_show_edit_view)
  * [仪表盘(insight_view_custom_view)](app/view/insight_view_custom_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>