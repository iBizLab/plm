# 新建用例(test_case_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)
* `onCreated`
```javascript
ctrl.evt.on('onFormDataChange', evt => {
    const { name, value } = evt;
    if (name === 'test_library_id') {
        view.redrawView({
            context: { library: value, dynamicnew: true },
            params: {},
            isReloadModel: true,
        });
    }
});
```


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [选择模板](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [AI+](module/TestMgmt/test_case#界面行为)

### 关联界面逻辑
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
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