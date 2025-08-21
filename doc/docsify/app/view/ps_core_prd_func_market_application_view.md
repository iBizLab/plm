# 应用市场(ps_core_prd_func_market_application_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据视图(dataview)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [启用](module/extension/PSCorePrdFunc#界面行为)
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [跳转插件设置页面](module/extension/PSCorePrdFunc#界面行为)
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [打开卡片详情页面](module/extension/PSCorePrdFunc#界面行为)

### 关联界面逻辑
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [跳转应用详情页面](module/extension/PSCorePrdFunc/uilogic/open_app_info)

### 关联视图
  * [核心产品功能(ps_core_prd_func_info_view)](app/view/ps_core_prd_func_info_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>