# 测试管理(TestMgmt) <!-- {docsify-ignore-all} -->

主要包含测试相关的业务实体的管理，如：测试库、测试计划、测试用例、执行用例等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|baseline_test_case|主实体|无存储||是|否|附属主实体控制（未映射自控）|否|记录测试管理中基线的测试用例|
|[用例执行历史(CASE_HISTORY)](module/TestMgmt/case_history)|case_history|主实体|SQL|CASE_HISTORY|否|否|自控制|否|记录测试用例的执行结果，用于跟踪测试的历史和状态变化。|
|[流程准则(GUIDELINE)](module/TestMgmt/guideline)|guideline|主实体|SQL|GUIDELINE|否|否|附属主实体控制（未映射自控）|否|记录评审流程准则相关信息。|
|[测试库(LIBRARY)](module/TestMgmt/library)|library|主实体|SQL|LIBRARY|否|否|自控制|否|测试管理核心实体，包含测试的基本信息、生命周期状态等。|
|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|library_member|关系实体|SQL|LIBRARY_MEMBER|是|否|附属主实体控制（未映射自控）|否|记录测试库中各个成员的角色·，方便管理和协作|
|[评审(REVIEW)](module/TestMgmt/review)|review|主实体|SQL|REVIEW|否|否|附属主实体控制（未映射自控）|否|管理和记录测试用例评审。|
|[评审后置动作(REVIEW_ACTION_RULE)](module/TestMgmt/review_action_rule)|review_action_rule|主实体|无存储||否|否|自控制|否|记录评审执行流程相关信息。|
|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|review_content|关系实体|无存储||是|否|附属主实体控制（未映射自控）|否|记录测试用例的评审内容|
|[评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend)|review_content_extend|主实体|SQL|REVIEW_CONTENT_EXTEND|否|否|自控制|否|记录测试用例的评审内容的额外信息，例如版本、评审结果等|
|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)|review_result|主实体|SQL|REVIEW_RESULT|否|否|自控制|否|存储评审的评审结果|
|[评审规则(REVIEW_RULE)](module/TestMgmt/review_rule)|review_rule|主实体|无存储||否|否|自控制|否|记录评审规则相关信息。|
|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)|review_stage|主实体|无存储||否|否|自控制|否|存储评审阶段的信息|
|[评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)|review_wizard|主实体|SQL|REVIEW|否|否|附属主实体控制（未映射自控）|否|评审向导信息|
|[执行用例(RUN)](module/TestMgmt/run)|run|关系实体|SQL|RUN|是|否|附属主实体控制（未映射自控）|是|用于记录测试库中测试用例的执行情况，包括测试类型、执行者和执行时间。|
|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)|run_attachment|动态附属实体|SQL|ATTACHMENT|否|是|附属主实体控制|否|执行用例中产出的具体成果物，包括文档、软件代码、报告等。|
|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history)|run_history|主实体|SQL|RUN_HISTORY|否|否|自控制|否|记录用例的执行结果，包括执行人，执行步骤，实际结果等。|
|[用例步骤(STEP)](module/TestMgmt/step)|step|主实体|无存储||否|否|自控制|否|定义测试用例的详细步骤。|
|[用例(TEST_CASE)](module/TestMgmt/test_case)|test_case|主实体|SQL|TEST_CASE|否|否|附属主实体控制（未映射自控）|是|具体描述测试操作步骤、预期结果的文档。|
|[用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template)|test_case_template|主实体|SQL|TEST_CASE_TEMPLATE|否|否|附属主实体控制|否|用于存储标准化的用例模板，便于快速建立标准的结构化用例。|
|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|test_plan|主实体|SQL|TEST_PLAN|否|是|附属主实体控制（未映射自控）|否|定义测试的范围、方法和资源分配，可在测试计划内添加多个执行用例。|
|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|test_suite|主实体|SQL|TEST_SUITE|否|否|附属主实体控制（未映射自控）|否|用于结构化管理测试用例。|

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[测试管理](er/test_mgmt)|test_mgmt||

