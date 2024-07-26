# 版本(version_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)


### 关联界面行为
  * [版本(VERSION)](module/Base/version) : [工作项版本对比](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [编辑版本](module/Base/version#界面行为)
  * [版本(VERSION)](module/Base/version) : [恢复版本](module/Base/version#界面行为)

### 关联界面逻辑
  * [版本(VERSION)](module/Base/version) : [计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)

### 关联视图
  * [编辑版本(version_edit_version_view)](app/view/version_edit_version_view)
  * [版本对比(work_item_version_comparison_view)](app/view/work_item_version_comparison_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>