# 新建页面(article_page_qucik_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.modal.hooks.shouldDismiss.tapPromise(async context => {
    const form = view.getController('form');
    if (form.data.title !== null && form.data.title !== '' && form.data.title !== undefined) {
        console.log('关闭');
         console.log(form);
    const uiDomain = ibiz.uiDomainManager.get(view.context.srfsessionid);
    const isChange =
        (form.state.modified || uiDomain.dataModification)
        if (isChange && context.allowClose == null) {
        if (form) {
            await form.save({silent: true});
            context.allowClose = true;
        }
        }
    }
});
// 关闭前传递是否发布参数
view.modal.hooks.beforeDismiss.tapPromise(async modalData => {
    modalData.data = [{is_published: !!view.is_published}];
});
```


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [AI+](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [发布](module/Wiki/article_page#界面行为)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>