# 项目成员(project_memberUsr01051713ListView)  <!-- {docsify-ignore-all} -->






## 控件
  * 搜索栏(searchbar)
  * 工具栏(toolbar)
  * 搜索表单(searchform)
  * 列表(list)
  * CAPTIONBAR(captionbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [项目成员(project_memberEditView)](app/view/project_memberEditView)
  * [选择成员(userm_pick_up_view2)](app/view/userm_pick_up_view2)
  * [项目(projectMPickupView)](app/view/projectMPickupView)

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