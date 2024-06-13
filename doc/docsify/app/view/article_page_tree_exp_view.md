# 空间页面(article_page_tree_exp_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)
#### 树视图导航栏(treeexpbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/article_page) : [快速新建文档](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子页面（文档）](module/Wiki/article_page#界面行为)
  * [页面模板(STENCIL)](module/Wiki/stencil) : [使用此模板](module/Wiki/stencil#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [树界面_刷新全部操作](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [回收站](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [切换草稿](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [查看空间成员](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [删除](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [从模板新建](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [重命名](module/Wiki/article_page#界面行为)
  * [页面(PAGE)](module/Wiki/article_page) : [新建子分组](module/Wiki/article_page#界面行为)

### 关联视图
  * [草稿(article_page_draft_show_edit_view)](app/view/article_page_draft_show_edit_view)
  * [新建页面(article_page_qucik_create_view)](app/view/article_page_qucik_create_view)
  * [页面(article_page_show_view)](app/view/article_page_show_view)
  * [模板中心(stencil_list_exp_view)](app/view/stencil_list_exp_view)
  * [页面模板(stencil_show_edit_view)](app/view/stencil_show_edit_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>