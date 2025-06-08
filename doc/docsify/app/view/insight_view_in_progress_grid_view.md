# 效能度量(insight_view_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [进行中_删除](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图导航页](module/Insight/insight_view#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [删除](module/Insight/insight_report#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [取消星标](module/Insight/insight_view#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [新建类别](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [编辑](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [删除](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [编辑](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [新建分组](module/Insight/insight_report#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [复制视图](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [编辑基本信息](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图首页视图](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [设置星标](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [视图成员](module/Insight/insight_view#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [编辑](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [树界面_刷新全部操作](module/Insight/insight_report#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图导航页](module/Insight/insight_view#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [删除](module/Insight/insight_report#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [更多设置](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [设置管理员](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [视图信息](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图配置](module/Insight/insight_view#界面行为)

### 关联视图
  * [全部报表(insight_report_all_report_grid_view)](app/view/insight_report_all_report_grid_view)
  * [报表树导航(insight_report_report_tree_exp_view)](app/view/insight_report_report_tree_exp_view)
  * [全部视图(insight_view_all_grid_view)](app/view/insight_view_all_grid_view)
  * [效能度量(insight_view_config_tree_exp_view)](app/view/insight_view_config_tree_exp_view)
  * [仪表盘(insight_view_custom_view)](app/view/insight_view_custom_view)
  * [效能视图(insight_view_edit_view)](app/view/insight_view_edit_view)
  * [效能度量(insight_view_index_view)](app/view/insight_view_index_view)
  * [组织视图(insight_view_org_grid_view)](app/view/insight_view_org_grid_view)
  * [个人视图(insight_view_person_grid_view)](app/view/insight_view_person_grid_view)
  * [视图配置(insight_view_setting_view)](app/view/insight_view_setting_view)
  * [视图信息(insight_view_show_edit_view)](app/view/insight_view_show_edit_view)
  * [团队视图(insight_view_team_grid_view)](app/view/insight_view_team_grid_view)
  * [效能度量(insight_view_tree_exp_view)](app/view/insight_view_tree_exp_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>