# 评论(comment_ticket_list_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评论(COMMENT)](module/Base/comment) : [回复](module/Base/comment#界面行为)
  * [评论(COMMENT)](module/Base/comment) : [编辑](module/Base/comment#界面行为)

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