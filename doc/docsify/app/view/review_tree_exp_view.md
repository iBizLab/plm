# 评审(review_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审(REVIEW)](module/TestMgmt/review) : [删除](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [删除](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [新建分组](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [树界面_刷新全部操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [新建类别](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [删除](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [编辑](module/TestMgmt/review#界面行为)

### 关联视图
  * [全部评审(review_all_grid_view)](app/view/review_all_grid_view)
  * [全部评审(review_todo_all_grid_view)](app/view/review_todo_all_grid_view)
  * [待办(sys_todo_all_grid_view)](app/view/sys_todo_all_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>