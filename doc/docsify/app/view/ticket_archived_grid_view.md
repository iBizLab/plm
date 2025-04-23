# 已归档的工单(ticket_archived_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单(TICKET)](module/ProdMgmt/ticket) : [表格界面_导出操作（Excel）](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [分配负责人](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单自定义导入](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [表格界面_新建操作](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单归档](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单激活](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [工单删除](module/ProdMgmt/ticket#界面行为)
  * [工单(TICKET)](module/ProdMgmt/ticket) : [设置标签](module/ProdMgmt/ticket#界面行为)

### 关联视图
  * [工单(ticket_allocate_person_view)](app/view/ticket_allocate_person_view)
  * [应用数据导入视图(ticket_app_data_upload_view)](app/view/ticket_app_data_upload_view)
  * [工单(ticket_edit_view)](app/view/ticket_edit_view)
  * [工单(ticket_redirect_view)](app/view/ticket_redirect_view)
  * [工单(ticket_set_tags_option_view)](app/view/ticket_set_tags_option_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>