# 需求(baseline_idea_relation_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea) : [移出基线](module/ProdMgmt/baseline_idea#界面行为)
  * [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea) : [规划需求](module/ProdMgmt/baseline_idea#界面行为)

### 关联视图
  * [基线需求(baseline_idea_edit_view)](app/view/baseline_idea_edit_view)
  * [需求(idea_baseline_mpick_up_view)](app/view/idea_baseline_mpick_up_view)
  * [需求(idea_main_view)](app/view/idea_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>