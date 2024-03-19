# 消息通知 <!-- {docsify-ignore-all} -->


## 消息队列

|    中文名   | 代码名       |  类型     |  备注  |
| --------|------------| -----   |  -------- |
|默认消息队列|Default|Runtime||

## 实体消息通知

|    实体|    通知名称         |  消息队列  |  消息模板 |  通知目标    |  使用场景    |  备注  |
| --------|------------ |  -------- | -------- | -------- | -------- | -------- |
|[关注(ATTENTION)](module/Base/Attention)|[提醒关注页面通知(attention_page_notify)](module/Base/Attention/notify/attention_page_notify)|默认消息队列|[提醒关注通知模板(页面)](#page_notice_attention)|关注人 |[关注(ATTENTION)](module/Base/Attention) [添加关注后发送通知(after_create_notify)](module/Base/Attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/Attention)|[提醒关注通知(notice_attention_notify)](module/Base/Attention/notify/notice_attention_notify)|默认消息队列|[提醒关注通知模板](#notice_attention)|关注人 |[关注(ATTENTION)](module/Base/Attention) [添加关注后发送通知(after_create_notify)](module/Base/Attention/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论客户通知(customer_notify)](module/Base/Comment/notify/customer_notify)|默认消息队列|[评论通知模板](#comment)|负责人 关注人员 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论需求通知(idea_notify)](module/Base/Comment/notify/idea_notify)|默认消息队列|[评论通知模板](#comment)|关注人员 负责人 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论页面通知(page_notify)](module/Base/Comment/notify/page_notify)|默认消息队列|[评论页面通知模板](#comment_page)|关注人员 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论执行用例通知(run_notify)](module/Base/Comment/notify/run_notify)|默认消息队列|[评论通知模板](#comment)|关注人员 执行人 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论测试用例通知(test_case_notify)](module/Base/Comment/notify/test_case_notify)|默认消息队列|[评论通知模板](#comment)|关注人员 维护人 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论工单通知(ticket_notify)](module/Base/Comment/notify/ticket_notify)|默认消息队列|[评论通知模板](#comment)|负责人 关注人员 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/Comment)|[评论工作项通知(work_item_notify)](module/Base/Comment/notify/work_item_notify)|默认消息队列|[评论通知模板](#comment)|负责人 关注人 |[评论(COMMENT)](module/Base/Comment) [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify)||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/Customer/notify/assignee_cancel_notify)|默认消息队列|[客户通知模板(取消分配负责人)](#customer_assignee_cancel)|负责人 |[客户(CUSTOMER)](module/ProdMgmt/Customer) [变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/Customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[分配负责人通知(assignee_notify)](module/ProdMgmt/Customer/notify/assignee_notify)|默认消息队列|[客户通知模板(分配负责人)](#customer_assignee)|负责人 |[客户(CUSTOMER)](module/ProdMgmt/Customer) [变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/Customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[变更负责人通知(assignee_onchage_notify)](module/ProdMgmt/Customer/notify/assignee_onchage_notify)|默认消息队列|[客户通知模板(变更负责人)](#customer_assignee_onchange)|创建人 |[客户(CUSTOMER)](module/ProdMgmt/Customer) [变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/Customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[删除客户通知(remove_notify)](module/ProdMgmt/Customer/notify/remove_notify)|默认消息队列|[客户通知模板(删除客户)](#customer_remove)|创建人 负责人 |[客户(CUSTOMER)](module/ProdMgmt/Customer) [Remove 执行之前](index/action_logic_index#Customer_Remove)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[归档/激活通知(archive_notify)](module/ProdMgmt/Idea/notify/archive_notify)|默认消息队列|[需求通知模板(归档/激活需求)](#idea_archive)|关注人员 负责人 |[需求(IDEA)](module/ProdMgmt/Idea) [是否归档变更附加逻辑(is_archived_onchange)](module/ProdMgmt/Idea/logic/is_archived_onchange)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/Idea/notify/assignee_cancel_notify)|默认消息队列|[需求通知模板(取消分配负责人)](#idea_assignee_cancel)|负责人 |[需求(IDEA)](module/ProdMgmt/Idea) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[分配负责人通知(assignee_notify)](module/ProdMgmt/Idea/notify/assignee_notify)|默认消息队列|[需求通知模板(分配负责人)](#idea_assignee)|负责人 |[需求(IDEA)](module/ProdMgmt/Idea) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[负责人变更通知(assignee_onchange_notify)](module/ProdMgmt/Idea/notify/assignee_onchange_notify)|默认消息队列|[需求通知模板(负责人变更通知)](#idea_assignee_onchange)|关注人员 |[需求(IDEA)](module/ProdMgmt/Idea) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[删除/恢复工单通知(remove_notify)](module/ProdMgmt/Idea/notify/remove_notify)|默认消息队列|[需求通知模板(删除/恢复需求)](#idea_remove)|负责人 关注人员 |[需求(IDEA)](module/ProdMgmt/Idea) [是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/Idea/logic/is_deleted_onchange)||
|[需求(IDEA)](module/ProdMgmt/Idea)|[状态变更通知(state_onchage_notify)](module/ProdMgmt/Idea/notify/state_onchage_notify)|默认消息队列|[需求通知模板(状态变更)](#idea_state_onchange)|关注人员 负责人 |[需求(IDEA)](module/ProdMgmt/Idea) [状态变更附加逻辑(state_onchange)](module/ProdMgmt/Idea/logic/state_onchange)||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[测试库归档/激活通知(library_archive_notify)](module/TestMgmt/Library/notify/library_archive_notify)|默认消息队列|[测试库通知模板(归档/激活测试库)](#library_archive)|当前测试库成员 |[测试库(LIBRARY)](module/TestMgmt/Library) [是否归档变更附加逻辑(is_archived_onchange)](module/TestMgmt/Library/logic/is_archived_onchange)||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[测试库删除/恢复通知(library_remove_notify)](module/TestMgmt/Library/notify/library_remove_notify)|默认消息队列|[测试库通知模板(删除/恢复测试库)](#library_remove)|当前测试库成员 |[测试库(LIBRARY)](module/TestMgmt/Library) [是否删除变更附加逻辑(is_deleted_onchange)](module/TestMgmt/Library/logic/is_deleted_onchange)||
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|[加入测试库成员通知(library_member_create)](module/TestMgmt/Library_member/notify/library_member_create)|默认消息队列|[测试库通知模板(加入测试库成员)](#library_member_create)|勾选对象 |[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) [Create 执行之后](index/action_logic_index#Library_member_Create)||
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|[移除测试库成员通知(library_member_remove)](module/TestMgmt/Library_member/notify/library_member_remove)|默认消息队列|[测试库通知模板(移除测试库成员)](#library_member_remove)|勾选对象 |[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member) [通过标识通知成员(notify_by_id)](module/TestMgmt/Library_member/logic/notify_by_id)||
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|[加入成员通知(create_member_notify)](module/Base/Portfolio_member/notify/create_member_notify)|默认消息队列|[项目集通知模板(加入成员)](#project_set_member_create)|选择对象 |[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member) [Create 执行之后](index/action_logic_index#Portfolio_member_Create)||
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|[移除成员通知(remove_member_notify)](module/Base/Portfolio_member/notify/remove_member_notify)|默认消息队列|[项目集通知模板(移除成员)](#project_set_member_remove)|选择对象 |[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member) [通过标识通知成员(notify_by_id)](module/Base/Portfolio_member/logic/notify_by_id)||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[产品归档/激活通知(archived_nofity)](module/ProdMgmt/Product/notify/archived_nofity)|默认消息队列|[产品通知模板(归档/激活产品)](#product_archive)|当前产品成员 |[产品(PRODUCT)](module/ProdMgmt/Product) [是否归档变更附加逻辑(is_archived_onchange)](module/ProdMgmt/Product/logic/is_archived_onchange)||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[产品删除/恢复通知(delete_notify)](module/ProdMgmt/Product/notify/delete_notify)|默认消息队列|[产品通知模板(删除/恢复产品)](#product_remove)|当前产品成员 |[产品(PRODUCT)](module/ProdMgmt/Product) [是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/Product/logic/is_deleted_onchange)||
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|[加入产品成员通知(create_member_notify)](module/ProdMgmt/Product_member/notify/create_member_notify)|默认消息队列|[产品通知模板(加入产品成员)](#product_member_create)|选择产品成员 |[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member) [Create 执行之后](index/action_logic_index#Product_member_Create)||
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|[移除产品成员通知(remove_member_notify)](module/ProdMgmt/Product_member/notify/remove_member_notify)|默认消息队列|[产品通知模板(移除产品成员)](#product_member_remove)|产品成员 |[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member) [通过标识通知成员(notify_by_id)](module/ProdMgmt/Product_member/logic/notify_by_id)||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目归档/激活通知(archived_notify)](module/ProjMgmt/Project/notify/archived_notify)|默认消息队列|[项目通知模板(归档/激活项目)](#project_archive)|当前项目成员 |[项目(PROJECT)](module/ProjMgmt/Project) [是否归档变更附加逻辑(is_archived_onchange)](module/ProjMgmt/Project/logic/is_archived_onchange)||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目删除/恢复通知(remove_notify)](module/ProjMgmt/Project/notify/remove_notify)|默认消息队列|[项目通知模板(删除/恢复项目)](#project_remove)|当前项目成员 |[项目(PROJECT)](module/ProjMgmt/Project) [是否删除变更附加逻辑(is_deleted_onchange)](module/ProjMgmt/Project/logic/is_deleted_onchange)||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目状态状态变更通知(state_notify)](module/ProjMgmt/Project/notify/state_notify)|默认消息队列|[项目通知模板(项目状态变更)](#project_state_change)|当前项目成员 |[项目(PROJECT)](module/ProjMgmt/Project) [项目状态变更通知(state_notify)](module/ProjMgmt/Project/logic/state_notify)||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|[加入项目成员通知(create_member_notify)](module/ProjMgmt/Project_member/notify/create_member_notify)|默认消息队列|[项目通知模板(加入项目成员)](#project_member_create)|项目成员 |[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member) [Create 执行之后](index/action_logic_index#Project_member_Create)||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|[移除项目成员通知(remove_member_nofity)](module/ProjMgmt/Project_member/notify/remove_member_nofity)|默认消息队列|[项目通知模板(移除项目成员)](#project_member_remove)|移除的项目成员 |[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member) [通过标识通知成员(notify_by_id)](module/ProjMgmt/Project_member/logic/notify_by_id)||
|[执行用例(RUN)](module/TestMgmt/Run)|[设置执行人通知(executor_notify)](module/TestMgmt/Run/notify/executor_notify)|默认消息队列|[执行用例通知模板(设置执行人)](#run_executor)|执行人 |[执行用例(RUN)](module/TestMgmt/Run) [执行人变更附加逻辑(executor_onchange)](module/TestMgmt/Run/logic/executor_onchange)||
|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|[加入知识库成员通知(create_member_notify)](module/Wiki/Space_member/notify/create_member_notify)|默认消息队列|[知识库通知模板(加入空间成员)](#space_member_create)|成员 |[空间成员(SPACE_MEMBER)](module/Wiki/Space_member) [Create 执行之后](index/action_logic_index#Space_member_Create)||
|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|[移除空间成员通知(remover_member_notify)](module/Wiki/Space_member/notify/remover_member_notify)|默认消息队列|[知识库通知模板(移除空间成员)](#space_member_remove)|成员 |[空间成员(SPACE_MEMBER)](module/Wiki/Space_member) [通过标识通知成员(notify_by_id)](module/Wiki/Space_member/logic/notify_by_id)||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[取消分配维护人通知(maintainer_cancel_notify)](module/TestMgmt/Test_case/notify/maintainer_cancel_notify)|默认消息队列|[测试用例通知模板(取消分配维护人)](#test_case_maintainer_cancel)|维护人 |[用例(TEST_CASE)](module/TestMgmt/Test_case) [维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/Test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[分配维护人通知(maintainer_notify)](module/TestMgmt/Test_case/notify/maintainer_notify)|默认消息队列|[测试用例通知模板(分配维护人)](#test_case_maintainer)|维护人 |[用例(TEST_CASE)](module/TestMgmt/Test_case) [维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/Test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[维护人变更通知(maintainer_onchange_notify)](module/TestMgmt/Test_case/notify/maintainer_onchange_notify)|默认消息队列|[测试用例通知模板(维护人变更)](#test_case_maintainer_onchange)|关注人员 |[用例(TEST_CASE)](module/TestMgmt/Test_case) [维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/Test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[删除/恢复测试用例通知(remove_notify)](module/TestMgmt/Test_case/notify/remove_notify)|默认消息队列|[测试用例通知模板(删除/恢复测试用例)](#test_case_remove)|关注人员 维护人 |[用例(TEST_CASE)](module/TestMgmt/Test_case) [是否删除变更附加逻辑(is_deleted_onchange)](module/TestMgmt/Test_case/logic/is_deleted_onchange)||
|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[取消分配负责人通知(assignee_cancel_notify)](module/TestMgmt/Test_plan/notify/assignee_cancel_notify)|默认消息队列|[测试计划通知模板(取消分配负责人)](#test_plan_assignee_cancel)|负责人 |[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) [负责人变更附加逻辑(assignee_onchange)](module/TestMgmt/Test_plan/logic/assignee_onchange)||
|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[分配负责人通知(assignee_notify)](module/TestMgmt/Test_plan/notify/assignee_notify)|默认消息队列|[测试计划通知模板(分配负责人)](#test_plan_assignee)|负责人 |[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan) [负责人变更附加逻辑(assignee_onchange)](module/TestMgmt/Test_plan/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[归档/激活通知(archive_notify)](module/ProdMgmt/Ticket/notify/archive_notify)|默认消息队列|[工单通知模板(归档/激活工单)](#ticket_archive)|负责人 关注人员 |[工单(TICKET)](module/ProdMgmt/Ticket) [是否归档变更附加逻辑(is_archived_onchage)](module/ProdMgmt/Ticket/logic/is_archived_onchage)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/Ticket/notify/assignee_cancel_notify)|默认消息队列|[工单通知模板(取消分配负责人)](#ticket_assignee_cancel)|负责人 |[工单(TICKET)](module/ProdMgmt/Ticket) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[分配负责人通知(assignee_notify)](module/ProdMgmt/Ticket/notify/assignee_notify)|默认消息队列|[工单通知模板(分配负责人)](#ticket_assignee)|负责人 |[工单(TICKET)](module/ProdMgmt/Ticket) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[负责人变更通知(assignee_onchange_notify)](module/ProdMgmt/Ticket/notify/assignee_onchange_notify)|默认消息队列|[工单通知模板(负责人变更)](#ticket_assignee_onchange)|关注人员 |[工单(TICKET)](module/ProdMgmt/Ticket) [负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/Ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[删除/恢复工单通知(remove_notify)](module/ProdMgmt/Ticket/notify/remove_notify)|默认消息队列|[工单通知模板(删除/恢复工单)](#ticket_remove)|关注人员 负责人 |[工单(TICKET)](module/ProdMgmt/Ticket) [是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/Ticket/logic/is_deleted_onchange)||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[状态变更通知(state_onchage_notify)](module/ProdMgmt/Ticket/notify/state_onchage_notify)|默认消息队列|[工单通知模板(状态变更)](#ticket_state_onchange)|负责人 关注人员 |[工单(TICKET)](module/ProdMgmt/Ticket) [状态变更附加逻辑(state_onchage)](module/ProdMgmt/Ticket/logic/state_onchage)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项分配负责人通知(allocation_notify)](module/ProjMgmt/Work_item/notify/allocation_notify)|默认消息队列|[工作项通知模板(分配负责人)](#work_item_assignee)|负责人 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/Work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项负责人变更通知(assignee_onchange_notify)](module/ProjMgmt/Work_item/notify/assignee_onchange_notify)|默认消息队列|[工作项通知模板(变更负责人)](#work_item_assignee_onchange)|关注人员 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/Work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项取消负责人通知(cancel_assignee_notify)](module/ProjMgmt/Work_item/notify/cancel_assignee_notify)|默认消息队列|[工作项通知模板(取消分配负责人)](#work_item_assignee_cancel)|负责人 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/Work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项创建时分配通知(create_notify)](module/ProjMgmt/Work_item/notify/create_notify)|默认消息队列|[工作项通知模板(分配负责人)](#work_item_assignee)|负责人 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [Create 执行之后](index/action_logic_index#Work_item_Create)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项归档/激活通知(is_archived_notify)](module/ProjMgmt/Work_item/notify/is_archived_notify)|默认消息队列|[工作项通知模板(归档/激活工作项)](#work_item_archive)|负责人 关注对象 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项归档变更附加逻辑(is_archived_onchange)](module/ProjMgmt/Work_item/logic/is_archived_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项删除/恢复通知(is_deleted_notify)](module/ProjMgmt/Work_item/notify/is_deleted_notify)|默认消息队列|[工作项通知模板(删除/恢复工作项)](#work_item_remove)|负责人 关注人员 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项删除变更附加逻辑(is_deleted_onchange)](module/ProjMgmt/Work_item/logic/is_deleted_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项状态变换通知(state_notify)](module/ProjMgmt/Work_item/notify/state_notify)|默认消息队列|[工作项通知模板（状态变更）](#work_item_state_onchange)|负责人 关注人员 |[工作项(WORK_ITEM)](module/ProjMgmt/Work_item) [工作项状态变更附加逻辑(state_onchange)](module/ProjMgmt/Work_item/logic/state_onchange)||

## 通知目标

|    中文名   | 代码名       |  目标类型     |  备注  |
| --------|------------| -----   |  -------- |
|评论通知工单负责人|comment_ticket_assignee|实体数据集||
|评论通知客户负责人|comment_customer_assignee|实体数据集||
|当前测试库成员|cur_library_member|实体数据集||
|当前产品成员|cur_product_member|实体数据集||
|评论通知关注人|comment_attention|实体数据集||
|评论通知工作项负责人|comment_work_item_assignee|实体数据集||
|评论通知测试用例维护人|comment_test_case_maintenance|实体数据集||
|评论通知需求负责人|comment_idea_assignee|实体数据集||
|关注对象(通过主数据标识)|attention_by_ownerid|实体数据集|关注type in (30,40)|
|当前项目成员|cur_project_member|实体数据集||
|评论通知执行用例执行人|comment_run_executor|实体数据集||

## 消息模板

#### 工作项通知模板(运行时)(work_item) :id=work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`纯文本`

标题：
```
工作项通知
```

内容：
```
工作项${eventdata.title} 发生变化！
```
#### 测试用例通知模板(分配维护人)(test_case_maintainer) :id=test_case_maintainer


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://runmain_view?srfnavctx={"run":"${data.id}","library":"${data.test_library_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了测试用例</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.Test_library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了测试用例：${data.title}
```
#### 工单通知模板(分配负责人)(ticket_assignee) :id=ticket_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
给你分配了工单</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了工单：${data.title}
```
#### 工单通知模板(负责人变更)(ticket_assignee_onchange) :id=ticket_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
变更了工单的负责人</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了工单：${data.title}的负责人
```
#### 知识库通知模板(加入空间成员)(space_member_create) :id=space_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/space=${data.space_id}/spaceindex_view/srfnav=drgroup/article_pagetree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node@${data.space_id}/article_pageshow_view/srfnavctx={"article_page":"${data.space_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.create_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.create_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了空间</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
            <span class="notice-card__object-name" title= "${data.space_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.space_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 知识管理 · ${data.space_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你加入了空间：${data.space_name}
```
#### 提醒关注通知模板(notice_attention) :id=notice_attention


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://${data.owner_type?lower_case}main_view?srfnavctx={"${data.owner_type?lower_case}":"${data.owner_id}" <#if data.parent("owner_id")??><#assign parent= data.parent("owner_id")><#if parent.parent("project_id")??>,"project":"${parent.parent('project_id').id}"<#elseif parent.parent("product_id")??>,"product":"${parent.parent('product_id').id}"<#elseif parent.parent("test_library_id")??>,"library":"${parent.parent('test_library_id').id}"<#elseif parent.parent("case_id")??>,"test_case":"${parent.parent('case_id').id}","library":"${parent.parent('case_id').test_library_id}"</#if></#if>}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;max-width: 350px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 项目通知模板(加入项目成员)(project_member_create) :id=project_member_create
项目成员实体Create行为附加

模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.project_type == 'scrum'>route://-/index/project=${data.project_id}/projectmain_data_scrum/srfnav=usrdrgroup1225572368/projectoverview_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.project_type == 'kanban'>route://-/index/project=${data.project_id}/projectmain_data_kanban/srfnav=usrdrgroup1225572368/projectoverview_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.project_type == 'waterfall'>route://-/index/project=${data.project_id}/projectmain_data_waterfall/srfnav=usrdrgroup1225572368/projectoverview_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if>`

标题：
```
加入项目成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.create_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.create_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了项目</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.project_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.project_identifier}</span>
</#if>
           
            <span class="notice-card__object-name" title= "${data.project_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.project_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你加入了项目：${data.project_name}
```
#### 需求通知模板(分配负责人)(idea_assignee) :id=idea_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
		<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了需求</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了需求：${data.title}
```
#### 工作项通知模板(删除/恢复工作项)(work_item_remove) :id=work_item_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
			            ${data.update_mantext?substring(0,2)!}
			        </span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_deleted==1>删除<#else>恢复</#if>了${data.work_item_type_name}</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了${data.work_item_type_name}：${data.title}
```
#### 测试库通知模板(移除测试库成员)(library_member_remove) :id=library_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

标题：
```
移除测试库成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了测试库</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.library_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.library_identifier}</span>
</#if>
 <span class="notice-card__object-name" title= "${data.library_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.library_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.update_mantext}把你移除了测试库：${data.library_name}
```
#### 工单通知模板(取消分配负责人)(ticket_assignee_cancel) :id=ticket_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
取消分配了工单</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了工单：${data.title}
```
#### 产品通知模板(归档/激活产品)(product_archive) :id=product_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://producttree_exp_view`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了产品</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
           <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了产品：${data.name}
```
#### 项目通知模板(项目状态变更)(project_state_change) :id=project_state_change


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://projecttree_exp_view`

标题：
```
项目状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" 
              style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}</span>
	</div>
	<div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
	    <div class="notice-card__event">
		    <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			    <span class="notice-card__event-name" 
                      style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}</span> 
			    <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">更改了项目状态</span>
			</div>
		</div>
		<div class="notice-card__object" style="font-size: 14px; color: #000;">
		    <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
		    <span class="notice-card__object-name" title= ${data.name} style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
	    </div>
		<div class="notice-card__object" style="font-size: 12px;">
<#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
<#assign laststatecodeitem= last.codeitem("STATE")>
    <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${laststatecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">无</span>
</#if>
    <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
<#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
<#assign statecodeitem= data.codeitem("STATE") >
    <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${statecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${data.statetext}</span>
</#if>
</div>
        <div class="notice-card__info" style="margin-top:5px; font-size: 12px; color: #999; text-transform: lowercase;">
	        <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
		    <span class="notice-card__project-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}更改了项目 ${data.name}状态：${last.codeitem("STATE").text}  → ${data.codeitem("STATE").text}
```
#### 工作项通知模板(取消分配负责人)(work_item_assignee_cancel) :id=work_item_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
取消分配了${data.work_item_type_name}</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
 <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了${work_item_type_name}：${data.title}
```
#### 提醒关注通知模板(页面)(page_notice_attention) :id=page_notice_attention


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>view://article_pageshow_view_model?srfnavctx={"article_page":"${data.parent("owner_id").id}","space":"${data.parent("owner_id").space_id}"}</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注页面</span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;max-width: 350px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
</div>
<#if parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
<#if data.parent("owner_id")??>${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>页面：${data.parent("owner_id").name}</#if>
```
#### 产品通知模板(加入产品成员)(product_member_create) :id=product_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/product=${data.product_id}/productindex_view/srfnav=usrdrgroup1228809432/ideatree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/ideagrid_view_all/-`

标题：
```
加入产品成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.create_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.create_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了产品</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
            <#if data.product_identifier??>
<span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.product_identifier}</span>
</#if>
            <span class="notice-card__object-name" title= "${data.product_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.product_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你加入了产品：${data.product_name}
```
#### 产品通知模板(移除产品成员)(product_member_remove) :id=product_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

标题：
```
移除产品
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了产品</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.product_identifier??>
<span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.product_identifier}</span>
</#if>
            <span class="notice-card__object-name" title= "${data.product_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.product_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.update_mantext}把你移除了产品：${data.product_name}
```
#### 客户通知模板(变更负责人)(customer_assignee_onchange) :id=customer_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customermain_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}"}`

标题：
```
客户负责人变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
		<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了客户的负责人</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			           
			  <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了客户：${data.name}的负责人
```
#### 测试计划通知模板(取消分配负责人)(test_plan_assignee_cancel) :id=test_plan_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customermain_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了测试计划</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.Library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了测试计划：${data.name}
```
#### 评论页面通知模板(comment_page) :id=comment_page


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>view://article_pageshow_view_model?srfnavctx={"article_page":"${data.parent("principal_id").id}","space":"${data.parent("principal_id").space_id}"}</#if>`

标题：
```
评论页面通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了页面</span></div>
        </div>
<#if data.parent("principal_id")??>
<#assign parent= data.parent("principal_id")>
        <div class="notice-card-object">
<span class="object-name"><#if parent.name??> ${parent.name}</#if></span>
        </div>
<#assign content = data.content?replace('<img[^>]*>', '', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')?replace('@','')><#assign regex = "(\\{.*?\\})">
<#list content?matches(regex) as match>
    <#assign jsonStr = match>
    <#assign jsonObject = (jsonStr)?eval>  
    <#if jsonObject.name??>
        <#assign name = jsonObject.name>
        <#assign content = content?replace(jsonStr, '@' + name)>
    </#if>
</#list>
<div  class="notice-card-content" style="margin-top:5px; margin-bottom:5px; ">
<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${content}">${content}</div>
</div>
<#if parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了页面：${data.parent("principal_id").name}
```
#### 测试用例通知模板(维护人变更)(test_case_maintainer_onchange) :id=test_case_maintainer_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://runmain_view?srfnavctx={"run":"${data.id}","library":"${data.test_library_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了测试用例的维护人</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.Test_library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了测试用例：${data.title}的维护人
```
#### 测试计划通知模板(分配负责人)(test_plan_assignee) :id=test_plan_assignee
view://test_planmain_view?srfnavctx={"test_plan":"${data.id}","library":"${data.library_id}"}

模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/library=${data.library_id}/libraryindex_view/srfnav=usrdrgroup1227882118/test_planmain_view/srfnavctx={"test_plan":"${data.id}"};srfnav=run/runtree_exp_view/srfnav=root:node/rungrid_view_all/-`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了测试计划</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.Library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了测试计划：${data.name}
```
#### 测试用例通知模板(删除/恢复测试用例)(test_case_remove) :id=test_case_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://test_casemain_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_deleted==1>删除<#else>恢复</#if>了测试用例</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 测试管理 · ${data.Test_library_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试用例：${data.title}
```
#### 需求通知模板(删除/恢复需求)(idea_remove) :id=idea_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_deleted==1>删除<#else>恢复</#if>了需求</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了需求：${data.title}
```
#### 工作项通知模板(变更负责人)(work_item_assignee_onchange) :id=work_item_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
变更了${data.work_item_type_name}的负责人</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
 <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了${data.work_item_type_name}：${data.title}的负责人
```
#### 测试库通知模板(删除/恢复测试库)(library_remove) :id=library_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://librarytree_exp_view`

标题：
```
删除/恢复测试库
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext} </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了测试库</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 测试管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试库：${data.name}
```
#### 需求通知模板(状态变更)(idea_state_onchange) :id=idea_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

标题：
```
需求状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
更改了需求状态</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
					<div class="notice-card__object" style="font-size: 12px;">
<#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
<#assign laststatecodeitem= last.codeitem("STATE")>
    <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${laststatecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">无</span>
</#if>
    <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
<#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
<#assign statecodeitem= data.codeitem("STATE") >
    <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${statecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${data.statetext}</span>
</#if>
</div>
			        <div class="notice-card__info" style="margin-top: 5px; font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}更改了需求 ${data.title}状态：${last.codeitem("STATE").text}  → ${data.codeitem("STATE").text}
```
#### 项目通知模板(删除/恢复项目)(project_remove) :id=project_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://projecttree_exp_view`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了项目</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了项目：${data.name}
```
#### 测试库通知模板(加入测试库成员)(library_member_create) :id=library_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/library=${data.library_id}/libraryindex_view/srfnav=usrdrgroup1227882118/test_plantree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/test_plangrid_view_all/-`

标题：
```
加入测试库成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.create_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.create_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了测试库</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
 <#if data.library_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.library_identifier}</span>
</#if>
            <span class="notice-card__object-name" title= "${data.library_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.library_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你加入了测试库：${data.library_name}
```
#### 工单通知模板(删除/恢复工单)(ticket_remove) :id=ticket_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;"> ${data.update_mantext?substring(0,2)!} </span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_deleted==1>删除<#else>恢复</#if>了工单</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测工单：${data.title}
```
#### 评论@通知模板(comment_at) :id=comment_at


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??><#if data.principal_type == 'PAGE'>view://article_pageshow_view_model?srfnavctx={"article_page":"${data.parent("principal_id").id}","space":"${data.parent("principal_id").space_id}"}<#else>view://${data.principal_type?lower_case}main_view?srfnavctx={"${data.principal_type?lower_case}":"${data.principal_id}"<#assign p = data.parent("principal_id")><#if p.parent("project_id")??>,"project":"${p.parent('project_id').id}"<#elseif p.parent("product_id")??>,"product":"${p.parent('product_id').id}"<#elseif p.parent("test_library_id")??>,"library":"${p.parent('test_library_id').id}"<#elseif p.parent("case_id")??>,"test_case":"${p.parent('case_id').id}","library":"${p.parent('case_id').test_library_id}"</#if>}</#if></#if>`

标题：
```
评论@通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;"> ${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">在评论中提及了你</span></div>
        </div>
<#if data.parent("principal_id")??>
<#assign parent= data.parent("principal_id")>
        <div class="notice-card-object"><span class="notice-card__object-id" style="color: #999;font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span><span class="object-name"><#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'> ${parent.name}<#else> ${parent.title}</#if></span>
        </div>
<#assign content = data.content?replace('<img[^>]*>', '', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')?replace('@','')><#assign regex = "(\\{.*?\\})">
<#list content?matches(regex) as match>
    <#assign jsonStr = match>
    <#assign jsonObject = (jsonStr)?eval>  
    <#if jsonObject.name??>
        <#assign name = jsonObject.name>
        <#assign content = content?replace(jsonStr, '@' + name)>
    </#if>
</#list>
<div  class="notice-card-content" style="margin-top:5px; margin-bottom:5px; ">
<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${content}">${content}</div>
</div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}在<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例<#elseif data.principal_type == 'PAGE'>页面</#if>：
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>的评论中提及了你
```
#### 执行用例通知模板(设置执行人)(run_executor) :id=run_executor


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://runmain_view?srfnavctx={"run":"${data.id}","library":"${data.library_id}", "test_case":"${data.Case_id}", "test_plan":"${data.Plan_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了执行用例</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了执行用例：${data.title}
```
#### 知识库通知模板(移除空间成员)(space_member_remove) :id=space_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了空间</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
 <span class="notice-card__object-name" title= "${data.space_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.space_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 知识管理 · ${data.space_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.update_mantext}把你移除了空间：${data.space_name}
```
#### 客户通知模板(删除客户)(customer_remove) :id=customer_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
		<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">删除了客户</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			           
			  <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}删除了客户：${data.name}
```

微信消息内容：
```
${data.update_mantext}删除了客户：${data.name}
```
#### 项目通知模板(移除项目成员)(project_member_remove) :id=project_member_remove
项目成员实体Remove前附加

模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

标题：
```
移除项目成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了项目</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.project_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.project_identifier}</span>
</#if>
<span class="notice-card__object-name" title= "${data.project_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.project_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.update_mantext}把你移除了项目：${data.project_name}
```
#### 工单通知模板(归档/激活工单)(ticket_archive) :id=ticket_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!} </span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_archived==1>归档<#else>激活</#if>了工单</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了工单：${data.title}
```
#### 工作项通知模板（状态变更）(work_item_state_onchange) :id=work_item_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

标题：
```
工作项状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
			            ${data.update_mantext?substring(0,2)!}
			        </span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
更改了${data.work_item_type_name}状态</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
					<div class="notice-card__object" style="font-size: 12px;">
<#if last.codeitem("STATE")?? && last.codeitem("STATE").getBKColor()??>
<#assign laststatecodeitem= last.codeitem("STATE")>
    <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getBKColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${laststatecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">无</span>
</#if>
    <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
<#if data.codeitem("STATE")?? && data.codeitem("STATE").getBKColor()??>
<#assign statecodeitem= data.codeitem("STATE") >
    <span class="notice-card__object-last" style="background-color: ${statecodeitem.getBKColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${statecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${data.statetext}</span>
</#if>
</div>
			        <div class="notice-card__info" style="margin-top: 5px; font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}更改了${data.work_item_type_name} ${data.title}状态：${last.codeitem("STATE").text}  → ${data.codeitem("STATE").text}
```
#### 工作项通知模板(分配负责人)(work_item_assignee) :id=work_item_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
给你分配了${data.work_item_type_name}</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了${data.work_item_type_name}：${data.title}
```
#### 工作项通知模板(归档/激活工作项)(work_item_archive) :id=work_item_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
			            ${data.update_mantext?substring(0,2)!}
			        </span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_archived==1>归档<#else>激活</#if>了${data.work_item_type_name}</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			         <#if data.show_identifier??>
  <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
</#if>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了${data.work_item_type_name}：${data.title}
```
#### 工单通知模板(状态变更)(ticket_state_onchange) :id=ticket_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticketmain_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}"}`

标题：
```
工单状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.update_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
更改了工单状态</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
					<div class="notice-card__object" style="font-size: 12px;">
<#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
<#assign laststatecodeitem= last.codeitem("STATE")>
    <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${laststatecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">无</span>
</#if>
    <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
<#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
<#assign statecodeitem= data.codeitem("STATE") >
    <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${statecodeitem.text}</span>
 <#else>
    <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">${data.statetext}</span>
</#if>
</div>
			        <div class="notice-card__info" style="margin-top: 5px; font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}更改了工单 ${data.title}状态：${last.codeitem("STATE").text}  → ${data.codeitem("STATE").text}
```
#### 项目集通知模板(移除成员)(project_set_member_remove) :id=project_set_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.update_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.update_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了项目集</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.portfolio_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.portfolio_identifier}</span>
</#if>
           
            <span class="notice-card__object-name" title= "${data.portfolio_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.portfolio_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 项目管理 · ${data.portfolio_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你移除了项目集：${data.portfolio_name}
```
#### 项目集通知模板(加入成员)(project_set_member_create) :id=project_set_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/portfolio=${data.portfolio_id}/portfolioproject_index_view/srfnav=drgroup/worktree_grid_ex_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">
            ${data.create_mantext?substring(0,2)!}
        </span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${data.create_mantext}
                </span> 
                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了项目集</span>
            </div>
        </div>
        <div class="notice-card__object" style="font-size: 14px; color: #000;">
<#if data.portfolio_identifier??>
 <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.portfolio_identifier}</span>
</#if>
           
            <span class="notice-card__object-name" title= "${data.portfolio_name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.portfolio_name}</span>
        </div>
        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-card__project-info"> · 项目管理 · ${data.portfolio_name}</span>
        </div>
    </div>
</div>

```

钉钉内容：
```
${data.create_mantext}把你加入了项目集：${data.portfolio_name}
```
#### 需求通知模板(取消分配负责人)(idea_assignee_cancel) :id=idea_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
取消分配了需求</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了需求：${data.title}
```
#### 客户通知模板(取消分配负责人)(customer_assignee_cancel) :id=customer_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customermain_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
		<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了客户</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			           
			  <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了客户：${data.name}
```
#### 客户通知模板(分配负责人)(customer_assignee) :id=customer_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customermain_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
		<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了客户</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			           
			  <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了客户：${data.name}
```
#### 需求通知模板(归档/激活需求)(idea_archive) :id=idea_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
<#if data.is_archived==1>归档<#else>激活</#if>了需求</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			           <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了需求：${data.title}
```
#### 项目事件通知(project_event_hook) :id=project_event_hook


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
内容
```
#### 测试库通知模板(归档/激活测试库)(library_archive) :id=library_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://librarytree_exp_view`

标题：
```
归档/激活测试库
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;"> ${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了测试库</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 测试管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了测试库：${data.name}
```
#### 工作项通知模板（创建工作项）(work_item_create) :id=work_item_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_itemmain_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}"}`

标题：
```
工作项创建通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
			                    ${data.create_mantext}
			                </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">创建了${data.work_item_type_name}</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.project_name}</span>
			        </div>
			    </div>
			</div>
```
#### 项目通知模板(归档/激活项目)(project_archive) :id=project_archive


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://projecttree_exp_view`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了项目</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
           <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 项目管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了项目：${data.name}
```
#### 测试用例通知模板(取消分配维护人)(test_case_maintainer_cancel) :id=test_case_maintainer_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://runmain_view?srfnavctx={"run":"${data.id}","library":"${data.test_library_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了测试用例</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 测试管理 · ${data.Test_library_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了测试用例：${data.title}
```
#### 产品通知模板(删除/恢复产品)(product_remove) :id=product_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://producttree_exp_view`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext} </span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了产品</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.identifier}</span>
			            <span class="notice-card__object-name" title= "${data.name}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.name}</span>
			        </div>
			        <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			            <span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			            <span class="notice-card__project-info"> · 产品管理 · ${data.name}</span>
			        </div>
			    </div>
			</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了产品：${data.name}
```
#### 评论通知模板(comment) :id=comment


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://${data.principal_type?lower_case}main_view?srfnavctx={"${data.principal_type?lower_case}":"${data.principal_id}" <#if data.parent("principal_id")??><#assign parent= data.parent("principal_id")><#if parent.parent("project_id")??>,"project":"${parent.parent('project_id').id}"<#elseif parent.parent("product_id")??>,"product":"${parent.parent('product_id').id}"<#elseif parent.parent("test_library_id")??>,"library":"${parent.parent('test_library_id').id}"<#elseif parent.parent("case_id")??>,"test_case":"${parent.parent('case_id').id}","library":"${parent.parent('case_id').test_library_id}"</#if></#if>}`

标题：
```
评论通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例<#elseif data.principal_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("principal_id")??>
<#assign parent= data.parent("principal_id")>
        <div class="notice-card-object"><span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span><span class="object-name">
<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'> ${parent.name}<#else> ${parent.title}</#if>
</span>
        </div>
<#assign content = data.content?replace('<img[^>]*>', '', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')?replace('@','')><#assign regex = "(\\{.*?\\})">
<#list content?matches(regex) as match>
    <#assign jsonStr = match>
    <#assign jsonObject = (jsonStr)?eval>  
    <#if jsonObject.name??>
        <#assign name = jsonObject.name>
        <#assign content = content?replace(jsonStr, '@' + name)>
    </#if>
</#list>
<div  class="notice-card-content" style="margin-top:5px; margin-bottom:5px; ">
<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${content}">${content}</div>
</div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 需求通知模板(负责人变更通知)(idea_assignee_onchange) :id=idea_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ideamain_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext?substring(0,2)!}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
			                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
			                <span class="notice-card__event-desc" style="color: #000; font-size: 14px; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
变更了需求的负责人</span>
			            </div>
			        </div>
			        <div class="notice-card__object" style="font-size: 14px; color: #000;">
			            <span class="notice-card__object-id" style="color: #999; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.show_identifier}</span>
			            <span class="notice-card__object-name" title= "${data.title}" style="color: #000; display: inline-block; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.title}</span>
			        </div>
		 <div class="notice-card__info" style="font-size: 12px; color: #999; text-transform: lowercase;">
			<span class="notice-card__time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
			 <span class="notice-card__project-info"> · 产品管理 · ${data.product_name}</span>
		</div>
	</div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了需求：${data.title}的负责人
```
