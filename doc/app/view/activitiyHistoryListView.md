# 活动历史列表(activitiyHistoryListView)  <!-- {docsify-ignore-all} -->






## 控件
  * 列表(list)
  * 搜索栏(searchbar)
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