# 测试计划(test_plan_release_relation_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * 关联跳转测试计划主视图
  * newdata(预置新建数据逻辑)


### 关联视图
  * [测试计划(test_plan_redirect_view)](app/view/test_plan_redirect_view)
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