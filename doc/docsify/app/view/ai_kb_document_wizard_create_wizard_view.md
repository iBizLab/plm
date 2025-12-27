# 知识库文档向导(ai_kb_document_wizard_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)

## 视图界面逻辑
* `onCloseView`
```javascript
return (async function() { 
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.ai_kb_document_wizard');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
})();

```


### 关联视图
  * [切片策略(ai_knowledge_base_chunking_view_readonly)](app/view/ai_knowledge_base_chunking_view_readonly)
  * [知识库文档(article_page_nested_doc_grid_view)](app/view/article_page_nested_doc_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>