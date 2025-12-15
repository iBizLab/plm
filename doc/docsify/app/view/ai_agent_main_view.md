# 智能体(ai_agent_main_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)
#### 工具栏(toolbar1)


### 关联界面行为
  * [智能体(AI_AGENT)](module/ai/ai_agent) : [编辑界面_保存并新建操作](module/ai/ai_agent#界面行为)
  * [智能体(AI_AGENT)](module/ai/ai_agent) : [取消变更](module/ai/ai_agent#界面行为)
  * [智能体(AI_AGENT)](module/ai/ai_agent) : [编辑界面_保存操作](module/ai/ai_agent#界面行为)

### 关联视图
  * [智能体知识库引用(ai_agent_knowledge_rel_grid_view)](app/view/ai_agent_knowledge_rel_grid_view)
  * [智能体工具引用(ai_agent_tool_rel_grid_view)](app/view/ai_agent_tool_rel_grid_view)
  * [AI大模型(ai_model_pickup_view)](app/view/ai_model_pickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>