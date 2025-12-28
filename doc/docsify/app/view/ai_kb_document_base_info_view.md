# 文档信息(ai_kb_document_base_info_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
if(view.params.sync_id){
    context.srfreadonly=true;
}

```


### 关联界面行为
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [编辑界面_退出操作](module/ai/ai_kb_document#界面行为)
  * [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document) : [编辑界面_保存并退出操作](module/ai/ai_kb_document#界面行为)

### 关联视图
  * [知识库(ai_knowledge_base_pickup_view)](app/view/ai_knowledge_base_pickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>