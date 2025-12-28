# 用例(test_case_mob_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [表格界面_刷新操作](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [新建测试用例（移动端）](module/TestMgmt/test_case#界面行为)

### 关联视图
  * [新建(test_case_mob_create_view)](app/view/test_case_mob_create_view)
  * [用例(test_case_mob_edit_view)](app/view/test_case_mob_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>