# 测试计划(test_plan_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [结束测试](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [编辑](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [删除](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [开始测试](module/TestMgmt/test_plan#界面行为)

### 关联界面逻辑
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)

### 关联视图
  * [编辑测试计划(test_plan_update_option_view)](app/view/test_plan_update_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>