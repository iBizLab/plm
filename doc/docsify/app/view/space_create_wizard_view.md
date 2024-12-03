# 新建空间(space_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [空间(SPACE)](module/Wiki/space) : [批量删除空间成员临时数据](module/Wiki/space/uilogic/remove_batch_temp)

### 关联视图
  * [空间成员(space_member_assigned_grid_view)](app/view/space_member_assigned_grid_view)
  * [空间选择(space_pick_up_tree_view)](app/view/space_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>