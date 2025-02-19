# 角色成员(role_member_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [系统角色成员(ROLE_MEMBER)](module/Base/role_member) : [删除成员](module/Base/role_member#界面行为)
  * [系统角色成员(ROLE_MEMBER)](module/Base/role_member) : [表格界面_新建操作](module/Base/role_member#界面行为)

### 关联视图
  * [系统角色成员(role_member_edit_view)](app/view/role_member_edit_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>