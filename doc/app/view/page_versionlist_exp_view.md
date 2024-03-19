# 历史版本(page_versionlist_exp_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 搜索栏(searchbar)
  * 列表视图导航栏(listexpbar)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>