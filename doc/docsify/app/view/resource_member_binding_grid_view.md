# 选择成员(resource_member_binding_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [资源组件成员(RESOURCE_MEMBER)](module/Base/resource_member) : [表格界面_新建操作](module/Base/resource_member#界面行为)

### 关联视图
  * [资源组件成员(resource_member_edit_view)](app/view/resource_member_edit_view)
  * [资源组件成员(resource_member_redirect_view)](app/view/resource_member_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>