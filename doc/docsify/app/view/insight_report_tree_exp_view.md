# 模板报表(insight_report_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能报表(INSIGHT_REPORT)](module/Insight/insight_report) : [使用此模板](module/Insight/insight_report#界面行为)

### 关联视图
  * [模板报表(insight_report_custom_card_view)](app/view/insight_report_custom_card_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>