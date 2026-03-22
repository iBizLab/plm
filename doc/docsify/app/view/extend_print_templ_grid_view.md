# 扩展打印模板(extend_print_templ_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [扩展打印模板(EXTEND_PRINT_TEMPL)](module/Base/extend_print_templ) : [新建打印模版](module/Base/extend_print_templ#界面行为)
  * [扩展打印模板(EXTEND_PRINT_TEMPL)](module/Base/extend_print_templ) : [表格界面_编辑操作](module/Base/extend_print_templ#界面行为)
  * [扩展打印模板(EXTEND_PRINT_TEMPL)](module/Base/extend_print_templ) : [删除](module/Base/extend_print_templ#界面行为)

### 关联视图
  * [扩展打印模板(extend_print_templ_edit_view)](app/view/extend_print_templ_edit_view)
  * [扩展打印模板(extend_print_templ_quick_cfg_view)](app/view/extend_print_templ_quick_cfg_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>