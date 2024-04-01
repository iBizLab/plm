# 空间(spaceindex_view)  <!-- {docsify-ignore-all} -->






## 控件
  * 编辑表单(form)
  * 数据关系栏(drbar)
  * 工具栏(toolbar)
  * CAPTIONBAR(captionbar)


### 关联界面行为
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [快速新建文档](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [取消星标](module/Wiki/Space#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [新建分组](module/Wiki/Article_page#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [设置星标](module/Wiki/Space#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [从模板新建](module/Wiki/Article_page#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [打开空间导航页](module/Wiki/Space#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)
  * [页面模板(STENCIL)](module/Wiki/Stencil) : [使用此模板](module/Wiki/Stencil#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [查看空间信息](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [查看空间成员](module/Wiki/Space#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [树界面_刷新全部操作](module/Wiki/Article_page#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [更多设置](module/Wiki/Space#界面行为)
  * [空间(SPACE)](module/Wiki/Space) : [回收站](module/Wiki/Space#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [重命名](module/Wiki/Article_page#界面行为)
  * [页面(PAGE)](module/Wiki/Article_page) : [删除](module/Wiki/Article_page#界面行为)

### 关联视图
  * [基本信息(spaceedit_view_base_info)](app/view/spaceedit_view_base_info)
  * [知识管理(spacetree_exp_view)](app/view/spacetree_exp_view)
  * [空间配置(spacedetails_setting_view)](app/view/spacedetails_setting_view)
  * [空间信息(spaceinfo_view)](app/view/spaceinfo_view)
  * [新建页面(article_pagecreate_view_document)](app/view/article_pagecreate_view_document)
  * [空间成员(space_membergrid_view_config)](app/view/space_membergrid_view_config)
  * [数据统计(article_pagestatistical_grid_view)](app/view/article_pagestatistical_grid_view)
  * [回收站(article_pagerecycle_grid_view)](app/view/article_pagerecycle_grid_view)
  * [页面模板(stencilspace_all_grid_view)](app/view/stencilspace_all_grid_view)
  * [页面模板(stenciledit_view_show)](app/view/stenciledit_view_show)
  * [高级设置(spaceadvanced_setting_view)](app/view/spaceadvanced_setting_view)
  * [模板中心(stencillist_exp_view)](app/view/stencillist_exp_view)
  * [页面(article_pageshow_view)](app/view/article_pageshow_view)
  * [空间页面(article_pagetree_exp_view)](app/view/article_pagetree_exp_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
        message: '!'
      }
    }
  }).use(ElementPlus).mount('#app')
</script>