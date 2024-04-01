# 实体关系 <!-- {docsify-ignore-all} -->
| 主实体    | 从实体    | 关系名称    | 关系类型   | 关系模式     |   备注  |
| -------- | -------- |---------- |------------|------------|----- |
|[迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section)|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|[DER1N_SPRINT_CATEGORY_SPRINT_SECTION_SPRINT_SECTION_ID](der/DER1N_SPRINT_CATEGORY_SPRINT_SECTION_SPRINT_SECTION_ID)|1:N关系|||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[评论(COMMENT)](module/Base/Comment)|[DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|[DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID](der/DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[类别(CATEGORY)](module/Base/Category)|[类别(CATEGORY)](module/Base/Category)|[DER1N_CATEGORY_CATEGORY_PID](der/DER1N_CATEGORY_CATEGORY_PID)|1:N关系|递归关系、关联通知、||
|[空间(SPACE)](module/Wiki/Space)|[页面(PAGE)](module/Wiki/Article_page)|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|1:N关系|数据访问控制、||
|[执行用例(RUN)](module/TestMgmt/Run)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_RUN_ATTACHMENT](der/DERCUSTOM_RUN_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[评论(COMMENT)](module/Base/Comment)|[DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID)|自定义关系|||
|[执行用例(RUN)](module/TestMgmt/Run)|[评论(COMMENT)](module/Base/Comment)|[DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID)|自定义关系|||
|[项目发布(RELEASE)](module/ProjMgmt/Release)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|1:N关系|||
|[企业用户(USER)](module/Base/User)|[工单(TICKET)](module/ProdMgmt/Ticket)|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|1:N关系|||
|[企业用户(USER)](module/Base/User)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|1:N关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[收藏(FAVORITE)](module/Base/Favorite)|[DERCCUSTOM_FAVORITE_PROJECT](der/DERCCUSTOM_FAVORITE_PROJECT)|自定义关系|||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工时(WORKLOAD)](module/Base/Workload)|[DERCUSTOM_WORK_ITEM_WORKLOAD](der/DERCUSTOM_WORK_ITEM_WORKLOAD)|自定义关系|||
|[分组(SECTION)](module/Base/Section)|[类别(CATEGORY)](module/Base/Category)|[DER1N_CATEGORY_SECTION_SECTION_ID](der/DER1N_CATEGORY_SECTION_SECTION_ID)|1:N关系|关联通知、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[工单渠道(CHANNEL)](module/ProdMgmt/Channel)|[DER1N_CHANNEL_PRODUCT_PRODUCT_ID](der/DER1N_CHANNEL_PRODUCT_PRODUCT_ID)|1:N关系|||
|[文件夹(PORTFOLIO)](module/Base/Portfolio)|[工作(WORK)](module/Base/Work)|[DER1N_WORK_PORTFOLIO_PORTFOLIO_ID](der/DER1N_WORK_PORTFOLIO_PORTFOLIO_ID)|1:N关系|数据访问控制、||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目进度(PROGRESS)](module/ProjMgmt/Progress)|[DER1N_PROGRESS_PROJECT_PROJECT_ID](der/DER1N_PROGRESS_PROJECT_PROJECT_ID)|1:N关系|||
|[执行用例(RUN)](module/TestMgmt/Run)|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history)|[DER1N_RUN_HISTORY_RUN_RUN_ID](der/DER1N_RUN_HISTORY_RUN_RUN_ID)|1:N关系|附属关系、嵌套操作、||
|[项目(PROJECT)](module/ProjMgmt/Project)|[迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section)|[DER1N_SPRINT_SECTION_PROJECT_PROJECT_ID](der/DER1N_SPRINT_SECTION_PROJECT_PROJECT_ID)|1:N关系|||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_CUSTOMER](der/DERCUSTOM_RELATION_CUSTOMER)|自定义关系|||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_TICKET](der/DERCUSTOM_RELATION_TICKET)|自定义关系|||
|[企业用户(USER)](module/Base/User)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[DER1N_CUSTOMER_USER_ASSIGNEE_ID](der/DER1N_CUSTOMER_USER_ASSIGNEE_ID)|1:N关系|||
|[工单类型(TICKET_TYPE)](module/ProdMgmt/Ticket_type)|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type)|[DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID](der/DER1N_PRODUCT_TICKET_TYPE_TICKET_TYPE_TICKET_TYPE_ID)|1:N关系|||
|[页面(PAGE)](module/Wiki/Article_page)|[页面版本(PAGE_VERSION)](module/Wiki/Page_version)|[DER1N_PAGE_VERSION_PAGE_PAGE_ID](der/DER1N_PAGE_VERSION_PAGE_PAGE_ID)|1:N关系|||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type)|[DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID)|1:N关系|||
|[看板栏(ENTRY)](module/ProjMgmt/Entry)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_ENTRY_ENTRY_ID](der/DER1N_WORK_ITEM_ENTRY_ENTRY_ID)|1:N关系|||
|[页面(PAGE)](module/Wiki/Article_page)|[页面(PAGE)](module/Wiki/Article_page)|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|1:N关系|递归关系、关联通知、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/Transition_history)|[DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM](der/DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM)|自定义关系|||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID](der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID)|1:N关系|附属关系、数据访问控制、||
|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|[消息通知目标(PSDENOTIFYTARGET)](module/extension/PSDENotifyTarget)|[DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID](der/DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID)|1:N关系|附属关系、嵌套操作、||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan)|[DER1N_PLAN_PRODUCT_PRODUCT_ID](der/DER1N_PLAN_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、数据访问控制、||
|[企业用户(USER)](module/Base/User)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|[DER1N_PROJECT_MEMBER_USER_USER_ID](der/DER1N_PROJECT_MEMBER_USER_USER_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[企业用户(USER)](module/Base/User)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|1:N关系|||
|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|[测试库(LIBRARY)](module/TestMgmt/Library)|[DERINDEX_LIBRARY_REFERENCES_INDEX](der/DERINDEX_LIBRARY_REFERENCES_INDEX)|索引关系|||
|[企业用户(USER)](module/Base/User)|[需求(IDEA)](module/ProdMgmt/Idea)|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|1:N关系|||
|[版本（temp）(VERSION)](module/ProjMgmt/Version)|[发布阶段(STAGE)](module/ProjMgmt/Stage)|[DER1N_STAGE_VERSION_VERSION_ID](der/DER1N_STAGE_VERSION_VERSION_ID)|1:N关系|||
|[页面(PAGE)](module/Wiki/Article_page)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_PAGE_ATTACHMENT](der/DERCUSTOM_PAGE_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||
|[空间(SPACE)](module/Wiki/Space)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_SPACE](der/DERCUSTOM_RELATION_SPACE)|自定义关系|||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|[DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID](der/DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID)|1:N关系|附属关系、数据访问控制、||
|[企业用户(USER)](module/Base/User)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_TEST_CASE_ATTACHMENT](der/DERCUSTOM_TEST_CASE_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||
|[测试库(LIBRARY)](module/TestMgmt/Library)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID)|1:N关系|附属关系、数据访问控制、||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[工单(TICKET)](module/ProdMgmt/Ticket)|[DER1N_TICKET_CUSTOMER_CUSTOMER_ID](der/DER1N_TICKET_CUSTOMER_CUSTOMER_ID)|1:N关系|||
|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID](der/DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID)|1:N关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|[DER1N_VERSION_PROJECT_PROJECT_ID](der/DER1N_VERSION_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[发布类别(VERSION_CATEGORY)](module/ProjMgmt/Version_category)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|[DER1N_VERSION_VERSION_CATEGORY_VERSION_CATEGORY_ID](der/DER1N_VERSION_VERSION_CATEGORY_VERSION_CATEGORY_ID)|1:N关系|||
|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|[项目(PROJECT)](module/ProjMgmt/Project)|[DERINDEX_PROJECT_REFERENCES_INDEX](der/DERINDEX_PROJECT_REFERENCES_INDEX)|索引关系|||
|[企业用户(USER)](module/Base/User)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|[DER1N_PORTFOLIO_MEMBER_USER_USER_ID](der/DER1N_PORTFOLIO_MEMBER_USER_USER_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[看板(BOARD)](module/ProjMgmt/Board)|[看板栏(ENTRY)](module/ProjMgmt/Entry)|[DER1N_ENTRY_BOARD_BOARD_ID](der/DER1N_ENTRY_BOARD_BOARD_ID)|1:N关系|附属关系、数据访问控制、||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[产品标签(PRODUCT_TAG)](module/ProdMgmt/Product_tag)|[DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、数据访问控制、||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[评论(COMMENT)](module/Base/Comment)|[DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID)|自定义关系|||
|[需求(IDEA)](module/ProdMgmt/Idea)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[看板栏(ENTRY)](module/ProjMgmt/Entry)|[DER1N_ENTRY_PROJECT_PROJECT_ID](der/DER1N_ENTRY_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section)|[发布类别(VERSION_CATEGORY)](module/ProjMgmt/Version_category)|[DER1N_VERSION_CATEGORY_VERSION_SECTION_VERSION_SECTION_ID](der/DER1N_VERSION_CATEGORY_VERSION_SECTION_VERSION_SECTION_ID)|1:N关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[看板(BOARD)](module/ProjMgmt/Board)|[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[DER1N_TEST_CASE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEST_SUITE_SUITE_ID)|1:N关系|||
|[类别(CATEGORY)](module/Base/Category)|[空间(SPACE)](module/Wiki/Space)|[DER1N_SPACE_CATEGORY_CATEGORY_ID](der/DER1N_SPACE_CATEGORY_CATEGORY_ID)|1:N关系|||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|[日容量(DAY_CAPACITY)](module/ProjMgmt/Day_capacity)|[项目成员-日容量](der/项目成员-日容量)|自定义关系|||
|[看板(BOARD)](module/ProjMgmt/Board)|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|[DER1N_SWIMLANE_BOARD_BOARD_ID](der/DER1N_SWIMLANE_BOARD_BOARD_ID)|1:N关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[项目发布(RELEASE)](module/ProjMgmt/Release)|[DER1N_RELEASE_PROJECT_PROJECT_ID](der/DER1N_RELEASE_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[项目(PROJECT)](module/ProjMgmt/Project)|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|[DER1N_SWIMLANE_PROJECT_PROJECT_ID](der/DER1N_SWIMLANE_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|1:N关系|||
|[需求(IDEA)](module/ProdMgmt/Idea)|[评论(COMMENT)](module/Base/Comment)|[DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID)|自定义关系|||
|[执行用例(RUN)](module/TestMgmt/Run)|[用例步骤(STEP)](module/TestMgmt/Step)|[DER1N_STEP_RUN_RUN_ID](der/DER1N_STEP_RUN_RUN_ID)|1:N关系|附属关系、嵌套操作、||
|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|[DER1N_TEST_SUITE_TEST_SUITE_PID](der/DER1N_TEST_SUITE_TEST_SUITE_PID)|1:N关系|递归关系、关联通知、||
|[企业用户(USER)](module/Base/User)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|[DER1N_PRODUCT_MEMBER_USER_USER_ID](der/DER1N_PRODUCT_MEMBER_USER_USER_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|[DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_WORK_ITEM_PID](der/DER1N_WORK_ITEM_WORK_ITEM_PID)|1:N关系|递归关系、关联通知、||
|[项目(PROJECT)](module/ProjMgmt/Project)|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|[DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID](der/DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID)|1:N关系|||
|[岗位(JOB)](module/Base/Job)|[企业用户(USER)](module/Base/User)|[DER1N_USER_JOB_JOB_ID](der/DER1N_USER_JOB_JOB_ID)|1:N关系|||
|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|1:N关系|||
|[页面(PAGE)](module/Wiki/Article_page)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_PAGE_OWNER_ID](der/DERCUSTOM_ATTENTION_PAGE_OWNER_ID)|自定义关系|||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[执行用例(RUN)](module/TestMgmt/Run)|[DER1N_RUN_TEST_CASE_CASE_ID](der/DER1N_RUN_TEST_CASE_CASE_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[需求(IDEA)](module/ProdMgmt/Idea)|[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、数据访问控制、||
|[部门(DEPARTMENT)](module/Base/Department)|[企业用户(USER)](module/Base/User)|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|1:N关系|||
|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|1:N关系|||
|[文件夹(PORTFOLIO)](module/Base/Portfolio)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|[DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID](der/DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[项目发布(RELEASE)](module/ProjMgmt/Release)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|1:N关系|||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_WORK_ITEM_TOP_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID)|1:N关系|附属关系、||
|[排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_PRODUCT_PLAN](der/DERCUSTOM_RELATION_PRODUCT_PLAN)|自定义关系|||
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type)|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/Work_item_state)|[DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|1:N关系|||
|[工时类别(WORKLOAD_TYPE)](module/Base/Workload_type)|[工时(WORKLOAD)](module/Base/Workload)|[DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID](der/DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID)|1:N关系|||
|[看板(BOARD)](module/ProjMgmt/Board)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_BOARD_BOARD_ID](der/DER1N_WORK_ITEM_BOARD_BOARD_ID)|1:N关系|||
|[需求(IDEA)](module/ProdMgmt/Idea)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_IDEA_OWNER_ID](der/DERCUSTOM_ATTENTION_IDEA_OWNER_ID)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section)|[DER1N_VERSION_SECTION_PROJECT_PROJECT_ID](der/DER1N_VERSION_SECTION_PROJECT_PROJECT_ID)|1:N关系|||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID](der/DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID)|自定义关系|||
|[页面(PAGE)](module/Wiki/Article_page)|[评论(COMMENT)](module/Base/Comment)|[DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID)|自定义关系|||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_TICKET_ATTACHMENT](der/DERCUSTOM_TICKET_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||
|[执行用例(RUN)](module/TestMgmt/Run)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_RUN_OWNER_ID](der/DERCUSTOM_ATTENTION_RUN_OWNER_ID)|自定义关系|||
|[版本（temp）(VERSION)](module/ProjMgmt/Version)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_VERSION_VERSION_ID](der/DER1N_WORK_ITEM_VERSION_VERSION_ID)|1:N关系|||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[用例步骤(STEP)](module/TestMgmt/Step)|[DER1N_STEP_TEST_CASE_CASE_ID](der/DER1N_STEP_TEST_CASE_CASE_ID)|1:N关系|附属关系、嵌套操作、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)|自定义关系|||
|[版本（temp）(VERSION)](module/ProjMgmt/Version)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[DER1N_TEST_PLAN_VERSION_VERSION_ID](der/DER1N_TEST_PLAN_VERSION_VERSION_ID)|1:N关系|||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[收藏(FAVORITE)](module/Base/Favorite)|[DERCUSTOM_FAVORITE_PRODUCT](der/DERCUSTOM_FAVORITE_PRODUCT)|自定义关系|||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID](der/DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_PROJECT_PROJECT_ID](der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、关联通知、附属扩展、||
|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[执行用例(RUN)](module/TestMgmt/Run)|[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|1:N关系|附属关系、数据访问控制、||
|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history)|[用例步骤(STEP)](module/TestMgmt/Step)|[run_history_re_step](der/run_history_re_step)|自定义关系|||
|[工单(TICKET)](module/ProdMgmt/Ticket)|[关注(ATTENTION)](module/Base/Attention)|[DERCUSTOM_ATTENTION_TICKET_OWNER_ID](der/DERCUSTOM_ATTENTION_TICKET_OWNER_ID)|自定义关系|||
|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|自定义关系|||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|[DER1N_CUSTOMER_PRODUCT_PRODUCT_ID](der/DER1N_CUSTOMER_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、数据访问控制、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[最近访问(RECENT)](module/Base/Recent)|[DERCUSTOM_RECENT_WORK_ITEM](der/DERCUSTOM_RECENT_WORK_ITEM)|自定义关系|||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[用例执行历史(CASE_HISTORY)](module/TestMgmt/Case_history)|[DER1N_CASE_HISTORY_TEST_CASE_CASE_ID](der/DER1N_CASE_HISTORY_TEST_CASE_CASE_ID)|1:N关系|||
|[企业用户(USER)](module/Base/User)|[部门(DEPARTMENT)](module/Base/Department)|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|1:N关系|||
|[产品(PRODUCT)](module/ProdMgmt/Product)|[工单(TICKET)](module/ProdMgmt/Ticket)|[DER1N_TICKET_PRODUCT_PRODUCT_ID](der/DER1N_TICKET_PRODUCT_PRODUCT_ID)|1:N关系|附属关系、数据访问控制、||
|[空间(SPACE)](module/Wiki/Space)|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)|1:N关系|附属关系、附属关系(N:N连接)、数据访问控制、||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[评论(COMMENT)](module/Base/Comment)|[DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID)|自定义关系|||
|[页面模板(STENCIL)](module/Wiki/Stencil)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_ATTACHMENT_STENCIL](der/DERCUSTOM_ATTACHMENT_STENCIL)|自定义关系|附属关系、嵌套操作、||
|[项目(PROJECT)](module/ProjMgmt/Project)|[工作(WORK)](module/Base/Work)|[DERCUSTOM_WORK_PROJECT_PILOT_ID](der/DERCUSTOM_WORK_PROJECT_PILOT_ID)|自定义关系|||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|[关联(RELATION)](module/Base/Relation)|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|自定义关系|||
|[项目(PROJECT)](module/ProjMgmt/Project)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|[DER1N_TEST_PLAN_PROJECT_PROJECT_ID](der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID)|1:N关系|||
|[部门(DEPARTMENT)](module/Base/Department)|[部门(DEPARTMENT)](module/Base/Department)|[DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID](der/DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID)|1:N关系|||
|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID](der/DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID)|1:N关系|||
|[企业用户(USER)](module/Base/User)|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|1:N关系|附属关系、附属关系(N:N连接)、||
|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|[产品(PRODUCT)](module/ProdMgmt/Product)|[DERINDEX_PRODUCT_REFERENCES_INDEX](der/DERINDEX_PRODUCT_REFERENCES_INDEX)|索引关系|||
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|1:N关系|||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|[交付物(DELIVERABLE)](module/Base/Deliverable)|[DERCUSTOM_WORK_ITEM_DELIVERABLE](der/DERCUSTOM_WORK_ITEM_DELIVERABLE)|自定义关系|||
|[类别(CATEGORY)](module/Base/Category)|[需求(IDEA)](module/ProdMgmt/Idea)|[DER1N_IDEA_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_CATEGORY_CATEGORY_ID)|1:N关系|||
|[评论(COMMENT)](module/Base/Comment)|[评论(COMMENT)](module/Base/Comment)|[DER1N_COMMENT_COMMENT_PID](der/DER1N_COMMENT_COMMENT_PID)|1:N关系|||
|[空间(SPACE)](module/Wiki/Space)|[页面模板(STENCIL)](module/Wiki/Stencil)|[DER1N_STENCIL_SPACE_SPACE_ID](der/DER1N_STENCIL_SPACE_SPACE_ID)|1:N关系|||
|[项目发布(RELEASE)](module/ProjMgmt/Release)|[发布阶段(STAGE)](module/ProjMgmt/Stage)|[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)|1:N关系|||
|[需求(IDEA)](module/ProdMgmt/Idea)|[附件(ATTACHMENT)](module/Base/Attachment)|[DERCUSTOM_IDEA_ATTACHMENT](der/DERCUSTOM_IDEA_ATTACHMENT)|自定义关系|附属关系、嵌套操作、||