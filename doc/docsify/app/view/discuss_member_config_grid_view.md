# 话题成员(discuss_member_config_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member) : [职位变更](module/Team/discuss_member#界面行为)
  * [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member) : [表格界面_新建操作](module/Team/discuss_member#界面行为)
  * [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member) : [表格界面_删除操作](module/Team/discuss_member#界面行为)
  * [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member) : [设置角色](module/Team/discuss_member#界面行为)

### 关联视图
  * [职位选择(discuss_member_choose_position_option_view)](app/view/discuss_member_choose_position_option_view)
  * [协作成员(discuss_member_edit_view)](app/view/discuss_member_edit_view)
  * [协作成员(discuss_member_redirect_view)](app/view/discuss_member_redirect_view)
  * [设置角色(discuss_member_role_edit_view)](app/view/discuss_member_role_edit_view)
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