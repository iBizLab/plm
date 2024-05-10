# 文件夹(portfolio_project_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目集成员(portfolio_member_project_member_grid_view)](app/view/portfolio_member_project_member_grid_view)
  * [基本信息(portfolio_project_edit_view)](app/view/portfolio_project_edit_view)
  * [高级设置(portfolio_project_set_advanced_view)](app/view/portfolio_project_set_advanced_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>