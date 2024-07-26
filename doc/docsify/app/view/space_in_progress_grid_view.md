# 空间管理(space_in_progress_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [空间(SPACE)](module/Wiki/space) : [设置管理员](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [进行中_删除](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [进行中_归档](module/Wiki/space#界面行为)

### 关联视图
  * [空间(space_edit_view)](app/view/space_edit_view)
  * [空间信息(space_info_view)](app/view/space_info_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>