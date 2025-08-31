# 讨论回复(discuss_reply_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [评论](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [回复下删除评论](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [删除回复](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [编辑](module/Team/discuss_reply#界面行为)

### 关联界面逻辑
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [编辑回复下评论](module/Team/discuss_post/uilogic/edit_reply_comment)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>