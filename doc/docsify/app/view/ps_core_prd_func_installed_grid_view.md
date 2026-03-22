# 已安装应用(ps_core_prd_func_installed_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [禁用](module/extension/PSCorePrdFunc#界面行为)
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [查看版本清单](module/extension/PSCorePrdFunc#界面行为)

### 关联视图
  * [核心产品功能(ps_core_prd_func_info_view)](app/view/ps_core_prd_func_info_view)
  * [版本清单(ps_core_prd_func_spec_version)](app/view/ps_core_prd_func_spec_version)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>