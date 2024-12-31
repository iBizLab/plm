# 讨论(discuss_post_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)

## 视图界面逻辑
* `onViewMounted`
```javascript
console.log("控制评论容器显隐"+view);
const form = view.getController('form');
if (form) {
    form.evt.on('onFormDetailEvent', event =>{
        const panelItems = view.layoutPanel.panelItems;
        panelItems.send_comment_container.state.visible = false;
        if (!panelItems.comment_container) {
            return;
        }
        if (form.details.tabpanel1) {
            const activeTab = form.details.tabpanel1.state.activeTab;
            panelItems.comment_container.state.visible = activeTab === 'detailpage';
        }
    });
}
```
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)
* `onBeforeLoad`
```javascript
view.layoutPanel.panelItems.send_comment_container.state.visible=false;
```


### 关联界面行为
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开讨论树导航视图（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [关闭](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [删除](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [移动（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [发送](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开讨论关注列表（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开搜索页](module/Team/discuss_post#界面行为)

### 关联视图
  * [页面(article_page_search_mob_md_view)](app/view/article_page_search_mob_md_view)
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [讨论关注(attention_mob_discuss_md_view)](app/view/attention_mob_discuss_md_view)
  * [评论(comment_dis_comment_mob_md_view)](app/view/comment_dis_comment_mob_md_view)
  * [讨论移动(discuss_post_mob_discuss_move_option_view)](app/view/discuss_post_mob_discuss_move_option_view)
  * [讨论(discuss_post_mob_discuss_post_tree)](app/view/discuss_post_mob_discuss_post_tree)
  * [最新讨论(discuss_post_mob_latest_discuss)](app/view/discuss_post_mob_latest_discuss)
  * [讨论(discuss_post_mob_list_view)](app/view/discuss_post_mob_list_view)
  * [我关注的(discuss_post_mob_my_attention)](app/view/discuss_post_mob_my_attention)
  * [我发起的(discuss_post_mob_my_create_discuss)](app/view/discuss_post_mob_my_create_discuss)
  * [我回复的(discuss_post_mob_my_reply_discuss)](app/view/discuss_post_mob_my_reply_discuss)
  * [移动端讨论搜索(discuss_post_mob_search_md_view)](app/view/discuss_post_mob_search_md_view)
  * [回复(discuss_reply_dr_mob_md_view)](app/view/discuss_reply_dr_mob_md_view)
  * [团队话题(discuss_topic_mob_group_topic)](app/view/discuss_topic_mob_group_topic)
  * [话题(discuss_topic_mob_list_view)](app/view/discuss_topic_mob_list_view)
  * [组织话题(discuss_topic_mob_org_topic)](app/view/discuss_topic_mob_org_topic)
  * [需求(idea_search_mob_md_view)](app/view/idea_search_mob_md_view)
  * [检索中心(search_hub_mob_tab_search_view)](app/view/search_hub_mob_tab_search_view)
  * [移动端用例搜索(test_case_mob_search_md_view)](app/view/test_case_mob_search_md_view)
  * [移动端页面搜索(ticket_mob_search_md_view)](app/view/ticket_mob_search_md_view)
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