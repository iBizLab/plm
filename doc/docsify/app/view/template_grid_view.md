# 通用模板(template_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [通用模板(TEMPLATE)](module/Base/template) : [使用此模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [查看需求内容模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [查看用例内容模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [新建工作项模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [查看工作项内容模板](module/Base/template#界面行为)

### 关联视图
  * [新建模板(template_create_work_item_template_view)](app/view/template_create_work_item_template_view)
  * [通用模板(template_edit_view)](app/view/template_edit_view)
  * [需求列表导航(template_idea_list_exp_view)](app/view/template_idea_list_exp_view)
  * [模板(template_show_view)](app/view/template_show_view)
  * [用例列表导航(template_test_case_list_exp_view)](app/view/template_test_case_list_exp_view)
  * [工作项列表导航(template_work_item_list_exp_view)](app/view/template_work_item_list_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>