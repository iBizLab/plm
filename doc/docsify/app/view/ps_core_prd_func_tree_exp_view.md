# 应用市场(ps_core_prd_func_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联视图
  * [已安装应用(ps_core_prd_func_installed_grid_view)](app/view/ps_core_prd_func_installed_grid_view)
  * [应用市场(ps_core_prd_func_market_application_view)](app/view/ps_core_prd_func_market_application_view)
  * [核心产品(ps_core_prd_market_application_view)](app/view/ps_core_prd_market_application_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>