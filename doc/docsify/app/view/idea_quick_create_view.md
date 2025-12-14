# 新建需求(idea_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onChange` : [重置上下文产品ID](module/ProdMgmt/idea/uilogic/reset_product_id)
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
  * [需求(IDEA)](module/ProdMgmt/idea) : [选择模板](module/ProdMgmt/idea#界面行为)
  * [需求(IDEA)](module/ProdMgmt/idea) : [AI+](module/ProdMgmt/idea#界面行为)

### 关联界面逻辑
  * [需求(IDEA)](module/ProdMgmt/idea) : [重置上下文产品ID](module/ProdMgmt/idea/uilogic/reset_product_id)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)
  * [选择客户(customer_pc_customer_pickup_tree_view)](app/view/customer_pc_customer_pickup_tree_view)
  * [需求选择树视图(idea_pick_up_tree_view)](app/view/idea_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>