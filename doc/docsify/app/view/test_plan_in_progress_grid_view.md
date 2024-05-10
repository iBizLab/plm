# 测试计划(test_plan_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试计划(TEST_PLAN)](module/TestMgmt/test_plan) : [打开测试库首页](module/TestMgmt/test_plan#界面行为)

### 关联视图
  * [测试库(library_redirect_view)](app/view/library_redirect_view)
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