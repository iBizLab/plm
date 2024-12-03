# 页面(article_page_document_edit_view)  <!-- {docsify-ignore-all} -->



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
    if (form) {
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
```


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [发布](module/Wiki/article_page#界面行为)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>