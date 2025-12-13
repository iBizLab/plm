# 协作空间(discuss_topic_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [话题(DISCUSS_TOPIC)](module/Team/discuss_topic) : [返回](module/Team/discuss_topic#界面行为)

### 关联视图
  * [话题(discuss_topic_in_progress_grid_view)](app/view/discuss_topic_in_progress_grid_view)
  * [话题(discuss_topic_is_archived_grid_view)](app/view/discuss_topic_is_archived_grid_view)
  * [话题(discuss_topic_is_deleted_grid_view)](app/view/discuss_topic_is_deleted_grid_view)
  * [话题管理(discuss_topic_management_tab_exp_view)](app/view/discuss_topic_management_tab_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>