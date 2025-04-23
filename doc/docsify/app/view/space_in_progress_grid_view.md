# 空间管理(space_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [设置管理员](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间配置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间主页面](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [进行中_删除](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [进行中_归档](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开空间导航页](module/Wiki/space#界面行为)

### 关联视图
  * [页面(article_page_filter_grid_view)](app/view/article_page_filter_grid_view)
  * [我的收藏(article_page_my_favorite_page_grid_view)](app/view/article_page_my_favorite_page_grid_view)
  * [与我共享(article_page_shared_with_me_grid_view)](app/view/article_page_shared_with_me_grid_view)
  * [最近访问(recent_recent_page_grid_view)](app/view/recent_recent_page_grid_view)
  * [全部空间(space_all_grid_view)](app/view/space_all_grid_view)
  * [全部空间(space_category_grid_view)](app/view/space_category_grid_view)
  * [配置中心(space_config_tree_exp_view)](app/view/space_config_tree_exp_view)
  * [空间(space_edit_view)](app/view/space_edit_view)
  * [空间(space_index_view)](app/view/space_index_view)
  * [空间信息(space_info_view)](app/view/space_info_view)
  * [归档空间(space_is_archived_grid_view)](app/view/space_is_archived_grid_view)
  * [组织空间(space_org_grid_view)](app/view/space_org_grid_view)
  * [个人空间(space_person_grid_view)](app/view/space_person_grid_view)
  * [团队空间(space_team_grid_view)](app/view/space_team_grid_view)
  * [知识管理(space_tree_exp_view)](app/view/space_tree_exp_view)
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