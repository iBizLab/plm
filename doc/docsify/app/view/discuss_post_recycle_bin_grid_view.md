# 回收站(discuss_post_recycle_bin_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [讨论(DISCUSS_POST)](module/Team/discuss_post) : [恢复](module/Team/discuss_post#界面行为)

### 关联视图
  * [讨论(discuss_post_edit_view)](app/view/discuss_post_edit_view)
  * [讨论(discuss_post_redirect_view)](app/view/discuss_post_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>