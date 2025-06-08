# 评审阶段(review_stage_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * [选中阶段](module/TestMgmt/review_stage/uilogic/choose_stage)
  * [默认选中](module/TestMgmt/review_stage/uilogic/default_choose)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面逻辑
  * [评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage) : [变更阶段评审人](module/TestMgmt/review_stage/uilogic/set_stage_reviewer)

### 关联视图
  * [评审阶段(review_stage_edit_view)](app/view/review_stage_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>