# 我关注的(review_my_attention_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(review)](module/TestMgmt/review/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [撤销评审](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [提交评审](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [设置类别](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_新建操作_子数据](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [删除](module/TestMgmt/review#界面行为)

### 关联界面逻辑
  * [评审(REVIEW)](module/TestMgmt/review) : [计算表格列行为状态(review)](module/TestMgmt/review/uilogic/calc_column_action_state)

### 关联视图
  * [评审(review_main_view)](app/view/review_main_view)
  * [设置类别(review_set_category_option_view)](app/view/review_set_category_option_view)
  * [新建评审(review_wizard_create_wizard_view)](app/view/review_wizard_create_wizard_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>