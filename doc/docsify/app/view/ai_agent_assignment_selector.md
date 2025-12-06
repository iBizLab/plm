# 智能体选择器(ai_agent_assignment_selector)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * 执行分配的智能体
* `onCreated`
```javascript
view.params.n_use_tag_eq=view.parentView.model.codeName;
console.log('parentData父视图数据为：', view.parentData)
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [智能体分配(AI_AGENT_ASSIGNMENT)](module/ai/ai_agent_assignment) : [绑定](module/ai/ai_agent_assignment#界面行为)
  * [智能体分配(AI_AGENT_ASSIGNMENT)](module/ai/ai_agent_assignment) : [删除](module/ai/ai_agent_assignment#界面行为)
  * [智能体分配(AI_AGENT_ASSIGNMENT)](module/ai/ai_agent_assignment) : [新建智能体](module/ai/ai_agent_assignment#界面行为)

### 关联视图
  * [绑定智能体(ai_agent_assignment_bind)](app/view/ai_agent_assignment_bind)
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