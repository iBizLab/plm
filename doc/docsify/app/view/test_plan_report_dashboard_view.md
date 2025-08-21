# 测试报告(test_plan_report_dashboard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据看板(dashboard)

##### 部件逻辑
* `onCreated` : [设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)
* `onResetPortlet` : [设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)
#### 搜索栏(searchbar)


### 关联界面逻辑
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)

### 关联视图
  * [测试计划(test_plan_conclude_edit_view)](app/view/test_plan_conclude_edit_view)
  * [报告概览(test_plan_report_survey_custom_view)](app/view/test_plan_report_survey_custom_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>