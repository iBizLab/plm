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
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [移动（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [关闭](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开讨论关注列表（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [打开话题讨论列表（移动端）](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [删除](module/Team/discuss_post#界面行为)
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [发送](module/Team/discuss_post#界面行为)

### 关联视图
  * [附件(attachment_mob_md_view)](app/view/attachment_mob_md_view)
  * [讨论关注(attention_mob_discuss_md_view)](app/view/attention_mob_discuss_md_view)
  * [评论(comment_dis_comment_mob_md_view)](app/view/comment_dis_comment_mob_md_view)
  * [讨论移动(discuss_post_mob_discuss_move_option_view)](app/view/discuss_post_mob_discuss_move_option_view)
  * [话题(discuss_post_topic_mob_list_view)](app/view/discuss_post_topic_mob_list_view)
  * [回复(discuss_reply_dr_mob_md_view)](app/view/discuss_reply_dr_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>