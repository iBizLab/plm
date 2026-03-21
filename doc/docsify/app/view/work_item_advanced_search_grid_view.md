# 工作项(work_item_advanced_search_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(tabsearchform)

##### 部件逻辑
* `onBeforeLoadDraft`
```
viewParam.queryconds=["n_title_like", "n_identifier_like", "n_description_like"];
```

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [打开主视图（模态弹出）](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [工作项(work_item_dyna_main_view_pop_up)](app/view/work_item_dyna_main_view_pop_up)
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>