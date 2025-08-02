# 确认完成(sprint_confirm_finish_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onChange`
```
if (data[0].choose_move) {
    data[0].choose_finish = null;
}
```
* `onChange`
```
if (data[0].choose_finish) {
    data[0].choose_move = null;
}
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