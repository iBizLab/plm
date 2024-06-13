# 话题(discuss_topic_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [进行中_删除](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [设置管理员](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [进行中_归档](module/Team/discuss_topic#界面行为)

### 关联视图
  * [话题(discuss_topic_edit_view)](app/view/discuss_topic_edit_view)
  * [话题(discuss_topic_show_edit_view)](app/view/discuss_topic_show_edit_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>