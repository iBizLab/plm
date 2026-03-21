# 新建用例(test_case_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onCreated`
```javascript
ctrl.evt.on('onFormDataChange', evt => {
    const { name, value } = evt;
    if (name === 'test_library_id') {
        view.redrawView({
            context: { library: value, dynamicnew: true },
            params: {
                srfdefdata: evt.data[0]
            },
            isReloadModel: true,
        });
    }
});
```


### 关联界面行为
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [选择模板](module/TestMgmt/test_case#界面行为)
  * [用例(TEST_CASE)](module/TestMgmt/test_case) : [AI+无数据](module/TestMgmt/test_case#界面行为)

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