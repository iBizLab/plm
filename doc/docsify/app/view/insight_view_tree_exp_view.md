# 效能度量(insight_view_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图配置](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [打开视图首页视图](module/Insight/insight_view#界面行为)
  * [效能视图(INSIGHT_VIEW)](module/Insight/insight_view) : [取消星标](module/Insight/insight_view#界面行为)

### 关联视图
  * [全部视图(insight_view_all_grid_view)](app/view/insight_view_all_grid_view)
  * [效能度量(insight_view_config_tree_exp_view)](app/view/insight_view_config_tree_exp_view)
  * [效能度量(insight_view_index_view)](app/view/insight_view_index_view)
  * [组织视图(insight_view_org_grid_view)](app/view/insight_view_org_grid_view)
  * [个人视图(insight_view_person_grid_view)](app/view/insight_view_person_grid_view)
  * [团队视图(insight_view_team_grid_view)](app/view/insight_view_team_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>