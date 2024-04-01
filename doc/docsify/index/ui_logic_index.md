# 界面逻辑 <!-- {docsify-ignore-all} -->

## [页面(PAGE)](module/Wiki/Article_page.md) :id=Article_page

* [新建分组(create_section)](module/Wiki/Article_page/uilogic/create_section.md)<br>新建分组逻辑
* [关闭评论区(close_comment)](module/Wiki/Article_page/uilogic/close_comment.md)<br>隐藏评论区，同时显示评论按钮
* [添加附件数据(add_attachment)](module/Wiki/Article_page/uilogic/add_attachment.md)
* [删除页面(delete_page)](module/Wiki/Article_page/uilogic/delete_page.md)
* [显示模板(show_stencil)](module/Wiki/Article_page/uilogic/show_stencil.md)
* [编辑节点(edit_section_or_category)](module/Wiki/Article_page/uilogic/edit_section_or_category.md)<br>编辑树节点
* [显示评论区(show_commnet)](module/Wiki/Article_page/uilogic/show_commnet.md)<br>打开评论区，同时隐藏评论按钮
* [刷新当前表格(refresh_current_grid)](module/Wiki/Article_page/uilogic/refresh_current_grid.md)

## [附件(ATTACHMENT)](module/Base/Attachment.md) :id=Attachment

* [添加附件数据(表格)(add_attachment_grid)](module/Base/Attachment/uilogic/add_attachment_grid.md)
* [添加附件数据(add_attachment)](module/Base/Attachment/uilogic/add_attachment.md)
* [附件删除(remove_attachment)](module/Base/Attachment/uilogic/remove_attachment.md)
* [附件删除（表格）(remove_attachment_grid)](module/Base/Attachment/uilogic/remove_attachment_grid.md)
* [计算附件是否隐藏逻辑(calc_attachment_hidden)](module/Base/Attachment/uilogic/calc_attachment_hidden.md)

## [类别(CATEGORY)](module/Base/Category.md) :id=Category

* [删除类别或分组(remove_section_or_category)](module/Base/Category/uilogic/remove_section_or_category.md)

## [评论(COMMENT)](module/Base/Comment.md) :id=Comment

* [控制评论按钮显示(comment_icon_show)](module/Base/Comment/uilogic/comment_icon_show.md)
* [发送评论(知识库)(send_comment_wiki)](module/Base/Comment/uilogic/send_comment_wiki.md)
* [清空评论(clear_comment)](module/Base/Comment/uilogic/clear_comment.md)
* [编辑评论(edit_comment)](module/Base/Comment/uilogic/edit_comment.md)
* [回复评论（知识库）(reply_comment_wiki)](module/Base/Comment/uilogic/reply_comment_wiki.md)
* [控制评论按钮隐藏(comment_icon_hidden)](module/Base/Comment/uilogic/comment_icon_hidden.md)
* [回复评论(reply_comment)](module/Base/Comment/uilogic/reply_comment.md)
* [编辑评论（知识库）(测试)(edit_comment_wiki_test)](module/Base/Comment/uilogic/edit_comment_wiki_test.md)
* [发送评论测试(test_send_comment)](module/Base/Comment/uilogic/test_send_comment.md)
* [编辑评论（知识库）(edit_comment_wiki)](module/Base/Comment/uilogic/edit_comment_wiki.md)
* [发送评论(send_comment)](module/Base/Comment/uilogic/send_comment.md)

## [客户(CUSTOMER)](module/ProdMgmt/Customer.md) :id=Customer

* [新建类别(create_category)](module/ProdMgmt/Customer/uilogic/create_category.md)
* [新建分组(create_section)](module/ProdMgmt/Customer/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/ProdMgmt/Customer/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/ProdMgmt/Customer/uilogic/edit_section_or_category.md)
* [设置树选择为多选(set_tree_multiple)](module/ProdMgmt/Customer/uilogic/set_tree_multiple.md)
* [关联客户值变更(relation_customer_change)](module/ProdMgmt/Customer/uilogic/relation_customer_change.md)
* [触发计数器刷新(refresh_counter)](module/ProdMgmt/Customer/uilogic/refresh_counter.md)
* [选择下拉框区域展示(show_choose_area)](module/ProdMgmt/Customer/uilogic/show_choose_area.md)

