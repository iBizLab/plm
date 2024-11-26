# 空间(space_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(space)](module/Wiki/space/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [查看空间成员](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [更多设置](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [回收站](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [编辑空间基本信息](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [设置星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [新开窗口（空间）](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [查看空间信息](module/Wiki/space#界面行为)

### 关联界面逻辑
  * [空间(SPACE)](module/Wiki/space) : [计算表格列行为状态(space)](module/Wiki/space/uilogic/calc_column_action_state)

### 关联视图
  * [空间(space_edit_view)](app/view/space_edit_view)
  * [空间信息(space_info_view)](app/view/space_info_view)
  * [空间配置(space_setting_view)](app/view/space_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>