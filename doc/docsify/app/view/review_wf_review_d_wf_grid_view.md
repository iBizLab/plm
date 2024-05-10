# 评审(review_wf_review_d_wf_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_新建操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_编辑操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_拷贝操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_拷贝操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_删除操作](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_数据导入栏](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_搜索栏](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_导出数据模型](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_导出操作（Excel）](module/TestMgmt/review#界面行为)
  * [评审(REVIEW)](module/TestMgmt/review) : [表格界面_帮助操作](module/TestMgmt/review#界面行为)

### 关联视图
  * [评审(review_edit_view)](app/view/review_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>