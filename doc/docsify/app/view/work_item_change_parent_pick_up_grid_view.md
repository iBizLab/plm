# 工作项(work_item_change_parent_pick_up_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加




## 控件
#### CAPTIONBAR(captionbar)

#### 数据表格(grid)

#### 搜索栏(searchbar)

#### 搜索表单(searchform)


## 视图界面逻辑
  * [计算父工作项类型](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)


### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [计算父工作项类型](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>