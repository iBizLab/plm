# 工时(workloadlist_view_workitem)  <!-- {docsify-ignore-all} -->






## 控件
  * 列表(list)
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/Workload) : [删除工时](module/Base/Workload#界面行为)
  * [工时(WORKLOAD)](module/Base/Workload) : [工时明细返回主表单](module/Base/Workload#界面行为)
  * [工时(WORKLOAD)](module/Base/Workload) : [表格界面_编辑操作](module/Base/Workload#界面行为)

### 关联视图
  * [登记工时(workloadquick_create_view_work_item)](app/view/workloadquick_create_view_work_item)
  * [工时(workloadEditView)](app/view/workloadEditView)

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