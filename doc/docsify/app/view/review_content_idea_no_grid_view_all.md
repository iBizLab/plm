# 评审内容(review_content_idea_no_grid_view_all)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)

##### 部件逻辑
* `onLoadSuccess` : [计算表格列行为状态(review)](module/TestMgmt/review_content/uilogic/calc_column_action_state)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取评审内容总条数](module/TestMgmt/review_content/uilogic/get_review_content_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [设置评审结果](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [开始当前阶段评审](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [完成当前阶段评审](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [移出用例](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [快速评审](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [提交评审](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [表格界面_保存行](module/TestMgmt/review_content#界面行为)
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [评审内容版本比对](module/TestMgmt/review_content#界面行为)

### 关联界面逻辑
  * [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content) : [计算表格列行为状态(review)](module/TestMgmt/review_content/uilogic/calc_column_action_state)

### 关联视图
  * [需求(idea_main_view)](app/view/idea_main_view)
  * [选择需求(idea_review_re_idea_view)](app/view/idea_review_re_idea_view)
  * [评审内容(review_content_edit_view)](app/view/review_content_edit_view)
  * [评审内容(review_content_result_option_view)](app/view/review_content_result_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>