# 空间管理(space_archived_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [已归档_激活](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [已归档_删除](module/Wiki/space#界面行为)

### 关联视图
  * [空间(space_edit_view)](app/view/space_edit_view)
  * [空间信息(space_info_view)](app/view/space_info_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>