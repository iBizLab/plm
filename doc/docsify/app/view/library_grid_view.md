# 测试库(library_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(library)](module/TestMgmt/library/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/library) : [更多设置](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [编辑基本信息](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [取消星标](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [设置星标](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [回收站](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [新开窗口（测试库）](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库信息](module/TestMgmt/library#界面行为)
  * [测试库(LIBRARY)](module/TestMgmt/library) : [测试库成员](module/TestMgmt/library#界面行为)

### 关联界面逻辑
  * [测试库(LIBRARY)](module/TestMgmt/library) : [计算表格列行为状态(library)](module/TestMgmt/library/uilogic/calc_column_action_state)

### 关联视图
  * [新建测试库(library_create_wizard_view)](app/view/library_create_wizard_view)
  * [测试库配置(library_setting_view)](app/view/library_setting_view)
  * [测试库信息(library_show_edit_view)](app/view/library_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>