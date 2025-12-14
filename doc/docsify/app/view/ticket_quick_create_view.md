# 新建工单(ticket_quick_create_view)  <!-- {docsify-ignore-all} -->



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
    if (name === 'product_id') {
        view.redrawView({
            context: { product: value, dynamicnew: true },
            params: {},
            isReloadModel: true,
        });
    }
});
```


### 关联界面行为
  * [智能体会话(AI_AGENT_SESSION)](module/ai/ai_agent_session) : [AI+无数据](module/ai/ai_agent_session#界面行为)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
  * [客户(customer_pick_up_view)](app/view/customer_pick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>