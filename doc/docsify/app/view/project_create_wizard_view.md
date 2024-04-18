# 新建项目(project_create_wizard_view)  <!-- {docsify-ignore-all} -->




## 控件
#### CAPTIONBAR(captionbar)

#### 向导面板(wizardpanel)



### 关联界面逻辑
  * [项目(PROJECT)](module/ProjMgmt/project) : [批量删除项目成员临时数据](module/ProjMgmt/project/uilogic/remove_batch_temp)

### 关联视图
  * [项目成员(project_member_assigned_grid_view)](app/view/project_member_assigned_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>