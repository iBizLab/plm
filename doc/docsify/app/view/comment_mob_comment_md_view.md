# 评论(comment_mob_comment_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * 打开人员选择视图（移动端）
  * 打开最近访问选择视图（移动端）
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评论(COMMENT)](module/Base/comment) : [删除评论](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [发送评论（移动端）](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [回复](module/Base/comment#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>