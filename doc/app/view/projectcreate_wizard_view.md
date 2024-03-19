# 新建项目(projectcreate_wizard_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 向导面板(wizardpanel)
  * CAPTIONBAR(captionbar)


### 关联视图
  * [项目成员(project_membergrid_view_assigned)](app/view/project_membergrid_view_assigned)

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