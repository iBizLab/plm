# 用户信息自定义视图(user_info_custom_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [主题设置](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [帐号设置](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [通知设置](module/Base/user#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [打开更新日志](module/Wiki/article_page#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开日志列表](module/Base/user#界面行为)

### 关联视图
  * [更新(article_page_show_update_log_view)](app/view/article_page_show_update_log_view)
  * [PLM系统更新日志(article_page_updated_logs)](app/view/article_page_updated_logs)
  * [通知设置(notify_setting_config_view)](app/view/notify_setting_config_view)
  * [帐号设置(user_setting_view)](app/view/user_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>