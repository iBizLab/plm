# 工单列表(ticket_ticket_grid_parts)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [获取表格当前页大小](module/ProdMgmt/product/uilogic/get_table_size)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [全屏](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [刷新](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [查看所有工单](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [全部工单(ticket_all_grid_view)](app/view/ticket_all_grid_view)
  * [工单(ticket_edit_view)](app/view/ticket_edit_view)
  * [工单(ticket_main_view)](app/view/ticket_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>