## [交付物(DELIVERABLE)](module/Base/Deliverable.md) :id=Deliverable

* [提交（表单中）(submit_form)](module/Base/Deliverable/uilogic/submit_form.md)<br>瀑布项目 → 工作项详情 → 交付物分页 → 表格行操作
* [提交(submit)](module/Base/Deliverable/uilogic/submit.md)<br>瀑布项目主视图 → 交付物分页表格 → 表格行操作
* [输入框区域隐藏(hidden_input_area)](module/Base/Deliverable/uilogic/hidden_input_area.md)<br>工作项 添加交付目标
* [获取交付目标总条数(get_deliverable_total)](module/Base/Deliverable/uilogic/get_deliverable_total.md)
* [删除（表单中）(del)](module/Base/Deliverable/uilogic/del.md)
* [新建交付目标(create_deliverable)](module/Base/Deliverable/uilogic/create_deliverable.md)<br>瀑布项目 → 工作项详情 → 交付物分页 → 新建交付目标按钮
* [输入框区域展示(show_input_area)](module/Base/Deliverable/uilogic/show_input_area.md)<br>工作项 添加交付目标

## [需求(IDEA)](module/ProdMgmt/Idea.md) :id=Idea

* [新建模块(create_category)](module/ProdMgmt/Idea/uilogic/create_category.md)<br>产品需求页左侧树的新建模块逻辑
* [新建子产品(create_section)](module/ProdMgmt/Idea/uilogic/create_section.md)<br>产品需求页左侧树的新建子产品逻辑
* [删除类别或分组(remove_section_or_category)](module/ProdMgmt/Idea/uilogic/remove_section_or_category.md)<br>产品需求页左侧树的删除逻辑
* [添加附件数据(add_attachment)](module/ProdMgmt/Idea/uilogic/add_attachment.md)
* [编辑类别或分组(edit_section_or_category)](module/ProdMgmt/Idea/uilogic/edit_section_or_category.md)<br>产品需求页左侧树的编辑逻辑
* [关联需求值变更(relation_idea_change)](module/ProdMgmt/Idea/uilogic/relation_idea_change.md)<br>关联操作时触发，内部调用关联逻辑进行关联操作
* [x](module/ProdMgmt/Idea/uilogic/x.md)<br>不确定干嘛的，慎删
* [获取需求总条数(get_idea_total)](module/ProdMgmt/Idea/uilogic/get_idea_total.md)<br>获取条数有一个就够了，可删
* [触发计数器刷新(refresh_counter)](module/ProdMgmt/Idea/uilogic/refresh_counter.md)
* [选择下拉框区域展示(show_choose_area)](module/ProdMgmt/Idea/uilogic/show_choose_area.md)<br>逻辑控制关联表格下方选项区域动态显示

## [测试库(LIBRARY)](module/TestMgmt/Library.md) :id=Library

* [批量删除测试库成员临时数据(remove_batch_temp)](module/TestMgmt/Library/uilogic/remove_batch_temp.md)
* [刷新当前表格(refresh_current_grid)](module/TestMgmt/Library/uilogic/refresh_current_grid.md)

## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member.md) :id=Library_member

* [新建测试库默认临时成员(create_default_temp_members)](module/TestMgmt/Library_member/uilogic/create_default_temp_members.md)
* [跳转至成员设置(jump_to_member_set)](module/TestMgmt/Library_member/uilogic/jump_to_member_set.md)

## [文件夹(PORTFOLIO)](module/Base/Portfolio.md) :id=Portfolio

* [批量删除项目集成员临时数据(remove_batch_temp)](module/Base/Portfolio/uilogic/remove_batch_temp.md)
* [刷新当前表格(refresh_current_grid)](module/Base/Portfolio/uilogic/refresh_current_grid.md)

## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member.md) :id=Portfolio_member

