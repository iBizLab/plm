# 团队视图(insight_view_team_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(insight)](module/Insight/insight_view/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [设置星标](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [视图成员](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [取消星标](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [编辑基本信息](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [复制视图](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [更多设置](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [视图信息](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [新开窗口（视图）](module/Insight/insight_view#界面行为)

### 关联界面逻辑
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [计算表格列行为状态(insight)](module/Insight/insight_view/uilogic/calc_column_action_state)

### 关联视图
  * [效能视图(insight_view_edit_view)](app/view/insight_view_edit_view)
  * [效能视图(insight_view_redirect_view)](app/view/insight_view_redirect_view)
  * [视图配置(insight_view_setting_view)](app/view/insight_view_setting_view)
  * [视图信息(insight_view_show_edit_view)](app/view/insight_view_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>