# 工作(work_item_set_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [工作(WORK)](module/Base/work) : [选择项目集](module/Base/work#界面行为)
  * [工作(WORK)](module/Base/work) : [选择项目](module/Base/work#界面行为)

### 关联视图
  * [选择项目集(portfolio_mpick_up_view)](app/view/portfolio_mpick_up_view)
  * [选择项目(project_mpick_up_view)](app/view/project_mpick_up_view)
  * [工作(work_edit_view)](app/view/work_edit_view)
  * [工作(work_redirect_view)](app/view/work_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>