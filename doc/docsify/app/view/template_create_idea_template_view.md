# 新建模板(template_create_idea_template_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

## 视图界面逻辑
* `onCreated`
```javascript
view.params.visibility = view.parentView.ctx.controllersMap.get('searchbar').state.selectedGroupItem.id;
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