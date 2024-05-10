# 工作项(work_item_run_re_work_item_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取工作项总条数](module/ProjMgmt/work_item/uilogic/get_work_item_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)
  * [工作项(work_item_main_view)](app/view/work_item_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>