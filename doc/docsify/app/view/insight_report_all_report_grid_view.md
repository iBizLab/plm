# 全部报表(insight_report_all_report_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [设置类别](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [打开报表设计界面](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [删除](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [打开BI报表设计图面板视图](module/Insight/insight_report#界面行为)
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [编辑](module/Insight/insight_report#界面行为)

### 关联视图
  * [基础信息变更(insight_report_baseinfo_edit_view)](app/view/insight_report_baseinfo_edit_view)
  * [BI报表呈现态面板视图(insight_report_bi_report_content_panel_view)](app/view/insight_report_bi_report_content_panel_view)
  * [BI报表设计态面板视图(insight_report_bi_report_panel_view)](app/view/insight_report_bi_report_panel_view)
  * [效能报表(insight_report_edit_view)](app/view/insight_report_edit_view)
  * [设置类别(insight_report_set_category_option_view)](app/view/insight_report_set_category_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>