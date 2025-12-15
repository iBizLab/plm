# 智能体(ai_agent_context_grid_view)  <!-- {docsify-ignore-all} -->



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
  * [智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context) : [编辑](module/ai/ai_agent_context#界面行为)
  * [智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context) : [查看](module/ai/ai_agent_context#界面行为)
  * [智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context) : [删除](module/ai/ai_agent_context#界面行为)
  * [智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context) : [表格界面_新建操作](module/ai/ai_agent_context#界面行为)

### 关联视图
  * [智能体(ai_agent_context_edit_view)](app/view/ai_agent_context_edit_view)
  * [智能体(ai_agent_context_info_view)](app/view/ai_agent_context_info_view)
  * [智能体上下文(ai_agent_context_main_view)](app/view/ai_agent_context_main_view)
  * [智能体(ai_agent_context_quick_create_view)](app/view/ai_agent_context_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>