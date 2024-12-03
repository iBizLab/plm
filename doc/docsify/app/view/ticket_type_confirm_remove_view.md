# 确认删除(ticket_type_confirm_remove_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

## 视图界面逻辑
  * [判断是否禁用](module/ProdMgmt/ticket_type/uilogic/is_disabled)


### 关联界面逻辑
  * [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type) : [判断是否禁用](module/ProdMgmt/ticket_type/uilogic/is_disabled)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>