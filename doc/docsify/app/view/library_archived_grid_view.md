# 测试库管理(library_archived_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/library) : [已归档_激活](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [删除](module/TestMgmt/library#界面行为)

### 关联视图
  * [测试库(library_index_view)](app/view/library_index_view)
  * [测试库(library_redirect_view)](app/view/library_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>