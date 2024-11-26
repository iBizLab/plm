# 发布阶段(stage_data_global_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [发布阶段(STAGE)](module/ProjMgmt/stage) : [编辑阶段](module/ProjMgmt/stage#界面行为)
  * [发布阶段(STAGE)](module/ProjMgmt/stage) : [表格界面_新建操作](module/ProjMgmt/stage#界面行为)
  * [发布阶段(STAGE)](module/ProjMgmt/stage) : [删除阶段](module/ProjMgmt/stage#界面行为)

### 关联视图
  * [确认删除(stage_del_confirm_view)](app/view/stage_del_confirm_view)
  * [新建发布阶段(stage_quick_create_view)](app/view/stage_quick_create_view)
  * [发布阶段(stage_redirect_view)](app/view/stage_redirect_view)
  * [修改阶段(stage_update_view)](app/view/stage_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>