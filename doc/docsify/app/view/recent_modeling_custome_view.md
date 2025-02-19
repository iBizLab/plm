# 最近访问(recent_modeling_custome_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)

## 视图界面逻辑
* `onMounted`
```javascript
console.log('进行跳转')
window.open('http://plm.ibizlab.cn/modeling/start/', '_self');
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