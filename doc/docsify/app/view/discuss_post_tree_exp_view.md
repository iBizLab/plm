# 讨论(discuss_post_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [全部讨论(discuss_post_all_grid_view)](app/view/discuss_post_all_grid_view)
  * [我关注的(discuss_post_my_attention_grid_view)](app/view/discuss_post_my_attention_grid_view)
  * [我发起的(discuss_post_my_create_grid_view)](app/view/discuss_post_my_create_grid_view)
  * [我回复的(discuss_post_my_reply_grid_view)](app/view/discuss_post_my_reply_grid_view)
  * [最新回复(discuss_reply_latest_grid_view)](app/view/discuss_reply_latest_grid_view)
  * [我的回复(discuss_reply_my_grid_view)](app/view/discuss_reply_my_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>