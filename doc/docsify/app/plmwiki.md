# 百科(plmwiki)  <!-- {docsify-ignore-all} -->

## 菜单

<el-row>
  <el-menu :ellipsis="false" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="menuitem1" @click="itemClick('#/app/view/article_page_shared_tree_exp_view')">用户手册</el-menu-item>
  </el-menu>
</el-row>


## 视图清单

|  中文名     |   代码名  |  视图标题 | 视图类型   |   备注  |
|  --------   |------------| -----------|  -----   |  -----   |
|[PLM](app/view/app_index_view)|app_index_view|软件生命周期管理系统|应用首页视图||
|[共享](app/view/article_page_shared_show_view)|article_page_shared_show_view|页面|实体编辑视图||
|[共享空间](app/view/article_page_shared_tree_exp_view)|article_page_shared_tree_exp_view|页面|实体树导航视图||
|[共享](app/view/article_page_shared_view)|article_page_shared_view|页面|实体编辑视图||
|[共享](app/view/article_page_shared_with_sub_view)|article_page_shared_with_sub_view|页面|实体树导航视图||
|[测试页面-引用代码表](app/view/article_page_test_view)|article_page_test_view|页面|实体编辑视图||
|[共享](app/view/article_page_wiki_shared_view)|article_page_wiki_shared_view|页面|实体编辑视图||
|[评论列表视图](app/view/comment_wiki_list_view)|comment_wiki_list_view|评论|实体列表视图|系统自动添加|
|[新建需求模板](app/view/template_create_idea_template_view)|template_create_idea_template_view|新建模板|实体选项操作视图|系统自动添加|
|[新建用例模板](app/view/template_create_test_case_template_view)|template_create_test_case_template_view|新建模板|实体选项操作视图|系统自动添加|
|[新建工作项模板](app/view/template_create_work_item_template_view)|template_create_work_item_template_view|新建模板|实体选项操作视图|系统自动添加|
|[编辑需求模板](app/view/template_edit_idea_template_view)|template_edit_idea_template_view|编辑模板|实体选项操作视图|系统自动添加|
|[编辑用例模板](app/view/template_edit_test_case_template_view)|template_edit_test_case_template_view|编辑模板|实体选项操作视图|系统自动添加|
|[编辑工作项模板](app/view/template_edit_work_item_template_view)|template_edit_work_item_template_view|编辑模板|实体选项操作视图|系统自动添加|
|[需求列表导航](app/view/template_idea_list_exp_view)|template_idea_list_exp_view|需求列表导航|实体列表导航视图|系统自动添加|
|[模板展示视图](app/view/template_show_view)|template_show_view|模板|实体编辑视图|系统自动添加|
|[用例列表导航](app/view/template_test_case_list_exp_view)|template_test_case_list_exp_view|用例列表导航|实体列表导航视图|系统自动添加|
|[工作项列表导航](app/view/template_work_item_list_exp_view)|template_work_item_list_exp_view|工作项列表导航|实体列表导航视图|系统自动添加|

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    },
    methods: {
      itemClick(url) {
        location.href = url
      }
    }
  }).use(ElementPlus).mount('#app')
</script>