* [新建项目集默认临时成员(default_project_member)](module/Base/Portfolio_member/uilogic/default_project_member.md)

## [产品(PRODUCT)](module/ProdMgmt/Product.md) :id=Product

* [批量删除产品成员临时数据(remove_batch_temp)](module/ProdMgmt/Product/uilogic/remove_batch_temp.md)
* [刷新当前表格(refresh_current_grid)](module/ProdMgmt/Product/uilogic/refresh_current_grid.md)

## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member.md) :id=Product_member

* [建立产品成员(create_product_member)](module/ProdMgmt/Product_member/uilogic/create_product_member.md)
* [新建产品默认临时成员(create_default_temp_members)](module/ProdMgmt/Product_member/uilogic/create_default_temp_members.md)
* [跳转至成员设置(jump_to_member_set)](module/ProdMgmt/Product_member/uilogic/jump_to_member_set.md)

## [排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan.md) :id=Product_plan

* [新建类别(create_category)](module/ProdMgmt/Product_plan/uilogic/create_category.md)
* [新建分组(create_section)](module/ProdMgmt/Product_plan/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/ProdMgmt/Product_plan/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/ProdMgmt/Product_plan/uilogic/edit_section_or_category.md)

## [项目(PROJECT)](module/ProjMgmt/Project.md) :id=Project

* [批量删除项目成员临时数据(remove_batch_temp)](module/ProjMgmt/Project/uilogic/remove_batch_temp.md)
* [根据类型跳转项目主视图(open_project_main_view)](module/ProjMgmt/Project/uilogic/open_project_main_view.md)
* [刷新当前表格(refresh_current_grid)](module/ProjMgmt/Project/uilogic/refresh_current_grid.md)

## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md) :id=Project_member

* [新建项目默认临时成员(create_default_temp_members)](module/ProjMgmt/Project_member/uilogic/create_default_temp_members.md)
* [跳转至成员设置(jump_to_member_set)](module/ProjMgmt/Project_member/uilogic/jump_to_member_set.md)

## [最近访问(RECENT)](module/Base/Recent.md) :id=Recent

* [最近访问跳转其他视图(recent_jump_other_view)](module/Base/Recent/uilogic/recent_jump_other_view.md)<br>首页最近访问点击后跳转其他视图
* [建立双向关联数据(create_double_relation)](module/Base/Recent/uilogic/create_double_relation.md)<br>工作项关联工作项（新建）

## [关联(RELATION)](module/Base/Relation.md) :id=Relation

* [建立关联数据(create_relation)](module/Base/Relation/uilogic/create_relation.md)

## [项目发布(RELEASE)](module/ProjMgmt/Release.md) :id=Release

* [新建类别(create_category)](module/ProjMgmt/Release/uilogic/create_category.md)
* [新建分组(create_section)](module/ProjMgmt/Release/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/ProjMgmt/Release/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/ProjMgmt/Release/uilogic/edit_section_or_category.md)

## [执行用例(RUN)](module/TestMgmt/Run.md) :id=Run

* [添加附件数据(add_attachment)](module/TestMgmt/Run/uilogic/add_attachment.md)
* [打开关联用例(open_re_run)](module/TestMgmt/Run/uilogic/open_re_run.md)
* [刷新用例表格(refresh_run_grid)](module/TestMgmt/Run/uilogic/refresh_run_grid.md)
* [触发计数器刷新(run)(refresh_counter_run)](module/TestMgmt/Run/uilogic/refresh_counter_run.md)

## [空间(SPACE)](module/Wiki/Space.md) :id=Space

* [新建目录(create_category)](module/Wiki/Space/uilogic/create_category.md)<br>新建空间目录
* [产品关联空间(product__re_space)](module/Wiki/Space/uilogic/product__re_space.md)
* [批量删除空间成员临时数据(remove_batch_temp)](module/Wiki/Space/uilogic/remove_batch_temp.md)
* [刷新当前表格(refresh_current_grid)](module/Wiki/Space/uilogic/refresh_current_grid.md)

