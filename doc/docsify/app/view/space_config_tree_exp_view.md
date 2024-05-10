# 配置中心(space_config_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [空间管理(space_archived_grid_view)](app/view/space_archived_grid_view)
  * [空间分类(space_category_tree_exp_view)](app/view/space_category_tree_exp_view)
  * [空间管理(space_deleted_grid_view)](app/view/space_deleted_grid_view)
  * [空间管理(space_in_progress_grid_view)](app/view/space_in_progress_grid_view)
  * [空间管理(space_tab_exp_view)](app/view/space_tab_exp_view)
  * [页面模板(stencil_all_grid_view)](app/view/stencil_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>