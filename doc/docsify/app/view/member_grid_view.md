# 成员(member_grid_view)  <!-- {docsify-ignore-all} -->


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
  * [成员(MEMBER)](module/Base/member) : [添加成员](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [表格界面_删除操作](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [设置](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [设置](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [表格界面_删除操作](module/Base/member#界面行为)

### 关联视图
  * [成员(member_edit_view)](app/view/member_edit_view)
  * [设置角色(member_role_edit_view)](app/view/member_role_edit_view)
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