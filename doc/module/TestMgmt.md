# 测试管理(TestMgmt) <!-- {docsify-ignore-all} -->



|    名称   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------  |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[用例执行历史(CASE_HISTORY)](module/TestMgmt/Case_history)|Case_history|主实体|SQL|CASE_HISTORY|否|否|否|自控制|否||
|[测试库(LIBRARY)](module/TestMgmt/Library)|Library|主实体|SQL|LIBRARY|否|否|是|自控制|否||
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|Library_member|关系实体|SQL|LIBRARY_MEMBER|否|是|否|附属主实体控制（未映射自控）|否||
|[执行用例(RUN)](module/TestMgmt/Run)|Run|关系实体|SQL|RUN|否|是|否|自控制|是||
|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history)|Run_history|主实体|SQL|RUN_HISTORY|否|否|否|自控制|否||
|[用例步骤(STEP)](module/TestMgmt/Step)|Step|主实体|无存储||否|否|否|自控制|否||
|[用例(TEST_CASE)](module/TestMgmt/Test_case)|Test_case|主实体|SQL|TEST_CASE|否|否|否|附属主实体控制（未映射自控）|是||
|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|Test_plan|主实体|SQL|TEST_PLAN|否|否|是|附属主实体控制（未映射自控）|否||
|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|Test_suite|主实体|SQL|TEST_SUITE|否|否|否|附属主实体控制（未映射自控）|否||

