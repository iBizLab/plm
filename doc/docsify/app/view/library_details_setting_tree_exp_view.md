# 测试库配置(library_details_setting_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [高级设置(library_advanced_setting_edit_view)](app/view/library_advanced_setting_edit_view)
  * [基本信息(library_base_info_edit_view)](app/view/library_base_info_edit_view)
  * [测试库成员(library_member_config_grid_view)](app/view/library_member_config_grid_view)
  * [回收站(test_case_recycle_grid_view)](app/view/test_case_recycle_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>