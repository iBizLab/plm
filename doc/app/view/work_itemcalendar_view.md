# 我的日历(work_itemcalendar_view)  <!-- {docsify-ignore-all} -->






## 控件
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 日历部件(calendar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项(work_itemEditView)](app/view/work_itemEditView)
  * [工作项(work_itemmain_view)](app/view/work_itemmain_view)

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