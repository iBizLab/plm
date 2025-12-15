# 智能体工具引用(ai_agent_tool_rel_grid_view)  <!-- {docsify-ignore-all} -->


系统自动添加



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
  * [智能体工具引用(AI_AGENT_TOOL_REL)](module/ai/ai_agent_tool_rel) : [表格界面_新建操作](module/ai/ai_agent_tool_rel#界面行为)
  * [智能体工具引用(AI_AGENT_TOOL_REL)](module/ai/ai_agent_tool_rel) : [表格界面_删除操作](module/ai/ai_agent_tool_rel#界面行为)

### 关联视图
  * [智能体工具引用(ai_agent_tool_rel_edit_view)](app/view/ai_agent_tool_rel_edit_view)
  * [AI调用工具(ai_tool_m_pickup_view)](app/view/ai_tool_m_pickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>