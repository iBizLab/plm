# 处理逻辑 <!-- {docsify-ignore-all} -->

## [活动(ACTIVITY)](module/Base/activity.md) :id=activity

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[获取活动对象详情](module/Base/activity/logic/get_activity_obj_detail)|get_activity_obj_detail|无||获取选中的活动对象详情|


## [组件(ADDON)](module/Base/addon.md) :id=addon

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/addon/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[组件权限计数器](module/Base/addon/logic/addon_authority)|addon_authority|无||获取组件权限计数器是数值|
|[获取视图消息](module/Base/addon/logic/get_view_msg)|get_view_msg|无||获取视图消息|



## [资源组件(ADDON_RESOURCE)](module/Base/addon_resource.md) :id=addon_resource

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[检验资源是否已删除](module/Base/addon_resource/logic/check_resource_is_deleted)|check_resource_is_deleted|无||判断资源是否已删除，用于视图切换逻辑|
|[空查询](module/Base/addon_resource/logic/empty)|empty|无||空查询|





## [智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context.md) :id=ai_agent_context

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[fill_with_agent](module/ai/ai_agent_context/logic/fill_with_agent)|fill_with_agent|无||由插件补充填充，此配置仅作为填充入口|
|[reload_aiagents](module/ai/ai_agent_context/logic/reload_aiagents)|reload_aiagents|无||重载AI代理对象|






## [智能体会话(AI_AGENT_SESSION)](module/ai/ai_agent_session.md) :id=ai_agent_session

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[get_info](module/ai/ai_agent_session/logic/get_info)|get_info|无|||



## [AI凭证(AI_CREDENTIAL)](module/ai/ai_credential.md) :id=ai_credential

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[获取Cloud配置](module/ai/ai_credential/logic/get_cloud_config)|get_cloud_config|无|||




## [知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document.md) :id=ai_kb_document

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除文档执行计划](module/ai/ai_kb_document/logic/remove_doc_scheduled)|remove_doc_scheduled|无|||
|[更新文档执行计划](module/ai/ai_kb_document/logic/update_doc_scheduled)|update_doc_scheduled|属性逻辑|||
|[生成文档执行计划](module/ai/ai_kb_document/logic/generate_doc_scheduled)|generate_doc_scheduled|无|||


## [知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync.md) :id=ai_kb_document_sync

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[准备建立](module/ai/ai_kb_document_sync/logic/prepare_create)|prepare_create|无|||
|[删除空间执行计划](module/ai/ai_kb_document_sync/logic/remove_space_scheduled)|remove_space_scheduled|无|||
|[同步创建知识库文档](module/ai/ai_kb_document_sync/logic/sync_create_doc)|sync_create_doc|无|||
|[同步删除文档和分块](module/ai/ai_kb_document_sync/logic/sync_remove_doc_chunk)|sync_remove_doc_chunk|无|||
|[更新空间执行计划](module/ai/ai_kb_document_sync/logic/update_space_scheduled)|update_space_scheduled|属性逻辑|||
|[生成空间执行计划](module/ai/ai_kb_document_sync/logic/generate_space_scheduled)|generate_space_scheduled|无|||


## [知识库文档向导(AI_KB_DOCUMENT_WIZARD)](module/ai/ai_kb_document_wizard.md) :id=ai_kb_document_wizard

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[创建知识库文档](module/ai/ai_kb_document_wizard/logic/create_ai_kb_doc)|create_ai_kb_doc|无|||




## [AI大模型(AI_MODEL)](module/ai/ai_model.md) :id=ai_model

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[获取Cloud配置](module/ai/ai_model/logic/get_cloud_config)|get_cloud_config|无|||



## [应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme.md) :id=app_view_theme

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[获取过滤条件](module/ebsx/app_view_theme/logic/fill_search_conds)|fill_search_conds|无|||



## [关注(ATTENTION)](module/Base/attention.md) :id=attention

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[取消关注](module/Base/attention/logic/un_attention)|un_attention|无|||
|[添加关注(测试用例)](module/Base/attention/logic/add_attention_test_case)|add_attention_test_case|无|||
|[添加关注后发送通知](module/Base/attention/logic/after_create_notify)|after_create_notify|无||添加关注人员后，触发提醒关注通知消息给关注人员|
|[添加关注（工单-移动端）](module/Base/attention/logic/mob_add_attention_ticket)|mob_add_attention_ticket|无|||
|[添加关注（需求-移动端）](module/Base/attention/logic/mob_add_attention_idea)|mob_add_attention_idea|无|||
|[添加讨论关注(移动端)](module/Base/attention/logic/mob_add_attention_discuss)|mob_add_attention_discuss|无|||



## [基线(BASELINE)](module/Base/baseline.md) :id=baseline

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除基线前附加逻辑](module/Base/baseline/logic/before_remove)|before_remove|无||删除基线前，删除基线关联数据|
|[删除类别](module/Base/baseline/logic/delete_categories)|delete_categories|无||当类别删除时修改迭代的类别属性|
|[基线操作标识业务计算逻辑](module/Base/baseline/logic/oppriv_logic)|oppriv_logic|实体操作标识计算逻辑||基线操作标识业务计算逻辑|
|[填充类别文本](module/Base/baseline/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[新建规划快照](module/Base/baseline/logic/create_plan_snapshot)|create_plan_snapshot|无||新建规划快照|
|[无操作](module/Base/baseline/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[设立完成（产品）](module/Base/baseline/logic/set_complete_product)|set_complete_product|无||产品基线设立完成|
|[设立完成（测试库）](module/Base/baseline/logic/set_complete_library)|set_complete_library|无||测试库基线设立完成|
|[设立完成（项目）](module/Base/baseline/logic/set_complete_project)|set_complete_project|无||项目基线设立完成|
|[设置完成（空间）](module/Base/baseline/logic/set_complete_space)|set_complete_space|无||空间基线设立完成|


## [基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea.md) :id=baseline_idea

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/ProdMgmt/baseline_idea/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的关联产品需求|
|[移入基线](module/ProdMgmt/baseline_idea/logic/shift_in_baseline)|shift_in_baseline|无||将需求移入对应基线|
|[移出基线](module/ProdMgmt/baseline_idea/logic/shift_out_baseline)|shift_out_baseline|无||将需求移出对应基线|


## [基线页面(BASELINE_PAGE)](module/Wiki/baseline_page.md) :id=baseline_page

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/Wiki/baseline_page/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的页面|
|[移入基线](module/Wiki/baseline_page/logic/shift_in_baseline)|shift_in_baseline|无||将页面移入对应基线|
|[移出基线](module/Wiki/baseline_page/logic/shift_out_baseline)|shift_out_baseline|无||将页面移出对应基线|


## [基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case.md) :id=baseline_test_case

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/TestMgmt/baseline_test_case/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的关联用例|
|[移入基线](module/TestMgmt/baseline_test_case/logic/shift_in_baseline)|shift_in_baseline|无||将用例移入对应基线|
|[移出基线](module/TestMgmt/baseline_test_case/logic/shift_out_baseline)|shift_out_baseline|无||将用例移出对应基线|


## [基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item.md) :id=baseline_work_item

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/ProjMgmt/baseline_work_item/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的关联工作项|
|[快照设立基线](module/ProjMgmt/baseline_work_item/logic/snapshot_set_baseline)|snapshot_set_baseline|无||快照设立基线|
|[移入基线](module/ProjMgmt/baseline_work_item/logic/shift_in_baseline)|shift_in_baseline|无||将工作项移入对应基线|
|[移出基线](module/ProjMgmt/baseline_work_item/logic/shift_out_baseline)|shift_out_baseline|无||将工作项移出对应基线|


## [看板(BOARD)](module/ProjMgmt/board.md) :id=board

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除看板之前判断](module/ProjMgmt/board/logic/before_remove)|before_remove|无||删除看板之前，判断项目下看板数量。必须保留一个看板|
|[判断看板是否已删除](module/ProjMgmt/board/logic/check_board_is_deleted)|check_board_is_deleted|无||判断看板是否已删除，用于视图切换逻辑|
|[无操作](module/ProjMgmt/board/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[生成默认看板栏和泳道](module/ProjMgmt/board/logic/create_default_entry)|create_default_entry|无||新建看板项目后，会附加生成出默认看板栏和泳道|



## [类别(CATEGORY)](module/Base/category.md) :id=category

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除类别及子类别](module/Base/category/logic/delete_child_category)|delete_child_category|无||删除类别及其下子类别（测试）|
|[设置默认分组](module/Base/category/logic/set_section)|set_section|属性逻辑||设置默认分组|



## [评论(COMMENT)](module/Base/comment.md) :id=comment

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除评论](module/Base/comment/logic/delete)|delete|无||评论数据的删除，将评论内容重置为：该评论已删除|
|[取消置顶](module/Base/comment/logic/no_top)|no_top|无|||
|[新建评论后通知](module/Base/comment/logic/after_create_notify)|after_create_notify|无||发表评论后，发送通知消息至相应负责人员、关注人员|
|[评论置顶](module/Base/comment/logic/top)|top|无|||
|[识别内容格式](module/Base/comment/logic/format_type)|format_type|属性逻辑||识别评论内容格式|



## [客户(CUSTOMER)](module/ProdMgmt/customer.md) :id=customer

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品客户关联分页计数器](module/ProdMgmt/customer/logic/product_customer_re_counters)|product_customer_re_counters|无||产品下的客户主视图的分页计数器数据来源|
|[其他实体关联客户](module/ProdMgmt/customer/logic/others_relation_customer)|others_relation_customer|无||客户实体的关联操作，生成正向，反向关联数据|
|[删除客户发送通知](module/ProdMgmt/customer/logic/remove_customer_notify)|remove_customer_notify|无||根据客户标识触发删除客户发送通知|
|[删除类别](module/ProdMgmt/customer/logic/delete_categories)|delete_categories|无||当类别删除时修改客户的类别属性|
|[取消关联](module/ProdMgmt/customer/logic/del_relation)|del_relation|无||客户取消关联数据（正反向关联数据同时删除）|
|[变更负责人附加逻辑](module/ProdMgmt/customer/logic/assignee_onchage)|assignee_onchage|属性逻辑||客户负责人变更时触发相应的通知消息|
|[填充类别文本](module/ProdMgmt/customer/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[客户选择工单](module/ProdMgmt/customer/logic/customer_choose_ticket)|customer_choose_ticket|无||客户选择工单操作，更新工单的客户属性|
|[无操作](module/ProdMgmt/customer/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加至类别](module/ProdMgmt/customer/logic/add_categories)|add_categories|无||添加客户类别操作|
|[获取产品成员](module/ProdMgmt/customer/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前用户权限|
|[获取需求中客户信息](module/ProdMgmt/customer/logic/get_idea_customer_info)|get_idea_customer_info|无||获取需求中客户信息|




## [交付物(DELIVERABLE)](module/Base/deliverable.md) :id=deliverable

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/deliverable/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取交付物详情](module/Base/deliverable/logic/get_mob_delivery_detail)|get_mob_delivery_detail|无|||


## [部门(DEPARTMENT)](module/Base/department.md) :id=department

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[部门过滤](module/Base/department/logic/dept_filter)|dept_filter|无|||



## [数据字典(DICTIONARY)](module/Base/dictionary_data.md) :id=dictionary_data

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/dictionary_data/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member.md) :id=discuss_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/Team/discuss_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/Team/discuss_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建话题成员（移动端）](module/Team/discuss_member/logic/mob_create_topic_member)|mob_create_topic_member|无|||
|[无操作](module/Team/discuss_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [讨论(DISCUSS_POST)](module/Team/discuss_post.md) :id=discuss_post

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[修改评论](module/Team/discuss_post/logic/update_comment)|update_comment|无||修改讨论中的评论信息|
|[关闭](module/Team/discuss_post/logic/close)|close|无||变更讨论的当前状态为关闭|
|[删除](module/Team/discuss_post/logic/delete)|delete|无||讨论数据的逻辑删除，修改讨论的是否删除属性值|
|[删除评论](module/Team/discuss_post/logic/del_comment)|del_comment|无||删除评论|
|[填充附加数据](module/Team/discuss_post/logic/fill_addition)|fill_addition|无||查询创建人创建的讨论和回复数量；此讨论下的参与者|
|[恢复](module/Team/discuss_post/logic/recover)|recover|无||已删除状态讨论数据的恢复，修改讨论的是否删除属性值，并恢复访问记录|
|[打开](module/Team/discuss_post/logic/open)|open|无||变更讨论的当前状态为进行中|
|[无操作](module/Team/discuss_post/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加评论](module/Team/discuss_post/logic/send_comment)|send_comment|无||添加讨论中的评论信息|
|[生成最近访问](module/Team/discuss_post/logic/create_recent)|create_recent|无||在用户对项目数据进行了get或update操作时生成相应的访问记录.type为3，不在界面上进行显示|
|[移动](module/Team/discuss_post/logic/move)|move|无||移动讨论至话题|
|[获取讨论权限](module/Team/discuss_post/logic/get_post_auth)|get_post_auth|无||获取讨论权限，创建人等于自己，则srfreadonly为false。否则直接结束，不返回数据|
|[获取话题成员（移动端）](module/Team/discuss_post/logic/mob_get_topic_member)|mob_get_topic_member|无|||
|[讨论中评论数计数器](module/Team/discuss_post/logic/discuss_post_count)|discuss_post_count|无|||
|[讨论关注（移动端）](module/Team/discuss_post/logic/mob_discuss_post_attention)|mob_discuss_post_attention|无|||


## [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md) :id=discuss_reply

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除回复](module/Team/discuss_reply/logic/del_reply)|del_reply|无||删除回复|
|[回复下修改评论](module/Team/discuss_reply/logic/update_comment)|update_comment|无||回复下修改评论|
|[回复下删除评论](module/Team/discuss_reply/logic/del_comment)|del_comment|无||回复下删除评论|
|[回复下添加评论](module/Team/discuss_reply/logic/send_comment)|send_comment|无||回复下添加评论|
|[子回复数据](module/Team/discuss_reply/logic/sub_reply_data)|sub_reply_data|无||设置回复的子回复|
|[更新讨论时间](module/Team/discuss_reply/logic/update_post_time)|update_post_time|无|||
|[添加回复](module/Team/discuss_reply/logic/add_reply)|add_reply|无||添加回复|
|[编辑回复](module/Team/discuss_reply/logic/edit_reply)|edit_reply|无||编辑回复|


