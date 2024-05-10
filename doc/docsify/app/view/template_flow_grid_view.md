# 自动化规则(template_flow_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [新建计划规则](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [打开配置视图](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [表格界面_删除操作](module/extension/PSDELogic#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [应用扩展模型](module/extension/PSDELogic#界面行为)
  * [扩展日志(EXTEND_LOG)](module/Base/extend_log) : [打开详情信息](module/Base/extend_log#界面行为)
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [新建自动化规则](module/extension/PSDELogic#界面行为)

### 关联视图
  * [日志信息(extend_log_info_view)](app/view/extend_log_info_view)
  * [实体处理逻辑(psdelogiceditview)](app/view/psdelogiceditview)
  * [自动化规则(psdelogicflow_main_view)](app/view/psdelogicflow_main_view)
  * [自动化规则看板(psdelogicflow_panel_view)](app/view/psdelogicflow_panel_view)
  * [实体处理逻辑(psdelogiclogicdesign)](app/view/psdelogiclogicdesign)
  * [实体处理逻辑(psdelogicquick_cfg_view)](app/view/psdelogicquick_cfg_view)
  * [实体处理逻辑(psdelogicquick_create_view_auto_flow)](app/view/psdelogicquick_create_view_auto_flow)
  * [实体处理逻辑(psdelogicquick_create_view_schedule)](app/view/psdelogicquick_create_view_schedule)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>