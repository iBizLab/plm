# 通知列表(psde_notify_list_view_setting)  <!-- {docsify-ignore-all} -->




## 控件
#### CAPTIONBAR(captionbar)

#### 列表(list)

#### 搜索栏(searchbar)

#### 搜索表单(searchform)

#### 工具栏(toolbar)


## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_新建操作](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_拷贝操作](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_导出数据模型](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_搜索栏](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_删除操作](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_编辑操作](module/extension/PSDENotify#界面行为)
  * [实体通知(PSDENOTIFY)](module/extension/PSDENotify) : [表格界面_帮助操作](module/extension/PSDENotify#界面行为)

### 关联视图
  * [实体通知(psde_notify_edit_view)](app/view/psde_notify_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>