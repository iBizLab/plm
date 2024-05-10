# 全部评审(review_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(project)](module/TestMgmt/review/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_新建操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [打开编辑视图](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [提交评审](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [撤销评审](module/TestMgmt/review#界面行为)

### 关联界面逻辑
  * [评审(REVIEW)](module/TestMgmt/review) : [计算表格列行为状态(project)](module/TestMgmt/review/uilogic/calc_column_action_state)

### 关联视图
  * [新建评审(review_create_wizard_view)](app/view/review_create_wizard_view)
  * [评审(review_main_view)](app/view/review_main_view)
  * [评审(review_wf_dyna_edit_view)](app/view/review_wf_dyna_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>