# 新建话题(discuss_topic_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [批量删除话题成员临时数据](module/Team/discuss_topic/uilogic/remove_batch_temp)

### 关联视图
  * [协作成员(discuss_member_bind_grid_view)](app/view/discuss_member_bind_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>