# 用例模块(test_suite_edit_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)


### 关联界面行为
  * [用例模块(TEST_SUITE)](module/TestMgmt/test_suite) : [编辑界面_保存并退出操作](module/TestMgmt/test_suite#界面行为)

### 关联视图
  * [测试库(library_pick_up_view)](app/view/library_pick_up_view)
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