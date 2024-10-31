# 讨论(discuss_post_mob_discuss_post_tree)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(lefttoolbar)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开密码修改页](module/Base/user#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开用户设置](module/Team/discuss_post#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开用户基本信息](module/Base/user#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开用户设置](module/Team/discuss_post#界面行为)

### 关联视图
  * [最新讨论(discuss_post_mob_latest_discuss)](app/view/discuss_post_mob_latest_discuss)
  * [讨论(discuss_post_mob_list_view)](app/view/discuss_post_mob_list_view)
  * [我关注的(discuss_post_mob_my_attention)](app/view/discuss_post_mob_my_attention)
  * [我发起的(discuss_post_mob_my_create_discuss)](app/view/discuss_post_mob_my_create_discuss)
  * [我回复的(discuss_post_mob_my_reply_discuss)](app/view/discuss_post_mob_my_reply_discuss)
  * [团队话题(discuss_topic_mob_group_topic)](app/view/discuss_topic_mob_group_topic)
  * [话题(discuss_topic_mob_list_view)](app/view/discuss_topic_mob_list_view)
  * [组织话题(discuss_topic_mob_org_topic)](app/view/discuss_topic_mob_org_topic)
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