# 新建空间(spacecreate_wizard_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 向导面板(wizardpanel)
  * CAPTIONBAR(captionbar)


### 关联视图
  * [空间选择(spacepick_up_tree_view)](app/view/spacepick_up_tree_view)
  * [空间成员(space_membergrid_view_assigned)](app/view/space_membergrid_view_assigned)

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