## [话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md) :id=discuss_topic

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/Team/discuss_topic/logic/delete)|delete|无||话题数据的逻辑删除，修改话题的是否删除属性值|
|[取消星标](module/Team/discuss_topic/logic/un_favorite)|un_favorite|无||话题取消星标|
|[变更管理员角色](module/Team/discuss_topic/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[变更管理员角色（移动端）](module/Team/discuss_topic/logic/mob_change_admin_role)|mob_change_admin_role|无|||
|[归档](module/Team/discuss_topic/logic/archive)|archive|无||未归档话题数据的归档处理，修改话题的归档状态为已归档|
|[恢复](module/Team/discuss_topic/logic/recover)|recover|无||恢复已删除状态话题数据，修改话题的是否删除属性值，并恢复访问记录|
|[无操作](module/Team/discuss_topic/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[激活](module/Team/discuss_topic/logic/activate)|activate|无||激活已归档状态话题，修改话题的归档属性|
|[生成最近访问](module/Team/discuss_topic/logic/create_recent)|create_recent|无||在用户对数据进行了get或update操作时生成相应的访问记录。type为3，不在界面上进行显示|
|[移动话题](module/Team/discuss_topic/logic/move_discuss_topic)|move_discuss_topic|无||高级设置中移动项目|
|[自动创建人员](module/Team/discuss_topic/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取快速新建话题集合](module/Team/discuss_topic/logic/quick_create)|quick_create|无||用于获取可快速新建的话题集合|
|[获取话题成员](module/Team/discuss_topic/logic/get_discuss_member_one)|get_discuss_member_one|无||获取话题成员信息，用于判断当前用户权限|
|[设置星标](module/Team/discuss_topic/logic/favorite)|favorite|无||设置为星标话题|


## [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard.md) :id=dyna_dashboard

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[仅获取](module/Base/dyna_dashboard/logic/only_get)|only_get|无|||
|[使用此模板](module/Base/dyna_dashboard/logic/use_cur_template)|use_cur_template|无||使用此模板|
|[更新看板部件模型](module/Base/dyna_dashboard/logic/sync_portlet_model)|sync_portlet_model|无||更新看板部件模型|
|[获取其他仪表盘](module/Base/dyna_dashboard/logic/fill_other_board)|fill_other_board|无||获取其他仪表盘|





## [执行人(EXECUTOR)](module/Base/executor.md) :id=executor

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除执行人时发送通知](module/Base/executor/logic/del_notice)|del_notice|无||删除执行人时发送通知|
|[执行人变更附加逻辑](module/Base/executor/logic/user_id_onchange)|user_id_onchange|属性逻辑||执行人变更附加逻辑|
|[添加执行人时发送通知](module/Base/executor/logic/after_create_notice)|after_create_notice|无||添加执行人时发送通知|










## [流程准则(GUIDELINE)](module/TestMgmt/guideline.md) :id=guideline

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[生成阶段排序值](module/TestMgmt/guideline/logic/fill_stage_order)|fill_stage_order|无||生成阶段排序值|


## [需求(IDEA)](module/ProdMgmt/idea.md) :id=idea

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品需求关联分页计数器](module/ProdMgmt/idea/logic/product_idea_re_counters)|product_idea_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联需求](module/ProdMgmt/idea/logic/others_relation_idea)|others_relation_idea|无||需求实体的关联操作，生成正向，反向关联数据|
|[删除](module/ProdMgmt/idea/logic/delete)|delete|无||需求数据的逻辑删除，修改需求的是否删除属性值|
|[变更需求状态](module/ProdMgmt/idea/logic/change_state)|change_state|无||产品需求状态变更触发相关通知|
|[基线规划需求数据查询](module/ProdMgmt/idea/logic/baseline_plan_idea)|baseline_plan_idea|无||基线规划需求时，填充需求当前版本名称|
|[填充BI报表默认值](module/ProdMgmt/idea/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充表单](module/ProdMgmt/idea/logic/fill_idea_form)|fill_idea_form|无|||
|[归档](module/ProdMgmt/idea/logic/archive)|archive|无||未归档需求数据的归档处理，修改需求的归档状态为归档|
|[恢复](module/ProdMgmt/idea/logic/recover)|recover|无||已删除状态需求数据的恢复，修改需求的是否删除属性值，并恢复访问记录|
|[排期跟踪数据](module/ProdMgmt/idea/logic/plan_track_data)|plan_track_data|无||返回该排期中所有的需求以及需求的关联数据|
|[无操作](module/ProdMgmt/idea/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/idea/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品需求删除或恢复时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/idea/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品需求归档或激活数据时触发相应的通知消息|
|[更新需求进度](module/ProdMgmt/idea/logic/update_idea_progress)|update_idea_progress|无||根据id更新需求的进度|
|[激活](module/ProdMgmt/idea/logic/activate)|activate|无||激活已归档状态需求，修改需求的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/idea/logic/state_onchange)|state_onchange|属性逻辑||需求数据状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/idea/logic/create_recent)|create_recent|无||在用户对需求数据进行了get或update操作时生成相应的访问记录|
|[获取产品成员](module/ProdMgmt/idea/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前用户权限|
|[获取变更类型与变更版本](module/ProdMgmt/idea/logic/set_change_type)|set_change_type|无|||
|[获取基线名称](module/ProdMgmt/idea/logic/get_baseline_name)|get_baseline_name|无||需求主视图获取所属基线|
|[获取客户分数](module/ProdMgmt/idea/logic/get_customer_score)|get_customer_score|无||获取客户分数数据|
|[获取工单数量](module/ProdMgmt/idea/logic/get_ticket_num)|get_ticket_num|无||获取工单数量数据|
|[获取默认模块](module/ProdMgmt/idea/logic/idea_category)|idea_category|无||获取需求的默认模块|
|[计划取消关联需求](module/ProdMgmt/idea/logic/plan_delete_idea)|plan_delete_idea|无||排期（计划）内取消关联需求，删除正反向关联数据|
|[设置初始排序值](module/ProdMgmt/idea/logic/set_sequence)|set_sequence|无||设置初始排序值|
|[负责人变更附加逻辑](module/ProdMgmt/idea/logic/assignee_onchange)|assignee_onchange|属性逻辑||产品需求负责人变更时触发相应的通知消息|
|[选择需求模板](module/ProdMgmt/idea/logic/choose_case_template)|choose_case_template|无||获取选中模板并返回详情|
|[需求关注（移动端）](module/ProdMgmt/idea/logic/mob_idea_attention)|mob_idea_attention|无|||
|[需求复制](module/ProdMgmt/idea/logic/idea_copy)|idea_copy|无||复制需求至其他产品（复制需求信息，在目标产品中创建新需求）|
|[需求排期](module/ProdMgmt/idea/logic/idea_re_plan)|idea_re_plan|无||需求排期，用户在排期内关联相应需求，生成正反向关联关系|
|[需求移动](module/ProdMgmt/idea/logic/idea_move)|idea_move|无||移动需求至其他位置（修改需求的所属产品，重新生成编号）|


## [需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template.md) :id=idea_template

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProdMgmt/idea_template/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|



## [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member.md) :id=insight_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/Insight/insight_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/Insight/insight_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[无操作](module/Insight/insight_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [效能报表(INSIGHT_REPORT)](module/Insight/insight_report.md) :id=insight_report

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[使用此模板](module/Insight/insight_report/logic/use_cur_template)|use_cur_template|无||使用此模板|
|[删除类别](module/Insight/insight_report/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[同步模板模型](module/Insight/insight_report/logic/sync_model)|sync_model|无||同步模板模型|
|[复制报表](module/Insight/insight_report/logic/copy_report)|copy_report|无||复制报表|
|[建立报表扩展模型](module/Insight/insight_report/logic/create_bi_report)|create_bi_report|无||建立报表扩展模型|
|[无操作](module/Insight/insight_report/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除报表扩展模型](module/Insight/insight_report/logic/remove_bi_report)|remove_bi_report|无||移除报表扩展模型|
|[获取视图成员](module/Insight/insight_report/logic/get_view_member)|get_view_member|无||获取视图成员信息，用于判断当前用户权限|
|[计算分组信息](module/Insight/insight_report/logic/calc_group_data)|calc_group_data|属性逻辑||计算分组信息|


## [效能视图(INSIGHT_VIEW)](module/Insight/insight_view.md) :id=insight_view

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[使用此模板](module/Insight/insight_view/logic/use_cur_template)|use_cur_template|无||使用此模板|
|[删除](module/Insight/insight_view/logic/delete)|delete|无||视图的逻辑删除|
|[判断是否需要选择模板](module/Insight/insight_view/logic/recognize_choose_template)|recognize_choose_template|无||判断是否需要选择模板|
|[取消星标](module/Insight/insight_view/logic/un_favorite)|un_favorite|无||取消视图星标|
|[变更管理员角色](module/Insight/insight_view/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[填充BI报表默认值](module/Insight/insight_view/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[恢复](module/Insight/insight_view/logic/recover)|recover|无||恢复|
|[无操作](module/Insight/insight_view/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移动视图](module/Insight/insight_view/logic/view_move)|view_move|无||视图更多设置移动视图<br>|
|[自动创建人员](module/Insight/insight_view/logic/auto_create_members)|auto_create_members|无||自动创建人员|
|[获取视图成员](module/Insight/insight_view/logic/get_view_member)|get_view_member|无||获取视图成员信息，用于判断当前用户权限|
|[设置星标](module/Insight/insight_view/logic/favorite)|favorite|无||设置视图为星标|




## [测试库(LIBRARY)](module/TestMgmt/library.md) :id=library

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[创建之前](module/TestMgmt/library/logic/before_create)|before_create|无||创建测试库之前，对添加的测试库成员进行处理|
|[创建测试库流程准则](module/TestMgmt/library/logic/auto_create_guideline)|auto_create_guideline|无||创建测试库后，自动生成测试库内的评审规则|
|[删除](module/TestMgmt/library/logic/delete)|delete|无||测试库数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/TestMgmt/library/logic/un_favorite)|un_favorite|无||测试库取消星标|
|[变更管理员角色](module/TestMgmt/library/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[归档](module/TestMgmt/library/logic/archive)|archive|无||未归档测试库数据的归档处理，修改测试库的归档状态为已归档|
|[恢复](module/TestMgmt/library/logic/recover)|recover|无||恢复已删除状态测试库数据，修改测试库的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/TestMgmt/library/logic/recent_parent_name)|recent_parent_name|属性逻辑||当测试库名称变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[批量更新最近访问父标识](module/TestMgmt/library/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||当测试库标识变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[无操作](module/TestMgmt/library/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/TestMgmt/library/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/TestMgmt/library/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||测试库归档或激活时触发相应的通知消息|
|[测试库组件权限计数器](module/TestMgmt/library/logic/library_addon_authority)|library_addon_authority|无||获取测试库组件权限|
|[激活](module/TestMgmt/library/logic/activate)|activate|无||激活已归档状态测试库，修改测试库的归档属性|
|[生成最近访问](module/TestMgmt/library/logic/create_recent)|create_recent|无||在用户对测试库数据进行了get或update操作时生成相应的访问记录|
|[移动测试库](module/TestMgmt/library/logic/move_library)|move_library|无||更新测试库的所属、可见范围|
|[自动创建人员](module/TestMgmt/library/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取快速新建测试库集合](module/TestMgmt/library/logic/quick_create)|quick_create|无||用于获取可快速新建的测试库集合|
|[获取测试库成员](module/TestMgmt/library/logic/get_library_member_one)|get_library_member_one|无||获取测试库成员信息，用于判断当前用户权限|
|[设置星标](module/TestMgmt/library/logic/favorite)|favorite|无||设置为星标测试库|


## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) :id=library_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/TestMgmt/library_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/TestMgmt/library_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建测试库成员](module/TestMgmt/library_member/logic/create_library_member)|create_library_member|无||新建测试库成员|
|[无操作](module/TestMgmt/library_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除测试库成员通知](module/TestMgmt/library_member/logic/remove_library_member_notify)|remove_library_member_notify|无||移除测试库成员时向对应用户发送通知消息|




## [登录日志(LOGIN_LOG)](module/Base/login_log.md) :id=login_log

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[计算活跃成员图表数据](module/Base/login_log/logic/calc_active_chart_datas)|calc_active_chart_datas|无||计算活跃成员模块下的图表所需要的数据|
|[计算活跃成员数据信息](module/Base/login_log/logic/calc_active_member_info)|calc_active_member_info|无||获取活跃成员下的昨日活跃人数、昨日活跃率、活跃总人数、近七日活跃人数、近七日活跃率的数值|



## [成员(MEMBER)](module/Base/member.md) :id=member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/Base/member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建成员](module/Base/member/logic/create_member)|create_member|无||批量新建团队成员|
|[无操作](module/Base/member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加共享页面非空间下成员](module/Base/member/logic/add_shared_page_member)|add_shared_page_member|无||添加共享页面非空间下成员|
|[添加共享页面非空间下成员（移动端）](module/Base/member/logic/mob_add_shared_page_member)|mob_add_shared_page_member|无||添加共享页面非空间下成员（移动端）|
|[添加成员（职位）](module/Base/member/logic/add_member_position)|add_member_position|无|||
|[获取当前项目下资源成员](module/Base/member/logic/cur_project_resource)|cur_project_resource|无||获取当前项目下资源成员|
|[获取当前项目集下资源成员](module/Base/member/logic/cur_portfolio_resource)|cur_portfolio_resource|无||获取当前项目集下资源成员|
|[获取资源成员（全局）](module/Base/member/logic/resource_member)|resource_member|无||获取资源成员（全局）|
|[选择资源成员（全局）](module/Base/member/logic/choose_resource_member)|choose_resource_member|无||选择资源成员（全局）|
|[选择项目资源成员](module/Base/member/logic/choose_project_resource)|choose_project_resource|无||项目资源分配下设置成员：当前项目下成员/部门/团队|
|[选择项目集资源成员](module/Base/member/logic/choose_portfolio_resource)|choose_portfolio_resource|无||项目集资源分配下设置成员：当前项目下成员/部门/团队|
|[非空间下成员](module/Base/member/logic/not_space_mmeber)|not_space_mmeber|无||非空间下成员|




## [通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md) :id=notify_setting

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[保存设置](module/Base/notify_setting/logic/save_setting)|save_setting|无||保存通知设置|
|[无操作](module/Base/notify_setting/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取用户通知设置](module/Base/notify_setting/logic/get_by_user)|get_by_user|无||获取用户通知设置|





## [页面(PAGE)](module/Wiki/article_page.md) :id=article_page

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[AI创建页面](module/Wiki/article_page/logic/ai_create_page)|ai_create_page|无|||
|[保存命名版本](module/Wiki/article_page/logic/set_name_version)|set_name_version|无||设置命名版本：新建命名版本并保存|
|[共享空间下搜索页面](module/Wiki/article_page/logic/space_shared_search)|space_shared_search|无||共享空间下搜索页面时使用|
|[共享空间主页](module/Wiki/article_page/logic/space_shared_home)|space_shared_home|无||共享空间下获取主页|
|[共享空间查询顶层页面](module/Wiki/article_page/logic/space_shared_top)|space_shared_top|无||共享空间下获取顶级页面，查询无parent_id的页面数据|
|[共享设置](module/Wiki/article_page/logic/shared_setting)|shared_setting|无||共享设置|
|[关闭共享](module/Wiki/article_page/logic/closed_shared)|closed_shared|无||页面关闭共享|
|[删除](module/Wiki/article_page/logic/delete)|delete|无||页面数据的逻辑删除，修改页面的是否删除属性值|
|[发布名称](module/Wiki/article_page/logic/publish_name)|publish_name|无||页面树更新发布名称，同步更新名称|
|[发布页面](module/Wiki/article_page/logic/publish_page)|publish_page|无||页面发布，设置发布状态及发布人，发布时间|
|[发布页面（测试）](module/Wiki/article_page/logic/publish_page_test)|publish_page_test|无||（测试）页面发布，设置发布状态及发布人，发布时间|
|[取消星标](module/Wiki/article_page/logic/un_favorite)|un_favorite|无||页面取消收藏|
|[另存为模板](module/Wiki/article_page/logic/save_to_stencil)|save_to_stencil|无||将当前页面存为组织/空间模板|
|[同步发布名称与名称](module/Wiki/article_page/logic/sync_name)|sync_name|无||同步发布名称与名称|
|[基线规划页面数据查询](module/Wiki/article_page/logic/baseline_plan_page)|baseline_plan_page|无||基线规划工作项时，填充页面当前版本名称|
|[复制子页面](module/Wiki/article_page/logic/copy_child_page)|copy_child_page|无||复制页面时调用|
|[复制页面](module/Wiki/article_page/logic/copy_page)|copy_page|无||复制页面，会调用复制子页面处理逻辑|
|[完成关注](module/Wiki/article_page/logic/finish_add_attention)|finish_add_attention|无|||
|[导出页面为pdf](module/Wiki/article_page/logic/export_to_pdf)|export_to_pdf|无||导出页面为pdf|
|[恢复](module/Wiki/article_page/logic/recover)|recover|无||恢复已删除状态页面数据，修改页面的是否删除属性值，并恢复访问记录|
|[恢复历史版本](module/Wiki/article_page/logic/recover_version)|recover_version|无||恢复页面版本至某一指定历史版本|
|[无操作](module/Wiki/article_page/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[查询空间下的共享页面](module/Wiki/article_page/logic/space_shared_pages)|space_shared_pages|无||查询空间下的共享页面，通过父级标识查询子页面|
|[校验共享访问密码](module/Wiki/article_page/logic/access_password)|access_password|无||校验共享访问密码|
|[检验共享页面](module/Wiki/article_page/logic/check_shared)|check_shared|无||共享页面打开前，判断是否设置密码和有效期|
|[生成最近访问](module/Wiki/article_page/logic/create_recent)|create_recent|无||在用户对页面数据进行了get或update操作时生成相应的访问记录|
|[生成版本](module/Wiki/article_page/logic/commit_version)|commit_version|无||生成页面版本|
|[移动子页面](module/Wiki/article_page/logic/move_child_page)|move_child_page|无||移动子页面至知识空间|
|[移动页面](module/Wiki/article_page/logic/move_page)|move_page|无||移动页面至知识空间|
|[统计页面评论数](module/Wiki/article_page/logic/count_comment)|count_comment|无||统计页面评论数|
|[置空共享访问密码](module/Wiki/article_page/logic/reset_shared_pwd)|reset_shared_pwd|无||默认Get行为Reset共享访问密码|
|[获取共享信息](module/Wiki/article_page/logic/get_shared_info)|get_shared_info|无||页面共享设置表单，获取逻辑|
|[获取共享页面标题](module/Wiki/article_page/logic/get_shared_title)|get_shared_title|无||获取共享页面顶部标题|
|[获取历史版本](module/Wiki/article_page/logic/get_by_version)|get_by_version|无||获取当前页面的历史版本记录|
|[获取模板数据](module/Wiki/article_page/logic/get_form_stencil)|get_form_stencil|无||获取页面的模板数据，并返回|
|[获取知识空间成员](module/Wiki/article_page/logic/get_space_member)|get_space_member|无||获取知识空间成员信息，用于判断当前用户权限|
|[获取草稿页面](module/Wiki/article_page/logic/get_draft_pages)|get_draft_pages|无||查询并返回草稿数据|
|[获取页面共享链接](module/Wiki/article_page/logic/shared_url)|shared_url|无||获取页面共享链接|
|[解锁页面](module/Wiki/article_page/logic/unlock_page)|unlock_page|无||修改页面的is_lock字段|
|[设置星标](module/Wiki/article_page/logic/favorite)|favorite|无||加入到我的收藏页面|
|[访问密码加密](module/Wiki/article_page/logic/encrypt_access_key)|encrypt_access_key|无||访问密码加密|
|[访问密码解密](module/Wiki/article_page/logic/decrypt_access_key)|decrypt_access_key|无||访问密码解密|
|[锁定页面](module/Wiki/article_page/logic/lock_page)|lock_page|无||修改页面的is_lock字段|





## [文件夹(PORTFOLIO)](module/Base/portfolio.md) :id=portfolio

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[从项目集中移除](module/Base/portfolio/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除指定的子项目集|
|[删除项目集](module/Base/portfolio/logic/delete_project_set)|delete_project_set|无||项目集数据的逻辑删除，修改项目集的是否删除属性值|
|[取消星标](module/Base/portfolio/logic/un_favorite)|un_favorite|无||项目集取消星标|
|[恢复项目集](module/Base/portfolio/logic/recover_project_set)|recover_project_set|无||恢复已删除状态项目集数据，修改项目集的是否删除属性值|
|[是否删除变更附加逻辑](module/Base/portfolio/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||项目集删除或恢复时触发相应的通知消息|
|[设置星标](module/Base/portfolio/logic/favorite)|favorite|无||设置为星标项目集|
|[项目集组件权限计数器](module/Base/portfolio/logic/portfolio_addon_authority)|portfolio_addon_authority|无||获取项目集组件权限|
|[项目集资源成员设置](module/Base/portfolio/logic/resource_member_setting)|resource_member_setting|无||项目集资源成员设置，默认设置容量/工作日|


## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md) :id=portfolio_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更角色](module/Base/portfolio_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[无操作](module/Base/portfolio_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除项目集成员通知](module/Base/portfolio_member/logic/remove_project_set_member_notify)|remove_project_set_member_notify|无||移除项目集成员时向对应用户发送通知消息|



## [产品(PRODUCT)](module/ProdMgmt/product.md) :id=product

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品关联分页计数器](module/ProdMgmt/product/logic/product_counters)|product_counters|无||计算关系分页下事件的条数|
|[产品关联空间](module/ProdMgmt/product/logic/product_re_space)|product_re_space|无||产品关联空间操作，生成正反向关联数据|
|[产品移动](module/ProdMgmt/product/logic/product_move)|product_move|无||产品更多设置中移动产品|
|[产品组件权限计数器](module/ProdMgmt/product/logic/product_addon_authority)|product_addon_authority|无||获取产品组件权限|
|[其他实体关联产品](module/ProdMgmt/product/logic/other_re_product)|other_re_product|无||产品实体关联操作，生成正向，反向关联数据|
|[创建之前](module/ProdMgmt/product/logic/before_create)|before_create|无||创建产品之前，对添加的产品成员进行处理|
|[创建产品流程准则](module/ProdMgmt/product/logic/auto_create_guideline)|auto_create_guideline|无||创建产品后，自动生成产品内的评审规则|
|[删除](module/ProdMgmt/product/logic/delete)|delete|无||产品数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProdMgmt/product/logic/un_favorite)|un_favorite|无||产品取消星标|
|[变更管理员角色](module/ProdMgmt/product/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[归档](module/ProdMgmt/product/logic/archive)|archive|无||未归档产品数据的归档处理，修改产品的归档状态为已归档|
|[恢复](module/ProdMgmt/product/logic/recover)|recover|无||恢复已删除状态产品数据，修改产品的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProdMgmt/product/logic/recent_parent_name)|recent_parent_name|属性逻辑||产品名称属性变更时触发最近访问的父名称更新|
|[批量更新最近访问父标识](module/ProdMgmt/product/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||产品编号属性变更时触发最近访问的父标识更新|
|[无操作](module/ProdMgmt/product/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/product/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品删除或恢复时时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/product/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品归档或激活数据时触发相应的通知消息|
|[激活](module/ProdMgmt/product/logic/activate)|activate|无||激活已归档状态产品，修改产品的归档属性|
|[生成产品工单类型](module/ProdMgmt/product/logic/create_product_ticket)|create_product_ticket|无||产品建立时将工单类型中is_system=1的数据同步至产品工单类型中|
|[生成最近访问](module/ProdMgmt/product/logic/create_recent)|create_recent|无||在用户对产品数据进行了get或update操作时生成相应的访问记录|
|[自动创建人员](module/ProdMgmt/product/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取产品成员](module/ProdMgmt/product/logic/get_product_member_one)|get_product_member_one|无||获取产品成员信息，用于判断当前用户权限|
|[获取快速新建产品集合](module/ProdMgmt/product/logic/quick_create)|quick_create|无||用于获取可快速新建的产品集合|
|[设置星标](module/ProdMgmt/product/logic/favorite)|favorite|无||设置为星标产品|


## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) :id=product_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/ProdMgmt/product_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/ProdMgmt/product_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建产品成员](module/ProdMgmt/product_member/logic/create_product_member)|create_product_member|无||新建产品成员|
|[新建产品成员（移动端）](module/ProdMgmt/product_member/logic/mob_create_product_member)|mob_create_product_member|无|||
|[无操作](module/ProdMgmt/product_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除产品成员通知](module/ProdMgmt/product_member/logic/remove_product_member_notify)|remove_product_member_notify|无||移除产品成员时向对应用户发送通知消息|


## [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md) :id=product_plan

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/ProdMgmt/product_plan/logic/delete)|delete|无||产品排期数据的逻辑删除，修改产品排期的是否删除属性|
|[删除类别](module/ProdMgmt/product_plan/logic/delete_categories)|delete_categories|无||删除对应类别时对对应排期的类别属性进行处理|
|[填充类别文本](module/ProdMgmt/product_plan/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[排期关联需求](module/ProdMgmt/product_plan/logic/product_plan_relation_idea)|product_plan_relation_idea|无||排期计划关联需求，生成正反向关联数据|


## [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag.md) :id=product_tag

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除标签](module/ProdMgmt/product_tag/logic/delete_tag)|delete_tag|无||删除标签时对工单的标签属性进行处理|
|[无操作](module/ProdMgmt/product_tag/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取关联的工单数量](module/ProdMgmt/product_tag/logic/get_con_product_tag)|get_con_product_tag|无||在删除产品标签时，获取与之关联的工单数量。|




## [项目(PROJECT)](module/ProjMgmt/project.md) :id=project

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[hybrid项目组件权限计数器](module/ProjMgmt/project/logic/hybrid_project_addon_authority)|hybrid_project_addon_authority|无||获取hybrid项目组件权限|
|[scrum项目组件权限计数器](module/ProjMgmt/project/logic/scrum_project_addon_authority)|scrum_project_addon_authority|无||获取scrum项目组件权限|
|[waterfall项目组件权限计数器](module/ProjMgmt/project/logic/waterfall_project_addon_authority)|waterfall_project_addon_authority|无||获取waterfall项目组件权限|
|[从项目集中移除](module/ProjMgmt/project/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除某个指定子项目|
|[其他实体关联空间](module/ProjMgmt/project/logic/other_re_space)|other_re_space|无||空间实体关联操作，生成正向，反向关联数据|
|[其他实体关联项目](module/ProjMgmt/project/logic/other_re_project)|other_re_project|无||项目实体关联操作，生成正向，反向关联数据|
|[创建之前](module/ProjMgmt/project/logic/before_create)|before_create|无||创建项目之前，对添加的项目成员进行处理|
|[创建项目流程准则](module/ProjMgmt/project/logic/auto_create_guideline)|auto_create_guideline|无||创建产品后，自动生成产品内的评审规则|
|[删除](module/ProjMgmt/project/logic/delete)|delete|无||项目数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProjMgmt/project/logic/un_favorite)|un_favorite|无||项目取消星标|
|[变更管理员角色](module/ProjMgmt/project/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[填充BI报表默认值](module/ProjMgmt/project/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充复制项目信息](module/ProjMgmt/project/logic/fill_copy_info)|fill_copy_info|无||复制项目时，填充当前项目的基本信息|
|[归档](module/ProjMgmt/project/logic/archive)|archive|无||未归档项目数据的归档处理，修改项目的归档状态为已归档|
|[恢复](module/ProjMgmt/project/logic/recover)|recover|无||恢复已删除状态项目数据，修改项目的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProjMgmt/project/logic/recent_parent_name)|recent_parent_name|属性逻辑||当项目名称变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[批量更新最近访问父标识](module/ProjMgmt/project/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||当项目标识变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[无操作](module/ProjMgmt/project/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProjMgmt/project/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||项目删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProjMgmt/project/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||项目归档或激活时触发相应的通知消息|
|[激活](module/ProjMgmt/project/logic/activate)|activate|无||激活已归档状态项目，修改项目的归档属性|
|[生成最近访问](module/ProjMgmt/project/logic/create_recent)|create_recent|无||在用户对项目数据进行了get或update操作时生成相应的访问记录|
|[生成默认看板](module/ProjMgmt/project/logic/create_default_board)|create_default_board|无||新建看板项目后，会附加生成出默认看板|
|[看板项目组件权限计数器](module/ProjMgmt/project/logic/kanban_project_addon_authority)|kanban_project_addon_authority|无||获取看板项目组件权限|
|[移动项目](module/ProjMgmt/project/logic/project_move)|project_move|无||项目更多设置移动项目<br>|
|[自动创建人员](module/ProjMgmt/project/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取快速新建项目集合](module/ProjMgmt/project/logic/quick_create)|quick_create|无||用于获取可快速新建的项目集合|
|[获取项目成员](module/ProjMgmt/project/logic/get_project_member_one)|get_project_member_one|无||获取项目成员信息，用于判断当前用户权限|
|[获取项目进度](module/ProjMgmt/project/logic/get_schedule)|get_schedule|无||通过已完成工作项数量/所有工作项数量，计算出此项目进度|
|[设置星标](module/ProjMgmt/project/logic/favorite)|favorite|无||设置为星标项目|
|[负责人变更附加逻辑](module/ProjMgmt/project/logic/assignee_id_onchange)|assignee_id_onchange|属性逻辑||项目负责人变更时触发相应的通知消息|
|[逾期工作项计数](module/ProjMgmt/project/logic/warning_count_logic)|warning_count_logic|无|||
|[项目状态变更通知](module/ProjMgmt/project/logic/state_notify)|state_notify|属性逻辑||项目状态变更时触发相应的通知消息|
|[项目自动变更状态](module/ProjMgmt/project/logic/project_automatic_change_state)|project_automatic_change_state|无||定时执行，当项目的结束时间小于当前日期时，自动将项目状态变更为延期；<br>当项目的结束时间距今不足五天时，自动将项目状态变更为预警；|


## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md) :id=project_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/ProjMgmt/project_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/ProjMgmt/project_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建项目成员](module/ProjMgmt/project_member/logic/create_project_member)|create_project_member|无||新建项目成员|
|[新建项目成员（移动端）](module/ProjMgmt/project_member/logic/mob_create_project_member)|mob_create_project_member|无||新建项目成员（移动端）|
|[无操作](module/ProjMgmt/project_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除项目成员通知](module/ProjMgmt/project_member/logic/remove_project_member_notify)|remove_project_member_notify|无||移除项目成员时向对应用户发送通知消息|


## [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state.md) :id=project_state

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProjMgmt/project_state/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag.md) :id=project_tag

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除标签](module/ProjMgmt/project_tag/logic/delete_tag)|delete_tag|无||删除标签时对工作项的标签属性进行处理|
|[无操作](module/ProjMgmt/project_tag/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取关联的工作项](module/ProjMgmt/project_tag/logic/get_con_project_tag)|get_con_project_tag|无||在删除项目标签时，获取与之关联的工作项数量。|







## [实体属性(PSDEFIELD)](module/extension/PSDEField.md) :id=PSDEField

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[GetDraft](module/extension/PSDEField/logic/GetDraft)|GetDraft|无||未完成|
|[无操作](module/extension/PSDEField/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|




## [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic.md) :id=PSDELogic

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[WebHook地址](module/extension/PSDELogic/logic/WebHook)|WebHook|属性逻辑||WebHook地址|
|[从模板建立规则](module/extension/PSDELogic/logic/create_by_template)|create_by_template|无||从模板建立规则|
|[切换启用状态](module/extension/PSDELogic/logic/valid)|valid|属性逻辑||切换启用状态|
|[初始化规则](module/extension/PSDELogic/logic/initLogic)|initLogic|无|||
|[失败率计算](module/extension/PSDELogic/logic/failure_per)|failure_per|属性逻辑||失败率计算|
|[获取最后运行状态](module/extension/PSDELogic/logic/get_last_run_info)|get_last_run_info|无||获取最后运行状态|









## [智能报表立方体维度(PSSYSBICUBEDIMENSION)](module/extension/PSSysBICubeDimension.md) :id=PSSysBICubeDimension

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/extension/PSSysBICubeDimension/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [智能报表立方体指标(PSSYSBICUBEMEASURE)](module/extension/PSSysBICubeMeasure.md) :id=PSSysBICubeMeasure

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/extension/PSSysBICubeMeasure/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [智能报表(PSSYSBIREPORT)](module/extension/PSSysBIReport.md) :id=PSSysBIReport

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[更新报表](module/extension/PSSysBIReport/logic/update_report)|update_report|无||更新报表|





## [最近访问(RECENT)](module/Base/recent.md) :id=recent

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[我创建的事项](module/Base/recent/logic/my_created_entry)|my_created_entry|无||查询当前用户创建的事项|
|[我的任务总结](module/Base/recent/logic/my_summary)|my_summary|无||获取我的任务总结数据|
|[我负责的事项](module/Base/recent/logic/my_charge_entry)|my_charge_entry|无||查询我负责的事项，工作台的计数器使用|
|[最近使用](module/Base/recent/logic/recent_use)|recent_use|无||查询最近使用数据(项目/产品/空间)，仅查询10条|
|[最近访问](module/Base/recent/logic/recent_access)|recent_access|无||查询最近访问数据，并获取他们的父级|
|[移动端首页_最近访问](module/Base/recent/logic/mob_home_recent_access)|mob_home_recent_access|无||仅查询最近5条访问|
|[跳转对应视图](module/Base/recent/logic/jump_corresponding_view)|jump_corresponding_view|无|||



## [关联(RELATION)](module/Base/relation.md) :id=relation

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[区分前后置任务](module/Base/relation/logic/differentiate_job_type)|differentiate_job_type|无||工作项依赖：区分前后置任务|
|[取消关联](module/Base/relation/logic/del_relation)|del_relation|无||工作项取消关联数据（正反向关联数据同时删除）|
|[工作项取消关联测试用例](module/Base/relation/logic/work_item_del_relation_test_case)|work_item_del_relation_test_case|无||1.工作项取消关联对应测试用例 2.判断是缺陷类型工作项时检验是否需删除执行用例关联|
|[工作项添加依赖](module/Base/relation/logic/add_dependency)|add_dependency|无||工作项添加依赖|
|[执行用例取消关联缺陷](module/Base/relation/logic/run_del_relation_bug)|run_del_relation_bug|无||1.执行用例取消关联缺陷 2.对应测试用例取消关联缺陷|
|[测试用例取消关联缺陷](module/Base/relation/logic/test_case_del_relation_bug)|test_case_del_relation_bug|无||1.测试用例取消关联缺陷 2.对应执行用例取消关联缺陷|
|[规划用例](module/Base/relation/logic/program_test_case)|program_test_case|无||规划用例，将用例规划至评审内，生成正反向关联数据|


## [项目发布(RELEASE)](module/ProjMgmt/release.md) :id=release

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[修改发布当前阶段](module/ProjMgmt/release/logic/change_stage)|change_stage|无||修改发布当前阶段|
|[删除类别](module/ProjMgmt/release/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[发布关联迭代](module/ProjMgmt/release/logic/release_relation_sprint)|release_relation_sprint|无||发布关联迭代生成关联数据|
|[发布时间变更附加逻辑](module/ProjMgmt/release/logic/end_at_onchange)|end_at_onchange|属性逻辑||更新最末发布阶段的时间|
|[填充类别文本](module/ProjMgmt/release/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始时间变更附加逻辑](module/ProjMgmt/release/logic/start_at_onchange)|start_at_onchange|属性逻辑||更新首个发布阶段的时间|
|[新建后附加逻辑](module/ProjMgmt/release/logic/after_create)|after_create|无||根据全局定义的阶段，生成发布阶段|
|[获取修改阶段](module/ProjMgmt/release/logic/change_draft)|change_draft|无||获取修改阶段|
|[规划工作项](module/ProjMgmt/release/logic/plan_work_item)|plan_work_item|无||规划工作项至指定发布|
|[计算发布工作项数量](module/ProjMgmt/release/logic/cal_release_work_item_num)|cal_release_work_item_num|无||发布工作项数量计算|
|[迭代取消关联发布](module/ProjMgmt/release/logic/del_relation)|del_relation|无||迭代取消关联发布|
|[项目下发布（移动端）](module/ProjMgmt/release/logic/mob_project_release)|mob_project_release|无|||



## [评审(REVIEW)](module/TestMgmt/review.md) :id=review

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[nothing](module/TestMgmt/review/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[全部提交](module/TestMgmt/review/logic/all_submit)|all_submit|无||未完成|
|[创建后附加评审规则](module/TestMgmt/review/logic/add_guideline_after_created)|add_guideline_after_created|无||在创建评审后，自动获取规则的值并赋予|
|[变更评审内阶段](module/TestMgmt/review/logic/change_review_stage)|change_review_stage|无||变更评审内阶段|
|[填充评审规则](module/TestMgmt/review/logic/fill_guideline)|fill_guideline|无||填充评审规则|
|[填充阶段评审人](module/TestMgmt/review/logic/fill_stage_reviewer)|fill_stage_reviewer|无||填充阶段评审人|
|[完成评审](module/TestMgmt/review/logic/completed_review)|completed_review|无||完成评审，修改评审状态以及设置那些未评审用例的评审结果|
|[待办数据](module/TestMgmt/review/logic/TodoData)|TodoData|无||测试|
|[提交评审](module/TestMgmt/review/logic/submit_review)|submit_review|无||测试|
|[撤销评审](module/TestMgmt/review/logic/repeal_review)|repeal_review|无||撤销评审，并重置评审结果|
|[添加内容](module/TestMgmt/review/logic/add_review_content)|add_review_content|无||规划用例，将用例规划至评审内，生成正反向关联数据|
|[获取当前阶段信息](module/TestMgmt/review/logic/get_current_stage_info)|get_current_stage_info|无||获取当前阶段信息，用于完成评审按钮使用|
|[获取重定向数据](module/TestMgmt/review/logic/get_redirect_data)|get_redirect_data|无|||



## [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md) :id=review_content

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[创建评审数据](module/TestMgmt/review_content/logic/create_review_data)|create_review_data|无|||
|[变更评审状态](module/TestMgmt/review_content/logic/change_review_state)|change_review_state|无||完成评审后变更测试用例的评审状态|
|[完成评审](module/TestMgmt/review_content/logic/complete_review)|complete_review|无||完成评审，判断是否为最终阶段，如果是变更评审的状态|
|[开始评审](module/TestMgmt/review_content/logic/start_review)|start_review|无||开启当前阶段评审|
|[提交评审](module/TestMgmt/review_content/logic/submit_review)|submit_review|无||测试|
|[无操作](module/TestMgmt/review_content/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加内容](module/TestMgmt/review_content/logic/add_review_content)|add_review_content|无||添加内容，生成正反向关联数据|
|[生成最终评审结果](module/TestMgmt/review_content/logic/generate_review_result_finally)|generate_review_result_finally|无||评审完成后生成最终的评审结果|
|[生成评审结果](module/TestMgmt/review_content/logic/generate_review_results)|generate_review_results|无||创建后自动生成评审结果|
|[获取评审结果列表](module/TestMgmt/review_content/logic/get_review_context_list)|get_review_context_list|无||根据评审id和阶段id，获取评审数据列表<br>需要给default传入评审id（review_id）和阶段id（stage_id）|
|[规划用例](module/TestMgmt/review_content/logic/program_test_case)|program_test_case|无||规划用例，将用例规划至评审内，生成正反向关联数据|
|[设置评审结果](module/TestMgmt/review_content/logic/set_review_result)|set_review_result|无||单条数据评审逻辑|
|[设置评审结果（批）](module/TestMgmt/review_content/logic/set_review_result_all)|set_review_result_all|无||批量进行评审|
|[评审结果条数](module/TestMgmt/review_content/logic/review_content_total)|review_content_total|无||查询评审结果总条数与已评审条数|



## [产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea.md) :id=review_content_idea

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProdMgmt/review_content_idea/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[评审结果条数](module/ProdMgmt/review_content_idea/logic/review_content_total)|review_content_total|无||查询评审结果总条数与已评审条数|


## [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md) :id=review_result

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[设置评审结果](module/TestMgmt/review_result/logic/set_result)|set_result|无||设置评审结果|




## [评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard.md) :id=review_wizard

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[创建后修改附加数据归属](module/TestMgmt/review_wizard/logic/fix_nested_data)|fix_nested_data|无||创建后修改附加数据归属|
|[创建后附加评审规则](module/TestMgmt/review_wizard/logic/add_guideline_after_created)|add_guideline_after_created|无|| 进行中|
|[填充评审规则](module/TestMgmt/review_wizard/logic/fill_guideline)|fill_guideline|无||获取评审规则并返回|




## [执行用例(RUN)](module/TestMgmt/run.md) :id=run

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联执行用例](module/TestMgmt/run/logic/others_relation_run)|others_relation_run|无||执行用例实体的关联操作，生成正向，反向关联数据|
|[执行人变更附加逻辑](module/TestMgmt/run/logic/executor_onchange)|executor_onchange|属性逻辑||执行用例执行人变更时触发相应的通知消息|
|[执行用例关联分页计数器](module/TestMgmt/run/logic/run_re_counters)|run_re_counters|无||计算分页下关联事项的条数|
|[执行结果获取](module/TestMgmt/run/logic/run_history_get)|run_history_get|无||执行用例中，获取执行结果数据|
|[批设置执行结果](module/TestMgmt/run/logic/batch_save_run_history)|batch_save_run_history|无||批量设置执行用例的执行结果|
|[无操作](module/TestMgmt/run/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[每日执行用例趋势](module/TestMgmt/run/logic/run_daily_tendencies)|run_daily_tendencies|无||报表每日执行用例趋势数据源|
|[每日测试次数统计](module/TestMgmt/run/logic/run_everyday_test)|run_everyday_test|无||报表每日测试次数统计数据源|
|[测试用例最新执行结果](module/TestMgmt/run/logic/case_latest_executed)|case_latest_executed|无||测试用例最新执行结果|
|[测试计划对比分析](module/TestMgmt/run/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[添加计划执行用例](module/TestMgmt/run/logic/create_plan_run)|create_plan_run|无||将测试计划主键置空并生成执行用例|
|[移除用例相关信息](module/TestMgmt/run/logic/delete_run_info)|delete_run_info|无||在执行remove操作之前，移除相关的执行用例信息|
|[获取实际工时](module/TestMgmt/run/logic/get_actual_workload)|get_actual_workload|无||获取用例的实际工时|
|[获取当前用例详情](module/TestMgmt/run/logic/this_run_details)|this_run_details|无||获取当前执行用例详情信息|
|[获取测试库成员](module/TestMgmt/run/logic/get_library_member)|get_library_member|无||获取测试库成员信息，用于判断当前用户权限|
|[规划计划](module/TestMgmt/run/logic/program_plan)|program_plan|无||规划当前计划内用例（添加用例至测试计划内）|
|[记录执行结果](module/TestMgmt/run/logic/create_result)|create_result|无||记录当前执行用例的执行结果|
|[设置执行人](module/TestMgmt/run/logic/set_executor)|set_executor|无||设置当前执行用例执行人|
|[通过发布规划计划](module/TestMgmt/run/logic/program_plan_by_release)|program_plan_by_release|无||通过发布规划计划|
|[通过工作项规划计划](module/TestMgmt/run/logic/program_plan_by_workitem)|program_plan_by_workitem|无||通过工作项规划计划|
|[通过迭代规划计划](module/TestMgmt/run/logic/program_plan_by_sprint)|program_plan_by_sprint|无||通过迭代规划计划|
|[重置为未测](module/TestMgmt/run/logic/reset_not_test)|reset_not_test|无||重置当前执行用例的执行状态为初始未测状态|
|[附加用例步骤](module/TestMgmt/run/logic/add_steps)|add_steps|无||获取用例步骤，并返回|



## [执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md) :id=run_history

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[执行结果获取](module/TestMgmt/run_history/logic/run_history_get)|run_history_get|无||获取执行结果|


## [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment.md) :id=search_attachment

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品中需求或工单的附件](module/Base/search_attachment/logic/cur_product)|cur_product|无||当前产品下的全部附件，用于填充所属相关信息字段|
|[项目中工作项的附件](module/Base/search_attachment/logic/cur_project)|cur_project|无||当前项目下的全部附件，用于填充所属相关信息字段|
|[高级搜索](module/Base/search_attachment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|


## [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) :id=search_comment

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[高级搜索](module/Base/search_comment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|



## [分组(SECTION)](module/Base/section.md) :id=section

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除分组及其下类别](module/Base/section/logic/delete_section)|delete_section|无||删除分组及其下子类别（测试）|



## [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md) :id=shared_space

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[共享设置](module/Wiki/shared_space/logic/shared_setting)|shared_setting|无||共享设置|
|[关闭共享](module/Wiki/shared_space/logic/closed_shared)|closed_shared|无||关闭共享|
|[校验共享访问密码](module/Wiki/shared_space/logic/access_password)|access_password|无||校验共享访问密码|
|[检验共享页面](module/Wiki/shared_space/logic/check_shared)|check_shared|无||共享页面打开前，判断是否设置密码和有效期|
|[置空共享访问密码](module/Wiki/shared_space/logic/reset_shared_pwd)|reset_shared_pwd|无||默认Get行为Reset共享访问密码|
|[获取共享空间信息](module/Wiki/shared_space/logic/shared_page_info)|shared_page_info|无||获取共享空间信息|
|[获取共享空间标题](module/Wiki/shared_space/logic/get_shared_title)|get_shared_title|无||获取共享空间顶部标题|
|[获取共享链接](module/Wiki/shared_space/logic/shared_url)|shared_url|无||获取共享空间链接|
|[访问密码加密](module/Wiki/shared_space/logic/encrypt_access_key)|encrypt_access_key|无||访问密码加密|
|[访问密码解密](module/Wiki/shared_space/logic/decrypt_access_key)|decrypt_access_key|无||访问密码解密|


## [空间(SPACE)](module/Wiki/space.md) :id=space

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联空间](module/Wiki/space/logic/other_re_space)|other_re_space|无||其他实体关联空间操作，生成正反向关联数据|
|[创建之前](module/Wiki/space/logic/before_create)|before_create|无||创建空间之前，对添加的空间成员进行处理|
|[创建空间流程准则](module/Wiki/space/logic/auto_create_guideline)|auto_create_guideline|无||创建产品后，自动生成产品内的评审规则|
|[删除](module/Wiki/space/logic/delete)|delete|无||空间数据的逻辑删除，修改产品的是否删除属性值|
|[判断当前用户角色](module/Wiki/space/logic/recognize_cur_user_role)|recognize_cur_user_role|无||判断当前用户角色|
|[取消关联](module/Wiki/space/logic/del_relation)|del_relation|无||空间取消关联数据（正反向关联数据同时删除）|
|[取消星标](module/Wiki/space/logic/un_favorite)|un_favorite|无||空间取消星标|
|[变更管理员角色](module/Wiki/space/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[开启共享](module/Wiki/space/logic/open_shared)|open_shared|无||空间开启共享|
|[归档](module/Wiki/space/logic/archive)|archive|无||未归档空间数据的归档处理，修改空间的归档状态为已归档|
|[恢复](module/Wiki/space/logic/recover)|recover|无||已删除状态空间数据的恢复，修改空间的是否删除属性值，并恢复访问记录|
|[无操作](module/Wiki/space/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/Wiki/space/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||空间删除或恢复时触发相应的通知消息|
|[是否归档变更附加逻辑](module/Wiki/space/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||空间归档或激活时触发相应的通知消息|
|[标记主空间](module/Wiki/space/logic/mark_main_space)|mark_main_space|无|||
|[激活](module/Wiki/space/logic/activate)|activate|无||激活已归档状态空间，修改空间的归档属性|
|[生成最近访问](module/Wiki/space/logic/create_recent)|create_recent|无||在用户对空间数据进行了get或update操作时生成相应的访问记录|
|[移出分类](module/Wiki/space/logic/move_out_category)|move_out_category|无||将空间移除分类|
|[移动空间](module/Wiki/space/logic/move_space)|move_space|无||更新空间的所属、可见范围|
|[空间组件权限计数器](module/Wiki/space/logic/space_addon_authority)|space_addon_authority|无||获取空间组件权限|
|[自动创建主页](module/Wiki/space/logic/auto_create_home_page)|auto_create_home_page|无||附加在实体的CREATE行为后，自动生成模板化的主页|
|[自动创建人员](module/Wiki/space/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员，若选择个人，则添加个人为所属成员。|
|[获取关联的空间](module/Wiki/space/logic/get_re_space)|get_re_space|无|||
|[获取快速新建空间集合](module/Wiki/space/logic/quick_create)|quick_create|无||用于获取可快速新建的空间集合|
|[获取知识空间成员](module/Wiki/space/logic/get_space_member_one)|get_space_member_one|无||获取知识空间成员信息，用于判断当前用户权限|
|[设置星标](module/Wiki/space/logic/favorite)|favorite|无||设置为星标产品|


## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) :id=space_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/Wiki/space_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/Wiki/space_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建空间成员（移动端）](module/Wiki/space_member/logic/mob_create_project_member)|mob_create_project_member|无||新建空间成员（移动端）|
|[无操作](module/Wiki/space_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除空间成员发送通知](module/Wiki/space_member/logic/remove_space_member_notify)|remove_space_member_notify|无||移除空间成员时向对应用户发送通知消息|


## [迭代(SPRINT)](module/ProjMgmt/sprint.md) :id=sprint

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/ProjMgmt/sprint/logic/delete_categories)|delete_categories|无||当类别删除时修改迭代的类别属性|
|[发布取消关联迭代](module/ProjMgmt/sprint/logic/del_relation)|del_relation|无||发布取消关联迭代|
|[填充类别文本](module/ProjMgmt/sprint/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始迭代](module/ProjMgmt/sprint/logic/start_sprint)|start_sprint|无||开始迭代|
|[无操作](module/ProjMgmt/sprint/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[结束迭代](module/ProjMgmt/sprint/logic/end_sprint)|end_sprint|无||结束迭代，根据用户选择，将未完成的工作项 移动至其他迭代会待分配|
|[获取未完成的工作项数量](module/ProjMgmt/sprint/logic/get_not_finish)|get_not_finish|无||完成迭代时，判断此迭代下是否存在未完成的工作项；提醒用户是否将未完成的工作项状态变更至已完成|
|[获取概览基本信息统计数字](module/ProjMgmt/sprint/logic/overview_num)|overview_num|无||获取概览基本信息统计数字|
|[计算迭代工作项数量](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)|cal_sprint_work_item_num|无||迭代工作项数量计算|
|[迭代关联发布](module/ProjMgmt/sprint/logic/sprint_relation_release)|sprint_relation_release|无||迭代关联发布|
|[迭代操作标识业务计算逻辑](module/ProjMgmt/sprint/logic/oppriv_logic)|oppriv_logic|实体操作标识计算逻辑||迭代操作标识业务计算逻辑|
|[项目下迭代（移动端）](module/ProjMgmt/sprint/logic/mob_project_sprint)|mob_project_sprint|无||设置进度条信息|


## [迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration.md) :id=sprint_alteration

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[迭代变更统计](module/ProjMgmt/sprint_alteration/logic/rep_change)|rep_change|无||统计：启始，移入，移出迭代数量|


## [发布阶段(STAGE)](module/ProjMgmt/stage.md) :id=stage

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除发布阶段](module/ProjMgmt/stage/logic/del)|del|无||删除发布阶段并替换|
|[无操作](module/ProjMgmt/stage/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加系统预定义阶段](module/ProjMgmt/stage/logic/add_predefined)|add_predefined|无||添加系统预定义阶段|


## [页面模板(STENCIL)](module/Wiki/stencil.md) :id=stencil

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Wiki/stencil/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[根据模板建立页面草稿](module/Wiki/stencil/logic/new_draft_form_stencil)|new_draft_form_stencil|无||获取页面的模板数据，并返回|


















## [规则模板(TEMPLATE_FLOW)](module/Base/template_flow.md) :id=template_flow

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[同步父子工作项的完成状态](module/Base/template_flow/logic/sync_work_item_finish)|sync_work_item_finish|属性变化处理（运行时支持）||同步父子工作项的完成状态|
|[定时将已完成工作项归档](module/Base/template_flow/logic/turn_work_item_archived)|turn_work_item_archived|定时作业（运行时支持）||通过定时任务，将已完成的工作项归档，结束时间超过三天。|
|[自动创建子任务](module/Base/template_flow/logic/auto_create_sub_work_item)|auto_create_sub_work_item|事件处理（运行时支持）||自动化，自动创建子任务|
|[自动将新团队成员加入团队空间](module/Base/template_flow/logic/auto_add_member_to_space)|auto_add_member_to_space|事件处理（运行时支持）||新成员加入团队后，自动加入到该团队的空间。|
|[自动将新团队成员加入团队项目](module/Base/template_flow/logic/auto_add_member_to_project)|auto_add_member_to_project|事件处理（运行时支持）||新成员加入团队后，自动加入到该团队的项目。|
|[自动设置工作项负责人](module/Base/template_flow/logic/auto_fill_assign_man)|auto_fill_assign_man|事件处理（运行时支持）||自动化，自动设置工作项负责人|
|[自动设置测试计划的启动和完成状态](module/Base/template_flow/logic/test_plan_auto_set_state)|test_plan_auto_set_state|事件处理（运行时支持）||<br>自动设置测试计划的启动和完成状态|
|[项目自动变更状态](module/Base/template_flow/logic/project_automatic_change_state)|project_automatic_change_state|定时作业（运行时支持）||定时执行，当项目的结束时间小于当前日期时，自动将项目状态变更为延期；<br>当项目的结束时间距今不足五天时，自动将项目状态变更为预警；|


## [用例(TEST_CASE)](module/TestMgmt/test_case.md) :id=test_case

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联用例](module/TestMgmt/test_case/logic/others_relation_test_case)|others_relation_test_case|无||测试用例实体的关联操作，生成正向，反向关联数据|
|[删除](module/TestMgmt/test_case/logic/delete)|delete|无||测试用例数据的逻辑删除，修改产品的是否删除属性值|
|[基线规划用例数据查询](module/TestMgmt/test_case/logic/baseline_plan_case)|baseline_plan_case|无||基线规划用例时，填充用例当前版本名称|
|[填充BI报表默认值](module/TestMgmt/test_case/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充最近执行](module/TestMgmt/test_case/logic/fill_latest_executed)|fill_latest_executed|无||填充最近执行|
|[复制用例](module/TestMgmt/test_case/logic/copy_test_case)|copy_test_case|无||复制测试用例|
|[完成关注](module/TestMgmt/test_case/logic/finish_add_attention)|finish_add_attention|无|||
|[恢复](module/TestMgmt/test_case/logic/recover)|recover|无||恢复已删除状态测试用例数据，修改测试用例的是否删除属性值，并恢复访问记录|
|[无操作](module/TestMgmt/test_case/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/TestMgmt/test_case/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||测试用例删除或恢复时触发相应的通知消息|
|[检查更新数据](module/TestMgmt/test_case/logic/check_refresh_data)|check_refresh_data|无|||
|[测试用例](module/TestMgmt/test_case/logic/common)|common|无|||
|[测试用例关联分页计数器](module/TestMgmt/test_case/logic/test_case_re_counters)|test_case_re_counters|无||计算分页下关联事项的条数|
|[测试用例活动情况](module/TestMgmt/test_case/logic/test_case_maneuver_context)|test_case_maneuver_context|无||报表测试用例活动情况数据源|
|[测试用例规划分析](module/TestMgmt/test_case/logic/program_analyze)|program_analyze|无||报表测试用例规划分析数据源|
|[测试计划对比分析](module/TestMgmt/test_case/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[生成最近访问](module/TestMgmt/test_case/logic/create_recent)|create_recent|无||在用户对测试用例数据进行了get或update操作时生成相应的访问记录|
|[移入计划](module/TestMgmt/test_case/logic/case_move_plan)|case_move_plan|无||将选中测试用例移入执行计划（在指定的执行用例内生成执行用例）|
|[移动用例](module/TestMgmt/test_case/logic/move_test_case)|move_test_case|无||移动用例至其他位置（修改用例的所属测试库，重新生成编号）|
|[维护人变更附加逻辑](module/TestMgmt/test_case/logic/maintenance_onchange)|maintenance_onchange|属性逻辑||测试用例维护人变更时触发相应的通知消息|
|[获取变更类型与变更版本](module/TestMgmt/test_case/logic/set_change_type)|set_change_type|无||获取测试用例变更类型与变更版本|
|[获取基线名称](module/TestMgmt/test_case/logic/get_baseline_name)|get_baseline_name|无||用例主视图获取所属基线|
|[获取最近执行](module/TestMgmt/test_case/logic/newest_run)|newest_run|无||获取当前测试用例的最近执行记录|
|[获取测试库成员](module/TestMgmt/test_case/logic/get_library_member)|get_library_member|无||获取测试库成员信息，用于判断当前用户权限|
|[规划用例](module/TestMgmt/test_case/logic/program_test_case)|program_test_case|无||规划用例|
|[规划计划](module/TestMgmt/test_case/logic/program_plan)|program_plan|无||将测试用例规划进测试计划内，生成执行用例|
|[设置维护人](module/TestMgmt/test_case/logic/set_maintenance)|set_maintenance|无||设置当前测试用例维护人|
|[设置评审状态](module/TestMgmt/test_case/logic/set_state)|set_state|无||设置测试用例的评审状态属性|
|[设置重要程度](module/TestMgmt/test_case/logic/set_level)|set_level|无||设置测试用例的重要程度属性|
|[选择用例模板](module/TestMgmt/test_case/logic/choose_case_template)|choose_case_template|无||获取选中模板并返回详情|


## [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template.md) :id=test_case_template

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/TestMgmt/test_case_template/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) :id=test_plan

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/TestMgmt/test_plan/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[填充类别文本](module/TestMgmt/test_plan/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始测试](module/TestMgmt/test_plan/logic/start_test_plan)|start_test_plan|无||测试计划开始测试|
|[测试报告概览数据源](module/TestMgmt/test_plan/logic/test_plan_report_survey)|test_plan_report_survey|无||测试报告概览的数据源|
|[结束测试](module/TestMgmt/test_plan/logic/end_test_plan)|end_test_plan|无||设置测试计划状态为结束|
|[计划操作标识业务计算逻辑](module/TestMgmt/test_plan/logic/oppriv_logic)|oppriv_logic|实体操作标识计算逻辑||计划操作标识业务计算逻辑|
|[负责人变更附加逻辑](module/TestMgmt/test_plan/logic/assignee_onchange)|assignee_onchange|属性逻辑||测试计划负责人变更时触发相应的通知消息|



## [工单(TICKET)](module/ProdMgmt/ticket.md) :id=ticket

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品工单关联分页计数器](module/ProdMgmt/ticket/logic/product_ticket_re_counters)|product_ticket_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联工单](module/ProdMgmt/ticket/logic/others_relation_ticket)|others_relation_ticket|无||工单实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProdMgmt/ticket/logic/allocate_person)|allocate_person|无||分配工单负责人，修改负责人属性|
|[删除](module/ProdMgmt/ticket/logic/delete)|delete|无||工单数据的逻辑删除，修改工单的是否删除属性值|
|[填充BI报表默认值](module/ProdMgmt/ticket/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充表单](module/ProdMgmt/ticket/logic/fill_idea_form)|fill_idea_form|无|||
|[客户取消关联工单](module/ProdMgmt/ticket/logic/customer_del_ticket)|customer_del_ticket|无||客户取消关联工单操作|
|[客户选择工单](module/ProdMgmt/ticket/logic/customer_choose_ticket)|customer_choose_ticket|无||客户选择工单操作|
|[工单关注（移动端）](module/ProdMgmt/ticket/logic/mob_ticket_attention)|mob_ticket_attention|无|||
|[归档](module/ProdMgmt/ticket/logic/archive)|archive|无||未归档工单数据的归档处理，修改工单的归档状态为归档|
|[恢复](module/ProdMgmt/ticket/logic/recover)|recover|无||已删除状态工单数据的恢复，修改工单的是否删除属性值，并恢复访问记录|
|[无操作](module/ProdMgmt/ticket/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/ticket/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工单删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/ticket/logic/is_archived_onchage)|is_archived_onchage|属性逻辑||工单归档或激活数据时触发相应的通知消息|
|[查询归档数据](module/ProdMgmt/ticket/logic/get_archived_info)|get_archived_info|无||查询数据是否归档，归档则返回归档信息|
|[激活](module/ProdMgmt/ticket/logic/activate)|activate|无||激活已归档状态工单，修改工单的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/ticket/logic/state_onchange)|state_onchange|属性逻辑||工单状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/ticket/logic/create_recent)|create_recent|无||在用户对工单数据进行了get或update操作时生成相应的访问记录|
|[获取产品成员](module/ProdMgmt/ticket/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前用户权限|
|[获取工单状态饼图](module/ProdMgmt/ticket/logic/get_ticket_state_pie)|get_ticket_state_pie|无||需求关联工单统计视图中的饼图进行使用|
|[设置标签](module/ProdMgmt/ticket/logic/choose_tag)|choose_tag|无||设置工单标签，修改工单标签信息|
|[负责人变更附加逻辑](module/ProdMgmt/ticket/logic/assignee_onchange)|assignee_onchange|属性逻辑||工单负责人变更时触发相应的通知消息|


## [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type.md) :id=ticket_type

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProdMgmt/ticket_type/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取关联的工单](module/ProdMgmt/ticket_type/logic/get_con_ticket)|get_con_ticket|无||在删除工单类型时，获取与之关联的工单数量以及提示信息。|




## [企业用户(USER)](module/Base/user.md) :id=user

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[冻结用户](module/Base/user/logic/Freeze)|Freeze|无||冻结用户|
|[取消统计](module/Base/user/logic/cancel_report_flag)|cancel_report_flag|无||取消用户统计状态|
|[激活用户](module/Base/user/logic/Activate)|Activate|无||激活用户|
|[统计过滤](module/Base/user/logic/report_flag_filter)|report_flag_filter|无||排除非统计用户|
|[设置统计](module/Base/user/logic/set_report_flag)|set_report_flag|无||更新用户统计状态|
|[非空间下成员](module/Base/user/logic/not_space_mmeber)|not_space_mmeber|无||非空间下成员|


## [版本(VERSION)](module/Base/version.md) :id=version

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[判断执行用例是否为最新版本](module/Base/version/logic/run_is_newest)|run_is_newest|无||当新建版本后，判断测试用例对应的执行用例是否为最新版本，变更newest属性|
|[新建版本时填充默认版本名称](module/Base/version/logic/fill_default_name)|fill_default_name|无||新建版本时，根据已创建的版本记录生成默认版本名称|



## [视图主题设置(VIEW_THEME_SETTING)](module/Base/view_theme_setting.md) :id=view_theme_setting

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[数据去重](module/Base/view_theme_setting/logic/distinctData)|distinctData|无|||
|[获取过滤条件](module/Base/view_theme_setting/logic/fill_search_conds)|fill_search_conds|无|||


## [工作(WORK)](module/Base/work.md) :id=work

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[添加项目](module/Base/work/logic/add_project)|add_project|无||项目集下添加子项目|
|[添加项目集](module/Base/work/logic/add_project_portfolio)|add_project_portfolio|无||项目集下添加子项目集。注：只可选择无子项目集的，预防反复嵌套|


## [工时(WORKLOAD)](module/Base/workload.md) :id=workload

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[AI登记工时并更新剩余工时](module/Base/workload/logic/ai_save_workload)|ai_save_workload|无||保存实际登记工时记录，并计算重置剩余工时属性|
|[AI登记预估工时](module/Base/workload/logic/ai_add_estimated_workload)|ai_add_estimated_workload|无|||
|[产品需求维度工时日历查询](module/Base/workload/logic/idea_dimension)|idea_dimension|无||首页工作台工时日历：产品/产品需求维度查询数据使用|
|[产品需求维度管理工时日历查询](module/Base/workload/logic/idea_management_dimension)|idea_management_dimension|无||工时管理菜单中工时日历：产品/产品需求维度查询数据使用|
|[人员维度工时日历查询](module/Base/workload/logic/member_dimension)|member_dimension|无||工时管理菜单中工时日历：人员维度查询数据使用|
|[删除工时记录前附加逻辑](module/Base/workload/logic/before_remove)|before_remove|无||更新动态存储中的剩余工时|
|[团队下成员工时日历查询](module/Base/workload/logic/group_member_dimension)|group_member_dimension|无||通过团队标识，查询此团队下的成员工时日历|
|[团队维度工时日历查询](module/Base/workload/logic/user_group_dimension)|user_group_dimension|无||工时管理菜单中工时日历：团队维度查询数据使用|
|[填充BI报表默认值](module/Base/workload/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充工时数据](module/Base/workload/logic/fill_workload_data)|fill_workload_data|无||移动端，工时日历详情使用|
|[工作类别维度工时日历查询](module/Base/workload/logic/type_of_dimension)|type_of_dimension|无||首页工作台工时日历：工作类型维度查询数据使用|
|[工作类别维度管理工时日历查询](module/Base/workload/logic/type_of_management_dimension)|type_of_management_dimension|无||工时管理菜单中工时日历：工作类型维度查询数据使用|
|[工作项维度工时日历查询](module/Base/workload/logic/work_item_dimension)|work_item_dimension|无||首页工作台工时日历：项目/工作项维度查询数据使用|
|[工作项维度管理工时日历查询](module/Base/workload/logic/work_item_management_dimension)|work_item_management_dimension|无||工时管理菜单中工时日历：项目/工作项维度查询数据使用|
|[工时自动计算](module/Base/workload/logic/workload_auto_cal)|workload_auto_cal|无||修改当前逻辑，在当前逻辑内进行递归调用，调用别的逻辑，不去调用原保存变更逻辑了。|
|[测试用例维度工时日历查询](module/Base/workload/logic/test_case_dimension)|test_case_dimension|无||首页工作台工时日历：测试库/测试用例维度查询数据使用|
|[测试用例维度管理工时日历查询](module/Base/workload/logic/test_case_management_dimension)|test_case_management_dimension|无||工时管理菜单中工时日历：测试库/测试用例维度查询数据使用|
|[登记工时并更新剩余工时](module/Base/workload/logic/save_workload)|save_workload|无||保存实际登记工时记录，并计算重置剩余工时属性|
|[获取已登记工时](module/Base/workload/logic/get_register_workload)|get_register_workload|无||查看工时详情时，获取预估、已登记、剩余工时；并计算出工时进度|
|[获取重定向数据](module/Base/workload/logic/get_redirect_data)|get_redirect_data|无|||


## [工时类别(WORKLOAD_TYPE)](module/Base/workload_type.md) :id=workload_type

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/workload_type/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|



## [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) :id=work_item

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[修复版本数据](module/ProjMgmt/work_item/logic/fix_commit)|fix_commit|无||修复初始版本数据|
|[修改时间](module/ProjMgmt/work_item/logic/change_time)|change_time|无||修改工作项的开始、结束时间|
|[其他实体关联工作项](module/ProjMgmt/work_item/logic/others_relation_work_item)|others_relation_work_item|无||工作项实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProjMgmt/work_item/logic/change_assignee)|change_assignee|无||工作项分配负责人|
|[删除](module/ProjMgmt/work_item/logic/delete)|delete|无||工作项数据的逻辑删除，修改产品的是否删除属性值；并递归删除所有下级工作项|
|[变更父工作项](module/ProjMgmt/work_item/logic/change_parent)|change_parent|无||变更父工作项|
|[变更状态](module/ProjMgmt/work_item/logic/change_state)|change_state|无||变更工作项状态|
|[团队速度](module/ProjMgmt/work_item/logic/project_team_speed)|project_team_speed|无||团队速度报表数据源|
|[基线规划工作项数据查询](module/ProjMgmt/work_item/logic/baseline_plan_work_item)|baseline_plan_work_item|无||基线规划工作项时，填充工作项当前版本名称|
|[填充BI报表默认值](module/ProjMgmt/work_item/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充实际开始/完成时间](module/ProjMgmt/work_item/logic/fill_actual_time)|fill_actual_time|无|||
|[填充待完成事项数量](module/ProjMgmt/work_item/logic/fill_not_completed_num)|fill_not_completed_num|无||移动端工作台首页：获取待完成事项数量|
|[填充状态的类型](module/ProjMgmt/work_item/logic/fill_type_of_state)|fill_type_of_state|无||根据工作项状态的id获取对应的type值|
|[填充用例信息](module/ProjMgmt/work_item/logic/fill_test_case_info)|fill_test_case_info|无|||
|[填充表单](module/ProjMgmt/work_item/logic/fill_idea_form)|fill_idea_form|无|||
|[复制子工作项](module/ProjMgmt/work_item/logic/copy_child_work_item)|copy_child_work_item|无||复制工作项时，同时复制子工作项|
|[复制工作项](module/ProjMgmt/work_item/logic/copy_work_item)|copy_work_item|无||复制工作项到其他的同类型项目|
|[子工作项取消关联](module/ProjMgmt/work_item/logic/child_del_relation)|child_del_relation|无||工作项取消关联子工作项|
|[工作项关联分页计数器](module/ProjMgmt/work_item/logic/work_item_re_counters)|work_item_re_counters|无||计算分页下关联事项的条数|
|[工作项分布](module/ProjMgmt/work_item/logic/kanban_work_item_distribution)|kanban_work_item_distribution|无||工作项分布数据源|
|[工作项删除变更附加逻辑](module/ProjMgmt/work_item/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工作项删除或恢复时触发相应的通知消息，判断并标记上级是否为叶子节点|
|[工作项完成趋势](module/ProjMgmt/work_item/logic/complete_trend)|complete_trend|无||工作项完成趋势|
|[工作项归档变更附加逻辑](module/ProjMgmt/work_item/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||工作项归档或激活时触发相应的通知消息，判断并标记上级是否为叶子节点|
|[工作项树状或平铺表格查询](module/ProjMgmt/work_item/logic/tree_or_tile_query)|tree_or_tile_query|无||工作项树状或平铺表格查询|
|[工作项状态变更附加逻辑](module/ProjMgmt/work_item/logic/state_onchange)|state_onchange|属性逻辑||工作项状态变更时触发相应的通知消息，同时生成流转记录|
|[工作项负责人变更附加逻辑](module/ProjMgmt/work_item/logic/assignee_onchange)|assignee_onchange|属性逻辑||工作项负责人变更时触发相应的通知消息|
|[归档](module/ProjMgmt/work_item/logic/archive)|archive|无||未归档工作项数据的归档处理，修改工作项的归档状态为已归档，递归所有下级工作项|
|[恢复](module/ProjMgmt/work_item/logic/recover)|recover|无||递归所有下级工作项，恢复已删除状态工作项数据，修改工作项的是否删除属性值，并恢复访问记录，标记上级为非叶子节点|
|[恢复历史版本](module/ProjMgmt/work_item/logic/restore_version)|restore_version|无||恢复工作项版本至某一指定历史版本|
|[成员负荷报告](module/ProjMgmt/work_item/logic/sprint_user_stat)|sprint_user_stat|无||成员负荷报告数据源|
|[新建工作项前校验父子工作项类型](module/ProjMgmt/work_item/logic/before_create_check_type)|before_create_check_type|无||新建工作项前校验父子工作项类型|
|[新建规划快照](module/ProjMgmt/work_item/logic/create_plan_snapshot)|create_plan_snapshot|无||新建规划快照|
|[无操作](module/ProjMgmt/work_item/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[汇聚实际工时](module/ProjMgmt/work_item/logic/aggregate_actual_workload)|aggregate_actual_workload|无||实际工时属性变更触发，未使用，暂时废弃|
|[汇聚实际开始时间](module/ProjMgmt/work_item/logic/aggregate_actual_start_at)|aggregate_actual_start_at|属性逻辑||实际开始时间变更时触发|
|[汇聚实际结束时间](module/ProjMgmt/work_item/logic/aggregate_actual_end_at)|aggregate_actual_end_at|属性逻辑||实际结束时间变更时触发|
|[汇聚开始时间](module/ProjMgmt/work_item/logic/aggregate_start_at)|aggregate_start_at|属性逻辑||开始时间变更时触发|
|[汇聚结束时间](module/ProjMgmt/work_item/logic/aggregate_end_at)|aggregate_end_at|属性逻辑||结束时间变更时触发|
|[汇聚预估工时](module/ProjMgmt/work_item/logic/aggregate_estimated_work_load)|aggregate_estimated_work_load|属性逻辑||预估工时属性变更触发|
|[激活](module/ProjMgmt/work_item/logic/activate)|activate|无||激活已归档状态工作项，工作项存在子工作项，递归激活所有下级工作项，标记上级为非叶子节点|
|[状态类型变更附加逻辑](module/ProjMgmt/work_item/logic/state_type_onchange)|state_type_onchange|属性逻辑||已完成时，填充完成时间|
|[生成最近访问](module/ProjMgmt/work_item/logic/create_recent)|create_recent|无||在用户对工作项数据进行了get或update操作时生成相应的访问记录|
|[移入发布](module/ProjMgmt/work_item/logic/shift_in_release)|shift_in_release|无||将工作项移入对应发布|
|[移入看板](module/ProjMgmt/work_item/logic/shift_in_kanban)|shift_in_kanban|无||将工作项移入对应看板|
|[移入迭代](module/ProjMgmt/work_item/logic/shift_in_sprint)|shift_in_sprint|无||将工作项移入对应迭代|
|[移出发布](module/ProjMgmt/work_item/logic/shift_out_release)|shift_out_release|无||工作项移出发布|
|[移出迭代](module/ProjMgmt/work_item/logic/shift_out_sprint)|shift_out_sprint|无||工作项移出迭代|
|[移动工作项](module/ProjMgmt/work_item/logic/move_work_item)|move_work_item|无||工作项移动至其他的同类型项目|
|[移动时子工作项的处理](module/ProjMgmt/work_item/logic/move_child_work_item)|move_child_work_item|无||父工作项移动; 子工作项也移动;并对Top_id进行更新|
|[缺陷年龄报告](module/ProjMgmt/work_item/logic/defect_age_report)|defect_age_report|无||报表缺陷年龄报告数据源<br>|
|[缺陷每日趋势](module/ProjMgmt/work_item/logic/defect_daily_trend)|defect_daily_trend|无||报表缺陷每日趋势数据源|
|[缺陷累计趋势查询](module/ProjMgmt/work_item/logic/defect_total_trend)|defect_total_trend|无||报表缺陷累计趋势报表数据源|
|[获取基线名称](module/ProjMgmt/work_item/logic/get_baseline_name)|get_baseline_name|无||工作项主视图获取所属基线|
|[获取工作项类型](module/ProjMgmt/work_item/logic/get_work_item_type)|get_work_item_type|无||链接跳转工作项主视图前，获取工作项类型|
|[获取测试计划对应项目](module/ProjMgmt/work_item/logic/work_item_test_plan_project)|work_item_test_plan_project|无||获取测试计划对应项目|
|[获取草稿](module/ProjMgmt/work_item/logic/custom_draft)|custom_draft|无|||
|[获取项目成员及权限](module/ProjMgmt/work_item/logic/get_project_member)|get_project_member|无||获取项目成员信息，用于判断当前用户权限|
|[规划工作项](module/ProjMgmt/work_item/logic/plan_work_item)|plan_work_item|无||规划选中工作项至指定发布|
|[设置初始排序值](module/ProjMgmt/work_item/logic/set_sequence)|set_sequence|无||设置初始排序值|
|[设置执行人](module/ProjMgmt/work_item/logic/setting_executors)|setting_executors|无||设置执行人|
|[设置缺陷类型](module/ProjMgmt/work_item/logic/set_type_bug)|set_type_bug|无||设置当前工作项为缺陷类型|
|[设置默认看板栏](module/ProjMgmt/work_item/logic/set_default_entry)|set_default_entry|无||选择看板后，自动填充所属看板下的的首个看板栏|
|[资源分配](module/ProjMgmt/work_item/logic/resource_assignment)|resource_assignment|无||资源分配下的工作项|
|[资源成员设置（全局）](module/ProjMgmt/work_item/logic/resource_member_setting)|resource_member_setting|无||资源成员设置（全局），默认设置容量/工作日|
|[迭代变更触发逻辑](module/ProjMgmt/work_item/logic/sprint_id_onchange)|sprint_id_onchange|属性逻辑||迭代变更触发逻辑，记录迭代移入移出记录|
|[迭代成员工作项图表查询](module/ProjMgmt/work_item/logic/sprint_member_chart)|sprint_member_chart|无||迭代成员工作项图表查询|
|[迭代成员贡献度](module/ProjMgmt/work_item/logic/sprint_contribution)|sprint_contribution|无||迭代成员贡献度|
|[选择子工作项](module/ProjMgmt/work_item/logic/choose_child)|choose_child|无||选择子工作项|
|[需求年龄报告](module/ProjMgmt/work_item/logic/backlog_age_report)|backlog_age_report|无||报表需求年龄报告数据源|
|[需求数量燃尽图](module/ProjMgmt/work_item/logic/require_burn_out)|require_burn_out|无||需求数量燃尽图|
|[需求树状或平铺表格查询](module/ProjMgmt/work_item/logic/requirement_tree_or_tile_query)|requirement_tree_or_tile_query|无||需求树状或平铺表格查询|
|[需求每日趋势](module/ProjMgmt/work_item/logic/backlog_daily_trend)|backlog_daily_trend|无||报表需求每日趋势数据源|
|[需求累计流图](module/ProjMgmt/work_item/logic/backlog_accumulate_flow)|backlog_accumulate_flow|无||报表需求累计流图数据源|
|[项目资源成员设置](module/ProjMgmt/work_item/logic/project_resource_setting)|project_resource_setting|无||项目资源成员设置，默认设置容量/工作日|
|[首页待完成项计数器](module/ProjMgmt/work_item/logic/count_my_todo)|count_my_todo|无||首页待完成项计数器|


## [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state.md) :id=work_item_state

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProjMgmt/work_item_state/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type.md) :id=work_item_type

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProjMgmt/work_item_type/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|


## [工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard.md) :id=work_item_wizard

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[CreateTemp后附加](module/ProjMgmt/work_item_wizard/logic/create_temp_after)|create_temp_after|无||填充操作明细属性|
|[变更工作项类型](module/ProjMgmt/work_item_wizard/logic/change)|change|无||变更工作项类型|
|[填充操作明细属性](module/ProjMgmt/work_item_wizard/logic/fill_details)|fill_details|无||变更工作项类型前，填充操作明细属性|


