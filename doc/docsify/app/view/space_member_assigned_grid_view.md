# 空间成员(space_member_assigned_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [新建空间默认临时成员](module/Wiki/space_member/uilogic/create_default_temp_members)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间成员(SPACE_MEMBER)](module/Wiki/space_member) : [表格界面_新建操作](module/Wiki/space_member#界面行为)
  * [空间成员(SPACE_MEMBER)](module/Wiki/space_member) : [移除成员](module/Wiki/space_member#界面行为)

### 关联界面逻辑
  * [空间成员(SPACE_MEMBER)](module/Wiki/space_member) : [新建空间默认临时成员](module/Wiki/space_member/uilogic/create_default_temp_members)

### 关联视图
  * [空间成员(space_member_edit_view)](app/view/space_member_edit_view)
  * [空间成员(space_member_redirect_view)](app/view/space_member_redirect_view)
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