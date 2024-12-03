# 迭代列表(sprint_sprint_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [刷新](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [全屏](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [打开迭代](module/ProjMgmt/sprint#界面行为)

### 关联视图
  * [迭代(sprint_edit_view)](app/view/sprint_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>