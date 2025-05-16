# 空间(space_mob_list_form_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [草稿箱(移动端)](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [空间成员(移动端)](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [高级设置（移动端）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [空间设置（移动端）](module/Wiki/space#界面行为)

### 关联视图
  * [草稿箱(article_page_mob_draft_list_view)](app/view/article_page_mob_draft_list_view)
  * [页面(article_page_mob_list_view)](app/view/article_page_mob_list_view)
  * [空间成员(space_member_mob_list_view)](app/view/space_member_mob_list_view)
  * [高级设置(space_mob_advanced_set_view)](app/view/space_mob_advanced_set_view)
  * [空间设置(space_mob_setting_view)](app/view/space_mob_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>