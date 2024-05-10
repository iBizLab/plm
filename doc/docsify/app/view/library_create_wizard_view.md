# 新建测试库(library_create_wizard_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 向导面板(wizardpanel)


### 关联界面逻辑
  * [测试库(LIBRARY)](module/TestMgmt/library) : [批量删除测试库成员临时数据](module/TestMgmt/library/uilogic/remove_batch_temp)

### 关联视图
  * [测试库成员(library_member_assigned_grid_view)](app/view/library_member_assigned_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>