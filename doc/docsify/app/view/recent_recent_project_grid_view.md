# 最近访问的项目(recent_recent_project_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [最近访问跳转其他视图](module/Base/recent/uilogic/recent_jump_other_view)
  * newdata(预置新建数据逻辑)


### 关联界面行为
  * [最近访问(RECENT)](module/Base/recent) : [打开首页](module/Base/recent#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>