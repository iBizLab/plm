# 消息通知 <!-- {docsify-ignore-all} -->


## 消息队列

|    中文名col200   | 代码名col200       |  类型col100     |  备注col750  |
| --------|------------| -----   |  -------- |
|默认消息队列|Default|Runtime||

## 实体消息通知

|    实体col200|    通知名称col200          |  消息模板col300   |  使用场景col250    |  备注col300  |
| --------|------------ |   -------- | -------- | -------- |
|[关注(ATTENTION)](module/Base/attention)|[客户提醒关注通知(attention_customer_notify)](module/Base/attention/notify/attention_customer_notify)|[提醒关注客户通知模板](#notice_attention_customer)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[产品需求提醒关注通知(attention_idea_notify)](module/Base/attention/notify/attention_idea_notify)|[提醒关注产品需求通知模板](#notice_attention_idea)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[页面提醒关注通知(attention_page_notify)](module/Base/attention/notify/attention_page_notify)|[提醒关注页面通知模板](#notice_attention_page)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[执行用例提醒关注通知(attention_run_notify)](module/Base/attention/notify/attention_run_notify)|[提醒关注执行用例通知模板](#notice_attention_run)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[测试用例提醒关注通知(attention_test_case_notify)](module/Base/attention/notify/attention_test_case_notify)|[提醒关注测试用例通知模板](#notice_attention_test_case)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[工单提醒关注通知(attention_ticket_notify)](module/Base/attention/notify/attention_ticket_notify)|[提醒关注工单通知模板](#notice_attention_ticket)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[关注(ATTENTION)](module/Base/attention)|[工作项提醒关注通知(attention_work_item_notify)](module/Base/attention/notify/attention_work_item_notify)|[提醒关注工作项通知模板](#notice_attention_work_item)|[添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[客户评论通知(customer_notify)](module/Base/comment/notify/customer_notify)|[评论客户通知模板](#comment_customer)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[产品需求评论通知(idea_notify)](module/Base/comment/notify/idea_notify)|[评论产品需求通知模板](#comment_idea)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[页面评论通知(page_notify)](module/Base/comment/notify/page_notify)|[评论页面通知模板](#comment_page)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[执行用例评论通知(run_notify)](module/Base/comment/notify/run_notify)|[评论执行用例通知模板](#comment_run)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[测试用例评论通知(test_case_notify)](module/Base/comment/notify/test_case_notify)|[评论测试用例通知模板](#comment_test_case)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[工单评论通知(ticket_notify)](module/Base/comment/notify/ticket_notify)|[评论工单通知模板](#comment_ticket)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[评论(COMMENT)](module/Base/comment)|[工作项评论通知(work_item_notify)](module/Base/comment/notify/work_item_notify)|[评论工作项通知模板](#comment_work_item)|[新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify)||
|[客户(CUSTOMER)](module/ProdMgmt/customer)|[客户取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/customer/notify/assignee_cancel_notify)|[客户通知模板(取消分配负责人)](#customer_assignee_cancel)|[变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/customer)|[客户分配负责人通知(assignee_notify)](module/ProdMgmt/customer/notify/assignee_notify)|[客户通知模板(分配负责人)](#customer_assignee)|[变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/customer)|[客户变更负责人通知(assignee_onchange_notify)](module/ProdMgmt/customer/notify/assignee_onchange_notify)|[客户通知模板(变更负责人)](#customer_assignee_onchange)|[变更负责人附加逻辑(assignee_onchage)](module/ProdMgmt/customer/logic/assignee_onchage)||
|[客户(CUSTOMER)](module/ProdMgmt/customer)|[客户删除通知(remove_notify)](module/ProdMgmt/customer/notify/remove_notify)|[客户通知模板(删除客户)](#customer_remove)|[删除客户发送通知(remove_customer_notify)](module/ProdMgmt/customer/logic/remove_customer_notify)||
|[执行人(EXECUTOR)](module/Base/executor)|[工作项取消执行人通知(cancel_work_item_executor)](module/Base/executor/notify/cancel_work_item_executor)|[取消分配执行工作项通知模板](#cancel_executor_work_item)|[删除执行人时发送通知(del_notice)](module/Base/executor/logic/del_notice)<br>[执行人变更附加逻辑(user_id_onchange)](module/Base/executor/logic/user_id_onchange)||
|[执行人(EXECUTOR)](module/Base/executor)|[工作项分配执行人通知(work_item_executor)](module/Base/executor/notify/work_item_executor)|[分配执行工作项通知模板](#notice_executor_work_item)|[执行人变更附加逻辑(user_id_onchange)](module/Base/executor/logic/user_id_onchange)<br>[添加执行人时发送通知(after_create_notice)](module/Base/executor/logic/after_create_notice)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求归档/激活通知(archive_notify)](module/ProdMgmt/idea/notify/archive_notify)|[需求通知模板(归档/激活需求)](#idea_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchange)](module/ProdMgmt/idea/logic/is_archived_onchange)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/idea/notify/assignee_cancel_notify)|[需求通知模板(取消分配负责人)](#idea_assignee_cancel)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求分配负责人通知(assignee_notify)](module/ProdMgmt/idea/notify/assignee_notify)|[需求通知模板(分配负责人)](#idea_assignee)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求负责人变更通知(assignee_onchange_notify)](module/ProdMgmt/idea/notify/assignee_onchange_notify)|[需求通知模板(负责人变更通知)](#idea_assignee_onchange)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/idea/logic/assignee_onchange)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求删除/恢复通知(remove_notify)](module/ProdMgmt/idea/notify/remove_notify)|[需求通知模板(删除/恢复需求)](#idea_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/idea/logic/is_deleted_onchange)||
|[需求(IDEA)](module/ProdMgmt/idea)|[产品需求状态变更通知(state_onchage_notify)](module/ProdMgmt/idea/notify/state_onchage_notify)|[需求通知模板(状态变更)](#idea_state_onchange)|[状态变更附加逻辑(state_onchange)](module/ProdMgmt/idea/logic/state_onchange)||
|[测试库(LIBRARY)](module/TestMgmt/library)|[测试库归档/激活通知(library_archive_notify)](module/TestMgmt/library/notify/library_archive_notify)|[测试库通知模板(归档/激活测试库)](#library_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchange)](module/TestMgmt/library/logic/is_archived_onchange)||
|[测试库(LIBRARY)](module/TestMgmt/library)|[测试库删除/恢复通知(library_remove_notify)](module/TestMgmt/library/notify/library_remove_notify)|[测试库通知模板(删除/恢复测试库)](#library_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/TestMgmt/library/logic/is_deleted_onchange)||
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|[测试库成员加入通知(library_member_create)](module/TestMgmt/library_member/notify/library_member_create)|[测试库通知模板(加入测试库成员)](#library_member_create)|[Create 执行之后](index/action_logic_index#library_member_Create)||
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|[测试库成员移除通知(library_member_remove)](module/TestMgmt/library_member/notify/library_member_remove)|[测试库通知模板(移除测试库成员)](#library_member_remove)|[移除测试库成员通知(remove_library_member_notify)](module/TestMgmt/library_member/logic/remove_library_member_notify)||
|[文件夹(PORTFOLIO)](module/Base/portfolio)|[项目集归档/恢复通知(project_set_remove_recover_notify)](module/Base/portfolio/notify/project_set_remove_recover_notify)|[项目集删除/恢复通知模板](#project_set_remove_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/Base/portfolio/logic/is_deleted_onchange)||
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|[项目集加入成员通知(create_member_notify)](module/Base/portfolio_member/notify/create_member_notify)|[项目集通知模板(加入成员)](#project_set_member_create)|[Create 执行之后](index/action_logic_index#portfolio_member_Create)||
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|[项目集移除成员通知(remove_member_notify)](module/Base/portfolio_member/notify/remove_member_notify)|[项目集通知模板(移除成员)](#project_set_member_remove)|[移除项目集成员通知(remove_project_set_member_notify)](module/Base/portfolio_member/logic/remove_project_set_member_notify)||
|[产品(PRODUCT)](module/ProdMgmt/product)|[产品归档/激活通知(archived_nofity)](module/ProdMgmt/product/notify/archived_nofity)|[产品通知模板(归档/激活产品)](#product_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchange)](module/ProdMgmt/product/logic/is_archived_onchange)||
|[产品(PRODUCT)](module/ProdMgmt/product)|[产品删除/恢复通知(delete_notify)](module/ProdMgmt/product/notify/delete_notify)|[产品通知模板(删除/恢复产品)](#product_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/product/logic/is_deleted_onchange)||
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|[产品成员加入通知(create_member_notify)](module/ProdMgmt/product_member/notify/create_member_notify)|[产品通知模板(加入产品成员)](#product_member_create)|[Create 执行之后](index/action_logic_index#product_member_Create)||
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|[产品成员移除通知(remove_member_notify)](module/ProdMgmt/product_member/notify/remove_member_notify)|[产品通知模板(移除产品成员)](#product_member_remove)|[移除产品成员通知(remove_product_member_notify)](module/ProdMgmt/product_member/logic/remove_product_member_notify)||
|[项目(PROJECT)](module/ProjMgmt/project)|[项目归档/激活通知(archived_notify)](module/ProjMgmt/project/notify/archived_notify)|[项目通知模板(归档/激活项目)](#project_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchange)](module/ProjMgmt/project/logic/is_archived_onchange)||
|[项目(PROJECT)](module/ProjMgmt/project)|[项目分配负责人通知(assignee_notify)](module/ProjMgmt/project/notify/assignee_notify)|[项目通知模板(分配负责人)](#project_assignee)|[负责人变更附加逻辑(assignee_id_onchange)](module/ProjMgmt/project/logic/assignee_id_onchange)||
|[项目(PROJECT)](module/ProjMgmt/project)|[项目变更负责人通知(change_assignee_notify)](module/ProjMgmt/project/notify/change_assignee_notify)|[项目通知模板(变更负责人)](#project_change_assignee)|[负责人变更附加逻辑(assignee_id_onchange)](module/ProjMgmt/project/logic/assignee_id_onchange)||
|[项目(PROJECT)](module/ProjMgmt/project)|[项目删除/恢复通知(remove_notify)](module/ProjMgmt/project/notify/remove_notify)|[项目通知模板(删除/恢复项目)](#project_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/ProjMgmt/project/logic/is_deleted_onchange)||
|[项目(PROJECT)](module/ProjMgmt/project)|[项目状态变更通知(state_notify)](module/ProjMgmt/project/notify/state_notify)|[项目通知模板(项目状态变更)](#project_state_change)|[项目状态变更通知(state_notify)](module/ProjMgmt/project/logic/state_notify)||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|[项目成员加入通知(create_member_notify)](module/ProjMgmt/project_member/notify/create_member_notify)|[项目通知模板(加入项目成员)](#project_member_create)|[Create 执行之后](index/action_logic_index#project_member_Create)||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|[项目成员移除通知(remove_member_nofity)](module/ProjMgmt/project_member/notify/remove_member_nofity)|[项目通知模板(移除项目成员)](#project_member_remove)|[移除项目成员通知(remove_project_member_notify)](module/ProjMgmt/project_member/logic/remove_project_member_notify)||
|[评审(REVIEW)](module/TestMgmt/review)|[完成需求评审通知(idea_review_notify)](module/TestMgmt/review/notify/idea_review_notify)|[评审完成通知模板(产品需求)](#idea_review_complete)|[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[完成页面评审通知(page_complete_notify)](module/TestMgmt/review/notify/page_complete_notify)|[评审完成通知模板(空间页面)](#page_review_complete)|[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[空间页面评审通知(page_review_notify)](module/TestMgmt/review/notify/page_review_notify)|[页面评审通知模板](#page_review_inform_template)|[提交评审(submit_review)](module/TestMgmt/review/logic/submit_review)<br>[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)<br>[提交评审(submit_review)](module/TestMgmt/review_content/logic/submit_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[评审通知(review_notify)](module/TestMgmt/review/notify/review_notify)|[评审通知模板](#review_inform_template)|[提交评审(submit_review)](module/TestMgmt/review/logic/submit_review)<br>[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)<br>[提交评审(submit_review)](module/TestMgmt/review_content/logic/submit_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[完成用例评审通知(test_case_complete_notify)](module/TestMgmt/review/notify/test_case_complete_notify)|[评审完成通知模板(测试用例)](#tc_review_complete_template)|[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[测试用例评审通知(test_case_review_notify)](module/TestMgmt/review/notify/test_case_review_notify)|[测试用例评审通知模板](#tc_review_inform_template)|[提交评审(submit_review)](module/TestMgmt/review/logic/submit_review)<br>[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)<br>[提交评审(submit_review)](module/TestMgmt/review_content/logic/submit_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[完成工作项评审通知(work_item_complete_notify)](module/TestMgmt/review/notify/work_item_complete_notify)|[评审完成通知模板(项目工作项)](#work_item_review_complete)|[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)||
|[评审(REVIEW)](module/TestMgmt/review)|[项目工作项评审通知(work_item_review_notify)](module/TestMgmt/review/notify/work_item_review_notify)|[工作项评审通知模板](#wi_review_inform_template)|[提交评审(submit_review)](module/TestMgmt/review/logic/submit_review)<br>[完成评审(complete_review)](module/TestMgmt/review_content/logic/complete_review)<br>[提交评审(submit_review)](module/TestMgmt/review_content/logic/submit_review)||
|[执行用例(RUN)](module/TestMgmt/run)|[执行用例设置执行人通知(executor_notify)](module/TestMgmt/run/notify/executor_notify)|[执行用例通知模板(设置执行人)](#run_executor)|[执行人变更附加逻辑(executor_onchange)](module/TestMgmt/run/logic/executor_onchange)||
|[空间(SPACE)](module/Wiki/space)|[空间归档/激活通知(archived_or_activate_notify)](module/Wiki/space/notify/archived_or_activate_notify)|[空间通知模板(归档/激活空间)](#space_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchange)](module/Wiki/space/logic/is_archived_onchange)||
|[空间(SPACE)](module/Wiki/space)|[空间删除/恢复通知(remove_or_recover_notify)](module/Wiki/space/notify/remove_or_recover_notify)|[空间通知模板(删除/恢复空间)](#space_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/Wiki/space/logic/is_deleted_onchange)||
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|[空间成员加入通知(create_member_notify)](module/Wiki/space_member/notify/create_member_notify)|[知识库通知模板(加入空间成员)](#space_member_create)|[Create 执行之后](index/action_logic_index#space_member_Create)||
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|[空间成员移除通知(remover_member_notify)](module/Wiki/space_member/notify/remover_member_notify)|[知识库通知模板(移除空间成员)](#space_member_remove)|[移除空间成员发送通知(remove_space_member_notify)](module/Wiki/space_member/logic/remove_space_member_notify)||
|[用例(TEST_CASE)](module/TestMgmt/test_case)|[测试用例取消分配维护人通知(maintainer_cancel_notify)](module/TestMgmt/test_case/notify/maintainer_cancel_notify)|[测试用例通知模板(取消分配维护人)](#test_case_maintainer_cancel)|[维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/test_case)|[测试用例分配维护人通知(maintainer_notify)](module/TestMgmt/test_case/notify/maintainer_notify)|[测试用例通知模板(分配维护人)](#test_case_maintainer)|[维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/test_case)|[测试用例维护人变更通知(maintainer_onchange_notify)](module/TestMgmt/test_case/notify/maintainer_onchange_notify)|[测试用例通知模板(维护人变更)](#test_case_maintainer_onchange)|[维护人变更附加逻辑(maintenance_onchange)](module/TestMgmt/test_case/logic/maintenance_onchange)||
|[用例(TEST_CASE)](module/TestMgmt/test_case)|[测试用例删除/恢复通知(remove_notify)](module/TestMgmt/test_case/notify/remove_notify)|[测试用例通知模板(删除/恢复测试用例)](#test_case_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/TestMgmt/test_case/logic/is_deleted_onchange)||
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|[测试计划取消分配负责人通知(assignee_cancel_notify)](module/TestMgmt/test_plan/notify/assignee_cancel_notify)|[测试计划通知模板(取消分配负责人)](#test_plan_assignee_cancel)|[负责人变更附加逻辑(assignee_onchange)](module/TestMgmt/test_plan/logic/assignee_onchange)||
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|[测试计划分配负责人通知(assignee_notify)](module/TestMgmt/test_plan/notify/assignee_notify)|[测试计划通知模板(分配负责人)](#test_plan_assignee)|[负责人变更附加逻辑(assignee_onchange)](module/TestMgmt/test_plan/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单归档/激活通知(archive_notify)](module/ProdMgmt/ticket/notify/archive_notify)|[工单通知模板(归档/激活工单)](#ticket_archived_or_activate)|[是否归档变更附加逻辑(is_archived_onchage)](module/ProdMgmt/ticket/logic/is_archived_onchage)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/ticket/notify/assignee_cancel_notify)|[工单通知模板(取消分配负责人)](#ticket_assignee_cancel)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单分配负责人通知(assignee_notify)](module/ProdMgmt/ticket/notify/assignee_notify)|[工单通知模板(分配负责人)](#ticket_assignee)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单负责人变更通知(assignee_onchange_notify)](module/ProdMgmt/ticket/notify/assignee_onchange_notify)|[工单通知模板(负责人变更)](#ticket_assignee_onchange)|[负责人变更附加逻辑(assignee_onchange)](module/ProdMgmt/ticket/logic/assignee_onchange)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单删除/恢复工单通知(remove_notify)](module/ProdMgmt/ticket/notify/remove_notify)|[工单通知模板(删除/恢复工单)](#ticket_remove_or_recover)|[是否删除变更附加逻辑(is_deleted_onchange)](module/ProdMgmt/ticket/logic/is_deleted_onchange)||
|[工单(TICKET)](module/ProdMgmt/ticket)|[工单状态变更通知(state_onchage_notify)](module/ProdMgmt/ticket/notify/state_onchage_notify)|[工单通知模板(状态变更)](#ticket_state_onchange)|[状态变更附加逻辑(state_onchange)](module/ProdMgmt/ticket/logic/state_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项分配负责人通知(allocation_notify)](module/ProjMgmt/work_item/notify/allocation_notify)|[工作项通知模板(分配负责人)](#work_item_assignee)|[工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项负责人变更通知(assignee_onchange_notify)](module/ProjMgmt/work_item/notify/assignee_onchange_notify)|[工作项通知模板(变更负责人)](#work_item_assignee_onchange)|[工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项取消负责人通知(cancel_assignee_notify)](module/ProjMgmt/work_item/notify/cancel_assignee_notify)|[工作项通知模板(取消分配负责人)](#work_item_assignee_cancel)|[工作项负责人变更附加逻辑(assignee_onchange)](module/ProjMgmt/work_item/logic/assignee_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项创建时分配通知(create_notify)](module/ProjMgmt/work_item/notify/create_notify)|[工作项通知模板(分配负责人)](#work_item_assignee)|[Create 执行之后](index/action_logic_index#work_item_Create)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项归档/激活通知(is_archived_notify)](module/ProjMgmt/work_item/notify/is_archived_notify)|[工作项通知模板(归档/激活工作项)](#work_item_archived_or_activate)|[工作项归档变更附加逻辑(is_archived_onchange)](module/ProjMgmt/work_item/logic/is_archived_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项删除/恢复通知(is_deleted_notify)](module/ProjMgmt/work_item/notify/is_deleted_notify)|[工作项通知模板(删除/恢复工作项)](#work_item_remove_or_recover)|[工作项删除变更附加逻辑(is_deleted_onchange)](module/ProjMgmt/work_item/logic/is_deleted_onchange)||
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|[工作项状态变换通知(state_notify)](module/ProjMgmt/work_item/notify/state_notify)|[工作项通知模板（状态变更）](#work_item_state_onchange)|[工作项状态变更附加逻辑(state_onchange)](module/ProjMgmt/work_item/logic/state_onchange)||

## 通知目标

|    中文名col200   | 代码名col200       |  目标类型col150  | 数据集合col200   |  备注col500  |
| --------|------------| -----   |  -------- | -------- |
|测试用例通知维护人|test_case_notify_maintenance_id|实体数据集|[用例通知维护人(notify_assignee)](module/TestMgmt/test_case/dataset/notify_assignee)||
|当前项目集成员|cur_projecct_set_member|实体数据集|[当前项目集下成员(cur_project_set)](module/Base/portfolio_member/dataset/cur_project_set)||
|需求通知负责人|idea_notify_assignee|实体数据集|[需求通知负责人(notify_assignee)](module/ProdMgmt/idea/dataset/notify_assignee)||
|客户通知负责人|customer_notify_assignee|实体数据集|[客户通知负责人(notify_assignee)](module/ProdMgmt/customer/dataset/notify_assignee)||
|评论通知工作项执行人|comment_work_item_executor|实体数据集|[评论通知工作项执行人(comment_work_item_executor)](module/Base/executor/dataset/comment_work_item_executor)||
|评论通知需求负责人|comment_idea_assignee|实体数据集|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/idea/dataset/comment_notify_assignee)||
|当前项目成员|cur_project_member|实体数据集|[当前项目成员(CUR_PROJECT)](module/ProjMgmt/project_member/dataset/cur_project)||
|当前产品成员|cur_product_member|实体数据集|[当前产品成员(cur_product)](module/ProdMgmt/product_member/dataset/cur_product)||
|评论通知测试用例维护人|comment_test_case_maintenance|实体数据集|[评论通知维护人(comment_notify_maintenance)](module/TestMgmt/test_case/dataset/comment_notify_maintenance)||
|评审关注人|reviewers|实体数据集|[评审关注(review_notify)](module/Base/attention/dataset/review_notify)||
|评论通知执行用例执行人|comment_run_executor|实体数据集|[评论通知执行人(comment_notify_executor)](module/TestMgmt/run/dataset/comment_notify_executor)||
|关注对象(通过主数据标识)|attention_by_ownerid|实体数据集|[通过主数据标识查询通知对象(attention_by_ownerid)](module/Base/attention/dataset/attention_by_ownerid)|关注type in (30,40)|
|当前空间成员|cur_space_member|实体数据集|[当前空间下成员(cur_space)](module/Wiki/space_member/dataset/cur_space)||
|工单通知负责人|ticket_notify_assignee|实体数据集|[工单通知负责人(notify_assignee)](module/ProdMgmt/ticket/dataset/notify_assignee)||
|评论通知工单负责人|comment_ticket_assignee|实体数据集|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/ticket/dataset/comment_notify_assignee)||
|当前测试库成员|cur_library_member|实体数据集|[当前测试库成员(cur_library_member)](module/TestMgmt/library_member/dataset/cur_library_member)||
|评论通知工作项负责人|comment_work_item_assignee|实体数据集|[评论通知负责人(comment_notify_assignee)](module/ProjMgmt/work_item/dataset/comment_notify_assignee)||
|工作项执行人（通过主数据标识）|executor_by_ownerid|实体数据集|[通过主数据标识查询通知对象(executor_by_ownerid)](module/Base/executor/dataset/executor_by_ownerid)||
|评论通知客户负责人|comment_customer_assignee|实体数据集|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/customer/dataset/comment_notify_assignee)||
|评论通知关注人|comment_attention|实体数据集|[评论提醒(comment_attention)](module/Base/attention/dataset/comment_attention)||
|工作项通知负责人|work_item_notify_assignee|实体数据集|[工作项通知负责人(notify_assignee)](module/ProjMgmt/work_item/dataset/notify_assignee)||

## 消息模板

#### 工单通知模板(分配负责人)(ticket_assignee) :id=ticket_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了工单</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了工单：${data.title}
```

微信消息内容：
```
${data.update_mantext}给你分配了工单：${data.title}
```
#### 产品通知模板(加入产品成员)(product_member_create) :id=product_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/product=${data.product_id}/product_index_view/srfnav=usrdrgroup1228809432/idea_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/idea_all_grid_view/-`

移动端超链接：`route://-/home/product=${data.product_id}/product_mob_product_tree/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.product_mob_list_view%2540plmmob.product.mob_product_list%2522%252C%2522srfnavlogicid%2522%253A%252247ffde66-27f3-ba5a-eb7b-d5c99a6c4437%253A5391c5e3-06d4-b72b-aaa9-7a83afb06b78%2522%257D`

标题：
```
加入产品成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.create_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了产品</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.product_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.product_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.product_name}">${data.product_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你加入了产品：${data.product_name}
```

微信消息内容：
```
${data.create_mantext}把你加入了产品：${data.product_name}
```
#### 产品通知模板(删除/恢复产品)(product_remove_or_recover) :id=product_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_deleted==0>route://-/index/product=${data.id}/product_index_view/srfnav=usrdrgroup1228809432/idea_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/idea_all_grid_view/-</#if>`

移动端超链接：`<#if data.is_deleted==0>
route://-/home/product=${data.id}/product_mob_product_tree/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.product_mob_list_view%2540plmmob.product.mob_product_list%2522%252C%2522srfnavlogicid%2522%253A%25222c53d0f1-145f-e89d-8c0b-da7bb6992e72%253Ad1a85b2c-d55f-6896-fcc9-b72d4bc94040%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了产品</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了产品：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了产品：${data.name}
```
#### 提醒关注客户通知模板(notice_attention_customer) :id=notice_attention_customer


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://${data.owner_type?lower_case}_main_view?
srfnavctx={"customer":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://customer_mob_edit_view?
srfnavctx={"customer":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
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

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 需求通知模板(取消分配负责人)(idea_assignee_cancel) :id=idea_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了需求</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了需求：${data.title}
```

微信消息内容：
```
${data.update_mantext}取消分配了需求：${data.title}
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
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了测试库</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.library_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.library_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.library_name}">${data.library_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}把你移除了测试库：${data.library_name}
```

微信消息内容：
```
${data.update_mantext}把你移除了测试库：${data.library_name}
```
#### 需求通知模板(删除/恢复需求)(idea_remove_or_recover) :id=idea_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了需求</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了需求：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了需求：${data.title}
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
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了产品</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.product_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.product_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.product_name}">${data.product_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}把你移除了产品：${data.product_name}
```

微信消息内容：
```
${data.update_mantext}把你移除了产品：${data.product_name}
```
#### 评论工作项通知模板(comment_work_item) :id=comment_work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.parent("principal_id").id}","project":"${data.parent("principal_id").project_id}", "srfdatatype" : "${data.parent("principal_id").work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.parent("principal_id").work_item_type_id}
</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.parent("principal_id").id}","project":"${data.parent("principal_id").project_id}", "srfdatatype" : "${data.parent("principal_id").work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.parent("principal_id").work_item_type_id}
</#if>`

标题：
```
评论工作项通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 工单通知模板(负责人变更)(ticket_assignee_onchange) :id=ticket_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了工单的负责人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了工单：${data.title}的负责人
```

微信消息内容：
```
${data.update_mantext}变更了工单：${data.title}的负责人
```
#### 评论产品需求通知模板(comment_idea) :id=comment_idea


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
view://${data.principal_type?lower_case}_main_view?
srfnavctx={"idea":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
view://idea_mob_edit_view?
srfnavctx={"idea":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

标题：
```
评论产品需求通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 项目通知模板(加入项目成员)(project_member_create) :id=project_member_create
项目成员实体Create行为附加

模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.project_type == 'scrum'>route://-/index/project=${data.project_id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.project_type == 'kanban'>route://-/index/project=${data.project_id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.project_type == 'hybrid'>route://-/index/project=${data.project_id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.project_type == 'waterfall'>route://-/index/project=${data.project_id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if>`

移动端超链接：`route://-/home/project=${data.project_id}/project_mob_${data.project_type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D`

标题：
```
加入项目成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.create_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了项目</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.project_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.project_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.project_name}">${data.project_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你加入了项目：${data.project_name}
```

微信消息内容：
```
${data.create_mantext}把你加入了项目：${data.project_name}
```
#### 测试计划通知模板(取消分配负责人)(test_plan_assignee_cancel) :id=test_plan_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/library=${data.library_id}/library_index_view/srfnav=usrdrgroup1227882118/test_plan_main_view/srfnavctx={"test_plan":"${data.id}"};srfnav=run/run_tree_exp_view/srfnav=root:node/run_all_grid_view/-`

移动端超链接：`view://library_test_mob_tab_exp_view?srfnavctx={"test_plan":"${data.id}","library":"${data.library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了测试计划</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了测试计划：${data.name}
```

微信消息内容：
```
${data.update_mantext}取消分配了测试计划：${data.name}
```
#### 工单通知模板(删除/恢复工单)(ticket_remove_or_recover) :id=ticket_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了工单</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测工单：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测工单：${data.title}
```
#### 产品通知模板(归档/激活产品)(product_archived_or_activate) :id=product_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_archived==0>route://-/index/product=${data.id}/product_index_view/srfnav=usrdrgroup1228809432/idea_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/idea_all_grid_view/-</#if>`

移动端超链接：`<#if data.is_archived==0>
route://-/home/product=${data.id}/product_mob_product_tree/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.product_mob_list_view%2540plmmob.product.mob_product_list%2522%252C%2522srfnavlogicid%2522%253A%252247ffde66-27f3-ba5a-eb7b-d5c99a6c4437%253A5391c5e3-06d4-b72b-aaa9-7a83afb06b78%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了产品</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了产品：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了产品：${data.name}
```
#### 评审完成通知模板(项目工作项)(work_item_review_complete) :id=work_item_review_complete


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_work_item_main_view?srfnavctx={"review":"${data.id}","product":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">完成了工作项评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 知识库通知模板(加入空间成员)(space_member_create) :id=space_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/space=${data.space_id}/space_index_view/srfnav=drgroup/article_page_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node@${data.space_id}/article_page_show_view/srfnavctx={"article_page":"${data.space_id}"}`

移动端超链接：`route://-/home/space=${data.space_id}/article_page_mob_list_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.space_mob_list_view%2540plmmob.space.mob_list_view_mob_list%2522%252C%2522srfnavlogicid%2522%253A%252292b6112f-e53d-26c2-af0b-fc617ca4fe82%253A8eb5d724-4d71-6e1c-8b2f-63eb866708e9%2522%257D`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.create_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了空间</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.space_name}">${data.space_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.space_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你加入了空间：${data.space_name}
```

微信消息内容：
```
${data.create_mantext}把你加入了空间：${data.space_name}
```
#### 测试用例通知模板(维护人变更)(test_case_maintainer_onchange) :id=test_case_maintainer_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://test_case_main_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

移动端超链接：`view://test_case_mob_edit_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了测试用例的维护人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
			<#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.test_library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了测试用例：${data.title}的维护人
```

微信消息内容：
```
${data.update_mantext}变更了测试用例：${data.title}的维护人
```
#### 工作项AIChat历史(work_item_ai_chat_history) :id=work_item_ai_chat_history


模板类型：`静态`

模板引擎：`Groovy`

内容类型：`纯文本`

内容：
```
<user>
<![CDATA[
你是我的AI助手，为我提供相关工作项的建议
]]>
</user>
<assistant>
<![CDATA[
明白，我是你的工作项AI助手
]]>
</assistant>
<user>
<![CDATA[
工作项[${data.name}]，来自项目[${data.project_name}]。工作内容如下：
${data.description}
]]>
</user>
<assistant>
<![CDATA[
好的，我已对工作项[${data.name}]有了初步的了解
]]>
</assistant>
<%
def list = data.children("COMMENT");
if(list) {%>
<user>
<![CDATA[
对于该工作项，存在以下评论，我将逐一向你介绍。
]]>
</user>
<assistant>
<![CDATA[
明白，我会参考相关的评论意见
]]>
</assistant>
<% list.each {%>
<user>
<![CDATA[
用户[${it.codelisttext("update_man")}]于[${it.get("update_time", "未知时间")}]发表下述评论：
${it.get("content", "")}
]]>
</user>
<assistant>
<![CDATA[
明白
]]>
</assistant>
<%}
}
%>
```
#### 项目集通知模板(移除成员)(project_set_member_remove) :id=project_set_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了项目集</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.portfolio_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.portfolio_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.portfolio_name}">${data.portfolio_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.portfolio_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你移除了项目集：${data.portfolio_name}
```

微信消息内容：
```
${data.create_mantext}把你移除了项目集：${data.portfolio_name}
```
#### 评论工单通知模板(comment_ticket) :id=comment_ticket


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
view://${data.principal_type?lower_case}_main_view?
srfnavctx={"ticket":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
view://ticket_mob_edit_view?
srfnavctx={"ticket":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "library": null, "test_case": null, "run": null }</#if>`

标题：
```
评论工单通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 客户通知模板(取消分配负责人)(customer_assignee_cancel) :id=customer_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customer_main_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://customer_mob_edit_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了客户</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了客户：${data.name}
```

微信消息内容：
```
${data.update_mantext}取消分配了客户：${data.name}
```
#### 项目通知模板(删除/恢复项目)(project_remove_or_recover) :id=project_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_deleted==0><#if data.type == 'scrum'>route://-/index/project=${data.id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'hybrid'>route://-/index/project=${data.id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'kanban'>route://-/index/project=${data.id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'waterfall'>route://-/index/project=${data.id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if></#if>`

移动端超链接：`<#if data.is_deleted==0>
route://-/home/project=${data.id}/project_mob_${data.type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了项目</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了项目：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了项目：${data.name}
```
#### 评审完成通知模板(测试用例)(tc_review_complete_template) :id=tc_review_complete_template


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_main_view?srfnavctx={"review":"${data.id}","library":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">完成了用例评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 工作项通知模板(归档/激活工作项)(work_item_archived_or_activate) :id=work_item_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了${data.work_item_type_name}</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了${data.work_item_type_name}：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了${data.work_item_type_name}：${data.title}
```
#### 需求通知模板(负责人变更通知)(idea_assignee_onchange) :id=idea_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了需求的负责人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了需求：${data.title}的负责人
```

微信消息内容：
```
${data.update_mantext}变更了需求：${data.title}的负责人
```
#### 客户通知模板(分配负责人)(customer_assignee) :id=customer_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customer_main_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://customer_mob_edit_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了客户</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了客户：${data.name}
```

微信消息内容：
```
${data.update_mantext}给你分配了客户：${data.name}
```
#### 提醒关注测试用例通知模板(notice_attention_test_case) :id=notice_attention_test_case


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://${data.owner_type?lower_case}_main_view?
srfnavctx={"test_case":"${data.parent("owner_id").id}","library":"${data.parent("owner_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://test_case_mob_edit_view?
srfnavctx={"test_case":"${data.parent("owner_id").id}","library":"${data.parent("owner_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null, "run": null }</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
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

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 测试用例通知模板(删除/恢复测试用例)(test_case_remove_or_recover) :id=test_case_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://test_case_main_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

移动端超链接：`view://test_case_mob_edit_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了测试用例</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
			<#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.test_library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试用例：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试用例：${data.title}
```
#### 评论@通知模板(comment_at) :id=comment_at


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
<#assign p = data.parent("principal_id")>
<#if data.principal_type=='PAGE'>view://article_page_model_show_view?srfnavctx={"article_page":"${p.id}","space":"${p.space_id}"}
<#elseif data.principal_type=='WORK_ITEM'>view://work_item_dyna_main_view?srfnavctx={"work_item":"${p.id}","project":"${p.project_id}","srfdatatype":"${p.work_item_type_id}","space":null, "article_page": null}&srfdatatype=${p.work_item_type_id}
<#else>view://${data.principal_type?lower_case}_main_view?srfnavctx={"${data.principal_type?lower_case}":"${data.principal_id}"<#if p.parent("product_id")??>,"product":"${p.parent('product_id').id}"<#elseif p.parent("test_library_id")??>,"library":"${p.parent('test_library_id').id}"<#elseif p.parent("case_id")??>,"test_case":"${p.parent('case_id').id}","library":"${p.parent('case_id').test_library_id}"</#if>,"space":null, "article_page": null}</#if></#if>`

移动端超链接：`<#if data.parent("principal_id")??><#assign p = data.parent("principal_id")><#if data.principal_type=='PAGE'>view://article_page_mob_edit_view?srfnavctx={"article_page":"${p.id}","space":"${p.space_id}"}<#elseif data.principal_type=='WORK_ITEM'>view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${p.id}","project":"${p.project_id}","srfdatatype":"${p.work_item_type_id}"}&srfdatatype=${p.work_item_type_id}<#else>view://${data.principal_type?lower_case}_mob_edit_view?srfnavctx={"${data.principal_type?lower_case}":"${data.principal_id}"<#if p.parent("product_id")??>,"product":"${p.parent('product_id').id}"<#elseif p.parent("test_library_id")??>,"library":"${p.parent('test_library_id').id}"<#elseif p.parent("case_id")??>,"test_case":"${p.parent('case_id').id}","library":"${p.parent('case_id').test_library_id}"</#if>,"space":null, "article_page": null}</#if></#if>`

标题：
```
评论@通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">在评论中提及了你</span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}在<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例<#elseif data.principal_type == 'PAGE'>页面</#if>：
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>的评论中提及了你
```

微信消息内容：
```
${data.update_mantext}在<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例<#elseif data.principal_type == 'PAGE'>页面</#if>：
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>的评论中提及了你
```
#### 工单通知模板(状态变更)(ticket_state_onchange) :id=ticket_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

标题：
```
工单状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">更改了工单状态</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		<div class="notice-card__object" style="font-size: 12px;margin-bottom:5px;">
            <#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
                <#assign laststatecodeitem = last.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${laststatecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    无
                </span>
            </#if>
            <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
            <#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
                <#assign statecodeitem = data.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${statecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${data.statetext}
                </span>
            </#if>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}更改了工单 ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```

微信消息内容：
```
${data.update_mantext}更改了工单 ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```
#### 分配执行工作项通知模板(notice_executor_work_item) :id=notice_executor_work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://work_item_dyna_main_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://work_item_mob_common_edit_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}给你分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 页面评审通知模板(page_review_inform_template) :id=page_review_inform_template


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_page_main_view?srfnavctx={"review":"${data.id}","space":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了页面评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 工作项通知模板(运行时)(work_item) :id=work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${eventdata.id}","project":"${eventdata.project_id}", "srfdatatype" : "${eventdata.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${eventdata.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${eventdata.id}","project":"${eventdata.project_id}", "srfdatatype" : "${eventdata.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${eventdata.work_item_type_id}`

标题：
```
工作项通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${sys.codelist("SysOperator").text(eventdata.update_man)!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sys.codelist("SysOperator").text(eventdata.update_man)}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了工作项${eventdata.title}</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if eventdata.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${eventdata.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${eventdata.title}">${eventdata.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${eventdata.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${eventdata.project_name}</span>
        </div>
    </div>
</div>
```
#### 工作项通知模板(取消分配负责人)(work_item_assignee_cancel) :id=work_item_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了${data.work_item_type_name}</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了${data.work_item_type_name}：${data.title}
```

微信消息内容：
```
${data.update_mantext}取消分配了${data.work_item_type_name}：${data.title}
```
#### 需求通知模板(分配负责人)(idea_assignee) :id=idea_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了需求</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了需求：${data.title}
```

微信消息内容：
```
${data.update_mantext}给你分配了需求：${data.title}
```
#### 工作项通知模板（创建工作项）(work_item_create) :id=work_item_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

标题：
```
工作项创建通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
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
#### 空间通知模板(归档/激活空间)(space_archived_or_activate) :id=space_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_archived==0>route://-/index/space=${data.id}/space_index_view/srfnav=drgroup/article_page_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node@${data.id}/article_page_show_view/srfnavctx={"article_page":"${data.id}"}</#if>`

移动端超链接：`<#if data.is_archived==0>
route://-/home/space=${data.id}/article_page_mob_list_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.space_mob_list_view%2540plmmob.space.mob_list_view_mob_list%2522%252C%2522srfnavlogicid%2522%253A%252292b6112f-e53d-26c2-af0b-fc617ca4fe82%253A8eb5d724-4d71-6e1c-8b2f-63eb866708e9%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了空间</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了空间：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了空间：${data.name}
```
#### 取消分配执行工作项通知模板(cancel_executor_work_item) :id=cancel_executor_work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://work_item_dyna_main_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://work_item_mob_common_edit_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}取消分配执行<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 项目通知模板(分配负责人)(project_assignee) :id=project_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.type == 'scrum'>route://-/index/project=${data.id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'kanban'>route://-/index/project=${data.id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'hybrid'>route://-/index/project=${data.id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'waterfall'>route://-/index/project=${data.id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if>`

移动端超链接：`route://-/home/project=${data.id}/project_mob_${data.type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了项目</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了项目：${data.name}
```

微信消息内容：
```
${data.update_mantext}给你分配了项目：${data.name}
```
#### 项目事件通知(project_event_hook) :id=project_event_hook


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
内容
```
#### 项目集删除/恢复通知模板(project_set_remove_recover) :id=project_set_remove_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_deleted==0>
route://-/index/portfolio=${data.id}/portfolio_project_index_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmweb.portfolio_project_grid_view%2540plmweb.portfolio.project_grid%2522%257D;srfnav=usrdrgroup0301548518/work_item_under_work_grid_view/portfolio_id=${data.id};srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了项目集</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了项目集：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了项目集：${data.name}
```
#### 评论页面通知模板(comment_page) :id=comment_page


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>view://article_page_model_show_view_noupdown?srfnavctx={"article_page":"${data.parent("principal_id").id}","space":"${data.parent("principal_id").space_id}"}</#if>`

移动端超链接：`<#if data.parent("principal_id")??>view://article_page_mob_edit_view?srfnavctx={"article_page":"${data.parent("principal_id").id}","space":"${data.parent("principal_id").space_id}"}</#if>`

标题：
```
评论页面通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了页面</span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了页面：${data.parent("principal_id").name}
```

微信消息内容：
```
${data.update_mantext}评论了页面：${data.parent("principal_id").name}
```
#### 工单通知模板(取消分配负责人)(ticket_assignee_cancel) :id=ticket_assignee_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了工单</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了工单：${data.title}
```

微信消息内容：
```
${data.update_mantext}取消分配了工单：${data.title}
```
#### 需求通知模板(归档/激活需求)(idea_archived_or_activate) :id=idea_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了需求</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了需求：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了需求：${data.title}
```
#### 提醒关注页面通知模板(notice_attention_page) :id=notice_attention_page


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>view://article_page_model_show_view?srfnavctx={"article_page":"${data.parent("owner_id").id}","space":"${data.parent("owner_id").space_id}"}</#if>`

移动端超链接：`<#if data.parent("owner_id")??>view://article_page_mob_edit_view?srfnavctx={"article_page":"${data.parent("owner_id").id}","space":"${data.parent("owner_id").space_id}"}</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注页面</span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
</div>
<#if parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识管理 · ${space.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

钉钉内容：
```
<#if data.parent("owner_id")??>${data.update_mantext}提醒你关注页面：${data.parent("owner_id").name}</#if>
```

微信消息内容：
```
<#if data.parent("owner_id")??>${data.update_mantext}提醒你关注页面：${data.parent("owner_id").name}</#if>
```
#### 项目集通知模板(加入成员)(project_set_member_create) :id=project_set_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/portfolio=${data.portfolio_id}/portfolio_project_index_view/srfnav=drgroup/work_tree_grid_ex_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.create_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了项目集</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.portfolio_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.portfolio_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.portfolio_name}">${data.portfolio_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.portfolio_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你加入了项目集：${data.portfolio_name}
```

微信消息内容：
```
${data.create_mantext}把你加入了项目集：${data.portfolio_name}
```
#### 工作项通知模板(分配负责人)(work_item_assignee) :id=work_item_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了${data.work_item_type_name}</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了${data.work_item_type_name}：${data.title}
```

微信消息内容：
```
${data.update_mantext}给你分配了${data.work_item_type_name}：${data.title}
```
#### 提醒关注产品需求通知模板(notice_attention_idea) :id=notice_attention_idea


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://${data.owner_type?lower_case}_main_view?
srfnavctx={"idea":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://idea_mob_edit_view?
srfnavctx={"idea":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
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

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 提醒关注工作项通知模板(notice_attention_work_item) :id=notice_attention_work_item


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://work_item_dyna_main_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://work_item_mob_common_edit_view?
srfnavctx={"work_item":"${data.parent("owner_id").id}","project":"${data.parent("owner_id").project_id}","srfdatatype" : "${data.parent("owner_id").work_item_type_id}",
"space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null }&srfdatatype=${data.parent("owner_id").work_item_type_id}</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

即时消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

短信内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

钉钉内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 工作项通知模板（状态变更）(work_item_state_onchange) :id=work_item_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

标题：
```
工作项状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">更改了${data.work_item_type_name}状态</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		<div class="notice-card__object" style="font-size: 12px; margin-bottom: 5px;">
            <#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
                <#assign laststatecodeitem = last.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${laststatecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    无
                </span>
            </#if>
            <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
            <#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
                <#assign statecodeitem = data.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${statecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${data.statetext}
                </span>
            </#if>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

即时消息内容：
```
${data.update_mantext}更改了${data.work_item_type_name} ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```

钉钉内容：
```
${data.update_mantext}更改了${data.work_item_type_name} ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```

微信消息内容：
```
${data.update_mantext}更改了${data.work_item_type_name} ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```
#### 测试用例通知模板(分配维护人)(test_case_maintainer) :id=test_case_maintainer


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://test_case_main_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

移动端超链接：`view://test_case_mob_edit_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了测试用例</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
			<#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.test_library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了测试用例：${data.title}
```

微信消息内容：
```
${data.update_mantext}给你分配了测试用例：${data.title}
```
#### 工作项评审通知模板(wi_review_inform_template) :id=wi_review_inform_template


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_work_item_main_view?srfnavctx={"review":"${data.id}","product":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了工作项评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 空间通知模板(删除/恢复空间)(space_remove_or_recover) :id=space_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_deleted==0>route://-/index/space=${data.id}/space_index_view/srfnav=drgroup/article_page_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node@${data.id}/article_page_show_view/srfnavctx={"article_page":"${data.id}"}</#if>`

移动端超链接：`<#if data.is_deleted==0>
route://-/home/space=${data.id}/article_page_mob_list_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.space_mob_list_view%2540plmmob.space.mob_list_view_mob_list%2522%252C%2522srfnavlogicid%2522%253A%252292b6112f-e53d-26c2-af0b-fc617ca4fe82%253A8eb5d724-4d71-6e1c-8b2f-63eb866708e9%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了空间</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了空间：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了空间：${data.name}
```
#### 评论客户通知模板(comment_customer) :id=comment_customer


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
view://${data.principal_type?lower_case}_main_view?
srfnavctx={"customer":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
view://customer_mob_edit_view?
srfnavctx={"customer":"${data.parent("principal_id").id}","product":"${data.parent("principal_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "ticket": null, "library": null, "test_case": null, "run": null }</#if>`

标题：
```
评论客户通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 测试库通知模板(加入测试库成员)(library_member_create) :id=library_member_create


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/library=${data.library_id}/library_index_view/srfnav=usrdrgroup1227882118/test_plan_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/test_plan_all_grid_view/-`

移动端超链接：`route://-/home/library=${data.library_id}/library_test_mob_tab_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.library_test_mob_list_vew%2540plmmob.library.test_mob_list_vew_mob_list%2522%252C%2522srfnavlogicid%2522%253A%2522dd98444f-4da4-d20c-67cb-d2107de2d96d%253Afa4d4f60-ba1d-6d62-53c2-e502f4b7274d%2522%257D;srfnav=plan/test_plan_plan_mob_md_view/-`

标题：
```
加入测试库成员
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.create_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.create_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你加入了测试库</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.library_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.library_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.library_name}">${data.library_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.create_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.create_mantext}把你加入了测试库：${data.library_name}
```

微信消息内容：
```
${data.create_mantext}把你加入了测试库：${data.library_name}
```
#### 评审完成通知模板(空间页面)(page_review_complete) :id=page_review_complete


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_page_main_view?srfnavctx={"review":"${data.id}","product":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">完成了页面评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 工单通知模板(归档/激活工单)(ticket_archived_or_activate) :id=ticket_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://ticket_main_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://ticket_mob_edit_view?srfnavctx={"ticket":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "library": null, "test_case": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了工单</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了工单：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了工单：${data.title}
```
#### 提醒关注执行用例通知模板(notice_attention_run) :id=notice_attention_run


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
view://${data.owner_type?lower_case}_main_view?
srfnavctx={"run":"${parent.id}","test_case": "${parent.parent("case_id").id}", "library":"${parent.parent("case_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null }</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
view://run_mob_edit_view?
srfnavctx={"run":"${parent.id}","test_case": "${parent.parent("case_id").id}", "library":"${parent.parent("case_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null }</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
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

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 客户通知模板(变更负责人)(customer_assignee_onchange) :id=customer_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://customer_main_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://customer_mob_edit_view?srfnavctx={"customer":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "ticket": null, "idea": null, "library": null, "test_case": null, "run": null}`

标题：
```
客户负责人变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了客户的负责人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了客户：${data.name}的负责人
```

微信消息内容：
```
${data.update_mantext}变更了客户：${data.name}的负责人
```
#### 项目通知模板(变更负责人)(project_change_assignee) :id=project_change_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.type == 'scrum'>route://-/index/project=${data.id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'kanban'>route://-/index/project=${data.id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'hybrid'>route://-/index/project=${data.id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'waterfall'>route://-/index/project=${data.id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if>`

移动端超链接：`route://-/home/project=${data.id}/project_mob_${data.type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了项目的负责人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了项目${data.name}的负责人
```

微信消息内容：
```
${data.update_mantext}变更了项目${data.name}的负责人
```
#### 评审完成通知模板(产品需求)(idea_review_complete) :id=idea_review_complete


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_idea_main_view?srfnavctx={"review":"${data.id}","product":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">完成了需求评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 评论执行用例通知模板(comment_run) :id=comment_run


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
<#assign parent= data.parent("principal_id")>
view://${data.principal_type?lower_case}_main_view?
srfnavctx={"run":"${parent.id}","test_case": "${parent.parent("case_id").id}", "library":"${parent.parent("case_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null }</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
<#assign parent= data.parent("principal_id")>
view://run_mob_edit_view?
srfnavctx={"run":"${parent.id}","test_case": "${parent.parent("case_id").id}", "library":"${parent.parent("case_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null }</#if>`

标题：
```
评论执行用例通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+ match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
#### 客户通知模板(删除客户)(customer_remove) :id=customer_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">删除了客户</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
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
#### 工作项通知模板(删除/恢复工作项)(work_item_remove_or_recover) :id=work_item_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了${data.work_item_type_name}</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了${data.work_item_type_name}：${data.title}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了${data.work_item_type_name}：${data.title}
```
#### 项目通知模板(归档/激活项目)(project_archived_or_activate) :id=project_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_archived==0><#if data.type == 'scrum'>route://-/index/project=${data.id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'kanban'>route://-/index/project=${data.id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'hybrid'>route://-/index/project=${data.id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'waterfall'>route://-/index/project=${data.id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if></#if>`

移动端超链接：`<#if data.is_archived==0>
route://-/home/project=${data.id}/project_mob_${data.type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D
</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了项目</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了项目：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了项目：${data.name}
```
#### 测试计划通知模板(分配负责人)(test_plan_assignee) :id=test_plan_assignee


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`route://-/index/library=${data.library_id}/library_index_view/srfnav=usrdrgroup1227882118/test_plan_main_view/srfnavctx={"test_plan":"${data.id}"};srfnav=run/run_tree_exp_view/srfnav=root:node/run_all_grid_view/-`

移动端超链接：`view://library_test_mob_tab_exp_view?srfnavctx={"test_plan":"${data.id}","library":"${data.library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了测试计划</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了测试计划：${data.name}
```

微信消息内容：
```
${data.update_mantext}给你分配了测试计划：${data.name}
```
#### 测试用例通知模板(取消分配维护人)(test_case_maintainer_cancel) :id=test_case_maintainer_cancel


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://test_case_main_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

移动端超链接：`view://test_case_mob_edit_view?srfnavctx={"test_case":"${data.id}","library":"${data.test_library_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "product": null, "ticket": null, "run": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">取消分配了测试用例</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
			<#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.test_library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}取消分配了测试用例：${data.title}
```

微信消息内容：
```
${data.update_mantext}取消分配了测试用例：${data.title}
```
#### 知识库通知模板(移除空间成员)(space_member_remove) :id=space_member_remove


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了空间</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <span class="notice-card__object-name" title="${data.space_name}">${data.space_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 知识管理 · ${data.space_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}把你移除了空间：${data.space_name}
```

微信消息内容：
```
${data.update_mantext}把你移除了空间：${data.space_name}
```
#### 测试库通知模板(删除/恢复测试库)(library_remove_or_recover) :id=library_remove_or_recover


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_deleted==0>route://-/index/library=${data.id}/library_index_view/srfnav=usrdrgroup1227882118/test_plan_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/test_plan_all_grid_view/-</#if>`

移动端超链接：`<#if data.is_deleted==0>
route://-/home/library=${data.id}/library_test_mob_tab_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.library_test_mob_list_vew%2540plmmob.library.test_mob_list_vew_mob_list%2522%252C%2522srfnavlogicid%2522%253A%2522dd98444f-4da4-d20c-67cb-d2107de2d96d%253Afa4d4f60-ba1d-6d62-53c2-e502f4b7274d%2522%257D;srfnav=plan/test_plan_plan_mob_md_view/-
</#if>`

标题：
```
删除/恢复测试库
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_deleted==1>删除<#else>恢复</#if>了测试库</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试库：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_deleted==1>删除<#else>恢复</#if>了测试库：${data.name}
```
#### 需求通知模板(状态变更)(idea_state_onchange) :id=idea_state_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://idea_main_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

移动端超链接：`view://idea_mob_edit_view?srfnavctx={"idea":"${data.id}","product":"${data.product_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}`

标题：
```
需求状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">更改了需求状态</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
		<div class="notice-card__object" style="font-size: 12px;margin-bottom:5px;">
            <#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
                <#assign laststatecodeitem = last.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${laststatecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    无
                </span>
            </#if>
            <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
            <#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
                <#assign statecodeitem = data.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${statecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${data.statetext}
                </span>
            </#if>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.product_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}更改了需求 ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```

微信消息内容：
```
${data.update_mantext}更改了需求 ${data.title}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```
#### 测试用例评审通知模板(tc_review_inform_template) :id=tc_review_inform_template


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_main_view?srfnavctx={"review":"${data.id}","library":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了用例评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 执行用例通知模板(设置执行人)(run_executor) :id=run_executor


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://run_main_view?srfnavctx={"run":"${data.id}","library":"${data.library_id}", "test_case":"${data.case_id}", "test_plan":"${data.plan_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "ticket": null, "product": null}`

移动端超链接：`view://run_mob_edit_view?srfnavctx={"run":"${data.id}","library":"${data.library_id}", "test_case":"${data.case_id}", "test_plan":"${data.plan_id}", "space": null, "article_page": null, "project": null,"work_item": null, "customer": null, "idea": null, "ticket": null, "product": null}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了执行用例</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
			<#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.library_name}">${data.library_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.library_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}给你分配了执行用例：${data.title}
```

微信消息内容：
```
${data.update_mantext}给你分配了执行用例：${data.title}
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
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">把你移除了项目</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.project_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.project_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.project_name}">${data.project_name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}把你移除了项目：${data.project_name}
```

微信消息内容：
```
${data.update_mantext}把你移除了项目：${data.project_name}
```
#### 评审通知模板(review_inform_template) :id=review_inform_template


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://review_idea_main_view?srfnavctx={"review":"${data.id}","product":"${data.principal_id}"}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.reviewertext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.reviewertext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">给你分配了需求评审</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 产品管理 · ${data.principal_name}</span>
        </div>
    </div>
</div>
```
#### 项目通知模板(项目状态变更)(project_state_change) :id=project_state_change


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.type == 'scrum'>route://-/index/project=${data.id}/project_scrum_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'kanban'>route://-/index/project=${data.id}/project_kanban_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'hybrid'>route://-/index/project=${data.id}/project_hybrid_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D<#elseif data.type == 'waterfall'>route://-/index/project=${data.id}/project_waterfall_index_view/srfnav=usrdrgroup1225572368/project_over_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D</#if>`

移动端超链接：`route://-/home/project=${data.id}/project_mob_${data.type}_tree_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.project_mob_list_view%2540plmmob.project.mob_main_list%2522%252C%2522srfnavlogicid%2522%253A%2522ba246ac0-32a9-f2eb-2ec5-2593e31969b5%253Aa5ca9459-7782-b84a-b807-17c58b11a452%2522%257D`

标题：
```
项目状态变更
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">更改了项目状态</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
		<div class="notice-card__object" style="font-size: 12px;margin-bottom:5px;">
            <#if last.codeitem("STATE")?? && last.codeitem("STATE").getColor()??>
                <#assign laststatecodeitem = last.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${laststatecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${laststatecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: green; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    无
                </span>
            </#if>
            <span class="notice-card__object-last" style="color: #999; display: inline-block; padding: 0 5px;"> → </span>
            <#if data.codeitem("STATE")?? && data.codeitem("STATE").getColor()??>
                <#assign statecodeitem = data.codeitem("STATE")>
                <span class="notice-card__object-last" style="background-color: ${statecodeitem.getColor()}; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${statecodeitem.text}
                </span>
            <#else>
                <span class="notice-card__object-last" style="background-color: #fac858; color: #FFF; display: inline-block; padding: 3px 8px; border-radius: 15px; min-width: 60px; text-align: center;">
                    ${data.statetext}
                </span>
            </#if>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}更改了项目 ${data.name}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```

微信消息内容：
```
${data.update_mantext}更改了项目 ${data.name}状态：<#if last.codeitem("STATE")??>${last.codeitem("STATE").text}<#else>无</#if>  → <#if data.codeitem("STATE")??>${data.codeitem("STATE").text}<#else>无</#if>
```
#### 测试库通知模板(归档/激活测试库)(library_archived_or_activate) :id=library_archived_or_activate


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.is_archived==0>route://-/index/library=${data.id}/library_index_view/srfnav=usrdrgroup1227882118/test_plan_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root:node/test_plan_all_grid_view/-</#if>`

移动端超链接：`<#if data.is_archived==0>
route://-/home/library=${data.id}/library_test_mob_tab_exp_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmmob.library_test_mob_list_vew%2540plmmob.library.test_mob_list_vew_mob_list%2522%252C%2522srfnavlogicid%2522%253A%2522dd98444f-4da4-d20c-67cb-d2107de2d96d%253Afa4d4f60-ba1d-6d62-53c2-e502f4b7274d%2522%257D;srfnav=plan/test_plan_plan_mob_md_view/-
</#if>`

标题：
```
归档/激活测试库
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><#if data.is_archived==1>归档<#else>激活</#if>了测试库</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.name}">${data.name}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 测试管理 · ${data.name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了测试库：${data.name}
```

微信消息内容：
```
${data.update_mantext}<#if data.is_archived==1>归档<#else>激活</#if>了测试库：${data.name}
```
#### 提醒关注工单通知模板(notice_attention_ticket) :id=notice_attention_ticket


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("owner_id")??>
view://${data.owner_type?lower_case}_main_view?
srfnavctx={"ticket":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "library": null, "test_case": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("owner_id")??>
view://ticket_mob_edit_view?
srfnavctx={"ticket":"${data.parent("owner_id").id}","product":"${data.parent("owner_id").product_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "library": null, "test_case": null, "run": null }</#if>`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
			    <div class="notice-card__avatar" style="flex-shrink: 0;">
			        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
			    </div>
			    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
			        <div class="notice-card__event">
			            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
	<span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
<span class="notice-card__event-name" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type== 'TICKET'>工单<#elseif data.owner_type== 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例<#elseif data.owner_type == 'PAGE'>页面</#if></span></div>
        </div>
<#if data.parent("owner_id")??>
<#assign parent= data.parent("owner_id")>
        <div class="notice-card-object" style="display: inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;">
<span class="notice-card__object-id" style="color: #999; font-size: 14px;"><#if parent.show_identifier??>${parent.show_identifier}</#if></span>
<#if data.owner_type == 'CUSTOMER' || data.owner_type == 'PAGE'>
<span class="object-name" title="${parent.name}"> ${parent.name}</span>
<#else>
<span class="object-name" title="${parent.title}"> ${parent.title}</span></#if>

        </div>
    <#if parent.parent("project_id")??>
    <#assign project= parent.parent("project_id")>
        <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
    <#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
    <#elseif parent.parent("plan_id")??>
        <#assign plan = parent.parent("plan_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
    <#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
  <div class="notice-card-pilot" style="font-size: 12px;color: #999;text-transform: lowercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
    </#if>
    </div>
    </#if>
</div>
```

即时消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

钉钉内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}提醒你关注<#if data.owner_type == 'WORK_ITEM'>${data.parent("owner_id").work_item_type_name}<#elseif data.owner_type == 'IDEA'>需求<#elseif data.owner_type == 'TICKET'>工单<#elseif data.owner_type == 'TEST_CASE'>测试用例<#elseif data.owner_type == 'CUSTOMER'>客户<#elseif data.owner_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("owner_id").name}<#else>${data.parent("owner_id").title}</#if>
```
#### 工作项通知模板(变更负责人)(work_item_assignee_onchange) :id=work_item_assignee_onchange


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`view://work_item_dyna_main_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

移动端超链接：`view://work_item_mob_common_edit_view?srfnavctx={"work_item":"${data.id}","project":"${data.project_id}", "srfdatatype" : "${data.work_item_type_id}",  "space": null, "article_page": null, "product": null,"idea": null, "customer": null, "ticket": null, "library": null, "test_case": null, "run": null}&srfdatatype=${data.work_item_type_id}`

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">变更了${data.work_item_type_name}的负责人</span>
            </div>
        </div>
        <div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
            <#if data.show_identifier??>
                <span class="notice-card__object-id" style="color: #999; font-size:14px;">${data.show_identifier}</span>
            </#if>
            <span class="notice-card__object-name" title="${data.title}">${data.title}</span>
        </div>
        <div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span class="notice-pilot-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span>
            <span class="notice-pilot-info"> · 项目管理 · ${data.project_name}</span>
        </div>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}变更了${data.work_item_type_name}：${data.title}的负责人
```

微信消息内容：
```
${data.update_mantext}变更了${data.work_item_type_name}：${data.title}的负责人
```
#### 评论测试用例通知模板(comment_test_case) :id=comment_test_case


模板类型：`静态`

模板引擎：`FreeMarker`

内容类型：`HTML网页`

超链接：`<#if data.parent("principal_id")??>
view://${data.principal_type?lower_case}_main_view?
srfnavctx={"test_case":"${data.parent("principal_id").id}","library":"${data.parent("principal_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null, "run": null }</#if>`

移动端超链接：`<#if data.parent("principal_id")??>
view://test_case_mob_edit_view?
srfnavctx={"test_case":"${data.parent("principal_id").id}","library":"${data.parent("principal_id").test_library_id}",
"space": null, "article_page": null, "project": null,"work_item": null, "idea": null, "customer": null, "product": null, "ticket": null, "run": null }</#if>`

标题：
```
评论测试用例通知
```

内容：
```
<div class="notice-card" style="display: flex; align-items: flex-start;">
    <div class="notice-card__avatar" style="flex-shrink: 0;">
        <span class="notice-card__avatar-icon" style="background-color: skyblue; border-radius: 50%; margin-right: 10px; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; font-size: 10px;">${data.update_mantext!?right_pad(2)?substring(0,2)?trim}</span>
    </div>
    <div class="notice-card__content" style="flex-grow: 1;width: calc(100% - 46px);">
        <div class="notice-card__event">
            <div class="notice-card__event-title" style="font-size: 14px; color: #000;">
                <span class="notice-card__event-name" style="color: #999; font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${data.update_mantext}</span> 
                <span class="notice-card__event-desc" style="font-size: 14px; text-transform: lowercase; display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if></span>
            </div>
        </div>
		<#if data.parent("principal_id")??>
			<#assign parent= data.parent("principal_id")>
				<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;">
					<#if parent.show_identifier??>
						<span class="notice-card__object-id" style="color: #999; font-size:14px;">${parent.show_identifier}</span>
					</#if>
					<#if data.principal_type == 'CUSTOMER' || data.principal_type == 'PAGE'>
						<span class="notice-card__object-name" title="${parent.name}">${parent.name}</span>
					<#else>
						<span class="notice-card__object-name" title="${parent.title}">${parent.title}</span>
					</#if>		
				</div>
			<#assign content = data.content?replace('<img[^>]*>', '[图片]', 'r')?replace('<p[^>]*>', '', 'r')?replace('</?p[^>]*>', '', 'r')>
			<#assign regex = "(\\@\\{.*?\\})">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                  <#assign jsonObject = (jsonStr?replace("@", ""))?eval>  
							<#if jsonObject.name??>
								<#assign name = jsonObject.name>
									<#assign content = content?replace(jsonStr, "<span class='comment-tag'>@" + name + "</span>")>
							</#if>
				</#list>
			<#assign regex = "\\#\\{\"id\":\"(.*?)\",\"name\":\"(.+?)\",\"identifier\":\"(.+?)\",\"owner_id\":\"(.*?)\",\"owner_type\":\"(.*?)\",\"owner_subtype\":\"(.*?)\",\"recent_parent\":\"(.*?)\"\\}">
				<#list content?matches(regex) as match>
					<#assign jsonStr = match>
                                                     <#assign content = content?replace(jsonStr,"<span class='comment-tag'>"+ "提及："+match?groups[3]+ match?groups[2] + "</span>")>
				</#list>
			<div class="notice-card-object" style="display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;max-height: 50px;">
				<span class="notice-card__object-name">${content}</span>
			</div>
		</#if>
		<#if parent.parent("project_id")??>
		<#assign project= parent.parent("project_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 项目管理 · ${project.name}</span></div>
		<#elseif parent.parent("product_id")??>
        <#assign product= parent.parent("product_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 产品管理 · ${product.name}</span></div>
		<#elseif parent.parent("plan_id")??>
        <#assign plan= parent.parent("plan_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${plan.library_name}</span></div>
		<#elseif parent.parent("test_library_id")??>
        <#assign library= parent.parent("test_library_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 测试管理 · ${library.name}</span></div>
		<#elseif parent.parent("space_id")??>
        <#assign space= parent.parent("space_id")>
			<div class="notice-card-pilot" style="font-size: 12px; color: #999; text-transform: lowercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;><span class="notice-time">${data.update_time?string("yyyy-MM-dd HH:mm:ss")}</span><span class="notice-pilot-info">· 知识库管理 · ${space.name}</span></div>
		</#if>
    </div>
</div>
```

钉钉内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```

微信消息内容：
```
${data.update_mantext}评论了<#if data.principal_type == 'WORK_ITEM'>${data.parent("principal_id").work_item_type_name}<#elseif data.principal_type == 'IDEA'>需求<#elseif data.principal_type == 'TICKET'>工单<#elseif data.principal_type == 'TEST_CASE'>测试用例<#elseif data.principal_type == 'CUSTOMER'>客户<#elseif data.principal_type == 'RUN'>执行用例</#if>：
<#if data.owner_type == 'CUSTOMER'>${data.parent("principal_id").name}<#else>${data.parent("principal_id").title}</#if>
```
