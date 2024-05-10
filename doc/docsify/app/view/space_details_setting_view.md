# 空间配置(space_details_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [回收站(article_page_recycle_grid_view)](app/view/article_page_recycle_grid_view)
  * [数据统计(article_page_statistical_grid_view)](app/view/article_page_statistical_grid_view)
  * [高级设置(space_advanced_setting_view)](app/view/space_advanced_setting_view)
  * [基本信息(space_base_info_edit_view)](app/view/space_base_info_edit_view)
  * [空间成员(space_member_config_grid_view)](app/view/space_member_config_grid_view)
  * [页面模板(stencil_space_all_grid_view)](app/view/stencil_space_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>