# 流程设计(category_workflow_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [类别(CATEGORY)](module/Base/category) : [表格界面_新建操作](module/Base/category#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [删除](module/Base/category#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [流程_查看审批单](module/Base/category#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [编辑](module/Base/category#界面行为)
  * [类别(CATEGORY)](module/Base/category) : [流程_设计](module/Base/category#界面行为)

### 关联视图
  * [类别(category_redirect_view)](app/view/category_redirect_view)
  * [工作流表(category_workflow_edit_view)](app/view/category_workflow_edit_view)
  * [工作流版本设计(pswfversiondesign)](app/view/pswfversiondesign)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>