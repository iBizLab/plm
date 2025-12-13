# 回复(discuss_reply_dr_mob_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [获取回复列表总条数（移动端）](module/Team/discuss_reply/uilogic/mob_get_reply_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply) : [讨论回复（移动端）](module/Team/discuss_reply#界面行为)

### 关联视图
  * [回复评论(discuss_reply_dr_mob_edit_view)](app/view/discuss_reply_dr_mob_edit_view)
  * [回复(discuss_reply_mob_dr_create_view)](app/view/discuss_reply_mob_dr_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>