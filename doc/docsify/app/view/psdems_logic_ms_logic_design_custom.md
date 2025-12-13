# 主状态逻辑设计(psdems_logic_ms_logic_design_custom)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 编辑表单(form)
#### 编辑表单(link)
#### 编辑表单(node)
#### 工具栏(toolbar)


### 关联界面行为
  * [实体主状态迁移逻辑(PSDEMSLOGIC)](module/extension/PSDEMSLogic) : [编辑界面_保存操作](module/extension/PSDEMSLogic#界面行为)

### 关联视图
  * [主状态处理逻辑节点连接(设计)(psdelogiclinkdesigneditview_ms)](app/view/psdelogiclinkdesigneditview_ms)
  * [主状态逻辑节点(设计)(psdelogicnodedesignview_msnode2)](app/view/psdelogicnodedesignview_msnode2)
  * [实体主状态迁移逻辑(psdemslogicdesigneditview_ms)](app/view/psdemslogicdesigneditview_ms)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>