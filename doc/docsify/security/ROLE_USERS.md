# 默认用户权限 <!-- {docsify-ignore-all} -->



### 统一资源

|统一资源|标识|
|---|---|
|项目管理|PROJECT|
|产品管理|PRODUCT|
|知识管理|SPACE|
|测试管理|LIBRARY|



### 数据能力

|实体|数据能力|
|---|---|
|[数据字典(DICTIONARY)](module/Base/dictionary_data)|<a href ="#/module/Base/dictionary_data#dictionary_data-all_r">全部数据（读）</a>|
|[收藏(FAVORITE)](module/Base/favorite)|<a href ="#/module/Base/favorite#favorite-all_rw">全部数据（读写）</a>|
|[工时类别(WORKLOAD_TYPE)](module/Base/workload_type)|<a href ="#/module/Base/workload_type#workload_type-all_r">全部数据（读）</a>|
|[产品(PRODUCT)](module/ProdMgmt/product)|<a href ="#/module/ProdMgmt/product#product-admin_rw">管理员（读写）</a>|
|[工单(TICKET)](module/ProdMgmt/ticket)|<a href ="#/module/ProdMgmt/ticket#ticket-user_w">操作用户(写)</a>|
|[用例(TEST_CASE)](module/TestMgmt/test_case)|<a href ="#/module/TestMgmt/test_case#test_case-user_w">操作用户(写)</a>|
|[动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)|<a href ="#/module/Base/dyna_dashboard#dyna_dashboard-all_rw">全部数据（读写）</a>|
|[企业用户(USER)](module/Base/user)|<a href ="#/module/Base/user#user-user_rw">当前用户（读写）</a>|
|[团队(GROUP)](module/Base/group)|<a href ="#/module/Base/group#group-admin_r">管理员（读）</a>|
|[最近访问(RECENT)](module/Base/recent)|<a href ="#/module/Base/recent#recent-user_rw">普通用户（读写）</a>|
|[页面模板(STENCIL)](module/Wiki/stencil)|<a href ="#/module/Wiki/stencil#stencil-user_r">只读用户（读）</a>|
|[交付物(DELIVERABLE)](module/Base/deliverable)|<a href ="#/module/Base/deliverable#deliverable-all_rw">全部数据（读写）</a>|
|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state)|<a href ="#/module/ProjMgmt/work_item_state#work_item_state-all_r">全部数据（读）</a>|
|[关联(RELATION)](module/Base/relation)|<a href ="#/module/Base/relation#relation-all_rw">全部数据（读写）</a>|
|[空间(SPACE)](module/Wiki/space)|<a href ="#/module/Wiki/space#space-user_rw">普通用户（读写）</a>|
|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history)|<a href ="#/module/ProjMgmt/transition_history#transition_history-all_rw">全部数据（读写）</a>|
|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)|<a href ="#/module/ProjMgmt/project_tag#project_tag-all_r">全部数据（读）</a>|
|[项目(PROJECT)](module/ProjMgmt/project)|<a href ="#/module/ProjMgmt/project#project-user_rw">普通用户（读写）</a>|
|[测试库(LIBRARY)](module/TestMgmt/library)|<a href ="#/module/TestMgmt/library#library-admin_rw">管理员（读写）</a>|
|[项目(PROJECT)](module/ProjMgmt/project)|<a href ="#/module/ProjMgmt/project#project-admin_rw">管理员（读写）</a>|
|[需求(IDEA)](module/ProdMgmt/idea)|<a href ="#/module/ProdMgmt/idea#idea-user_w">操作用户(写)</a>|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|<a href ="#/module/ProjMgmt/work_item_type#work_item_type-all_r">全部数据（读）</a>|
|[类别(CATEGORY)](module/Base/category)|<a href ="#/module/Base/category#category-all_rw">全部数据（读写）</a>|
|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting)|<a href ="#/module/Base/notify_setting#notify_setting-user_rw">当前用户（读写）</a>|
|[执行用例(RUN)](module/TestMgmt/run)|<a href ="#/module/TestMgmt/run#run-all_rw">全部数据（读写）</a>|
|[分组(SECTION)](module/Base/section)|<a href ="#/module/Base/section#section-all_rw">全部数据（读写）</a>|
|[版本(VERSION)](module/Base/version)|<a href ="#/module/Base/version#version-all_rw">全部数据（读写）</a>|
|[产品(PRODUCT)](module/ProdMgmt/product)|<a href ="#/module/ProdMgmt/product#product-user_r">只读用户（读）</a>|
|[活动(ACTIVITY)](module/Base/activity)|<a href ="#/module/Base/activity#activity-all_r">全部数据（读）</a>|
|[登录日志(LOGIN_LOG)](module/Base/login_log)|<a href ="#/module/Base/login_log#login_log-user_r">当前用户（读）</a>|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|<a href ="#/module/Base/portfolio#portfolio-user_rw">普通用户（读写）</a>|
|[空间(SPACE)](module/Wiki/space)|<a href ="#/module/Wiki/space#space-admin_rw">管理员（读写）</a>|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|<a href ="#/module/Base/portfolio#portfolio-admin_rw">管理员（读写）</a>|
|[主状态值代理(MSVALUEPROXY)](module/extension/MSValueProxy)|<a href ="#/module/extension/MSValueProxy#msvalueproxy-all_r">全部数据（读）</a>|
|[产品(PRODUCT)](module/ProdMgmt/product)|<a href ="#/module/ProdMgmt/product#product-user_rw">普通用户（读写）</a>|
|[人员(SYS_PERSON)](module/ibizsysmgr/sys_person)|<a href ="#/module/ibizsysmgr/sys_person#sys_person-user_rw">普通用户（读写）</a>|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|<a href ="#/module/ProjMgmt/work_item#work_item-user_w">操作用户(写)</a>|
|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|<a href ="#/module/TestMgmt/review_content#review_content-all_rw">全部数据（读写）</a>|
|[测试库(LIBRARY)](module/TestMgmt/library)|<a href ="#/module/TestMgmt/library#library-user_rw">普通用户（读写）</a>|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|<a href ="#/module/Base/portfolio#portfolio-user_r">只读用户（读）</a>|
|[基线(BASELINE)](module/Base/baseline)|<a href ="#/module/Base/baseline#baseline-user_w">操作用户(写)</a>|
|[洞察力(INSIGHT)](module/Base/insight)|<a href ="#/module/Base/insight#insight-all_r">全部数据（读）</a>|
|[项目(PROJECT)](module/ProjMgmt/project)|<a href ="#/module/ProjMgmt/project#project-user_r">只读用户（读）</a>|
|[测试库(LIBRARY)](module/TestMgmt/library)|<a href ="#/module/TestMgmt/library#library-user_r">只读用户（读）</a>|
|[部门(DEPARTMENT)](module/Base/department)|<a href ="#/module/Base/department#department-all_r">全部数据（读）</a>|
|[企业用户(USER)](module/Base/user)|<a href ="#/module/Base/user#user-all_r">全部数据（读）</a>|
|[工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)|<a href ="#/module/ProdMgmt/ticket_type#ticket_type-all_r">全部数据（读）</a>|
|[人员(SYS_EMP)](module/ebsx/SysEmployee)|<a href ="#/module/ebsx/SysEmployee#sysemployee-user_rw">普通用户（读写）</a>|
|[工时(WORKLOAD)](module/Base/workload)|<a href ="#/module/Base/workload#workload-all_rw">全部数据（读写）</a>|
|[空间(SPACE)](module/Wiki/space)|<a href ="#/module/Wiki/space#space-user_r">只读用户（读）</a>|



