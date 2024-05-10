# 选择成员(user_choose_mpick_up_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 选择视图面板(pickupviewpanel)
#### 列表(simplelist)
#### 树视图导航栏(treeexpbar)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [视图_确定](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [视图_取消](module/Base/user#界面行为)

### 关联视图
  * [用户选择(user_choose_pick_up_grid_view)](app/view/user_choose_pick_up_grid_view)
  * [成员管理(user_grid_view)](app/view/user_grid_view)
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