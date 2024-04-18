# 工时记录(workload_detail_list_view)  <!-- {docsify-ignore-all} -->




## 控件
#### CAPTIONBAR(captionbar)

#### 列表(list)

#### 搜索栏(searchbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


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