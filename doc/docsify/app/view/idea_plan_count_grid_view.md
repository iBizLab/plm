# 计划内容(idea_plan_count_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [需求(IDEA)](module/ProdMgmt/idea) : [表格界面_导出操作（Excel）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [添加需求（排期）](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [取消关联（计划批操作）](module/ProdMgmt/idea#界面行为)

### 关联视图
  * [需求(idea_edit_view)](app/view/idea_edit_view)
  * [需求(idea_main_view)](app/view/idea_main_view)
  * [选择需求(idea_product_plan_re_idea_view)](app/view/idea_product_plan_re_idea_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>