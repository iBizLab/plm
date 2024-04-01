# 测试计划(test_planPickupGridView)  <!-- {docsify-ignore-all} -->

系统自动添加




## 控件
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 数据表格(grid)
  * 搜索栏(searchbar)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [开始测试](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [结束测试](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [编辑](module/TestMgmt/Test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) : [删除](module/TestMgmt/Test_plan#界面行为)

### 关联视图
  * [编辑测试计划(test_planupdate_view)](app/view/test_planupdate_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>