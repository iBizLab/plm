# 选择计划(test_plan_pick_up_around_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 选择视图面板(pickupviewpanel)
#### 树视图导航栏(treeexpbar)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [视图_取消](module/TestMgmt/test_plan#界面行为)
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [确定](module/TestMgmt/test_plan#界面行为)

### 关联视图
  * [全部计划(test_plan_all_grid_view)](app/view/test_plan_all_grid_view)
  * [测试计划(test_plan_pick_up_around_gird_view)](app/view/test_plan_pick_up_around_gird_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>