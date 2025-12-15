# 通知(psde_notify_notify_mob_customer_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 工具栏(toolbar)


### 关联界面行为
  * [企业用户(USER)](module/Base/user) : [打开密码修改页](module/Base/user#界面行为)
  * [企业用户(USER)](module/Base/user) : [应用登出](module/Base/user#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [打开搜索页](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [打开用户设置](module/extension/PSDENotify#界面行为)
  * [企业用户(USER)](module/Base/user) : [打开用户基本信息](module/Base/user#界面行为)

### 关联视图
  * [页面(article_page_search_mob_md_view)](app/view/article_page_search_mob_md_view)
  * [移动端讨论搜索(discuss_post_mob_search_md_view)](app/view/discuss_post_mob_search_md_view)
  * [需求(idea_search_mob_md_view)](app/view/idea_search_mob_md_view)
  * [检索中心(search_hub_mob_tab_search_view)](app/view/search_hub_mob_tab_search_view)
  * [移动端用例搜索(test_case_mob_search_md_view)](app/view/test_case_mob_search_md_view)
  * [移动端页面搜索(ticket_mob_search_md_view)](app/view/ticket_mob_search_md_view)
  * [修改密码(user_change_password_view)](app/view/user_change_password_view)
  * [企业用户(user_custom_setting_view)](app/view/user_custom_setting_view)
  * [企业用户(user_mob_user_info_view)](app/view/user_mob_user_info_view)
  * [工作项(work_item_search_mob_md_view)](app/view/work_item_search_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>