# 共享空间(shared_space_shared_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [共享空间(SHARED_SPACE)](module/Wiki/shared_space) : [关闭共享（表格操作列）](module/Wiki/shared_space#界面行为)
  * [共享空间(SHARED_SPACE)](module/Wiki/shared_space) : [空间共享设置(配置中心)](module/Wiki/shared_space#界面行为)

### 关联视图
  * [共享空间(shared_space_edit_view)](app/view/shared_space_edit_view)
  * [共享空间(shared_space_setting_center_view)](app/view/shared_space_setting_center_view)
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