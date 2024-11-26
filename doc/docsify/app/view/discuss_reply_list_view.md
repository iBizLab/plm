# 讨论回复(discuss_reply_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取回复列表条数](module/Team/discuss_reply/uilogic/get_reply_num)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [回复下发送评论](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [回复下删除评论](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [编辑](module/Team/discuss_reply#界面行为)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [删除回复](module/Team/discuss_reply#界面行为)

### 关联界面逻辑
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [获取回复列表条数](module/Team/discuss_reply/uilogic/get_reply_num)
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [回复下发送评论](module/Team/discuss_reply/uilogic/reply_send_comment)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>