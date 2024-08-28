# 资源视图管理(addon_resource_all_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [资源组件(ADDON_RESOURCE)](module/Base/addon_resource) : [删除资源](module/Base/addon_resource#界面行为)
  * [资源组件(ADDON_RESOURCE)](module/Base/addon_resource) : [编辑资源](module/Base/addon_resource#界面行为)

### 关联视图
  * [资源组件(addon_resource_edit_view)](app/view/addon_resource_edit_view)
  * [编辑资源(addon_resource_quick_edit_view)](app/view/addon_resource_quick_edit_view)
  * [资源组件(addon_resource_redirect_view)](app/view/addon_resource_redirect_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>