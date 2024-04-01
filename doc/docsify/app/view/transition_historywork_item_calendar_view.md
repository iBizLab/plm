# 流转记录(transition_historywork_item_calendar_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 搜索栏(searchbar)
  * CAPTIONBAR(captionbar)
  * 日历部件(calendar)

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