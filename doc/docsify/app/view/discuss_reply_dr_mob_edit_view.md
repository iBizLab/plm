# 回复评论(discuss_reply_dr_mob_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)

## 视图界面逻辑
  * [获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)
* `onLoadSuccess`
```javascript
view.layoutPanel.panelItems.send_comment_container.state.visible=false;
```


### 关联界面行为
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [发送](module/Team/discuss_reply#界面行为)

### 关联视图
  * [评论(comment_dis_comment_mob_md_view)](app/view/comment_dis_comment_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>