# 新建用例(test_case_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [选择模板](module/TestMgmt/test_case#界面行为)

### 关联界面逻辑
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)

### 关联视图
  * [用例模块(test_suite_pick_up_view)](app/view/test_suite_pick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>