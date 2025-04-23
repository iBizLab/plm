# 成员(user_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [职位(POSITION)](module/Base/position) : [删除](module/Base/position#界面行为)
  * [企业用户(USER)](module/Base/user) : [删除部门](module/Base/user#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [编辑](module/Base/category#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建团队](module/Base/group#界面行为)
  * [职位(POSITION)](module/Base/position) : [树界面_刷新全部操作](module/Base/position#界面行为)
  * [企业用户(USER)](module/Base/user) : [删除部门](module/Base/user#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑组织](module/Base/user#界面行为)
  * [职位(POSITION)](module/Base/position) : [删除](module/Base/position#界面行为)
  * [职位(POSITION)](module/Base/position) : [新建职位](module/Base/position#界面行为)
  * [团队(GROUP)](module/Base/group) : [新建分组](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [删除](module/Base/category#界面行为)
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [团队(GROUP)](module/Base/group) : [删除](module/Base/group#界面行为)
  * [团队(GROUP)](module/Base/group) : [编辑](module/Base/group#界面行为)
  * [职位(POSITION)](module/Base/position) : [编辑](module/Base/position#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑部门](module/Base/user#界面行为)
  * [职位(POSITION)](module/Base/position) : [编辑](module/Base/position#界面行为)
  * [团队(GROUP)](module/Base/group) : [树界面_刷新全部操作](module/Base/group#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [职位(POSITION)](module/Base/position) : [新建分组](module/Base/position#界面行为)

### 关联视图
  * [新建团队(group_quick_create_view)](app/view/group_quick_create_view)
  * [团队(group_tree_exp_view)](app/view/group_tree_exp_view)
  * [编辑团队(group_update_view)](app/view/group_update_view)
  * [成员(member_grid_view)](app/view/member_grid_view)
  * [职位(position_tree_exp_view)](app/view/position_tree_exp_view)
  * [成员帐号(user_account_tab_exp_view)](app/view/user_account_tab_exp_view)
  * [成员管理(user_grid_view)](app/view/user_grid_view)
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