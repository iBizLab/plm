# 项目配置(project_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 数据关系栏(drbar)
#### 编辑表单(form)


### 关联视图
  * [项目组件(addon_project_setting_grid_view)](app/view/addon_project_setting_grid_view)
  * [高级设置(project_advanced_setting_edit_view)](app/view/project_advanced_setting_edit_view)
  * [基本信息(project_base_information_edit_view)](app/view/project_base_information_edit_view)
  * [项目成员(project_member_config_grid_view)](app/view/project_member_config_grid_view)
  * [项目属性(psde_field_data_extend_grid_view)](app/view/psde_field_data_extend_grid_view)
  * [工作项属性(psde_field_work_item_extend_transmit_grid_view)](app/view/psde_field_work_item_extend_transmit_grid_view)
  * [回收站(work_item_recycle_bin_grid_view)](app/view/work_item_recycle_bin_grid_view)
  * [工作项类型(work_item_type_setting_view_scrum)](app/view/work_item_type_setting_view_scrum)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>