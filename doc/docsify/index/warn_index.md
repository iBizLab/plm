# 模型预警 <!-- {docsify-ignore-all} -->


### 处理逻辑中使用脚本<sup class="footnote-symbol"> <font color=orange>[28]</font></sup>
| 实体col200   | 处理逻辑col300  | 脚本模式col100  |
| --------   |------------|----------|
|[客户(CUSTOMER)](module/ProdMgmt/customer#处理逻辑)|[删除客户发送通知(remove_customer_notify)](module/ProdMgmt/customer/logic/remove_customer_notify.md)|否|
|[客户(CUSTOMER)](module/ProdMgmt/customer#处理逻辑)|[取消关联(del_relation)](module/ProdMgmt/customer/logic/del_relation.md)|否|
|[需求(IDEA)](module/ProdMgmt/idea#处理逻辑)|[取消关联(del_relation)](module/ProdMgmt/idea/logic/del_relation.md)|否|
|[需求(IDEA)](module/ProdMgmt/idea#处理逻辑)|[计划内需求批删除(plan_delete_idea)](module/ProdMgmt/idea/logic/plan_delete_idea.md)|否|
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member#处理逻辑)|[移除测试库成员通知(remove_library_member_notify)](module/TestMgmt/library_member/logic/remove_library_member_notify.md)|否|
|[页面(PAGE)](module/Wiki/article_page#处理逻辑)|[发布页面(publish_page)](module/Wiki/article_page/logic/publish_page.md)|否|
|[页面(PAGE)](module/Wiki/article_page#处理逻辑)|[发布页面（测试）(publish_page_test)](module/Wiki/article_page/logic/publish_page_test.md)|否|
|[页面(PAGE)](module/Wiki/article_page#处理逻辑)|[获取历史版本(get_by_version)](module/Wiki/article_page/logic/get_by_version.md)|否|
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member#处理逻辑)|[移除项目集成员通知(remove_project_set_member_notify)](module/Base/portfolio_member/logic/remove_project_set_member_notify.md)|否|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member#处理逻辑)|[移除产品成员通知(remove_product_member_notify)](module/ProdMgmt/product_member/logic/remove_product_member_notify.md)|否|
|[项目(PROJECT)](module/ProjMgmt/project#处理逻辑)|[获取项目进度(get_schedule)](module/ProjMgmt/project/logic/get_schedule.md)|否|
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member#处理逻辑)|[移除项目成员通知(remove_project_member_notify)](module/ProjMgmt/project_member/logic/remove_project_member_notify.md)|否|
|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic#处理逻辑)|[获取最后运行状态(get_last_run_info)](module/extension/PSDELogic/logic/get_last_run_info.md)|否|
|[执行用例(RUN)](module/TestMgmt/run#处理逻辑)|[重置为未测(reset_not_test)](module/TestMgmt/run/logic/reset_not_test.md)|否|
|[空间(SPACE)](module/Wiki/space#处理逻辑)|[取消关联(del_relation)](module/Wiki/space/logic/del_relation.md)|否|
|[空间(SPACE)](module/Wiki/space#处理逻辑)|[自动创建主页(auto_create_home_page)](module/Wiki/space/logic/auto_create_home_page.md)|否|
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member#处理逻辑)|[移除空间成员发送通知(remove_space_member_notify)](module/Wiki/space_member/logic/remove_space_member_notify.md)|否|
|[迭代(SPRINT)](module/ProjMgmt/sprint#处理逻辑)|[获取未完成的工作项数量(get_not_finish)](module/ProjMgmt/sprint/logic/get_not_finish.md)|否|
|[用例(TEST_CASE)](module/TestMgmt/test_case#处理逻辑)|[取消关联(del_relation)](module/TestMgmt/test_case/logic/del_relation.md)|否|
|[工单(TICKET)](module/ProdMgmt/ticket#处理逻辑)|[取消关联(del_relation)](module/ProdMgmt/ticket/logic/del_relation.md)|否|
|[工单(TICKET)](module/ProdMgmt/ticket#处理逻辑)|[查询归档数据(get_archived_info)](module/ProdMgmt/ticket/logic/get_archived_info.md)|否|
|[工时(WORKLOAD)](module/Base/workload#处理逻辑)|[删除工时记录前附加逻辑(before_remove)](module/Base/workload/logic/before_remove.md)|否|
|[工时(WORKLOAD)](module/Base/workload#处理逻辑)|[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload.md)|否|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#处理逻辑)|[取消关联(del_relation)](module/ProjMgmt/work_item/logic/del_relation.md)|否|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#处理逻辑)|[树状或平铺表格数据查询（测试）(tree_tile_grid_query)](module/ProjMgmt/work_item/logic/tree_tile_grid_query.md)|否|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#处理逻辑)|[获取测试计划对应项目(work_item_test_plan_project)](module/ProjMgmt/work_item/logic/work_item_test_plan_project.md)|否|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#处理逻辑)|[设置缺陷类型(set_type_bug)](module/ProjMgmt/work_item/logic/set_type_bug.md)|否|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#处理逻辑)|[设置默认看板栏(set_default_entry)](module/ProjMgmt/work_item/logic/set_default_entry.md)|否|

### 处理逻辑中使用SQL调用<sup class="footnote-symbol"> <font color=orange>[74]</font></sup>
| 实体col200   | 处理逻辑col300  |
| --------   |------------|
|[类别(CATEGORY)#处理逻辑](module/Base/category)|[删除类别及子类别(delete_child_category)](module/Base/category/logic/delete_child_category.md)|
|[类别(CATEGORY)#处理逻辑](module/Base/category)|[设置默认分组(set_section)](module/Base/category/logic/set_section.md)|
|[客户(CUSTOMER)#处理逻辑](module/ProdMgmt/customer)|[产品客户关联分页计数器(product_customer_re_counters)](module/ProdMgmt/customer/logic/product_customer_re_counters.md)|
|[需求(IDEA)#处理逻辑](module/ProdMgmt/idea)|[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters.md)|
|[需求(IDEA)#处理逻辑](module/ProdMgmt/idea)|[删除(delete)](module/ProdMgmt/idea/logic/delete.md)|
|[需求(IDEA)#处理逻辑](module/ProdMgmt/idea)|[恢复(recover)](module/ProdMgmt/idea/logic/recover.md)|
|[需求(IDEA)#处理逻辑](module/ProdMgmt/idea)|[生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent.md)|
|[测试库(LIBRARY)#处理逻辑](module/TestMgmt/library)|[删除(delete)](module/TestMgmt/library/logic/delete.md)|
|[测试库(LIBRARY)#处理逻辑](module/TestMgmt/library)|[取消星标(un_favorite)](module/TestMgmt/library/logic/un_favorite.md)|
|[测试库(LIBRARY)#处理逻辑](module/TestMgmt/library)|[恢复(recover)](module/TestMgmt/library/logic/recover.md)|
|[测试库(LIBRARY)#处理逻辑](module/TestMgmt/library)|[批量更新最近访问父名称(recent_parent_name)](module/TestMgmt/library/logic/recent_parent_name.md)|
|[测试库(LIBRARY)#处理逻辑](module/TestMgmt/library)|[批量更新最近访问父标识(recent_parent_identifier)](module/TestMgmt/library/logic/recent_parent_identifier.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[删除(delete)](module/Wiki/article_page/logic/delete.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[发布页面(publish_page)](module/Wiki/article_page/logic/publish_page.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[发布页面（测试）(publish_page_test)](module/Wiki/article_page/logic/publish_page_test.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[取消星标(un_favorite)](module/Wiki/article_page/logic/un_favorite.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[恢复(recover)](module/Wiki/article_page/logic/recover.md)|
|[页面(PAGE)#处理逻辑](module/Wiki/article_page)|[获取草稿页面(get_draft_pages)](module/Wiki/article_page/logic/get_draft_pages.md)|
|[文件夹(PORTFOLIO)#处理逻辑](module/Base/portfolio)|[从项目集中移除(remove_from_project_set)](module/Base/portfolio/logic/remove_from_project_set.md)|
|[文件夹(PORTFOLIO)#处理逻辑](module/Base/portfolio)|[取消星标(un_favorite)](module/Base/portfolio/logic/un_favorite.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[删除(delete)](module/ProdMgmt/product/logic/delete.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[取消星标(un_favorite)](module/ProdMgmt/product/logic/un_favorite.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[恢复(recover)](module/ProdMgmt/product/logic/recover.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[批量更新最近访问父名称(recent_parent_name)](module/ProdMgmt/product/logic/recent_parent_name.md)|
|[产品(PRODUCT)#处理逻辑](module/ProdMgmt/product)|[批量更新最近访问父标识(recent_parent_identifier)](module/ProdMgmt/product/logic/recent_parent_identifier.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[从项目集中移除(remove_from_project_set)](module/ProjMgmt/project/logic/remove_from_project_set.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[删除(delete)](module/ProjMgmt/project/logic/delete.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[取消星标(un_favorite)](module/ProjMgmt/project/logic/un_favorite.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[恢复(recover)](module/ProjMgmt/project/logic/recover.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[批量更新最近访问父名称(recent_parent_name)](module/ProjMgmt/project/logic/recent_parent_name.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[批量更新最近访问父标识(recent_parent_identifier)](module/ProjMgmt/project/logic/recent_parent_identifier.md)|
|[项目(PROJECT)#处理逻辑](module/ProjMgmt/project)|[获取项目进度(get_schedule)](module/ProjMgmt/project/logic/get_schedule.md)|
|[最近访问(RECENT)#处理逻辑](module/Base/recent)|[定时清理最近访问数据(recent_clean)](module/Base/recent/logic/recent_clean.md)|
|[最近访问(RECENT)#处理逻辑](module/Base/recent)|[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry.md)|
|[最近访问(RECENT)#处理逻辑](module/Base/recent)|[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[执行结果获取(run_history_get)](module/TestMgmt/run/logic/run_history_get.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[每日执行用例趋势(run_daily_tendencies)](module/TestMgmt/run/logic/run_daily_tendencies.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[每日测试次数统计(run_everyday_test)](module/TestMgmt/run/logic/run_everyday_test.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[测试计划对比分析(plan_compar_ative_analysis)](module/TestMgmt/run/logic/plan_compar_ative_analysis.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[移除用例相关信息(delete_run_info)](module/TestMgmt/run/logic/delete_run_info.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[获取实际工时(get_actual_workload)](module/TestMgmt/run/logic/get_actual_workload.md)|
|[执行用例(RUN)#处理逻辑](module/TestMgmt/run)|[获取当前用例详情(this_run_details)](module/TestMgmt/run/logic/this_run_details.md)|
|[执行结果(RUN_HISTORY)#处理逻辑](module/TestMgmt/run_history)|[执行结果获取(run_history_get)](module/TestMgmt/run_history/logic/run_history_get.md)|
|[分组(SECTION)#处理逻辑](module/Base/section)|[删除分组及其下类别(delete_section)](module/Base/section/logic/delete_section.md)|
|[空间(SPACE)#处理逻辑](module/Wiki/space)|[删除(delete)](module/Wiki/space/logic/delete.md)|
|[空间(SPACE)#处理逻辑](module/Wiki/space)|[取消星标(un_favorite)](module/Wiki/space/logic/un_favorite.md)|
|[迭代(SPRINT)#处理逻辑](module/ProjMgmt/sprint)|[获取未完成的工作项数量(get_not_finish)](module/ProjMgmt/sprint/logic/get_not_finish.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[删除(delete)](module/TestMgmt/test_case/logic/delete.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[恢复(recover)](module/TestMgmt/test_case/logic/recover.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[测试用例活动情况(test_case_maneuver_context)](module/TestMgmt/test_case/logic/test_case_maneuver_context.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[测试用例规划分析(program_analyze)](module/TestMgmt/test_case/logic/program_analyze.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[测试计划对比分析(plan_compar_ative_analysis)](module/TestMgmt/test_case/logic/plan_compar_ative_analysis.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)|
|[用例(TEST_CASE)#处理逻辑](module/TestMgmt/test_case)|[获取最近执行(newest_run)](module/TestMgmt/test_case/logic/newest_run.md)|
|[工单(TICKET)#处理逻辑](module/ProdMgmt/ticket)|[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters.md)|
|[工单(TICKET)#处理逻辑](module/ProdMgmt/ticket)|[删除(delete)](module/ProdMgmt/ticket/logic/delete.md)|
|[工单(TICKET)#处理逻辑](module/ProdMgmt/ticket)|[恢复(recover)](module/ProdMgmt/ticket/logic/recover.md)|
|[工单(TICKET)#处理逻辑](module/ProdMgmt/ticket)|[查询归档数据(get_archived_info)](module/ProdMgmt/ticket/logic/get_archived_info.md)|
|[工时(WORKLOAD)#处理逻辑](module/Base/workload)|[删除工时记录前附加逻辑(before_remove)](module/Base/workload/logic/before_remove.md)|
|[工时(WORKLOAD)#处理逻辑](module/Base/workload)|[登记工时并更新剩余工时(save_workload)](module/Base/workload/logic/save_workload.md)|
|[工时(WORKLOAD)#处理逻辑](module/Base/workload)|[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[删除(delete)](module/ProjMgmt/work_item/logic/delete.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[恢复(recover)](module/ProjMgmt/work_item/logic/recover.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[缺陷年龄报告(defect_age_report)](module/ProjMgmt/work_item/logic/defect_age_report.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[缺陷每日趋势(defect_daily_trend)](module/ProjMgmt/work_item/logic/defect_daily_trend.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[缺陷累计趋势查询(defect_total_trend)](module/ProjMgmt/work_item/logic/defect_total_trend.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[需求年龄报告(backlog_age_report)](module/ProjMgmt/work_item/logic/backlog_age_report.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[需求每日趋势(backlog_daily_trend)](module/ProjMgmt/work_item/logic/backlog_daily_trend.md)|
|[工作项(WORK_ITEM)#处理逻辑](module/ProjMgmt/work_item)|[需求累计流图(backlog_accumulate_flow)](module/ProjMgmt/work_item/logic/backlog_accumulate_flow.md)|

### 界面逻辑中使用脚本<sup class="footnote-symbol"> <font color=orange>[135]</font></sup>
| 实体col200   | 界面逻辑col300  |
| --------   |------------|
|[附件(ATTACHMENT)](module/Base/attachment#界面逻辑)|[添加附件数据(表格)](module/Base/attachment/uilogic/add_attachment_grid)|
|[附件(ATTACHMENT)](module/Base/attachment#界面逻辑)|[添加附件数据](module/Base/attachment/uilogic/add_attachment)|
|[附件(ATTACHMENT)](module/Base/attachment#界面逻辑)|[附件删除](module/Base/attachment/uilogic/remove_attachment)|
|[附件(ATTACHMENT)](module/Base/attachment#界面逻辑)|[附件删除（表格）](module/Base/attachment/uilogic/remove_attachment_grid)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[添加回复(客户沟通)](module/Base/comment/uilogic/add_comment_client)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[编辑评论](module/Base/comment/uilogic/edit_comment)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[获取客户沟通总条数](module/Base/comment/uilogic/get_customer_comment_total)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[回复评论](module/Base/comment/uilogic/reply_comment)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[编辑评论（知识库）](module/Base/comment/uilogic/edit_comment_wiki)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[发送评论](module/Base/comment/uilogic/send_comment)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[清空评论(客户沟通)](module/Base/comment/uilogic/clear_comment_client)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[发送评论(知识库)](module/Base/comment/uilogic/send_comment_wiki)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[清空评论](module/Base/comment/uilogic/clear_comment)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[发送评论(客户沟通)](module/Base/comment/uilogic/send_comment_customer_comment)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[回复评论（知识库）](module/Base/comment/uilogic/reply_comment_wiki)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[编辑评论（知识库）(客户沟通)](module/Base/comment/uilogic/edit_comment_wiki_client)|
|[评论(COMMENT)](module/Base/comment#界面逻辑)|[回复评论（知识库）(客户沟通)](module/Base/comment/uilogic/reply_comment_wiki_client)|
|[客户(CUSTOMER)](module/ProdMgmt/customer#界面逻辑)|[需求关联客户](module/ProdMgmt/customer/uilogic/idea_relation_customer)|
|[客户(CUSTOMER)](module/ProdMgmt/customer#界面逻辑)|[关联客户值变更](module/ProdMgmt/customer/uilogic/relation_customer_change)|
|[客户(CUSTOMER)](module/ProdMgmt/customer#界面逻辑)|[触发计数器刷新](module/ProdMgmt/customer/uilogic/refresh_counter)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[提交（表单中）](module/Base/deliverable/uilogic/submit_form)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[提交](module/Base/deliverable/uilogic/submit)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[输入框区域隐藏](module/Base/deliverable/uilogic/hidden_input_area)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[获取交付目标总条数](module/Base/deliverable/uilogic/get_deliverable_total)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[删除（表单中）](module/Base/deliverable/uilogic/del)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[新建交付目标](module/Base/deliverable/uilogic/create_deliverable)|
|[交付物(DELIVERABLE)](module/Base/deliverable#界面逻辑)|[输入框区域展示](module/Base/deliverable/uilogic/show_input_area)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[用例关联需求](module/ProdMgmt/idea/uilogic/test_case_relation_idea)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[获取需求总条数](module/ProdMgmt/idea/uilogic/get_idea_total)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[触发计数器刷新](module/ProdMgmt/idea/uilogic/refresh_counter)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[需求关联需求](module/ProdMgmt/idea/uilogic/idea_relation_idea)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[工作项关联需求](module/ProdMgmt/idea/uilogic/work_item_relation_idea)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[添加附件数据](module/ProdMgmt/idea/uilogic/add_attachment)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[关联需求值变更](module/ProdMgmt/idea/uilogic/relation_idea_change)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[显示下拉并展开选项（嵌入视图）](module/ProdMgmt/idea/uilogic/show_dorpdown_data)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[获取工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[查看工时明细](module/ProdMgmt/idea/uilogic/check_workload_detail)|
|[需求(IDEA)](module/ProdMgmt/idea#界面逻辑)|[工单关联需求](module/ProdMgmt/idea/uilogic/ticket_relation_idea)|
|[测试库(LIBRARY)](module/TestMgmt/library#界面逻辑)|[批量删除测试库成员临时数据](module/TestMgmt/library/uilogic/remove_batch_temp)|
|[测试库(LIBRARY)](module/TestMgmt/library#界面逻辑)|[刷新当前表格](module/TestMgmt/library/uilogic/refresh_current_grid)|
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member#界面逻辑)|[新建测试库默认临时成员](module/TestMgmt/library_member/uilogic/create_default_temp_members)|
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member#界面逻辑)|[跳转至成员设置](module/TestMgmt/library_member/uilogic/jump_to_member_set)|
|[页面(PAGE)](module/Wiki/article_page#界面逻辑)|[恢复历史版本并通知刷新](module/Wiki/article_page/uilogic/page_refresh)|
|[页面(PAGE)](module/Wiki/article_page#界面逻辑)|[获取草稿数据](module/Wiki/article_page/uilogic/get_draft_data)|
|[页面(PAGE)](module/Wiki/article_page#界面逻辑)|[添加附件数据](module/Wiki/article_page/uilogic/add_attachment)|
|[页面(PAGE)](module/Wiki/article_page#界面逻辑)|[新建发布并通知刷新](module/Wiki/article_page/uilogic/save_notify_refresh)|
|[页面(PAGE)](module/Wiki/article_page#界面逻辑)|[刷新当前表格](module/Wiki/article_page/uilogic/refresh_current_grid)|
|[文件夹(PORTFOLIO)](module/Base/portfolio#界面逻辑)|[批量删除项目集成员临时数据](module/Base/portfolio/uilogic/remove_batch_temp)|
|[文件夹(PORTFOLIO)](module/Base/portfolio#界面逻辑)|[刷新当前表格](module/Base/portfolio/uilogic/refresh_current_grid)|
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member#界面逻辑)|[新建项目集默认临时成员](module/Base/portfolio_member/uilogic/default_project_member)|
|[产品(PRODUCT)](module/ProdMgmt/product#界面逻辑)|[批量删除产品成员临时数据](module/ProdMgmt/product/uilogic/remove_batch_temp)|
|[产品(PRODUCT)](module/ProdMgmt/product#界面逻辑)|[刷新当前表格](module/ProdMgmt/product/uilogic/refresh_current_grid)|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member#界面逻辑)|[建立产品成员](module/ProdMgmt/product_member/uilogic/create_product_member)|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member#界面逻辑)|[新建产品默认临时成员](module/ProdMgmt/product_member/uilogic/create_default_temp_members)|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member#界面逻辑)|[跳转至成员设置](module/ProdMgmt/product_member/uilogic/jump_to_member_set)|
|[项目(PROJECT)](module/ProjMgmt/project#界面逻辑)|[批量删除项目成员临时数据](module/ProjMgmt/project/uilogic/remove_batch_temp)|
|[项目(PROJECT)](module/ProjMgmt/project#界面逻辑)|[刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)|
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member#界面逻辑)|[新建项目默认临时成员](module/ProjMgmt/project_member/uilogic/create_default_temp_members)|
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member#界面逻辑)|[跳转至成员设置](module/ProjMgmt/project_member/uilogic/jump_to_member_set)|
|[最近访问(RECENT)](module/Base/recent#界面逻辑)|[最近访问跳转其他视图](module/Base/recent/uilogic/recent_jump_other_view)|
|[最近访问(RECENT)](module/Base/recent#界面逻辑)|[建立双向关联数据](module/Base/recent/uilogic/create_double_relation)|
|[执行用例(RUN)](module/TestMgmt/run#界面逻辑)|[刷新用例表格](module/TestMgmt/run/uilogic/refresh_run_grid)|
|[执行用例(RUN)](module/TestMgmt/run#界面逻辑)|[获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)|
|[执行用例(RUN)](module/TestMgmt/run#界面逻辑)|[查看工时明细](module/TestMgmt/run/uilogic/check_workload_detail)|
|[执行用例(RUN)](module/TestMgmt/run#界面逻辑)|[触发计数器刷新(run)](module/TestMgmt/run/uilogic/refresh_counter_run)|
|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment#界面逻辑)|[获取结果附件总条数](module/TestMgmt/run_attachment/uilogic/get_run_attachment_total)|
|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment#界面逻辑)|[添加附件数据](module/TestMgmt/run_attachment/uilogic/add_attachment)|
|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment#界面逻辑)|[删除](module/TestMgmt/run_attachment/uilogic/del)|
|[空间(SPACE)](module/Wiki/space#界面逻辑)|[计算表格列行为状态](module/Wiki/space/uilogic/calc_column_action_state)|
|[空间(SPACE)](module/Wiki/space#界面逻辑)|[批量删除空间成员临时数据](module/Wiki/space/uilogic/remove_batch_temp)|
|[空间(SPACE)](module/Wiki/space#界面逻辑)|[刷新当前表格](module/Wiki/space/uilogic/refresh_current_grid)|
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member#界面逻辑)|[新建空间默认临时成员](module/Wiki/space_member/uilogic/create_default_temp_members)|
|[页面模板(STENCIL)](module/Wiki/stencil#界面逻辑)|[打开新建页面并关闭模板中心](module/Wiki/stencil/uilogic/open_new_page)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[工作项关联用例](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[获取测试用例总条数](module/TestMgmt/test_case/uilogic/get_test_case_total)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[触发计数器刷新](module/TestMgmt/test_case/uilogic/refresh_counter)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[关联测试用例值变更](module/TestMgmt/test_case/uilogic/relation_test_case_change)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[需求关联用例](module/TestMgmt/test_case/uilogic/idea_relation_test_case)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[添加附件数据（通用）](module/TestMgmt/test_case/uilogic/add_attachment)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[获取工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)|
|[用例(TEST_CASE)](module/TestMgmt/test_case#界面逻辑)|[查看工时明细](module/TestMgmt/test_case/uilogic/check_workload_detail)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan#界面逻辑)|[移入计划](module/TestMgmt/test_plan/uilogic/shift_in_test_plan)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[计算表格列行为状态](module/ProdMgmt/ticket/uilogic/calc_column_action_state)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[工具栏上传附件](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[关联工单值变更](module/ProdMgmt/ticket/uilogic/relation_ticket_change)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[建立双向关联数据](module/ProdMgmt/ticket/uilogic/create_double_relation)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[需求关联工单](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[触发计数器刷新](module/ProdMgmt/ticket/uilogic/refresh_counter)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[建立关联数据](module/ProdMgmt/ticket/uilogic/create_relation)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[客户添加工单值变更](module/ProdMgmt/ticket/uilogic/customer_add_change)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[关联产品需求](module/ProdMgmt/ticket/uilogic/link_product)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[获取工单总条数](module/ProdMgmt/ticket/uilogic/get_ticket_total)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[添加附件数据](module/ProdMgmt/ticket/uilogic/add_attachment)|
|[工单(TICKET)](module/ProdMgmt/ticket#界面逻辑)|[工作项关联工单](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)|
|[企业用户(USER)](module/Base/user#界面逻辑)|[修改密码（表单）](module/Base/user/uilogic/change_pas)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[工时日历打开工时日志视图](module/Base/workload/uilogic/calendar_link_log_view)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开工作类别管理工时记录列表视图](module/Base/workload/uilogic/open_management_type_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[返回（执行用例表单）](module/Base/workload/uilogic/back_run_main_view)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开项目管理工时记录列表视图](module/Base/workload/uilogic/open_management_project_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[返回](module/Base/workload/uilogic/back)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开项目工时记录列表视图](module/Base/workload/uilogic/open_project_workload_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开成员工时记录列表视图](module/Base/workload/uilogic/open_member_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开工作类别工时记录列表视图](module/Base/workload/uilogic/open_type_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开测试库工时记录列表视图](module/Base/workload/uilogic/open_library_workload_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开产品工时记录列表视图](module/Base/workload/uilogic/open_product_workload_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开产品管理工时记录列表视图](module/Base/workload/uilogic/open_management_product_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[打开测试库管理工时记录列表视图](module/Base/workload/uilogic/open_management_library_detail)|
|[工时(WORKLOAD)](module/Base/workload#界面逻辑)|[工时日历打开工时日志视图（管理）](module/Base/workload/uilogic/calendar_management_link_log_view)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算表格列行为状态](module/ProjMgmt/work_item/uilogic/calc_column_action_state)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[添加子工作项值变更](module/ProjMgmt/work_item/uilogic/add_child_change)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[甘特新建行测试](module/ProjMgmt/work_item/uilogic/newrow_gantt)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[建立关联数据](module/ProjMgmt/work_item/uilogic/create_relation)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算面板项行为状态](module/ProjMgmt/work_item/uilogic/calc_kanban_item_action_state)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[控制表单成功关注列表readonly](module/ProjMgmt/work_item/uilogic/control_readonly)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[获取工作项总条数](module/ProjMgmt/work_item/uilogic/get_work_item_total)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[设置时间范围](module/ProjMgmt/work_item/uilogic/set_date_range)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[用例关联工作项](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[新建行测试](module/ProjMgmt/work_item/uilogic/newrow_test)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[查看工时明细](module/ProjMgmt/work_item/uilogic/check_workload_detail)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[需求关联工作项](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[建立双向关联数据](module/ProjMgmt/work_item/uilogic/create_double_relation)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[触发计数器刷新](module/ProjMgmt/work_item/uilogic/refresh_counter)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[甘特删除行测试](module/ProjMgmt/work_item/uilogic/removerow_gantt)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算子工作项类型](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[关联工作项值变更](module/ProjMgmt/work_item/uilogic/relation_work_item_change)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[执行用例关联工作项(缺陷)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算子工作项类型(上下文)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[添加附件数据](module/ProjMgmt/work_item/uilogic/add_attachment)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[子工作项刷新计数器](module/ProjMgmt/work_item/uilogic/child_refresh_counter)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[计算父工作项类型](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[获取工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item#界面逻辑)|[工单关联工作项](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)|

### 包含长文本的查询<sup class="footnote-symbol"> <font color=orange>[21]</font></sup>
| 实体col200   | 数据查询col300  |
| --------   |------------|
|[评论(COMMENT)](module/Base/comment)|[数据查询(DEFAULT)](module/Base/comment/query/Default)|
|[洞察力(INSIGHT)](module/Base/insight)|[数据查询(DEFAULT)](module/Base/insight/query/Default)|
|[洞察力(INSIGHT)](module/Base/insight)|[工作项分布(property_distribution)](module/Base/insight/query/property_distribution)|
|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|[数据查询(DEFAULT)](module/Base/search_comment/query/Default)|
|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|[关联查询(relation)](module/Base/search_comment/query/relation)|
|[工时(WORKLOAD)](module/Base/workload)|[数据查询(DEFAULT)](module/Base/workload/query/Default)|
|[工时(WORKLOAD)](module/Base/workload)|[工时日历(calendar)](module/Base/workload/query/calendar)|
|[工时(WORKLOAD)](module/Base/workload)|[产品需求工时(idea_workload)](module/Base/workload/query/idea_workload)|
|[工时(WORKLOAD)](module/Base/workload)|[工时日志(log)](module/Base/workload/query/log)|
|[工时(WORKLOAD)](module/Base/workload)|[我的工时日历(my_calendar)](module/Base/workload/query/my_calendar)|
|[工时(WORKLOAD)](module/Base/workload)|[我的产品需求工时(my_idea_workload)](module/Base/workload/query/my_idea_workload)|
|[工时(WORKLOAD)](module/Base/workload)|[我登记的工时日志(my_log)](module/Base/workload/query/my_log)|
|[工时(WORKLOAD)](module/Base/workload)|[我的测试用例工时(my_test_case_workload)](module/Base/workload/query/my_test_case_workload)|
|[工时(WORKLOAD)](module/Base/workload)|[我的工作类别记录(my_type_of)](module/Base/workload/query/my_type_of)|
|[工时(WORKLOAD)](module/Base/workload)|[我的工作项工时(my_work_item_workload)](module/Base/workload/query/my_work_item_workload)|
|[工时(WORKLOAD)](module/Base/workload)|[测试用例工时(test_case_workload)](module/Base/workload/query/test_case_workload)|
|[工时(WORKLOAD)](module/Base/workload)|[工作类别记录(type_of)](module/Base/workload/query/type_of)|
|[工时(WORKLOAD)](module/Base/workload)|[工作项工时(work_item_workload)](module/Base/workload/query/work_item_workload)|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|[数据查询(DEFAULT)](module/ProjMgmt/work_item_type/query/Default)|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|[项目工作项类型(project_work_item_type)](module/ProjMgmt/work_item_type/query/project_work_item_type)|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/work_item_type/query/project_work_item_type_not_bug)|

### 使用自定义SQL的查询<sup class="footnote-symbol"> <font color=orange>[5]</font></sup>
| 实体col200   | 数据查询col300  |
| --------   |------------|
|[附件(ATTACHMENT)](module/Base/attachment)|[项目下的交付物(project_deliverable)](module/Base/attachment/query/project_deliverable)|
|[交付物(DELIVERABLE)](module/Base/deliverable)|[项目下的交付物(project_deliverable)](module/Base/deliverable/query/project_deliverable)|
|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|[关联查询(relation)](module/Base/search_attachment/query/relation)|
|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|[关联查询(relation)](module/Base/search_comment/query/relation)|
|[迭代(SPRINT)](module/ProjMgmt/sprint)|[移动至(choose_move)](module/ProjMgmt/sprint/query/choose_move)|


### 启用组织权限范围，但未配置组织属性<sup class="footnote-symbol"> <font color=orange>[3]</font></sup>
|    中文名  | 实体名   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------| --------   |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[部门(DEPARTMENT)](module/Base/department.md)|DEPARTMENT|department|主实体|无存储||否|否|否|自控制|否|用于查看和管理企业的部门信息。|
|[产品(PRODUCT)](module/ProdMgmt/product.md)|PRODUCT|product|主实体|SQL|PRODUCT|否|否|是|自控制|是|产品管理核心实体，包含产品的基本信息、生命周期状态等。|
|[企业用户(USER)](module/Base/user.md)|USER|user|主实体|无存储||否|否|否|自控制|否|记录使用PLM系统的用户信息。（无存储，通过外部服务获取用户数据）|

### 启用部门权限范围，但未配置部门属性<sup class="footnote-symbol"> <font color=orange>[3]</font></sup>
|    中文名  | 实体名   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------| --------   |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[部门(DEPARTMENT)](module/Base/department.md)|DEPARTMENT|department|主实体|无存储||否|否|否|自控制|否|用于查看和管理企业的部门信息。|
|[产品(PRODUCT)](module/ProdMgmt/product.md)|PRODUCT|product|主实体|SQL|PRODUCT|否|否|是|自控制|是|产品管理核心实体，包含产品的基本信息、生命周期状态等。|
|[企业用户(USER)](module/Base/user.md)|USER|user|主实体|无存储||否|否|否|自控制|否|记录使用PLM系统的用户信息。（无存储，通过外部服务获取用户数据）|

### 启用审计，但未配置审计功能<sup class="footnote-symbol"> <font color=orange>[1]</font></sup>
|    中文名  | 实体名   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------| --------   |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[产品(PRODUCT)](module/ProdMgmt/product.md)|PRODUCT|product|主实体|SQL|PRODUCT|否|否|是|自控制|是|产品管理核心实体，包含产品的基本信息、生命周期状态等。|

### 未配置权限请求接口<sup class="footnote-symbol"> <font color=orange>[1]</font></sup>
| 实体col200| 请求路径col500| 请求方式col100   |    行为/集合col300    |
| -------- |-------- | --------|-------- |
|[最近访问(RECENT)](module/Base/recent.md)|/recents/{key}/recent_clean|POST|[定时清理最近访问数据(recent_clean)](module/Base/recent#行为)|

### NONE权限请求接口<sup class="footnote-symbol"> <font color=orange>[140]</font></sup>
| 实体col200| 请求路径col500| 请求方式col100   |    行为/集合col300    |
| -------- |-------- | --------|-------- |
|[类别(CATEGORY)](module/Base/category.md)|/categories/{key}/delete_child_category|POST|[删除子类别(delete_child_category)](module/Base/category#行为)|
|[类别(CATEGORY)](module/Base/category.md)|/categories/fetch_space_category|POST|[空间目录(space_category)](module/Base/category#数据集合)|
|[类别(CATEGORY)](module/Base/category.md)|/categories/fetch_space_category_top|POST|[空间目录（顶级）(space_category_top)](module/Base/category#数据集合)|
|[客户(CUSTOMER)](module/ProdMgmt/customer.md)|/customers/{key}/add_categories|POST|[添加至类别(add_categories)](module/ProdMgmt/customer#行为)|
|[客户(CUSTOMER)](module/ProdMgmt/customer.md)|/customers/{key}/del_relation|POST|[取消关联(del_relation)](module/ProdMgmt/customer#行为)|
|[客户(CUSTOMER)](module/ProdMgmt/customer.md)|/customers/{key}/product_customer_re_counters|POST|[产品客户关联分页计数器(product_customer_re_counters)](module/ProdMgmt/customer#行为)|
|[交付物(DELIVERABLE)](module/Base/deliverable.md)|/deliverables/fetch_project_deliverable|POST|[项目下的交付物(project_deliverable)](module/Base/deliverable#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/archive|POST|[归档(archive)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/change_state|POST|[变更需求状态(change_state)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/del_relation|POST|[取消关联(del_relation)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/delete|POST|[删除(delete)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/idea_copy|POST|[需求复制(idea_copy)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/idea_move|POST|[需求移动(idea_move)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/idea_re_plan|POST|[需求排期(idea_re_plan)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/plan_delete_idea|POST|[计划内批删除(plan_delete_idea)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/product_idea_re_counters|POST|[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/{key}/recover|POST|[恢复(recover)](module/ProdMgmt/idea#行为)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_idea_relation_idea|POST|[产品需求关联需求(idea_relation_idea)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_my_assign|POST|[我负责的产品需求(my_assign)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_my_attention|POST|[我关注的需求(my_attention)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_my_created|POST|[我创建的(my_created)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_plan_relation_idea|POST|[计划关联需求(plan_relation_idea)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_recent_idea|POST|[最近浏览(recent_idea)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_test_case_relation|POST|[测试用例关联(test_case_relation)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_ticket_relation_idea|POST|[工单关联需求(ticket_relation_idea)](module/ProdMgmt/idea#数据集合)|
|[需求(IDEA)](module/ProdMgmt/idea.md)|/ideas/fetch_work_item_relation_idea|POST|[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/idea#数据集合)|
|[测试库(LIBRARY)](module/TestMgmt/library.md)|/libraries/fetch_project_relation_library|POST|[与项目关联的测试库(project_relation_library)](module/TestMgmt/library#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/favorite|POST|[设置星标(favorite)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/get_draft_pages|GET|[获取草稿页面(get_draft_pages)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/new_draft_form_stencil|POST|[根据模板新建草稿(new_draft_form_stencil)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/publish_page|POST|[发布页面(publish_page)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/publish_page_test|POST|[发布页面（测试）(publish_page_test)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/recover|POST|[恢复(recover)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/recover_version|POST|[恢复到历史版本(recover_version)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/save_to_stencil|POST|[另存为模板(save_to_stencil)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/{key}/un_favorite|POST|[取消星标(un_favorite)](module/Wiki/article_page#行为)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_draft_page|POST|[草稿页面(draft_page)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_home_page|POST|[主页(home_page)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_is_deleted|POST|[已删除页面(is_deleted)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_my_favorite_page|POST|[我的收藏(my_favorite_page)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_no_parent_page|POST|[无父页面(no_parent_page)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_normal|POST|[正常(normal)](module/Wiki/article_page#数据集合)|
|[页面(PAGE)](module/Wiki/article_page.md)|/article_pages/fetch_only_page|POST|[仅页面(only_page)](module/Wiki/article_page#数据集合)|
|[文件夹(PORTFOLIO)](module/Base/portfolio.md)|/portfolios/remove_from_project_set|POST|[从项目集中移除(remove_from_project_set)](module/Base/portfolio#行为)|
|[产品(PRODUCT)](module/ProdMgmt/product.md)|/products/{key}/product_counters|POST|[产品计数器(product_counters)](module/ProdMgmt/product#行为)|
|[项目(PROJECT)](module/ProjMgmt/project.md)|/projects/remove_from_project_set|POST|[从项目集中移除(remove_from_project_set)](module/ProjMgmt/project#行为)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/{key}/my_charge_entry|POST|[我负责的事项(my_charge_entry)](module/Base/recent#行为)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/{key}/my_created_entry|POST|[我创建的事项(my_created_entry)](module/Base/recent#行为)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_access|POST|[最近访问(recent_access)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_access_logic|POST|[最近访问（逻辑生成）(recent_access_logic)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_curproduct_ticket|POST|[最近浏览当前产品内工单(recent_curproduct_ticket)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_curproject_child_work_item|POST|[最近浏览当前项目子工作项(recent_curproject_child_work_item)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_idea|POST|[最近浏览_需求(recent_idea)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_page|POST|[最近访问页面(recent_page)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_project|POST|[最近访问项目(recent_project)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_test_case|POST|[最近浏览_用例(recent_test_case)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_test_case_index|POST|[最近访问的用例_首页(recent_test_case_index)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_ticket|POST|[最近浏览_工单(recent_ticket)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_work_item|POST|[最近浏览_工作项(recent_work_item)](module/Base/recent#数据集合)|
|[最近访问(RECENT)](module/Base/recent.md)|/recents/fetch_recent_work_item_bug|POST|[最近浏览_缺陷(recent_work_item_bug)](module/Base/recent#数据集合)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/{key}/batch_save_run_history|POST|[批设置执行结果(batch_save_run_history)](module/TestMgmt/run#行为)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/{key}/get_actual_workload|GET|[获取实际工时(get_actual_workload)](module/TestMgmt/run#行为)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/{key}/run_re_counters|POST|[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run#行为)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/save|POST|[Save](module/TestMgmt/run#行为)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/{key}/save_run_history|POST|[保存执行结果(save_run_history)](module/TestMgmt/run#行为)|
|[执行用例(RUN)](module/TestMgmt/run.md)|/runs/{key}/set_executor|POST|[设置执行人(set_executor)](module/TestMgmt/run#行为)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/{key}/del_relation|POST|[取消关联(del_relation)](module/Wiki/space#行为)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/{key}/move_out_category|POST|[移出分类(move_out_category)](module/Wiki/space#行为)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/fetch_archived|POST|[已归档(archived)](module/Wiki/space#数据集合)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/fetch_deleted|POST|[已删除(deleted)](module/Wiki/space#数据集合)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/fetch_no_re_space|POST|[未关联的空间(no_re_space)](module/Wiki/space#数据集合)|
|[空间(SPACE)](module/Wiki/space.md)|/spaces/fetch_other_re_space|POST|[关联的空间(other_re_space)](module/Wiki/space#数据集合)|
|[页面模板(STENCIL)](module/Wiki/stencil.md)|/stencils/new_draft_form_stencil|POST|[根据模板新建草稿(new_draft_form_stencil)](module/Wiki/stencil#行为)|
|[页面模板(STENCIL)](module/Wiki/stencil.md)|/stencils/fetch_no_space_stencil|POST|[非空间下模板(no_space_stencil)](module/Wiki/stencil#数据集合)|
|[页面模板(STENCIL)](module/Wiki/stencil.md)|/stencils/fetch_space_stencil|POST|[空间下页面模板(space_stencil)](module/Wiki/stencil#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/case_move_plan|POST|[移入计划(case_move_plan)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/copy_case|POST|[复制用例(copy_case)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/del_relation|POST|[取消关联(del_relation)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/move_case|POST|[移动用例(move_case)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/set_level|POST|[设置重要程度(set_level)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/set_maintenance|POST|[设置维护人(set_maintenance)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/set_state|POST|[设置评审状态(set_state)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/{key}/test_case_re_counters|POST|[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case#行为)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_idea_relation_test_case|POST|[需求关联测试用例(idea_relation_test_case)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_my_assign|POST|[我负责的测试用例(my_assign)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_my_attention|POST|[我关注的测试用例(my_attention)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_my_created|POST|[我创建的测试用例(my_created)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_recent_test_case|POST|[最近浏览(recent_test_case)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_suites_test_case|POST|[当前模块下用例(this_suite_test_case)](module/TestMgmt/test_case#数据集合)|
|[用例(TEST_CASE)](module/TestMgmt/test_case.md)|/test_cases/fetch_work_item_relation_test_case|POST|[工作项关联测试用例(work_item_relation_test_case)](module/TestMgmt/test_case#数据集合)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)|/test_plans/fetch_default|POST|[数据集(DEFAULT)](module/TestMgmt/test_plan#数据集合)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)|/test_plans/fetch_my_assignee|POST|[我负责的(my_assignee)](module/TestMgmt/test_plan#数据集合)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)|/test_plans/fetch_my_in_progress|POST|[我的进行中的(my_in_progress)](module/TestMgmt/test_plan#数据集合)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)|/test_plans/fetch_my_participate|POST|[我参与的(my_participate)](module/TestMgmt/test_plan#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/{key}/allocate_person|POST|[分配负责人(allocate_person)](module/ProdMgmt/ticket#行为)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/{key}/choose_tag|POST|[设置标签(choose_tag)](module/ProdMgmt/ticket#行为)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/{key}/customer_del_ticket|POST|[客户取消关联工单(customer_del_ticket)](module/ProdMgmt/ticket#行为)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/{key}/del_relation|POST|[取消关联(del_relation)](module/ProdMgmt/ticket#行为)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/{key}/product_ticket_re_counters|POST|[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket#行为)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_customer_notre_ticket|POST|[客户未关联工单(customer_notre_ticket)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_idea_relation_ticket|POST|[产品需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_my_assign|POST|[我负责的(my_assign)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_my_attention|POST|[我关注的工单(my_attention)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_my_created|POST|[我创建的(my_created)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_recent_ticket|POST|[最近浏览(recent_ticket)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_ticket_relation_ticket|POST|[工单关联工单(ticket_relation_ticket)](module/ProdMgmt/ticket#数据集合)|
|[工单(TICKET)](module/ProdMgmt/ticket.md)|/tickets/fetch_work_item_relation_ticket|POST|[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket#数据集合)|
|[工作(WORK)](module/Base/work.md)|/works/{key}/add_project|POST|[添加项目(add_project)](module/Base/work#行为)|
|[工作(WORK)](module/Base/work.md)|/works/{key}/add_project_portfolio|POST|[添加项目集(add_project_portfolio)](module/Base/work#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/change_assignee|POST|[分配负责人(change_assignee)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/change_state|POST|[变更状态(change_state)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/change_time|POST|[修改时间(change_time)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/copy|POST|[复制(copy)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/del_relation|POST|[取消关联(del_relation)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/move_work_item|POST|[移动工作项(move_work_item)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/set_default_entry|POST|[选择看板后填充默认看板栏(set_default_entry)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/set_type_bug|POST|[设置缺陷类型(set_type_bug)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/shift_in_kanban|POST|[移入看板(shift_in_kanban)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/{key}/work_item_re_counters|POST|[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item#行为)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_bug_state_group_grid|POST|[缺陷状态分布表格(bug_state_group_grid)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_common_bug|POST|[普通状态缺陷(common_bug)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_idea_relation_work_item|POST|[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_assignee|POST|[我负责的(my_assignee)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_assignee_count|POST|[我负责的（统计）(my_assignee_count)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_attention|POST|[我关注的(my_attention)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_created|POST|[我创建的(my_created)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_filter|POST|[过滤器默认查询(my_filter)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_my_todo|POST|[我待完成的(my_todo)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_not_exsists_bug_relation|POST|[未关联的缺陷(not_exsists_bug_relation)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_not_exsists_relation|POST|[未关联的工作项(not_exsists_relation)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_overview_chart|POST|[项目概览-工作项统计(overview_chart)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_recent_work_item|POST|[最近浏览(recent_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_run_relation_work_item|POST|[执行用例关联缺陷(run_relation_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_test_case_relation_bug|POST|[测试用例关联缺陷(test_case_relation_bug)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_test_case_relation_work_item|POST|[测试用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_test_plan_relation_bug|POST|[测试计划关联缺陷(test_plan_relation_bug)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_ticket_relation_work_item|POST|[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_under_work|POST|[项目集工作下的工作项(under_work)](module/ProjMgmt/work_item#数据集合)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)|/work_items/fetch_work_item_relation_work_item|POST|[工作项关联工作项(work_item_relation_work_item)](module/ProjMgmt/work_item#数据集合)|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type.md)|/work_item_types/fetch_project_work_item_type_not_bug|POST|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/work_item_type#数据集合)|

### 操作标识未配置映射<sup class="footnote-symbol"> <font color=orange>[3]</font></sup>
| 实体col200   | 操作标识col300  |
| --------   |------------|
|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment.md)|CREATE<br>READ<br>DELETE<br>UPDATE|
|[评论(COMMENT)](module/Base/comment.md)|CREATE<br>READ<br>DELETE<br>UPDATE|
|[关注(ATTENTION)](module/Base/attention.md)|CREATE<br>READ<br>DELETE<br>UPDATE|

### 除主键、主信息、预置属性外，不包含其他配置的表格<sup class="footnote-symbol"> <font color=orange>[22]</font></sup>
| 实体col200   |   视图col400 | 表格col400  |
| --------   |------------|------------|
|[看板(BOARD)](module/ProjMgmt/board)|主表格(main)|[看板(board_pick_up_grid_view)](app/view/board_pick_up_grid_view)|
|[类别(CATEGORY)](module/Base/category)|主表格(main)|[类别(category_pick_up_grid_view)](app/view/category_pick_up_grid_view)|
|[部门(DEPARTMENT)](module/Base/department)|主表格(main)|[部门(department_pick_up_grid_view)](app/view/department_pick_up_grid_view)|
|[看板栏(ENTRY)](module/ProjMgmt/entry)|主表格(main)|[看板栏(entry_pick_up_grid_view)](app/view/entry_pick_up_grid_view)|
|[收藏(FAVORITE)](module/Base/favorite)|我收藏的空间表格视图_表格(space_grid_view_grid)|[我的收藏(favorite_space_grid_view)](app/view/favorite_space_grid_view)|
|[需求(IDEA)](module/ProdMgmt/idea)|需求回收站表格(recycle_grid)|[需求(idea_others_re_mpick_up_grid_view)](app/view/idea_others_re_mpick_up_grid_view)|
|[岗位(JOB)](module/Base/job)|主表格(main)|[岗位(job_pick_up_grid_view)](app/view/job_pick_up_grid_view)|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|选择项目集表格(choose_project_grid)|[文件夹(portfolio_pick_up_grid_view)](app/view/portfolio_pick_up_grid_view)|
|[项目(PROJECT)](module/ProjMgmt/project)|项目集选择项目表格(choose_project_grid)|[项目(project_pick_up_grid_view)](app/view/project_pick_up_grid_view)|
|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)|主表格(main)|[项目标签(project_tag_grid_view)](app/view/project_tag_grid_view)|
|[关联(RELATION)](module/Base/relation)|主表格(main)|[关联(relation_grid_view)](app/view/relation_grid_view)|
|[项目发布(RELEASE)](module/ProjMgmt/release)|项目发布实体数据选择视图（左右关系）_选择数据视图_表格(pick_up_view_pickup_grid_view_grid)|[项目发布(release_pick_up_around_grid_view)](app/view/release_pick_up_around_grid_view)|
|[分组(SECTION)](module/Base/section)|主表格(main)|[分组(section_pick_up_grid_view)](app/view/section_pick_up_grid_view)|
|[空间(SPACE)](module/Wiki/space)|选择空间表格(choose_space)|[空间(space_pick_up_grid_view)](app/view/space_pick_up_grid_view)|
|[迭代(SPRINT)](module/ProjMgmt/sprint)|迭代实体数据选择视图（选择关系）_选择数据视图_表格(pick_up_view_pickup_grid_view_grid)|[迭代(sprint_pick_up_around_grid_view)](app/view/sprint_pick_up_around_grid_view)|
|[用例(TEST_CASE)](module/TestMgmt/test_case)|测试用例表格视图_表格(test_grid_view_all_grid)|[回收站(test_case_recycle_grid_view)](app/view/test_case_recycle_grid_view)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|测试计划实体数据选择视图（左右关系）_选择数据视图_表格(pick_up_view_pickup_grid_view_grid)|[测试计划(test_plan_pick_up_around_gird_view)](app/view/test_plan_pick_up_around_gird_view)|
|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|主表格(main)|[用例模块(test_suite_grid_view)](app/view/test_suite_grid_view)|
|[工单(TICKET)](module/ProdMgmt/ticket)|工单回收站表格(ticket_delete_grid)|[工单(ticket_customer_re_ticket_pick_up_grid_view)](app/view/ticket_customer_re_ticket_pick_up_grid_view)|
|[工作(WORK)](module/Base/work)|项目集工作表格(item_set_grid)|[工作(work_grid_view)](app/view/work_grid_view)|
|[工时类别(WORKLOAD_TYPE)](module/Base/workload_type)|主表格(main)|[工时类别(workload_type_pick_up_grid_view)](app/view/workload_type_pick_up_grid_view)|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|关联工作项多项选择视图_选择数据视图_表格(relation_mpick_up_view_pickup_grid_view_grid)|[工作项(work_item_case_re_bug_mpick_up_grid_view)](app/view/work_item_case_re_bug_mpick_up_grid_view)|

### 无搜索项的搜索表单<sup class="footnote-symbol"> <font color=orange>[36]</font></sup>
| 实体col200   |   视图col400 | 搜索表单col400  |
| --------   |------------|-----------|
|[看板(BOARD)](module/ProjMgmt/board)|默认搜索表单(default)|[看板(board_pick_up_grid_view)](app/view/board_pick_up_grid_view)|
|[类别(CATEGORY)](module/Base/category)|默认搜索表单(default)|[类别(category_pick_up_grid_view)](app/view/category_pick_up_grid_view)|
|[交付物(DELIVERABLE)](module/Base/deliverable)|默认搜索表单(default)|[交付物(deliverable_grid_view)](app/view/deliverable_grid_view)|
|[部门(DEPARTMENT)](module/Base/department)|默认搜索表单(default)|[部门(department_pick_up_grid_view)](app/view/department_pick_up_grid_view)|
|[看板栏(ENTRY)](module/ProjMgmt/entry)|默认搜索表单(default)|[看板栏(entry_pick_up_grid_view)](app/view/entry_pick_up_grid_view)|
|[洞察力(INSIGHT)](module/Base/insight)|默认搜索表单(default)|[scrum报表(insight_grid_view)](app/view/insight_grid_view)|
|[岗位(JOB)](module/Base/job)|默认搜索表单(default)|[岗位(job_pick_up_grid_view)](app/view/job_pick_up_grid_view)|
|[测试库(LIBRARY)](module/TestMgmt/library)|默认搜索表单(default)|[全部测试库(library_all_grid_view)](app/view/library_all_grid_view)|
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|默认搜索表单(default)|[测试库成员(library_member_assigned_grid_view)](app/view/library_member_assigned_grid_view)|
|[页面(PAGE)](module/Wiki/article_page)|默认搜索表单(default)|[我的收藏(article_page_my_favorite_page_grid_view)](app/view/article_page_my_favorite_page_grid_view)|
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|默认搜索表单(default)|[文件夹成员(portfolio_member_project_bind_member_grid_view)](app/view/portfolio_member_project_bind_member_grid_view)|
|[产品(PRODUCT)](module/ProdMgmt/product)|默认搜索表单(default)|[全部产品(product_all_grid_view)](app/view/product_all_grid_view)|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|默认搜索表单(default)|[产品成员(product_member_assigned_grid_view)](app/view/product_member_assigned_grid_view)|
|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|默认搜索表单(default)|[全部计划(product_plan_all_grid_view)](app/view/product_plan_all_grid_view)|
|[产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)|默认搜索表单(default)|[产品标签(product_tag_grid_view)](app/view/product_tag_grid_view)|
|[项目(PROJECT)](module/ProjMgmt/project)|项目看板视图_搜索表单(kanban_view_search_form)|[主数据表格视图（测试）(project_data_grid_main)](app/view/project_data_grid_main)|
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|默认搜索表单(default)|[项目成员(project_member_assigned_grid_view)](app/view/project_member_assigned_grid_view)|
|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)|默认搜索表单(default)|[项目标签(project_tag_grid_view)](app/view/project_tag_grid_view)|
|[实体属性(PSDEFIELD)](module/extension/PSDEField)|默认搜索表单(default)|[实体属性(psde_field_grid_view)](app/view/psde_field_grid_view)|
|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)|自动化规则逻辑表格视图_搜索表单(flow_grid_view_search_form)|[自动化规则(psdelogicflow_grid_view)](app/view/psdelogicflow_grid_view)|
|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|默认搜索表单(default)|[事件通知(psde_notify_event_hook_grid_view)](app/view/psde_notify_event_hook_grid_view)|
|[最近访问(RECENT)](module/Base/recent)|最近访问页面表格视图_搜索表单(usr02299198_search_form)|[最近访问(recent_recent_page_grid_view)](app/view/recent_recent_page_grid_view)|
|[引用索引(REFERENCES_INDEX)](module/Base/references_index)|默认搜索表单(default)|[引用索引(references_index_grid_view)](app/view/references_index_grid_view)|
|[关联(RELATION)](module/Base/relation)|默认搜索表单(default)|[关联(relation_grid_view)](app/view/relation_grid_view)|
|[分组(SECTION)](module/Base/section)|默认搜索表单(default)|[分组(section_pick_up_grid_view)](app/view/section_pick_up_grid_view)|
|[空间(SPACE)](module/Wiki/space)|空间管理表格视图_进行中_搜索表单(usr02274660_search_form)|[空间管理(space_is_archived_grid_view)](app/view/space_is_archived_grid_view)|
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|默认搜索表单(default)|[空间成员(space_member_assigned_grid_view)](app/view/space_member_assigned_grid_view)|
|[页面模板(STENCIL)](module/Wiki/stencil)|默认搜索表单(default)|[页面模板(stencil_space_all_grid_view)](app/view/stencil_space_all_grid_view)|
|[用例(TEST_CASE)](module/TestMgmt/test_case)|测试用例回收站表格视图_搜索表单(recycle_grid_view_search_form)|[回收站(test_case_recycle_grid_view)](app/view/test_case_recycle_grid_view)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|默认搜索表单(default)|[测试计划(test_plan_in_progress_grid_view)](app/view/test_plan_in_progress_grid_view)|
|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|默认搜索表单(default)|[用例模块(test_suite_grid_view)](app/view/test_suite_grid_view)|
|[企业用户(USER)](module/Base/user)|企业用户管理表格视图_搜索表单(grid_view_search_form)|[成员管理(user_unassigned_dept_grid_view)](app/view/user_unassigned_dept_grid_view)|
|[版本（temp）(VERSION)](module/Base/version)|默认搜索表单(default)|[版本（temp）(version_pick_up_grid_view)](app/view/version_pick_up_grid_view)|
|[工作(WORK)](module/Base/work)|默认搜索表单(default)|[工作(work_grid_view)](app/view/work_grid_view)|
|[工时类别(WORKLOAD_TYPE)](module/Base/workload_type)|默认搜索表单(default)|[工时类别(workload_type_pick_up_grid_view)](app/view/workload_type_pick_up_grid_view)|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|默认搜索表单(default)|[工作项配置(work_item_type_global_setting_view_scrum)](app/view/work_item_type_global_setting_view_scrum)|

### 除主键、主信息、预置属性外，不包含其他配置的表单<sup class="footnote-symbol"> <font color=orange>[32]</font></sup>
| 实体col200   |   视图col400 |表单col400  |
| --------   |------------|------------|
|[附件(ATTACHMENT)](module/Base/attachment)|主编辑表单(main)|[附件(attachment_edit_view)](app/view/attachment_edit_view)|
|[看板(BOARD)](module/ProjMgmt/board)|主编辑表单(main)|[看板(board_edit_view)](app/view/board_edit_view)|
|[评论(COMMENT)](module/Base/comment)|主编辑表单(main)|[评论(comment_edit_view)](app/view/comment_edit_view)|
|[客户(CUSTOMER)](module/ProdMgmt/customer)|主编辑表单(main)|[客户(customer_edit_view)](app/view/customer_edit_view)|
|[交付物(DELIVERABLE)](module/Base/deliverable)|主编辑表单(main)|[交付物(deliverable_edit_view)](app/view/deliverable_edit_view)|
|[收藏(FAVORITE)](module/Base/favorite)|主编辑表单(main)|[收藏(favorite_edit_view)](app/view/favorite_edit_view)|
|[需求(IDEA)](module/ProdMgmt/idea)|需求排期表单(idea_re_plan)|[需求(idea_idea_re_plan_option_view)](app/view/idea_idea_re_plan_option_view)|
|[测试库(LIBRARY)](module/TestMgmt/library)|测试库首页视图_表单(overview)|[高级设置(library_advanced_setting_edit_view)](app/view/library_advanced_setting_edit_view)|
|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting)|config_view_表单(config_view_form)|[消息设置(notify_setting_config_view)](app/view/notify_setting_config_view)|
|[页面(PAGE)](module/Wiki/article_page)|主编辑表单(main)|[页面(article_page_edit_view)](app/view/article_page_edit_view)|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|项目集首页视图_表单(project_index_view_form)|[高级设置(portfolio_project_set_advanced_view)](app/view/portfolio_project_set_advanced_view)|
|[产品(PRODUCT)](module/ProdMgmt/product)|产品首页视图_表单(index_view_form)|[高级设置(product_advanced_setting_edit_view)](app/view/product_advanced_setting_edit_view)|
|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|主编辑表单(main)|[排期(product_plan_edit_view)](app/view/product_plan_edit_view)|
|[产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)|标签编辑或新建(edit_or_new)|[编辑标签(product_tag_edit_option_view)](app/view/product_tag_edit_option_view)|
|[项目(PROJECT)](module/ProjMgmt/project)|项目概览_表单(overview)|[高级设置(project_advanced_setting_edit_view)](app/view/project_advanced_setting_edit_view)|
|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)|标签编辑或新建(edit_or_new)|[项目标签(project_tag_edit_view)](app/view/project_tag_edit_view)|
|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|主编辑表单(main)|[实体通知(psde_notify_edit_view)](app/view/psde_notify_edit_view)|
|[最近访问(RECENT)](module/Base/recent)|主编辑表单(main)|[最近访问(recent_edit_view)](app/view/recent_edit_view)|
|[引用索引(REFERENCES_INDEX)](module/Base/references_index)|主编辑表单(main)|[引用索引(references_index_edit_view)](app/view/references_index_edit_view)|
|[执行用例(RUN)](module/TestMgmt/run)|执行结果展示表单(show_run_history_form)|[执行用例(run_run_re_run_history_edit_view)](app/view/run_run_re_run_history_edit_view)|
|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history)|执行结果表单(run_histroy_form)|[执行结果(run_history_re_run_edit_view)](app/view/run_history_re_run_edit_view)|
|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|主编辑表单(main)|[附件搜索(search_attachment_edit_view)](app/view/search_attachment_edit_view)|
|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|主编辑表单(main)|[评论搜索(search_comment_edit_view)](app/view/search_comment_edit_view)|
|[空间(SPACE)](module/Wiki/space)|空间首页视图_表单(index_view_form)|[高级设置(space_advanced_setting_view)](app/view/space_advanced_setting_view)|
|[迭代(SPRINT)](module/ProjMgmt/sprint)|主编辑表单(main)|[确认完成(sprint_confirm_finish_view)](app/view/sprint_confirm_finish_view)|
|[页面模板(STENCIL)](module/Wiki/stencil)|另存为模板选项操作视图_表单(save_option_view_form)|[另存为模板(stencil_save_option_view)](app/view/stencil_save_option_view)|
|[用例(TEST_CASE)](module/TestMgmt/test_case)|附件_表单(attachment_form)|[用例(test_case_only_attchment_view)](app/view/test_case_only_attchment_view)|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|主编辑表单(main)|[测试计划(test_plan_edit_view)](app/view/test_plan_edit_view)|
|[企业用户(USER)](module/Base/user)|主编辑表单(main)|[帐号设置(user_account_view)](app/view/user_account_view)|
|[版本（temp）(VERSION)](module/Base/version)|主编辑表单(main)|[版本（temp）(version_edit_view)](app/view/version_edit_view)|
|[工作(WORK)](module/Base/work)|主编辑表单(main)|[工作(work_edit_view)](app/view/work_edit_view)|
|[工时(WORKLOAD)](module/Base/workload)|主编辑表单(main)|[工时(workload_edit_view)](app/view/workload_edit_view)|
