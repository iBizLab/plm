# 属性变更(psde_notify_field_change_hook_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(tabtoolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_新建操作](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_删除操作](module/extension/PSDENotify#界面行为)

### 关联视图
  * [属性变更通知(psde_notify_field_change_hook_edit_view)](app/view/psde_notify_field_change_hook_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>