# 逻辑设计(psde_logic_logic_design_custom)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 编辑表单(form)
#### 编辑表单(link)
#### 编辑表单(node)
#### 工具栏(toolbar)


### 关联界面行为
  * [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic) : [编辑界面_保存操作](module/extension/PSDELogic#界面行为)

### 关联视图
  * [实体处理逻辑(psde_logic_design_edit_view)](app/view/psde_logic_design_edit_view)
  * [建立工作项(psde_logic_node_design_view_create_work_item)](app/view/psde_logic_node_design_view_create_work_item)
  * [开始节点(设计)(psdelogicnodedesignview_begin)](app/view/psdelogicnodedesignview_begin)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>