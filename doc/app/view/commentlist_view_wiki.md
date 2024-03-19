# 评论(commentlist_view_wiki)  <!-- {docsify-ignore-all} -->






## 控件
  * 列表(list)
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [评论(COMMENT)](module/Base/Comment) : [发送评论](module/Base/Comment#界面行为)
  * [评论(COMMENT)](module/Base/Comment) : [清空评论](module/Base/Comment#界面行为)
  * [评论(COMMENT)](module/Base/Comment) : [编辑](module/Base/Comment#界面行为)
  * [评论(COMMENT)](module/Base/Comment) : [删除评论](module/Base/Comment#界面行为)
  * [评论(COMMENT)](module/Base/Comment) : [回复](module/Base/Comment#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>