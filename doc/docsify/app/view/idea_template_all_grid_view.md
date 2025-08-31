# 需求模板(idea_template_all_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template) : [编辑模板](module/ProdMgmt/idea_template#界面行为)
  * [需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template) : [表格界面_新建操作_子数据](module/ProdMgmt/idea_template#界面行为)
  * [需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template) : [删除模板](module/ProdMgmt/idea_template#界面行为)

### 关联视图
  * [需求模板(idea_template_create_edit_view)](app/view/idea_template_create_edit_view)
  * [模板(idea_template_edit_view)](app/view/idea_template_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>