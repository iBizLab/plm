# 知识库(ai_knowledge_base_actived_grid_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 数据表格(grid)
#### 搜索栏(searchbar)
#### 搜索表单(searchform)
#### 搜索栏(tabsearchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [设置管理员](module/ai/ai_knowledge_base#界面行为)
  * [知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base) : [删除](module/ai/ai_knowledge_base#界面行为)

### 关联视图
  * [知识库信息(ai_knowledge_base_base_info_view)](app/view/ai_knowledge_base_base_info_view)
  * [知识库(ai_knowledge_base_edit_view)](app/view/ai_knowledge_base_edit_view)
  * [知识库(ai_knowledge_base_main_view)](app/view/ai_knowledge_base_main_view)
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