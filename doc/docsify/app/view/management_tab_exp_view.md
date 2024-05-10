# 管理后台(management_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建团队](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建分组](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [树界面_刷新全部操作](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)

### 关联视图
  * [新建团队(group_quick_create_view)](app/view/group_quick_create_view)
  * [团队(group_tree_exp_view)](app/view/group_tree_exp_view)
  * [编辑团队(group_update_view)](app/view/group_update_view)
  * [活跃成员(login_log_active_members)](app/view/login_log_active_members)
  * [概览(login_log_over_view)](app/view/login_log_over_view)
  * [配置中心(management_config_tab_exp_view)](app/view/management_config_tab_exp_view)
  * [成员(member_grid_view)](app/view/member_grid_view)
  * [成员管理(user_grid_view)](app/view/user_grid_view)
  * [成员(user_tab_exp_view)](app/view/user_tab_exp_view)
  * [成员管理(user_tree_exp_view)](app/view/user_tree_exp_view)
  * [成员管理(user_unassigned_dept_grid_view)](app/view/user_unassigned_dept_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>