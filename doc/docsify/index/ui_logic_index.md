# 界面逻辑 <!-- {docsify-ignore-all} -->

## [活动(ACTIVITY)](module/Base/activity.md) :id=activity

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[跳转视图](module/Base/activity/uilogic/jump_view)|jump_view||


## [附件(ATTACHMENT)](module/Base/attachment.md) :id=attachment

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[添加附件数据](module/Base/attachment/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[添加附件数据(表格)](module/Base/attachment/uilogic/add_attachment_grid)|add_attachment_grid|调用附件上传行为，添加附件数据|
|[计算附件是否隐藏逻辑](module/Base/attachment/uilogic/calc_attachment_hidden)|calc_attachment_hidden|根据表格数据判断附件表格的显示或隐藏|
|[附件删除](module/Base/attachment/uilogic/remove_attachment)|remove_attachment|自动判断为表格或表单附件，按类别删除|
|[附件删除（表格）](module/Base/attachment/uilogic/remove_attachment_grid)|remove_attachment_grid|调用表格的行删除方法，删除指定行附件|




## [基线(BASELINE)](module/Base/baseline.md) :id=baseline

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[产品基线新建分组](module/Base/baseline/uilogic/product_create_section)|product_create_section|产品基线调用树节点新建方法，新建分组|
|[产品基线新建类别](module/Base/baseline/uilogic/product_create_category)|product_create_category|产品基线调用树节点新建方法新建类别|
|[删除类别或分组](module/Base/baseline/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除，删除类别或分组数据|
|[测试库基线新建分组](module/Base/baseline/uilogic/library_create_section)|library_create_section|测试库基线调用树节点新建方法，新建分组|
|[测试库基线新建类别](module/Base/baseline/uilogic/library_create_category)|library_create_category|测试库基线调用树节点新建方法新建类别|
|[编辑类别或分组](module/Base/baseline/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)|calc_column_action_state|用于动态启用列绑定的界面行为|
|[项目基线新建分组](module/Base/baseline/uilogic/project_create_section)|project_create_section|项目基线调用树节点新建方法，新建分组|
|[项目基线新建类别](module/Base/baseline/uilogic/project_create_category)|project_create_category|项目基线调用树节点新建方法新建类别|


## [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea.md) :id=baseline_idea

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[返回](module/ProdMgmt/baseline_idea/uilogic/back)|back|查看已规划基线后，返回主表单按钮使用|


## [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case.md) :id=baseline_test_case

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[返回](module/TestMgmt/baseline_test_case/uilogic/back)|back|查看已规划基线后，返回主表单按钮使用|


## [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item.md) :id=baseline_work_item

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[移出基线后刷新表格](module/ProjMgmt/baseline_work_item/uilogic/shift_out_refresh)|shift_out_refresh|移出基线后刷新表格|


## [看板(BOARD)](module/ProjMgmt/board.md) :id=board

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[看板删除后附加逻辑](module/ProjMgmt/board/uilogic/after_board_remove)|after_board_remove|看板删除后附加逻辑：是否当前看板正在预览；删除后需切换|



## [类别(CATEGORY)](module/Base/category.md) :id=category

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/Base/category/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|



## [评论(COMMENT)](module/Base/comment.md) :id=comment

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[发送评论](module/Base/comment/uilogic/send_comment)|send_comment|发送评论，并关闭评论输入框|
|[发送评论(客户沟通)](module/Base/comment/uilogic/send_comment_customer_comment)|send_comment_customer_comment|发送评论，并关闭评论输入框，刷新评论列表|
|[发送评论(知识库)](module/Base/comment/uilogic/send_comment_wiki)|send_comment_wiki|发送评论，并关闭评论输入框，刷新评论列表|
|[回复评论](module/Base/comment/uilogic/reply_comment)|reply_comment|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[回复评论（知识库）](module/Base/comment/uilogic/reply_comment_wiki)|reply_comment_wiki|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[回复评论（知识库）(客户沟通)](module/Base/comment/uilogic/reply_comment_wiki_client)|reply_comment_wiki_client|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)|comment_icon_show|显示评论按钮|
|[控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)|comment_icon_hidden|获取部件状态信息，通过直接赋值，控制指定部件显示隐藏|
|[添加回复](module/Base/comment/uilogic/add_comment)|add_comment|添加回复按钮触发，显示评论区域|
|[添加回复(客户沟通)](module/Base/comment/uilogic/add_comment_client)|add_comment_client|获取指定评论数据，并展开评论输入框|
|[清空评论](module/Base/comment/uilogic/clear_comment)|clear_comment|清空当前输入框内已输入内容|
|[清空评论(客户沟通)](module/Base/comment/uilogic/clear_comment_client)|clear_comment_client|清空评论输入框内容，并隐藏输入框|
|[编辑评论](module/Base/comment/uilogic/edit_comment)|edit_comment|编辑评论，获取评论数据，展开评论输入框并赋值|
|[编辑评论（知识库）](module/Base/comment/uilogic/edit_comment_wiki)|edit_comment_wiki|编辑评论，获取评论数据，展开评论输入框并赋值|
|[编辑评论（知识库）(客户沟通)](module/Base/comment/uilogic/edit_comment_wiki_client)|edit_comment_wiki_client|编辑评论，获取评论数据，展开评论输入框并赋值|
|[获取客户沟通总条数](module/Base/comment/uilogic/get_customer_comment_total)|get_customer_comment_total|获取客户沟通的总条数信息|



## [客户(CUSTOMER)](module/ProdMgmt/customer.md) :id=customer

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[关联客户值变更](module/ProdMgmt/customer/uilogic/relation_customer_change)|relation_customer_change|关联客户值变更时，调用处理逻辑，生成正反向关联数据|
|[删除类别或分组](module/ProdMgmt/customer/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[刷新客户表格](module/ProdMgmt/customer/uilogic/refresh_customer_grid)|refresh_customer_grid||
|[新建分组](module/ProdMgmt/customer/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProdMgmt/customer/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[测试判断只读用户](module/ProdMgmt/customer/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[编辑类别或分组](module/ProdMgmt/customer/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[触发计数器刷新](module/ProdMgmt/customer/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[选择下拉框区域展示](module/ProdMgmt/customer/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[需求关联客户](module/ProdMgmt/customer/uilogic/idea_relation_customer)|idea_relation_customer|值变更时触发，需求关联客户，调用处理逻辑生成正反向数据|



## [交付物(DELIVERABLE)](module/Base/deliverable.md) :id=deliverable

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除（表单中）](module/Base/deliverable/uilogic/del)|del|执行删除方法，并根据条件隐藏表格（数据为空）|
|[提交](module/Base/deliverable/uilogic/submit)|submit|瀑布项目主视图 → 交付物分页表格 → 表格行操作|
|[提交（表单中）](module/Base/deliverable/uilogic/submit_form)|submit_form|瀑布项目 → 工作项详情 → 交付物分页 → 表格行操作|
|[新建交付目标](module/Base/deliverable/uilogic/create_deliverable)|create_deliverable|瀑布项目 → 工作项详情 → 交付物分页 → 新建交付目标按钮|
|[获取交付目标总条数](module/Base/deliverable/uilogic/get_deliverable_total)|get_deliverable_total|获取交付物的总条数信息|
|[计算表格列行为状态](module/Base/deliverable/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制提交和删除行为的禁用状态|
|[输入框区域展示](module/Base/deliverable/uilogic/show_input_area)|show_input_area|工作项 添加交付目标|
|[输入框区域隐藏](module/Base/deliverable/uilogic/hidden_input_area)|hidden_input_area|工作项 添加交付目标|



## [数据字典(DICTIONARY)](module/Base/dictionary_data.md) :id=dictionary_data

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)|judge_column_state|用于动态控制激活行为的禁用状态|











## [团队(GROUP)](module/Base/group.md) :id=group

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/Base/group/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/Base/group/uilogic/create_section)|create_section|团队页左侧树的新建分组逻辑|
|[编辑类别或分组](module/Base/group/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|



## [需求(IDEA)](module/ProdMgmt/idea.md) :id=idea

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[上传附件（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联产品需求（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工作项（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联测试用例（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_test_case)|toolbar_link_test_case|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求值变更](module/ProdMgmt/idea/uilogic/relation_idea_change)|relation_idea_change|关联操作时触发，内部调用关联逻辑进行关联操作|
|[删除类别或分组](module/ProdMgmt/idea/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[刷新需求表格](module/ProdMgmt/idea/uilogic/refresh_idea_grid)|refresh_idea_grid|刷新需求表格|
|[工作项关联需求](module/ProdMgmt/idea/uilogic/work_item_relation_idea)|work_item_relation_idea|值变更时触发，工作项关联需求，调用处理逻辑生成正反向数据|
|[工单关联需求](module/ProdMgmt/idea/uilogic/ticket_relation_idea)|ticket_relation_idea|值变更时触发，工单关联需求，调用处理逻辑生成正反向数据|
|[新建子产品](module/ProdMgmt/idea/uilogic/create_section)|create_section|产品需求页左侧树的新建子产品逻辑|
|[新建模块](module/ProdMgmt/idea/uilogic/create_category)|create_category|产品需求页左侧树的新建模块逻辑|
|[显示下拉并展开选项（嵌入视图）](module/ProdMgmt/idea/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项(工具栏)|
|[查看工时明细](module/ProdMgmt/idea/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[测试判断只读用户](module/ProdMgmt/idea/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[添加附件数据](module/ProdMgmt/idea/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[用例关联需求](module/ProdMgmt/idea/uilogic/test_case_relation_idea)|test_case_relation_idea|值变更时触发，用例关联需求，调用处理逻辑生成正反向数据|
|[编辑类别或分组](module/ProdMgmt/idea/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[获取工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)|get_idea_total|获取需求的总条数信息|
|[触发计数器刷新](module/ProdMgmt/idea/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[选择下拉框区域展示](module/ProdMgmt/idea/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[需求关联需求](module/ProdMgmt/idea/uilogic/idea_relation_idea)|idea_relation_idea|值变更时触发，需求关联需求，调用处理逻辑生成正反向数据|





## [测试库(LIBRARY)](module/TestMgmt/library.md) :id=library

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[刷新当前表格](module/TestMgmt/library/uilogic/refresh_current_grid)|refresh_current_grid|按钮触发，通过脚本切换显示组件|
|[批量删除测试库成员临时数据](module/TestMgmt/library/uilogic/remove_batch_temp)|remove_batch_temp|获取测试库内所有临时成员数据并删除|
|[计算表格列行为状态(library)](module/TestMgmt/library/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/TestMgmt/library/uilogic/notify_refresh)|notify_refresh||


## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) :id=library_member

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[新建测试库默认临时成员](module/TestMgmt/library_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到测试库临时成员内|
|[跳转至成员设置](module/TestMgmt/library_member/uilogic/jump_to_member_set)|jump_to_member_set|通过路由跳转至测试库成员设置|


## [登录日志(LOGIN_LOG)](module/Base/login_log.md) :id=login_log

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[计算活跃成员数据信息](module/Base/login_log/uilogic/calc_active_member_info)|calc_active_member_info|获取活跃成员下的昨日活跃人数、昨日活跃率、活跃总人数的数值|





## [通知事件(NOTIFY_EVENT)](module/extension/notify_event.md) :id=notify_event

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[保存列表多数据部件](module/extension/notify_event/uilogic/save_list_mdctrl)|save_list_mdctrl||




## [页面(PAGE)](module/Wiki/article_page.md) :id=article_page

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[关闭模板中心](module/Wiki/article_page/uilogic/close_stencil)|close_stencil|关闭模板中心|
|[关闭评论区](module/Wiki/article_page/uilogic/close_comment)|close_comment|隐藏评论区，同时显示评论按钮|
|[切换导航树显示状态](module/Wiki/article_page/uilogic/change_tree_state)|change_tree_state||
|[删除页面](module/Wiki/article_page/uilogic/delete_page)|delete_page|调用树节点的删除方法，删除指定页面|
|[刷新当前表格](module/Wiki/article_page/uilogic/refresh_current_grid)|refresh_current_grid|刷新表格|
|[恢复历史版本并通知刷新](module/Wiki/article_page/uilogic/page_refresh)|page_refresh|恢复到指定版本，并调用刷新方法|
|[新建分组](module/Wiki/article_page/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建发布并通知刷新](module/Wiki/article_page/uilogic/save_notify_refresh)|save_notify_refresh|保存当前页面内容并刷新页面，点击发布按钮，触发保存非草稿页面|
|[显示模板](module/Wiki/article_page/uilogic/show_stencil)|show_stencil|通过按钮触发，显示或隐藏模板信息|
|[显示评论区](module/Wiki/article_page/uilogic/show_commnet)|show_commnet|打开评论区，同时隐藏评论按钮|
|[添加附件数据](module/Wiki/article_page/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[编辑节点](module/Wiki/article_page/uilogic/edit_section_or_category)|edit_section_or_category|编辑树节点|
|[自动保存](module/Wiki/article_page/uilogic/auto_save)|auto_save||
|[获取模板](module/Wiki/article_page/uilogic/get_stencil_info)|get_stencil_info|测试。新建时获取模板信息|




## [文件夹(PORTFOLIO)](module/Base/portfolio.md) :id=portfolio

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[刷新当前表格](module/Base/portfolio/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前表格|
|[批量删除项目集成员临时数据](module/Base/portfolio/uilogic/remove_batch_temp)|remove_batch_temp|获取项目集内所有临时成员数据并删除|
|[计算表格列行为状态(portfolio)](module/Base/portfolio/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/Base/portfolio/uilogic/notify_refresh)|notify_refresh||


## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md) :id=portfolio_member

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[新建项目集默认临时成员](module/Base/portfolio_member/uilogic/default_project_member)|default_project_member|创建临时数据，并将当前用户加入到项目集临时成员内|


## [产品(PRODUCT)](module/ProdMgmt/product.md) :id=product

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[刷新当前表格](module/ProdMgmt/product/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前表格|
|[批量删除产品成员临时数据](module/ProdMgmt/product/uilogic/remove_batch_temp)|remove_batch_temp|获取产品内所有临时成员数据并删除|
|[计算表格列行为状态(product)](module/ProdMgmt/product/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/ProdMgmt/product/uilogic/notify_refresh)|notify_refresh||


## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) :id=product_member

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[建立产品成员](module/ProdMgmt/product_member/uilogic/create_product_member)|create_product_member|根据表格选中数据，生成产品成员|
|[新建产品默认临时成员](module/ProdMgmt/product_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到产品临时成员内|
|[跳转至成员设置](module/ProdMgmt/product_member/uilogic/jump_to_member_set)|jump_to_member_set|通过路由跳转至产品成员设置|


## [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md) :id=product_plan

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/ProdMgmt/product_plan/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/ProdMgmt/product_plan/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProdMgmt/product_plan/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProdMgmt/product_plan/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|





## [项目(PROJECT)](module/ProjMgmt/project.md) :id=project

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前视图的表格|
|[批量删除项目成员临时数据](module/ProjMgmt/project/uilogic/remove_batch_temp)|remove_batch_temp|获取项目内所有临时成员数据并删除|
|[根据类型跳转项目主视图](module/ProjMgmt/project/uilogic/open_project_main_view)|open_project_main_view|判断类型跳转不同的项目主视图|
|[计算表格列行为状态(project)](module/ProjMgmt/project/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/ProjMgmt/project/uilogic/notify_refresh)|notify_refresh||


## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md) :id=project_member

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[新建项目默认临时成员](module/ProjMgmt/project_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到项目临时成员内|
|[跳转至成员设置](module/ProjMgmt/project_member/uilogic/jump_to_member_set)|jump_to_member_set|通过路由跳转至项目成员设置|













## [最近访问(RECENT)](module/Base/recent.md) :id=recent

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[建立双向关联数据](module/Base/recent/uilogic/create_double_relation)|create_double_relation|工作项关联工作项（新建）|
|[最近访问跳转其他视图](module/Base/recent/uilogic/recent_jump_other_view)|recent_jump_other_view|首页最近访问点击后跳转其他视图|



## [关联(RELATION)](module/Base/relation.md) :id=relation

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[取消关联行为是否启用](module/Base/relation/uilogic/del_relation_disabled)|del_relation_disabled|用于动态取消关联按钮的启用(target_priority列绑定的界面行为组)|
|[触发计数器刷新](module/Base/relation/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[选择下拉框区域展示](module/Base/relation/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|


## [项目发布(RELEASE)](module/ProjMgmt/release.md) :id=release

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/ProjMgmt/release/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/ProjMgmt/release/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/release/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/release/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|


## [评审(REVIEW)](module/TestMgmt/review.md) :id=review

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/TestMgmt/review/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[批量删除评审用例临时数据](module/TestMgmt/review/uilogic/remove_batch_temp)|remove_batch_temp|获取评审所有临时用例并删除|
|[提交评审](module/TestMgmt/review/uilogic/commit_review)|commit_review||
|[撤销评审](module/TestMgmt/review/uilogic/repeal_review)|repeal_review||
|[新建分组](module/TestMgmt/review/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/review/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[添加附件数据（通用）](module/TestMgmt/review/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[编辑类别或分组](module/TestMgmt/review/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态(project)](module/TestMgmt/review/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制界面行为组按钮的显示隐藏状态|
|[跳转至工作流编辑视图](module/TestMgmt/review/uilogic/jump_wf_edit_view)|jump_wf_edit_view||



## [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md) :id=review_content

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[获取评审内容总条数](module/TestMgmt/review_content/uilogic/get_review_content_total)|get_review_content_total|获取评审内容总条数|
|[评审内容保存之前处理](module/TestMgmt/review_content/uilogic/review_content_before_save)|review_content_before_save||







## [执行用例(RUN)](module/TestMgmt/run.md) :id=run

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[刷新用例表格](module/TestMgmt/run/uilogic/refresh_run_grid)|refresh_run_grid|内置脚本，刷新用例表格|
|[填充并刷新门户数据（测试）](module/TestMgmt/run/uilogic/fill_and_refresh_portlet)|fill_and_refresh_portlet|门户界面行为打开选项操作视图后，计算需要填充到视图上的数据|
|[打开关联用例](module/TestMgmt/run/uilogic/open_re_run)|open_re_run|调用界面行为，打开关联用例|
|[查看工时明细](module/TestMgmt/run/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[测试判断只读用户](module/TestMgmt/run/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)|get_actual_workload|获取工时信息，并计算实际工时|
|[获取执行结果总条数](module/TestMgmt/run/uilogic/get_run_result_total)|get_run_result_total|获取执行结果的总条数信息|
|[触发计数器刷新(run)](module/TestMgmt/run/uilogic/refresh_counter_run)|refresh_counter_run|关联数据变更后，触发计数器刷新|


## [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment.md) :id=run_attachment

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除](module/TestMgmt/run_attachment/uilogic/del)|del|执行删除方法，并根据条件隐藏表格（数据为空）|
|[添加附件数据](module/TestMgmt/run_attachment/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[获取结果附件总条数](module/TestMgmt/run_attachment/uilogic/get_run_attachment_total)|get_run_attachment_total|获取结果附件总条数|



## [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment.md) :id=search_attachment

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[打开所属主页视图](module/Base/search_attachment/uilogic/open_parent_index_view)|open_parent_index_view|链接跳转项目/产品/测试库/空间首页视图|
|[打开详情视图](module/Base/search_attachment/uilogic/open_main_view)|open_main_view|链接跳转工作项/产品需求/测试用例/工单/客户/页面详情主视图|


## [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) :id=search_comment

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[打开所属主页视图](module/Base/search_comment/uilogic/open_parent_index_view)|open_parent_index_view|链接跳转项目/产品/测试库/空间首页视图|
|[打开详情视图](module/Base/search_comment/uilogic/open_main_view)|open_main_view|链接跳转工作项/产品需求/测试用例/工单/客户/页面详情主视图|





## [空间(SPACE)](module/Wiki/space.md) :id=space

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[产品关联空间](module/Wiki/space/uilogic/product_relation_space)|product_relation_space|调用后台关联逻辑，产品关联空间并生成正反关联数据|
|[刷新当前表格](module/Wiki/space/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前表格|
|[批量删除空间成员临时数据](module/Wiki/space/uilogic/remove_batch_temp)|remove_batch_temp|获取空间内所有临时成员数据并删除|
|[新建目录](module/Wiki/space/uilogic/create_category)|create_category|新建空间目录|
|[计算表格列行为状态(space)](module/Wiki/space/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[项目关联空间](module/Wiki/space/uilogic/project_relation_space)|project_relation_space|调用后台关联逻辑，项目关联空间并生成正反关联数据|


## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) :id=space_member

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[新建空间默认临时成员](module/Wiki/space_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到空间临时成员内|


## [迭代(SPRINT)](module/ProjMgmt/sprint.md) :id=sprint

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/ProjMgmt/sprint/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除，删除类别或分组数据|
|[新建分组](module/ProjMgmt/sprint/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/sprint/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/sprint/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|



## [页面模板(STENCIL)](module/Wiki/stencil.md) :id=stencil

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[打开新建页面并关闭模板中心](module/Wiki/stencil/uilogic/open_new_page)|open_new_page|打开新建页并关闭模板中心|













## [用例(TEST_CASE)](module/TestMgmt/test_case.md) :id=test_case

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[上传附件（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联工作项（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联测试用例值变更](module/TestMgmt/test_case/uilogic/relation_test_case_change)|relation_test_case_change|关联测试用例值变更时，调用处理逻辑，生成正反向关联数据|
|[关联缺陷（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_bug)|toolbar_link_bug|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[删除类别或分组](module/TestMgmt/test_case/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[刷新测试用例表格](module/TestMgmt/test_case/uilogic/refresh_test_case_grid)|refresh_test_case_grid||
|[工作项关联用例](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)|work_item_relation_test_case|值变更时触发，工作项关联用例，调用处理逻辑生成正反向数据|
|[新建分组](module/TestMgmt/test_case/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/test_case/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[显示下拉并展开选项（嵌入视图）](module/TestMgmt/test_case/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项(工具栏)|
|[查看工时明细](module/TestMgmt/test_case/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[查看已规划基线](module/TestMgmt/test_case/uilogic/check_baseline_version)|check_baseline_version|按钮触发，通过脚本切换显示组件|
|[测试判断只读用户](module/TestMgmt/test_case/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[添加附件数据（通用）](module/TestMgmt/test_case/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)|clean_attentions||
|[编辑类别或分组](module/TestMgmt/test_case/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[获取测试用例总条数](module/TestMgmt/test_case/uilogic/get_test_case_total)|get_test_case_total|获取测试用例的总条数信息|
|[触发计数器刷新](module/TestMgmt/test_case/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[选择下拉框区域展示](module/TestMgmt/test_case/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[选择用例模板](module/TestMgmt/test_case/uilogic/choose_case_template)|choose_case_template|选择用例模板后回填所选模板数据至表单|
|[需求关联用例](module/TestMgmt/test_case/uilogic/idea_relation_test_case)|idea_relation_test_case|值变更时触发，需求关联用例，调用处理逻辑生成正反向数据|



## [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) :id=test_plan

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/TestMgmt/test_plan/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/TestMgmt/test_plan/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/test_plan/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[移入计划](module/TestMgmt/test_plan/uilogic/shift_in_test_plan)|shift_in_test_plan|获取选中数据，通过后台处理，完成测试用例移入计划操作|
|[编辑类别或分组](module/TestMgmt/test_plan/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)|set_portlet_search_date|在门户部件上配置视图逻辑，设置门户默认搜索时间|


## [用例模块(TEST_SUITE)](module/TestMgmt/test_suite.md) :id=test_suite

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[删除类别或分组](module/TestMgmt/test_suite/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/TestMgmt/test_suite/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/test_suite/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/TestMgmt/test_suite/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|


## [工单(TICKET)](module/ProdMgmt/ticket.md) :id=ticket

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[上传附件（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联产品需求（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工作项（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单值变更](module/ProdMgmt/ticket/uilogic/relation_ticket_change)|relation_ticket_change|关联工单值变更时，调用处理逻辑，生成正反向关联数据|
|[关联工单（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[刷新工单表格](module/ProdMgmt/ticket/uilogic/refresh_ticket_grid)|refresh_ticket_grid||
|[只读隐藏](module/ProdMgmt/ticket/uilogic/readonly_hide)|readonly_hide||
|[客户添加工单值变更](module/ProdMgmt/ticket/uilogic/customer_add_change)|customer_add_change|客户添加工单值变更，触发工单的客户属性变更|
|[工作项关联工单](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)|work_item_relation_ticket|值变更时触发，工单关联工单，调用处理逻辑生成正反向数据|
|[建立关联数据](module/ProdMgmt/ticket/uilogic/create_relation)|create_relation|新建执行后，建立关联数据|
|[建立双向关联数据](module/ProdMgmt/ticket/uilogic/create_double_relation)|create_double_relation|建立双向关联数据|
|[新建工单并生成关联数据](module/ProdMgmt/ticket/uilogic/create_and_relation)|create_and_relation|新建工单并生成关联数据|
|[显示下拉并展开选项（嵌入视图）](module/ProdMgmt/ticket/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项（工具栏）|
|[测试判断只读用户](module/ProdMgmt/ticket/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[添加附件数据](module/ProdMgmt/ticket/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[获取工单总条数](module/ProdMgmt/ticket/uilogic/get_ticket_total)|get_ticket_total|获取工单的总条数信息|
|[触发计数器刷新](module/ProdMgmt/ticket/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算表格列行为状态](module/ProdMgmt/ticket/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制归档和激活行为的禁用状态|
|[选择下拉框区域展示](module/ProdMgmt/ticket/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[需求关联工单](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)|idea_relation_ticket|值变更时触发，需求关联工单，调用处理逻辑生成正反向数据|


## [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type.md) :id=ticket_type

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[判断是否禁用](module/ProdMgmt/ticket_type/uilogic/is_disabled)|is_disabled|确认删除视图判断是否禁用确定按钮|




## [企业用户(USER)](module/Base/user.md) :id=user

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[修改密码（表单）](module/Base/user/uilogic/change_pas)|change_pas|修改密码|


## [版本(VERSION)](module/Base/version.md) :id=version

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[版本变化后刷新主表单](module/Base/version/uilogic/version_change_after_refresh)|version_change_after_refresh|版本变化后，触发主表单重新加载|
|[版本表格列行为是否启用](module/Base/version/uilogic/action_disabled)|action_disabled|用于动态启用列绑定的界面行为|
|[获取版本总条数](module/Base/version/uilogic/get_version_total)|get_version_total|获取版本的总条数信息|
|[触发计数器刷新](module/Base/version/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)|calc_column_button_state|判断版本是否与当前版本一致，是否可恢复此版本|




## [工时(WORKLOAD)](module/Base/workload.md) :id=workload

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[工时打开对应事项详情视图](module/Base/workload/uilogic/open_main_view)|open_main_view|链接跳转工作项/产品需求/测试用例详情主视图|
|[工时日历打开工时日志视图](module/Base/workload/uilogic/calendar_link_log_view)|calendar_link_log_view|获取搜索表单时间范围条件，并打开工时日志表格|
|[工时日历打开工时日志视图（管理）](module/Base/workload/uilogic/calendar_management_link_log_view)|calendar_management_link_log_view|获取搜索表单时间范围条件，并打开工时日志表格|
|[打开产品主视图](module/Base/workload/uilogic/open_product_main_view)|open_product_main_view|调用实体行为，打开产品主视图|
|[打开工作类别工时记录列表视图](module/Base/workload/uilogic/open_type_detail)|open_type_detail|获取搜索表单时间范围条件，并打开工时记录列表|
|[打开工作类别管理工时记录列表视图](module/Base/workload/uilogic/open_management_type_detail)|open_management_type_detail|获取搜索表单时间范围条件，并打开工时记录列表|
|[打开成员工时记录列表视图](module/Base/workload/uilogic/open_member_detail)|open_member_detail|获取搜索表单时间范围条件，并打开工时记录列表|
|[打开所属工时记录列表视图](module/Base/workload/uilogic/open_project_workload_detail)|open_project_workload_detail|工作台，获取搜索表单时间范围条件，并打开项目/产品/测试用例下的工时记录列表|
|[打开所属工时记录列表视图(管理)](module/Base/workload/uilogic/open_parent_with_log_grid)|open_parent_with_log_grid|工时管理，获取搜索表单时间范围条件，并打开项目/产品/测试用例下的工时记录列表|
|[打开测试库主视图](module/Base/workload/uilogic/open_library_main_view)|open_library_main_view|打开测试库主视图|
|[打开项目主视图](module/Base/workload/uilogic/open_project_main_view)|open_project_main_view|打开项目主视图|
|[返回](module/Base/workload/uilogic/back)|back|查看工时明细后，返回主表单按钮使用|
|[返回（执行用例表单）](module/Base/workload/uilogic/back_run_main_view)|back_run_main_view|切换显示组件|




## [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) :id=work_item

|  中文名col200 | 代码名col200 | 备注col500 |
| --------|--------|------|
|[上传附件（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)|attention_personnel_update|获取关注人员信息，并根据类别更新|
|[关联交付物（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_deliverable)|toolbar_link_deliverable|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联子工作项表格行为列状态](module/ProjMgmt/work_item/uilogic/relation_child_grid_action)|relation_child_grid_action|关联子工作项表格根据上下文srfreadonly判断行为列是否启用|
|[关联工作项值变更](module/ProjMgmt/work_item/uilogic/relation_work_item_change)|relation_work_item_change|关联工作项值变更时，调用处理逻辑，生成正反向关联数据|
|[关联工作项（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联用例（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_test_case)|toolbar_link_test_case|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[切换显示模式](module/ProjMgmt/work_item/uilogic/switch_show_mode)|switch_show_mode|切换表格的显示模式|
|[切换树模式](module/ProjMgmt/work_item/uilogic/change_tree_mode)|change_tree_mode|切换树模式|
|[切换表格模式](module/ProjMgmt/work_item/uilogic/change_grid_mode)|change_grid_mode|调用树表方法，切换表格的显示模式|
|[刷新工作项表格](module/ProjMgmt/work_item/uilogic/refresh_work_item_grid)|refresh_work_item_grid|触发表格刷新|
|[图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)|chart_show_count|仪表盘图表显示总数<br>|
|[子工作项刷新计数器](module/ProjMgmt/work_item/uilogic/child_refresh_counter)|child_refresh_counter|关联数据变更后，触发计数器刷新|
|[工单关联工作项](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)|ticket_relation_work_item|值变更时触发，工单关联工作项，调用处理逻辑生成正反向数据|
|[建立关联数据](module/ProjMgmt/work_item/uilogic/create_relation)|create_relation|新建执行后触发，建立关联数据|
|[建立双向关联数据](module/ProjMgmt/work_item/uilogic/create_double_relation)|create_double_relation|1.工作项表格「 关联工作项 」按钮 后附加<br>2.测试计划, 新建缺陷后附加|
|[执行用例关联工作项(缺陷)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)|run_relation_work_item_bug|值变更时触发，执行用例关联缺陷类工作项，调用处理逻辑生成正反向数据，同时为测试用例生成正反向数据（特殊业务）|
|[控制表单成功关注列表readonly](module/ProjMgmt/work_item/uilogic/control_readonly)|control_readonly|通过识别上下文中的归档属性，判断工作项表单中关注列表的操作能力|
|[新建任务（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_task_toolbar)|new_kanban_task_toolbar|看板项目工作项分页新建任务类型工作项|
|[新建用户故事（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_story_toolbar)|new_kanban_story_toolbar|获取首个代码表标识，并新建看板用户故事|
|[新建缺陷（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_bug_toolbar)|new_kanban_bug_toolbar|看板项目中新建缺陷类型的工作项|
|[新建行](module/ProjMgmt/work_item/uilogic/newrow_test)|newrow_test|树状表格新建子工作项|
|[显示下拉并展开选项（嵌入视图）](module/ProjMgmt/work_item/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项（工具栏）|
|[查看工时明细](module/ProjMgmt/work_item/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[测试判断只读用户](module/ProjMgmt/work_item/uilogic/test_get_only_read)|test_get_only_read|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[添加子工作项值变更](module/ProjMgmt/work_item/uilogic/add_child_change)|add_child_change|子工作项值变更触发更新父标识|
|[添加子工作项（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_add_child)|toolbar_add_child|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[添加附件数据](module/ProjMgmt/work_item/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[甘特删除行测试](module/ProjMgmt/work_item/uilogic/removerow_gantt)|removerow_gantt|甘特删除行测试|
|[甘特新建行测试](module/ProjMgmt/work_item/uilogic/newrow_gantt)|newrow_gantt|甘特新建行测试|
|[用例关联工作项](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)|test_case_relation_work_item|值变更时触发，用例关联工作项，调用处理逻辑生成正反向数据|
|[获取工作项总条数](module/ProjMgmt/work_item/uilogic/get_work_item_total)|get_work_item_total|获取工作项的总条数信息|
|[获取工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[触发计数器刷新](module/ProjMgmt/work_item/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算子工作项类型](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)|calc_children_work_item_type|获取项目类型，并根据类型计算当前工作项子类型|
|[计算子工作项类型(上下文)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)|calc_children_work_item_type_context|根据工作项类型，判断此工作项可变更的父工作项/子工作项类型|
|[计算父工作项类型](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)|calc_parent_work_item_type|获取当前工作项类型，并计算父工作项类型|
|[计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)|calc_parent_work_item_type_form|获取工作项类型，并计算父工作项类型|
|[计算表格列行为状态](module/ProjMgmt/work_item/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制归档和激活行为的禁用状态|
|[计算表格列行为状态(需求树表格)](module/ProjMgmt/work_item/uilogic/calc_requirement_column_action)|calc_requirement_column_action|用于动态控制归档和激活行为的禁用状态|
|[计算选择版本（表格）](module/ProjMgmt/work_item/uilogic/calc_choose_version_grid)|calc_choose_version_grid|基线规划工作项时，版本选择列|
|[计算面板项行为状态](module/ProjMgmt/work_item/uilogic/calc_kanban_item_action_state)|calc_kanban_item_action_state|看板中工作项的归档或激活按钮的禁用判定|
|[设置时间范围](module/ProjMgmt/work_item/uilogic/set_date_range)|set_date_range|自动获取指定指定时间范围时间，并返回至搜索表单|
|[设置表单状态](module/ProjMgmt/work_item/uilogic/set_form_readonly)|set_form_readonly|控制回收站表单只读|
|[设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)|set_default_attention|新建工作项时，默认将创建人添加到此工作项的关注列表|
|[选择下拉框区域展示](module/ProjMgmt/work_item/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[需求关联工作项](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)|idea_relation_work_item|需求关联工作项，生成关联数据|



