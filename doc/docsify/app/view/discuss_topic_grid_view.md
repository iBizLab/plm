# 话题(discuss_topic_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(discuss_topic)](module/Team/discuss_topic/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [更多设置](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [编辑基本信息](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [回收站](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [设置星标](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [话题成员](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [话题信息](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [新开窗口（话题）](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [取消星标](module/Team/discuss_topic#界面行为)

### 关联界面逻辑
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [计算表格列行为状态(discuss_topic)](module/Team/discuss_topic/uilogic/calc_column_action_state)

### 关联视图
  * [话题(discuss_topic_edit_view)](app/view/discuss_topic_edit_view)
  * [话题(discuss_topic_setting_view)](app/view/discuss_topic_setting_view)
  * [话题(discuss_topic_show_edit_view)](app/view/discuss_topic_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>