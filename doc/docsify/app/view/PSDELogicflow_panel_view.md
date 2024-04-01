# 自动化规则看板(PSDELogicflow_panel_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 编辑表单(form)
  * 数据图表(chart)
  * 数据表格(grid)
  * CAPTIONBAR(captionbar)
  * 编辑表单(form1)


### 关联界面行为
  * [扩展日志(EXTEND_LOG)](module/Base/Extend_log) : [打开详情信息](module/Base/Extend_log#界面行为)

### 关联视图
  * [日志信息(extend_loginfo_view)](app/view/extend_loginfo_view)

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