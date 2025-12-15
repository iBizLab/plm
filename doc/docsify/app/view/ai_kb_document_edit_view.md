# 知识库文档(ai_kb_document_edit_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
console.log(123,view);
if(context.sync_id){
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