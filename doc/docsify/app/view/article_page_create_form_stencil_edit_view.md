# 新建页面(article_page_create_form_stencil_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
  * [关闭模板中心](module/Wiki/article_page/uilogic/close_stencil)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [发布](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [AI+](module/Wiki/article_page#界面行为)

### 关联界面逻辑
  * [页面(PAGE)](module/Wiki/article_page) : [关闭模板中心](module/Wiki/article_page/uilogic/close_stencil)

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