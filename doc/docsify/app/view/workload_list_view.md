# 工时(workload_list_view)  <!-- {docsify-ignore-all} -->




## 控件
#### CAPTIONBAR(captionbar)

#### 列表(list)

#### 搜索栏(searchbar)

#### 工具栏(toolbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工时(WORKLOAD)](module/Base/workload) : [删除工时](module/Base/workload#界面行为)
  * [工时(WORKLOAD)](module/Base/workload) : [工时明细返回主表单](module/Base/workload#界面行为)
  * [工时(WORKLOAD)](module/Base/workload) : [表格界面_编辑操作](module/Base/workload#界面行为)

### 关联视图
  * [工时(workload_edit_view)](app/view/workload_edit_view)
  * [修改实际工时(workload_update_view)](app/view/workload_update_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>