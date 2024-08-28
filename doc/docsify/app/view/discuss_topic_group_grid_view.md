# 团队话题(discuss_topic_group_grid_view)  <!-- {docsify-ignore-all} -->


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
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [打开话题首页视图](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [更多设置](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [打开话题配置](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [回收站](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [设置星标](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [话题成员](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [取消星标](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [打开话题导航页](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [话题信息](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [编辑基本信息](module/Team/discuss_topic#界面行为)
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [新开窗口（话题）](module/Team/discuss_topic#界面行为)

### 关联界面逻辑
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [计算表格列行为状态(discuss_topic)](module/Team/discuss_topic/uilogic/calc_column_action_state)

### 关联视图
  * [全部讨论(discuss_post_all_grid_view)](app/view/discuss_post_all_grid_view)
  * [我关注的(discuss_post_my_attention_grid_view)](app/view/discuss_post_my_attention_grid_view)
  * [我发起的(discuss_post_my_create_grid_view)](app/view/discuss_post_my_create_grid_view)
  * [我回复的(discuss_post_my_reply_grid_view)](app/view/discuss_post_my_reply_grid_view)
  * [最新讨论(discuss_post_recent_grid_view)](app/view/discuss_post_recent_grid_view)
  * [讨论(discuss_post_tree_exp_view)](app/view/discuss_post_tree_exp_view)
  * [最新回复(discuss_reply_latest_grid_view)](app/view/discuss_reply_latest_grid_view)
  * [我的回复(discuss_reply_my_grid_view)](app/view/discuss_reply_my_grid_view)
  * [全部话题(discuss_topic_all_grid_view)](app/view/discuss_topic_all_grid_view)
  * [归档话题(discuss_topic_archived_grid_view)](app/view/discuss_topic_archived_grid_view)
  * [协作空间(discuss_topic_config_tree_exp_view)](app/view/discuss_topic_config_tree_exp_view)
  * [话题(discuss_topic_edit_view)](app/view/discuss_topic_edit_view)
  * [话题(discuss_topic_index_view)](app/view/discuss_topic_index_view)
  * [组织话题(discuss_topic_org_grid_view)](app/view/discuss_topic_org_grid_view)
  * [话题(discuss_topic_setting_view)](app/view/discuss_topic_setting_view)
  * [话题(discuss_topic_show_edit_view)](app/view/discuss_topic_show_edit_view)
  * [协助空间(discuss_topic_tree_exp_view)](app/view/discuss_topic_tree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>