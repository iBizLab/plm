# 新建评审(review_wizard_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard) : [批量删除评审用例临时数据](module/TestMgmt/review_wizard/uilogic/remove_batch_temp)

### 关联视图
  * [测试库(library_pick_up_view)](app/view/library_pick_up_view)
  * [评审内容(review_content_under_review_grid_view)](app/view/review_content_under_review_grid_view)
  * [评审选择(review_pick_up_tree_view)](app/view/review_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>