# 文件夹成员(portfolio_member_project_bind_member_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [新建项目集默认临时成员](module/Base/portfolio_member/uilogic/default_project_member)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [表格界面_新建操作](module/Base/portfolio_member#界面行为)
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [移除成员](module/Base/portfolio_member#界面行为)

### 关联界面逻辑
  * [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member) : [新建项目集默认临时成员](module/Base/portfolio_member/uilogic/default_project_member)

### 关联视图
  * [文件夹成员(portfolio_member_edit_view)](app/view/portfolio_member_edit_view)
  * [文件夹成员(portfolio_member_redirect_view)](app/view/portfolio_member_redirect_view)
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