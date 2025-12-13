# 快速建立(workspace_quick_create_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)


### 关联界面行为
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建测试用例（快速新建）](module/Base/workspace#界面行为)
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建页面（快速新建）](module/Base/workspace#界面行为)
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建需求（快速新建）](module/Base/workspace#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [快速新建页面后续操作](module/Wiki/article_page#界面行为)
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建工作项（快速新建）](module/Base/workspace#界面行为)
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建工单（快速新建）](module/Base/workspace#界面行为)
  * [工作台(WORKSPACE)](module/Base/workspace) : [新建讨论（快速新建）](module/Base/workspace#界面行为)

### 关联视图
  * [新建页面(article_page_after_new_edit_view)](app/view/article_page_after_new_edit_view)
  * [新建页面(article_page_quick_new_page_option_view)](app/view/article_page_quick_new_page_option_view)
  * [发起讨论(discuss_post_quick_create_view)](app/view/discuss_post_quick_create_view)
  * [新建需求(idea_quick_create_view)](app/view/idea_quick_create_view)
  * [新建用例(test_case_quick_create_view)](app/view/test_case_quick_create_view)
  * [新建工单(ticket_quick_create_view)](app/view/ticket_quick_create_view)
  * [新建工作项(work_item_quick_create_view)](app/view/work_item_quick_create_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>