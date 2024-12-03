# 工单类型(ticket_type_global_setting_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索栏(tabsearchbar)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type) : [删除](module/ProdMgmt/ticket_type#界面行为)
  * [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type) : [新建工单类型](module/ProdMgmt/ticket_type#界面行为)
  * [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type) : [表格界面_编辑操作](module/ProdMgmt/ticket_type#界面行为)

### 关联视图
  * [确认删除(ticket_type_confirm_remove_view)](app/view/ticket_type_confirm_remove_view)
  * [编辑工单类型(ticket_type_editor_view)](app/view/ticket_type_editor_view)
  * [新建工单类型(ticket_type_quick_create_view)](app/view/ticket_type_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>