## [空间成员(SPACE_MEMBER)](module/Wiki/Space_member.md) :id=Space_member

* [新建空间默认临时成员(create_default_temp_members)](module/Wiki/Space_member/uilogic/create_default_temp_members.md)

## [迭代(SPRINT)](module/ProjMgmt/Sprint.md) :id=Sprint

* [新建类别(create_category)](module/ProjMgmt/Sprint/uilogic/create_category.md)
* [新建分组(create_section)](module/ProjMgmt/Sprint/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/ProjMgmt/Sprint/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/ProjMgmt/Sprint/uilogic/edit_section_or_category.md)

## [页面模板(STENCIL)](module/Wiki/Stencil.md) :id=Stencil

* [打开新建页面并关闭模板中心(open_new_page)](module/Wiki/Stencil/uilogic/open_new_page.md)

## [用例(TEST_CASE)](module/TestMgmt/Test_case.md) :id=Test_case

* [新建类别(create_category)](module/TestMgmt/Test_case/uilogic/create_category.md)
* [新建分组(create_section)](module/TestMgmt/Test_case/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/TestMgmt/Test_case/uilogic/remove_section_or_category.md)
* [添加附件数据（通用）(add_attachment)](module/TestMgmt/Test_case/uilogic/add_attachment.md)
* [编辑类别或分组(edit_section_or_category)](module/TestMgmt/Test_case/uilogic/edit_section_or_category.md)
* [获取测试用例总条数(get_test_case_total)](module/TestMgmt/Test_case/uilogic/get_test_case_total.md)
* [触发计数器刷新(refresh_counter)](module/TestMgmt/Test_case/uilogic/refresh_counter.md)
* [关联测试用例值变更(relation_test_case_change)](module/TestMgmt/Test_case/uilogic/relation_test_case_change.md)
* [选择下拉框区域展示(show_choose_area)](module/TestMgmt/Test_case/uilogic/show_choose_area.md)

## [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan.md) :id=Test_plan

* [新建类别(create_category)](module/TestMgmt/Test_plan/uilogic/create_category.md)
* [新建分组(create_section)](module/TestMgmt/Test_plan/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/TestMgmt/Test_plan/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/TestMgmt/Test_plan/uilogic/edit_section_or_category.md)
* [移入计划(shift_in_test_plan)](module/TestMgmt/Test_plan/uilogic/shift_in_test_plan.md)

## [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite.md) :id=Test_suite

* [新建类别(create_category)](module/TestMgmt/Test_suite/uilogic/create_category.md)
* [新建分组(create_section)](module/TestMgmt/Test_suite/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/TestMgmt/Test_suite/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/TestMgmt/Test_suite/uilogic/edit_section_or_category.md)

## [工单(TICKET)](module/ProdMgmt/Ticket.md) :id=Ticket

* [获取工单总条数(get_ticket_total)](module/ProdMgmt/Ticket/uilogic/get_ticket_total.md)
* [添加附件数据(add_attachment)](module/ProdMgmt/Ticket/uilogic/add_attachment.md)
* [关联工单值变更(relation_ticket_change)](module/ProdMgmt/Ticket/uilogic/relation_ticket_change.md)
* [新建工单并生成关联数据(create_and_relation)](module/ProdMgmt/Ticket/uilogic/create_and_relation.md)
* [建立双向关联数据(create_double_relation)](module/ProdMgmt/Ticket/uilogic/create_double_relation.md)
* [触发计数器刷新(refresh_counter)](module/ProdMgmt/Ticket/uilogic/refresh_counter.md)
* [建立关联数据(create_relation)](module/ProdMgmt/Ticket/uilogic/create_relation.md)
* [客户添加工单值变更(customer_add_change)](module/ProdMgmt/Ticket/uilogic/customer_add_change.md)
* [选择下拉框区域展示(show_choose_area)](module/ProdMgmt/Ticket/uilogic/show_choose_area.md)

## [版本（temp）(VERSION)](module/ProjMgmt/Version.md) :id=Version

