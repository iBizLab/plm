# 效能度量(insight_view_deleted_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [已删除_恢复](module/Insight/insight_view#界面行为)

### 关联视图
  * [效能视图(insight_view_edit_view)](app/view/insight_view_edit_view)
  * [视图信息(insight_view_show_edit_view)](app/view/insight_view_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>