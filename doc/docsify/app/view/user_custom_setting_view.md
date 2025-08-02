# 企业用户(user_custom_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [打开用户基本信息](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开密码修改页](module/Base/user#界面行为)

### 关联视图
  * [修改密码(user_change_password_view)](app/view/user_change_password_view)
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