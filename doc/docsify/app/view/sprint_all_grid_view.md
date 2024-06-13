# 全部迭代(sprint_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [开始迭代](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [结束迭代](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [删除](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [表格界面_新建操作](module/ProjMgmt/sprint#界面行为)
  * [迭代(SPRINT)](module/ProjMgmt/sprint) : [编辑](module/ProjMgmt/sprint#界面行为)

### 关联视图
  * [确认完成(sprint_confirm_finish_view)](app/view/sprint_confirm_finish_view)
  * [迭代(sprint_main_view)](app/view/sprint_main_view)
  * [新建迭代(sprint_quick_create_view)](app/view/sprint_quick_create_view)
  * [编辑迭代(sprint_update_view)](app/view/sprint_update_view)
  * [全部工作项(work_item_sprint_grid_view)](app/view/work_item_sprint_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>