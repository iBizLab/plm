# 成员管理(user_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [删除部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [删除部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑组织](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [新建下级部门](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [编辑部门](module/Base/user#界面行为)

### 关联视图
  * [成员帐号(user_account_tab_exp_view)](app/view/user_account_tab_exp_view)
  * [失效帐号管理(user_invalid_grid_view)](app/view/user_invalid_grid_view)
  * [成员管理(user_unassigned_dept_grid_view)](app/view/user_unassigned_dept_grid_view)
  * [正常帐号管理(user_valid_grid_view)](app/view/user_valid_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>