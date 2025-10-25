# 扩展设置(ps_core_prd_func_setting_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 部件逻辑
* `onLoadSuccess` : [初始化插件信息](module/extension/PSCorePrdFunc/uilogic/init_plugin_info)
* `onChange` : [更新插件设置](module/extension/PSCorePrdFunc/uilogic/update_plugin_setting)
#### 工具栏(toolbar)


### 关联界面行为
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [编辑界面_刷新操作](module/extension/PSCorePrdFunc#界面行为)
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [编辑界面_保存并退出操作](module/extension/PSCorePrdFunc#界面行为)

### 关联界面逻辑
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [初始化插件信息](module/extension/PSCorePrdFunc/uilogic/init_plugin_info)
  * [核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc) : [更新插件设置](module/extension/PSCorePrdFunc/uilogic/update_plugin_setting)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>