# 评论(comment_wiki_list_view)  <!-- {docsify-ignore-all} -->




## 控件
#### CAPTIONBAR(captionbar)

#### 列表(list)

#### 搜索栏(searchbar)



### 关联界面行为
  * [评论(COMMENT)](module/Base/comment) : [回复](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [发送评论](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [删除评论](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [清空评论](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [编辑](module/Base/comment#界面行为)

### 关联界面逻辑
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)
  * [评论(COMMENT)](module/Base/comment) : [控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)

### 关联视图
  * [评论(comment_edit_view)](app/view/comment_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>