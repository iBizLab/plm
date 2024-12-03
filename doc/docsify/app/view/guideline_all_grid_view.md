# 评审配置(guideline_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [流程准则(GUIDELINE)](module/TestMgmt/guideline) : [配置流程准则](module/TestMgmt/guideline#界面行为)

### 关联视图
  * [流程配置(guideline_config_option_view)](app/view/guideline_config_option_view)
  * [流程准则(guideline_edit_view)](app/view/guideline_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>