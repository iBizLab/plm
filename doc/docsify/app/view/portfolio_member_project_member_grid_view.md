# 项目集成员(portfolio_member_project_member_grid_view)  <!-- {docsify-ignore-all} -->


项目集成员表格视图



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
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [设置角色](module/Base/portfolio_member#界面行为)
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [表格界面_新建操作_通用](module/Base/portfolio_member#界面行为)
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [表格界面_删除操作](module/Base/portfolio_member#界面行为)

### 关联视图
  * [文件夹成员(portfolio_member_edit_view)](app/view/portfolio_member_edit_view)
  * [设置角色(portfolio_member_role_edit_view)](app/view/portfolio_member_role_edit_view)
  * [选择项目集(portfolio_mpick_up_view)](app/view/portfolio_mpick_up_view)
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