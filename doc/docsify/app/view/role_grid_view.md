# 角色配置(role_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



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
  * [角色(ROLE)](module/Base/role) : [配置](module/Base/role#界面行为)

### 关联视图
  * [角色(role_edit_view)](app/view/role_edit_view)
  * [角色配置(role_edit_view2)](app/view/role_edit_view2)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>