# 最近访问(recent_mob_home_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据视图(dataview)
#### 移动端多数据视图(list)

## 视图界面逻辑
  * [移动端最近访问跳转其他视图](module/Base/recent/uilogic/mob_recent_jump_other_view)
  * [移动端最近访问跳转其他视图](module/Base/recent/uilogic/mob_recent_jump_other_view)


### 关联界面行为
  * [最近访问(RECENT)](module/Base/recent) : [打开最近访问（移动端）](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我关注的事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我创建的事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(待完成事项)](module/Base/recent#界面行为)
  * [最近访问(RECENT)](module/Base/recent) : [打开移动端事项分页导航视图(我负责的事项)](module/Base/recent#界面行为)

### 关联视图
  * [我负责的事项(recent_mob_my_assignee_tab_exp_view)](app/view/recent_mob_my_assignee_tab_exp_view)
  * [我关注的事项(recent_mob_my_attention_tab_exp_view)](app/view/recent_mob_my_attention_tab_exp_view)
  * [我创建的的事项(recent_mob_my_created_tab_exp_view)](app/view/recent_mob_my_created_tab_exp_view)
  * [最近访问(recent_mob_recent_md_view)](app/view/recent_mob_recent_md_view)
  * [最近访问(recent_my_mob_tab_view)](app/view/recent_my_mob_tab_view)
  * [待完成事项(work_item_mob_not_completed_md_view)](app/view/work_item_mob_not_completed_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>