* [新建类别(create_category)](module/ProjMgmt/Version/uilogic/create_category.md)
* [新建分组(create_section)](module/ProjMgmt/Version/uilogic/create_section.md)
* [删除类别或分组(remove_section_or_category)](module/ProjMgmt/Version/uilogic/remove_section_or_category.md)
* [编辑类别或分组(edit_section_or_category)](module/ProjMgmt/Version/uilogic/edit_section_or_category.md)

## [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) :id=Work_item

* [计算表格列行为状态(calc_column_action_state)](module/ProjMgmt/Work_item/uilogic/calc_column_action_state.md)<br>用于动态控制归档和激活行为的禁用状态
* [添加子工作项值变更(add_child_change)](module/ProjMgmt/Work_item/uilogic/add_child_change.md)
* [关注人员更新(attention_personnel_update)](module/ProjMgmt/Work_item/uilogic/attention_personnel_update.md)
* [甘特新建行测试(newrow_gantt)](module/ProjMgmt/Work_item/uilogic/newrow_gantt.md)
* [切换表格模式(change_grid_mode)](module/ProjMgmt/Work_item/uilogic/change_grid_mode.md)
* [建立关联数据(create_relation)](module/ProjMgmt/Work_item/uilogic/create_relation.md)
* [获取工作项总条数(get_work_item_total)](module/ProjMgmt/Work_item/uilogic/get_work_item_total.md)
* [切换显示模式(switch_show_mode)](module/ProjMgmt/Work_item/uilogic/switch_show_mode.md)
* [新建任务（kanban）（工具栏）(new_kanban_task_toolbar)](module/ProjMgmt/Work_item/uilogic/new_kanban_task_toolbar.md)
* [新建行测试(newrow_test)](module/ProjMgmt/Work_item/uilogic/newrow_test.md)
* [查看工时明细(check_workload_detail)](module/ProjMgmt/Work_item/uilogic/check_workload_detail.md)
* [选择下拉框区域展示(show_choose_area)](module/ProjMgmt/Work_item/uilogic/show_choose_area.md)
* [切换树模式(change_tree_mode)](module/ProjMgmt/Work_item/uilogic/change_tree_mode.md)
* [建立双向关联数据(create_double_relation)](module/ProjMgmt/Work_item/uilogic/create_double_relation.md)<br>1.工作项表格「 关联工作项 」按钮 后附加
2.测试计划, 新建缺陷后附加
* [设置表单状态(set_form_readonly)](module/ProjMgmt/Work_item/uilogic/set_form_readonly.md)<br>控制回收站表单只读
* [触发计数器刷新(refresh_counter)](module/ProjMgmt/Work_item/uilogic/refresh_counter.md)
* [甘特删除行测试(removerow_gantt)](module/ProjMgmt/Work_item/uilogic/removerow_gantt.md)
* [控制评论按钮隐藏(comment_icon_hidden)](module/ProjMgmt/Work_item/uilogic/comment_icon_hidden.md)
* [新建缺陷（kanban）（工具栏）(new_kanban_bug_toolbar)](module/ProjMgmt/Work_item/uilogic/new_kanban_bug_toolbar.md)
* [关联工作项值变更(relation_work_item_change)](module/ProjMgmt/Work_item/uilogic/relation_work_item_change.md)
* [控制评论按钮显示(comment_icon_show)](module/ProjMgmt/Work_item/uilogic/comment_icon_show.md)
* [新建用户故事（kanban）（工具栏）(new_kanban_story_toolbar)](module/ProjMgmt/Work_item/uilogic/new_kanban_story_toolbar.md)
* [添加附件数据(add_attachment)](module/ProjMgmt/Work_item/uilogic/add_attachment.md)
* [子工作项刷新计数器(child_refresh_counter)](module/ProjMgmt/Work_item/uilogic/child_refresh_counter.md)
* [计算父工作项类型(calc_parent_work_item_type)](module/ProjMgmt/Work_item/uilogic/calc_parent_work_item_type.md)

## [工时(WORKLOAD)](module/Base/Workload.md) :id=Workload

* [返回(back)](module/Base/Workload/uilogic/back.md)
