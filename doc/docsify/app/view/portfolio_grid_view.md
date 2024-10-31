# 文件夹(portfolio_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(portfolio)](module/Base/portfolio/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [设置星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [取消星标](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [新开窗口（项目集）](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集成员](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [编辑基本信息（项目集）](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [更多设置（项目集）](module/Base/portfolio#界面行为)
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [项目集信息](module/Base/portfolio#界面行为)

### 关联界面逻辑
  * [文件夹(PORTFOLIO)](module/Base/portfolio) : [计算表格列行为状态(portfolio)](module/Base/portfolio/uilogic/calc_column_action_state)

### 关联视图
  * [文件夹(portfolio_project_show_view)](app/view/portfolio_project_show_view)
  * [项目集配置(portfolio_setting_view)](app/view/portfolio_setting_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>