# 执行用例(run_history_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [执行用例(run_main_view)](app/view/run_main_view)
  * [执行用例(run_redirect_view)](app/view/run_redirect_view)
  * [用例(test_case_mpick_up_view)](app/view/test_case_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>