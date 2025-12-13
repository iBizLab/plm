# 自动化规则看板(psdelogicflow_panel_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据图表(chart)
#### 编辑表单(form)
#### 编辑表单(form1)
#### 数据表格(grid)
#### 工具栏(toolbar)


### 关联界面行为
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [打开全部日志](module/extension/PSDELogic#界面行为)
  * [扩展日志(EXTEND_LOG)](module/Base/extend_log) : [打开详情信息](module/Base/extend_log#界面行为)

### 关联视图
  * [日志信息(extend_log_info_view)](app/view/extend_log_info_view)
  * [全部日志(psde_logic_all_log_grid_view)](app/view/psde_logic_all_log_grid_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>