# 工时(workload_mob_calender_detail_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [打开工时移动端重定向视图](module/Base/workload#界面行为)

### 关联视图
  * [需求(idea_mob_edit_view)](app/view/idea_mob_edit_view)
  * [用例(test_case_mob_edit_view)](app/view/test_case_mob_edit_view)
  * [工作项(work_item_mob_common_edit_view)](app/view/work_item_mob_common_edit_view)
  * [工时(workload_mob_redirect_view)](app/view/workload_mob_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>