# 发起讨论(discuss_post_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)


### 关联界面行为
  * [智能体会话(AI_AGENT_SESSION)](module/ai/ai_agent_session) : [AI+无数据](module/ai/ai_agent_session#界面行为)

### 关联界面逻辑
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)

### 关联视图
  * [智能体选择器(ai_agent_assignment_selector)](app/view/ai_agent_assignment_selector)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>