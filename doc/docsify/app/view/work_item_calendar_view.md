# 我的日历(work_item_calendar_view)  <!-- {docsify-ignore-all} -->



## 控件
#### 日历部件(calendar)
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)
  * [工作项(work_item_edit_view)](app/view/work_item_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>