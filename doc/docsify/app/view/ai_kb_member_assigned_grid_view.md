# 知识库成员(ai_kb_member_assigned_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [新建知识库默认临时成员](module/ai/ai_kb_member/uilogic/create_default_temp_members)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库成员(AI_KB_MEMBER)](module/ai/ai_kb_member) : [表格界面_新建操作_通用](module/ai/ai_kb_member#界面行为)
  * [知识库成员(AI_KB_MEMBER)](module/ai/ai_kb_member) : [移除成员](module/ai/ai_kb_member#界面行为)

### 关联界面逻辑
  * [知识库成员(AI_KB_MEMBER)](module/ai/ai_kb_member) : [新建知识库默认临时成员](module/ai/ai_kb_member/uilogic/create_default_temp_members)

### 关联视图
  * [知识库成员(ai_kb_member_edit_view)](app/view/ai_kb_member_edit_view)
  * [知识库(ai_knowledge_base_m_pickup_view)](app/view/ai_knowledge_base_m_pickup_view)
  * [选择成员(user_choose_mpick_up_view)](app/view/user_choose_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>