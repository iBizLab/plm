# 知识(space_mob_tab_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据关系分页部件(tabexppanel)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开密码修改页](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开用户基本信息](module/Base/user#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [打开用户设置](module/Wiki/space#界面行为)

### 关联视图
  * [页面(article_page_favorite_mob_list_view)](app/view/article_page_favorite_mob_list_view)
  * [页面(article_page_recent_mob_list_view)](app/view/article_page_recent_mob_list_view)
  * [页面(article_page_shared_mob_list_view)](app/view/article_page_shared_mob_list_view)
  * [知识(space_mob_list_view)](app/view/space_mob_list_view)
  * [修改密码(user_change_password_view)](app/view/user_change_password_view)
  * [企业用户(user_custom_setting_view)](app/view/user_custom_setting_view)
  * [企业用户(user_mob_user_info_view)](app/view/user_mob_user_info_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>