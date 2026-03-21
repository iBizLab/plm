# 高级配置(ai_knowledge_base_chunk_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess`
```
var chunk_method = data[0].chunk_method
data[0].parser_config.method = chunk_method
```
* `onLoadDraftSuccess`
```
var chunk_method = data[0].chunk_method
data[0].parser_config.method = chunk_method
```


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>