# 组织话题(discuss_topic_mob_org_topic)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [设置星标](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [取消星标](module/Team/discuss_topic#界面行为)

### 关联视图
  * [话题(discuss_post_topic_mob_list_view)](app/view/discuss_post_topic_mob_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>