# 新建项目集(portfolio_project_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [批量删除项目集成员临时数据](module/Base/portfolio/uilogic/remove_batch_temp)

### 关联视图
  * [文件夹成员(portfolio_member_project_bind_member_grid_view)](app/view/portfolio_member_project_bind_member_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>