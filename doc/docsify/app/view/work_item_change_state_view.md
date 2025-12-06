# 工作项(work_item_change_state_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

## 视图界面逻辑
* `onMounted`
```javascript
var old_work_item_type_id = view.params.work_item_type_id;

var first_value = old_work_item_type_id.split(',')[0];

view.params.work_item_type_id = first_value;
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