# 模板中心(stencillist_exp_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 搜索表单(searchform)
  * CAPTIONBAR(captionbar)
  * 搜索栏(searchbar)
  * 列表视图导航栏(listexpbar)
  * 列表视图导航栏(listexpbar1)


### 关联界面行为
  * [页面模板(STENCIL)](module/Wiki/Stencil) : [使用此模板](module/Wiki/Stencil#界面行为)

### 关联视图
  * [页面模板(stenciledit_view_show)](app/view/stenciledit_view_show)

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