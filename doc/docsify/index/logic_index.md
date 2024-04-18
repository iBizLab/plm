# 处理逻辑 <!-- {docsify-ignore-all} -->



## [关注(ATTENTION)](module/Base/attention.md) :id=attention

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[添加关注后发送通知](module/Base/attention/logic/after_create_notify)|after_create_notify|无||添加关注人员后，触发提醒关注通知消息给关注人员|



## [看板(BOARD)](module/ProjMgmt/board.md) :id=board

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
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
|[新建评论后通知](module/Base/comment/logic/after_create_notify)|after_create_notify|无||发表评论后，发送通知消息至相应负责人员、关注人员|



## [客户(CUSTOMER)](module/ProdMgmt/customer.md) :id=customer

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品客户关联分页计数器](module/ProdMgmt/customer/logic/product_customer_re_counters)|product_customer_re_counters|无||产品下的客户主视图的分页计数器数据来源|
|[其他实体关联客户](module/ProdMgmt/customer/logic/others_relation_customer)|others_relation_customer|无||客户实体的关联操作，生成正向，反向关联数据|
|[删除客户发送通知](module/ProdMgmt/customer/logic/remove_customer_notify)|remove_customer_notify|无||根据客户标识触发删除客户发送通知|
|[取消关联](module/ProdMgmt/customer/logic/del_relation)|del_relation|无||客户取消关联数据（正反向关联数据同时删除）|
|[变更负责人附加逻辑](module/ProdMgmt/customer/logic/assignee_onchage)|assignee_onchage|属性逻辑||客户负责人变更时触发相应的通知消息|
|[客户选择工单](module/ProdMgmt/customer/logic/customer_choose_ticket)|customer_choose_ticket|无||客户选择工单操作，更新工单的客户属性|
|[无操作](module/ProdMgmt/customer/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加至类别](module/ProdMgmt/customer/logic/add_categories)|add_categories|无||添加客户类别操作|











## [需求(IDEA)](module/ProdMgmt/idea.md) :id=idea

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品需求关联分页计数器](module/ProdMgmt/idea/logic/product_idea_re_counters)|product_idea_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联需求](module/ProdMgmt/idea/logic/others_relation_idea)|others_relation_idea|无||需求实体的关联操作，生成正向，反向关联数据|
|[删除](module/ProdMgmt/idea/logic/delete)|delete|无||需求数据的逻辑删除，修改需求的是否删除属性值|
|[取消关联](module/ProdMgmt/idea/logic/del_relation)|del_relation|无||产品需求取消关联数据（正反向关联数据同时删除）|
|[变更需求状态](module/ProdMgmt/idea/logic/change_state)|change_state|无||产品需求状态变更触发相关通知|
|[归档](module/ProdMgmt/idea/logic/archive)|archive|无||未归档需求数据的归档处理，修改需求的归档状态为归档|
|[恢复](module/ProdMgmt/idea/logic/recover)|recover|无||已删除状态需求数据的恢复，修改需求的是否删除属性值，并恢复访问记录|
|[无操作](module/ProdMgmt/idea/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/idea/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品需求删除或恢复时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/idea/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品需求归档或激活数据时触发相应的通知消息|
|[激活](module/ProdMgmt/idea/logic/activate)|activate|无||激活已归档状态需求，修改需求的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/idea/logic/state_onchange)|state_onchange|属性逻辑||需求数据状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/idea/logic/create_recent)|create_recent|无||在用户对需求数据进行了get或update操作时生成相应的访问记录|
|[获取默认模块](module/ProdMgmt/idea/logic/idea_category)|idea_category|无||获取需求的默认模块|
|[计划内需求批删除](module/ProdMgmt/idea/logic/plan_delete_idea)|plan_delete_idea|无||排期（计划）内取消关联需求，删除正反向关联数据|
|[负责人变更附加逻辑](module/ProdMgmt/idea/logic/assignee_onchange)|assignee_onchange|属性逻辑||产品需求负责人变更时触发相应的通知消息|
|[需求复制](module/ProdMgmt/idea/logic/idea_copy)|idea_copy|无||复制需求至其他产品（复制需求信息，在目标产品中创建新需求）|
|[需求排期](module/ProdMgmt/idea/logic/idea_re_plan)|idea_re_plan|无||需求排期，用户在排期内关联相应需求，生成正反向关联关系|
|[需求移动](module/ProdMgmt/idea/logic/idea_move)|idea_move|无||移动需求至其他位置（修改需求的所属产品，重新生成编号）|




## [测试库(LIBRARY)](module/TestMgmt/library.md) :id=library

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[创建之前](module/TestMgmt/library/logic/before_create)|before_create|无||创建测试库之前，对添加的测试库成员进行处理|
|[删除](module/TestMgmt/library/logic/delete)|delete|无||测试库数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/TestMgmt/library/logic/un_favorite)|un_favorite|无||测试库取消星标|
|[归档](module/TestMgmt/library/logic/archive)|archive|无||未归档测试库数据的归档处理，修改测试库的归档状态为已归档|
|[恢复](module/TestMgmt/library/logic/recover)|recover|无||恢复已删除状态测试库数据，修改测试库的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/TestMgmt/library/logic/recent_parent_name)|recent_parent_name|属性逻辑||当测试库名称变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[批量更新最近访问父标识](module/TestMgmt/library/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||当测试库标识变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[是否删除变更附加逻辑](module/TestMgmt/library/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/TestMgmt/library/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||测试库归档或激活时触发相应的通知消息|
|[激活](module/TestMgmt/library/logic/activate)|activate|无||激活已归档状态测试库，修改测试库的归档属性|
|[生成最近访问](module/TestMgmt/library/logic/create_recent)|create_recent|无||在用户对测试库数据进行了get或update操作时生成相应的访问记录|
|[设置星标](module/TestMgmt/library/logic/favorite)|favorite|无||设置为星标测试库|


## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) :id=library_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[新建测试库成员](module/TestMgmt/library_member/logic/create_library_member)|create_library_member|无||新建测试库成员|
|[移除测试库成员通知](module/TestMgmt/library_member/logic/remove_library_member_notify)|remove_library_member_notify|无||移除测试库成员时向对应用户发送通知消息|






## [通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md) :id=notify_setting

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[保存设置](module/Base/notify_setting/logic/save_setting)|save_setting|无|||
|[获取用户通知设置](module/Base/notify_setting/logic/get_by_user)|get_by_user|无|||


## [页面(PAGE)](module/Wiki/article_page.md) :id=article_page

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/Wiki/article_page/logic/delete)|delete|无||页面数据的逻辑删除，修改产品的是否删除属性值|
|[发布页面](module/Wiki/article_page/logic/publish_page)|publish_page|无||页面发布，设置发布状态及发布人，发布时间|
|[发布页面（测试）](module/Wiki/article_page/logic/publish_page_test)|publish_page_test|无||（测试）页面发布，设置发布状态及发布人，发布时间|
|[取消星标](module/Wiki/article_page/logic/un_favorite)|un_favorite|无||页面取消收藏|
|[另存为模板](module/Wiki/article_page/logic/save_to_stencil)|save_to_stencil|无||将当前页面存为组织/空间模板|
|[恢复](module/Wiki/article_page/logic/recover)|recover|无||恢复已删除状态页面数据，修改页面的是否删除属性值，并恢复访问记录|
|[恢复历史版本](module/Wiki/article_page/logic/recover_version)|recover_version|无||恢复页面版本至某一指定历史版本|
|[无操作](module/Wiki/article_page/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[生成最近访问](module/Wiki/article_page/logic/create_recent)|create_recent|无||在用户对页面数据进行了get或update操作时生成相应的访问记录|
|[获取历史版本](module/Wiki/article_page/logic/get_by_version)|get_by_version|无||获取当前页面的历史版本记录|
|[获取模板数据](module/Wiki/article_page/logic/get_form_stencil)|get_form_stencil|无||获取页面的模板数据，并返回|
|[获取草稿页面](module/Wiki/article_page/logic/get_draft_pages)|get_draft_pages|无|||
|[设置星标](module/Wiki/article_page/logic/favorite)|favorite|无||加入到我的收藏页面|


## [文件夹(PORTFOLIO)](module/Base/portfolio.md) :id=portfolio

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[从项目集中移除](module/Base/portfolio/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除指定的子项目集|
|[删除项目集](module/Base/portfolio/logic/delete_project_set)|delete_project_set|无||项目集数据的逻辑删除，修改项目集的是否删除属性值|
|[取消星标](module/Base/portfolio/logic/un_favorite)|un_favorite|无||项目集取消星标|
|[恢复项目集](module/Base/portfolio/logic/recover_project_set)|recover_project_set|无||恢复已删除状态项目集数据，修改项目集的是否删除属性值|
|[设置星标](module/Base/portfolio/logic/favorite)|favorite|无||设置为星标项目集|


## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md) :id=portfolio_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[移除项目集成员通知](module/Base/portfolio_member/logic/remove_project_set_member_notify)|remove_project_set_member_notify|无||移除项目集成员时向对应用户发送通知消息|


## [产品(PRODUCT)](module/ProdMgmt/product.md) :id=product

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品关联分页计数器](module/ProdMgmt/product/logic/product_counters)|product_counters|无||计算关系分页下事件的条数|
|[产品关联空间](module/ProdMgmt/product/logic/product_re_space)|product_re_space|无||产品关联空间操作，生成正反向关联数据|
|[创建之前](module/ProdMgmt/product/logic/before_create)|before_create|无||创建产品之前，对添加的产品成员进行处理|
|[删除](module/ProdMgmt/product/logic/delete)|delete|无||产品数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProdMgmt/product/logic/un_favorite)|un_favorite|无||产品取消星标|
|[归档](module/ProdMgmt/product/logic/archive)|archive|无||未归档产品数据的归档处理，修改产品的归档状态为已归档|
|[恢复](module/ProdMgmt/product/logic/recover)|recover|无||恢复已删除状态产品数据，修改产品的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProdMgmt/product/logic/recent_parent_name)|recent_parent_name|属性逻辑||产品名称属性变更时触发最近访问的父名称更新|
|[批量更新最近访问父标识](module/ProdMgmt/product/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||产品编号属性变更时触发最近访问的父标识更新|
|[是否删除变更附加逻辑](module/ProdMgmt/product/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品删除或恢复时时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/product/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品归档或激活数据时触发相应的通知消息|
|[激活](module/ProdMgmt/product/logic/activate)|activate|无||激活已归档状态产品，修改产品的归档属性|
|[生成最近访问](module/ProdMgmt/product/logic/create_recent)|create_recent|无||在用户对产品数据进行了get或update操作时生成相应的访问记录|
|[设置星标](module/ProdMgmt/product/logic/favorite)|favorite|无||设置为星标产品|


## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) :id=product_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[新建产品成员](module/ProdMgmt/product_member/logic/create_product_member)|create_product_member|无||新建产品成员|
|[移除产品成员通知](module/ProdMgmt/product_member/logic/remove_product_member_notify)|remove_product_member_notify|无||移除产品成员时向对应用户发送通知消息|


## [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md) :id=product_plan

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/ProdMgmt/product_plan/logic/delete)|delete|无||产品排期数据的逻辑删除，修改产品排期的是否删除属性|
|[排期关联需求](module/ProdMgmt/product_plan/logic/product_plan_relation_idea)|product_plan_relation_idea|无||排期计划关联需求，生成正反向关联数据|





## [项目(PROJECT)](module/ProjMgmt/project.md) :id=project

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[从项目集中移除](module/ProjMgmt/project/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除某个指定子项目|
|[其他实体关联空间](module/ProjMgmt/project/logic/other_re_space)|other_re_space|无||空间实体关联操作，生成正向，反向关联数据|
|[创建之前](module/ProjMgmt/project/logic/before_create)|before_create|无||创建项目之前，对添加的项目成员进行处理|
|[删除](module/ProjMgmt/project/logic/delete)|delete|无||项目数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProjMgmt/project/logic/un_favorite)|un_favorite|无||项目取消星标|
|[归档](module/ProjMgmt/project/logic/archive)|archive|无||未归档项目数据的归档处理，修改项目的归档状态为已归档|
|[恢复](module/ProjMgmt/project/logic/recover)|recover|无||恢复已删除状态项目数据，修改项目的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProjMgmt/project/logic/recent_parent_name)|recent_parent_name|属性逻辑||当项目名称变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[批量更新最近访问父标识](module/ProjMgmt/project/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||当项目标识变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[是否删除变更附加逻辑](module/ProjMgmt/project/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||项目删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProjMgmt/project/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||项目归档或激活时触发相应的通知消息|
|[激活](module/ProjMgmt/project/logic/activate)|activate|无||激活已归档状态项目，修改项目的归档属性|
|[生成最近访问](module/ProjMgmt/project/logic/create_recent)|create_recent|无||在用户对项目数据进行了get或update操作时生成相应的访问记录|
|[生成默认看板](module/ProjMgmt/project/logic/create_default_board)|create_default_board|无||新建看板项目后，会附加生成出默认看板|
|[获取项目进度](module/ProjMgmt/project/logic/get_schedule)|get_schedule|无||通过已完成工作项数量/所有工作项数量，计算出此项目进度|
|[设置星标](module/ProjMgmt/project/logic/favorite)|favorite|无||设置为星标项目|
|[负责人变更附加逻辑](module/ProjMgmt/project/logic/assignee_id_onchange)|assignee_id_onchange|属性逻辑||项目负责人变更时触发相应的通知消息|
|[项目状态变更通知](module/ProjMgmt/project/logic/state_notify)|state_notify|属性逻辑||项目状态变更时触发相应的通知消息|


## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md) :id=project_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[新建项目成员](module/ProjMgmt/project_member/logic/create_project_member)|create_project_member|无||新建项目成员|
|[移除项目成员通知](module/ProjMgmt/project_member/logic/remove_project_member_notify)|remove_project_member_notify|无||移除项目成员时向对应用户发送通知消息|




## [实体属性(PSDEFIELD)](module/extension/PSDEField.md) :id=PSDEField

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[GetDraft](module/extension/PSDEField/logic/GetDraft)|GetDraft|无|||




## [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic.md) :id=PSDELogic

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[从模板建立规则](module/extension/PSDELogic/logic/create_by_template)|create_by_template|无|||
|[获取最后运行状态](module/extension/PSDELogic/logic/get_last_run_info)|get_last_run_info|无|||







## [最近访问(RECENT)](module/Base/recent.md) :id=recent

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[定时清理最近访问数据](module/Base/recent/logic/recent_clean)|recent_clean|无||每天定时清理最近访问数据，每人每个访问类型数据只保留100条|
|[我创建的事项](module/Base/recent/logic/my_created_entry)|my_created_entry|无||查询当前用户创建的事项|
|[我负责的事项](module/Base/recent/logic/my_charge_entry)|my_charge_entry|无||查询我负责的事项，工作台的计数器使用|
|[最近访问](module/Base/recent/logic/recent_access)|recent_access|无||查询最近访问数据，并获取他们的父级|




## [项目发布(RELEASE)](module/ProjMgmt/release.md) :id=release

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[规划工作项](module/ProjMgmt/release/logic/plan_work_item)|plan_work_item|无||规划工作项至指定发布|




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
|[测试计划对比分析](module/TestMgmt/run/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[添加计划执行用例](module/TestMgmt/run/logic/create_plan_run)|create_plan_run|无||将测试计划主键置空并生成执行用例|
|[移除用例相关信息](module/TestMgmt/run/logic/delete_run_info)|delete_run_info|无||在执行remove操作之前，移除相关的执行用例信息|
|[获取实际工时](module/TestMgmt/run/logic/get_actual_workload)|get_actual_workload|无||获取用例的实际工时|
|[获取当前用例详情](module/TestMgmt/run/logic/this_run_details)|this_run_details|无||获取当前执行用例详情信息|
|[规划计划](module/TestMgmt/run/logic/program_plan)|program_plan|无||规划当前计划内用例（添加用例至测试计划内）|
|[记录执行结果](module/TestMgmt/run/logic/create_result)|create_result|无||记录当前执行用例的执行结果|
|[设置执行人](module/TestMgmt/run/logic/set_executor)|set_executor|无||设置当前执行用例执行人|
|[重置为未测](module/TestMgmt/run/logic/reset_not_test)|reset_not_test|无||重置当前执行用例的执行状态为初始未测状态|
|[附加用例步骤](module/TestMgmt/run/logic/add_steps)|add_steps|无||获取用例步骤，并返回|



## [执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md) :id=run_history

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[执行结果获取](module/TestMgmt/run_history/logic/run_history_get)|run_history_get|无||获取执行结果|


## [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment.md) :id=search_attachment

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[高级搜索](module/Base/search_attachment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|


## [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) :id=search_comment

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[高级搜索](module/Base/search_comment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|



## [分组(SECTION)](module/Base/section.md) :id=section

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[删除分组及其下类别](module/Base/section/logic/delete_section)|delete_section|无||删除分组及其下子类别（测试）|



## [空间(SPACE)](module/Wiki/space.md) :id=space

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联空间](module/Wiki/space/logic/other_re_space)|other_re_space|无||其他实体关联空间操作，生成正反向关联数据|
|[创建之前](module/Wiki/space/logic/before_create)|before_create|无||创建空间之前，对添加的空间成员进行处理|
|[删除](module/Wiki/space/logic/delete)|delete|无||空间数据的逻辑删除，修改产品的是否删除属性值|
|[取消关联](module/Wiki/space/logic/del_relation)|del_relation|无||空间取消关联数据（正反向关联数据同时删除）|
|[取消星标](module/Wiki/space/logic/un_favorite)|un_favorite|无||空间取消星标|
|[归档](module/Wiki/space/logic/archive)|archive|无||未归档空间数据的归档处理，修改空间的归档状态为已归档|
|[恢复](module/Wiki/space/logic/recover)|recover|无||已删除状态空间数据的恢复，修改空间的是否删除属性值，并恢复访问记录|
|[无操作](module/Wiki/space/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[激活](module/Wiki/space/logic/activate)|activate|无||激活已归档状态空间，修改空间的归档属性|
|[生成最近访问](module/Wiki/space/logic/create_recent)|create_recent|无||在用户对空间数据进行了get或update操作时生成相应的访问记录|
|[移出分类](module/Wiki/space/logic/move_out_category)|move_out_category|无||将空间移除分类|
|[自动创建主页](module/Wiki/space/logic/auto_create_home_page)|auto_create_home_page|无||附加在实体的CREATE行为后，自动生成模板化的主页|
|[设置星标](module/Wiki/space/logic/favorite)|favorite|无||设置为星标产品|


## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) :id=space_member

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[移除空间成员发送通知](module/Wiki/space_member/logic/remove_space_member_notify)|remove_space_member_notify|无||移除空间成员时向对应用户发送通知消息|


## [迭代(SPRINT)](module/ProjMgmt/sprint.md) :id=sprint

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[开始迭代](module/ProjMgmt/sprint/logic/start_sprint)|start_sprint|无||开始迭代|
|[无操作](module/ProjMgmt/sprint/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[结束迭代](module/ProjMgmt/sprint/logic/end_sprint)|end_sprint|无||结束迭代，根据用户选择，将未完成的工作项 移动至其他迭代会待分配|
|[获取未完成的工作项数量](module/ProjMgmt/sprint/logic/get_not_finish)|get_not_finish|无||完成迭代时，判断此迭代下是否存在未完成的工作项；提醒用户是否将未完成的工作项状态变更至已完成|



## [页面模板(STENCIL)](module/Wiki/stencil.md) :id=stencil

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Wiki/stencil/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[根据模板建立页面草稿](module/Wiki/stencil/logic/new_draft_form_stencil)|new_draft_form_stencil|无||获取页面的模板数据，并返回|











## [规则模板(TEMPLATE_FLOW)](module/Base/template_flow.md) :id=template_flow

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[同步父子工作项的完成状态](module/Base/template_flow/logic/sync_work_item_finish)|sync_work_item_finish|事件处理（运行时支持）|||
|[定时将已完成工作项归档](module/Base/template_flow/logic/turn_work_item_archived)|turn_work_item_archived|定时作业（运行时支持）||通过定时任务，将已完成的工作项归档，结束时间超过三天|
|[自动创建子任务](module/Base/template_flow/logic/auto_create_sub_work_item)|auto_create_sub_work_item|事件处理（运行时支持）|||
|[自动设置工作项负责人](module/Base/template_flow/logic/auto_fill_assign_man)|auto_fill_assign_man|事件处理（运行时支持）|||
|[自动设置测试计划的启动和完成状态](module/Base/template_flow/logic/test_plan_auto_set_state)|test_plan_auto_set_state|事件处理（运行时支持）|||


## [用例(TEST_CASE)](module/TestMgmt/test_case.md) :id=test_case

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联用例](module/TestMgmt/test_case/logic/others_relation_test_case)|others_relation_test_case|无||测试用例实体的关联操作，生成正向，反向关联数据|
|[删除](module/TestMgmt/test_case/logic/delete)|delete|无||测试用例数据的逻辑删除，修改产品的是否删除属性值|
|[取消关联](module/TestMgmt/test_case/logic/del_relation)|del_relation|无||测试用例取消关联数据（正反向关联数据同时删除）|
|[复制用例](module/TestMgmt/test_case/logic/copy_test_case)|copy_test_case|无||复制测试用例|
|[恢复](module/TestMgmt/test_case/logic/recover)|recover|无||恢复已删除状态测试用例数据，修改测试用例的是否删除属性值，并恢复访问记录|
|[无操作](module/TestMgmt/test_case/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/TestMgmt/test_case/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||测试用例删除或恢复时触发相应的通知消息|
|[测试用例关联分页计数器](module/TestMgmt/test_case/logic/test_case_re_counters)|test_case_re_counters|无||计算分页下关联事项的条数|
|[测试用例活动情况](module/TestMgmt/test_case/logic/test_case_maneuver_context)|test_case_maneuver_context|无||报表测试用例活动情况数据源|
|[测试用例规划分析](module/TestMgmt/test_case/logic/program_analyze)|program_analyze|无||报表测试用例规划分析数据源|
|[测试计划对比分析](module/TestMgmt/test_case/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[生成最近访问](module/TestMgmt/test_case/logic/create_recent)|create_recent|无||在用户对测试用例数据进行了get或update操作时生成相应的访问记录|
|[移入计划](module/TestMgmt/test_case/logic/case_move_plan)|case_move_plan|无||将选中测试用例移入执行计划（在指定的执行用例内生成执行用例）|
|[移动用例](module/TestMgmt/test_case/logic/move_test_case)|move_test_case|无||移动用例至其他位置（修改用例的所属测试库，重新生成编号）|
|[维护人变更附加逻辑](module/TestMgmt/test_case/logic/maintenance_onchange)|maintenance_onchange|属性逻辑||测试用例维护人变更时触发相应的通知消息|
|[获取最近执行](module/TestMgmt/test_case/logic/newest_run)|newest_run|无||获取当前测试用例的最近执行记录|
|[规划计划](module/TestMgmt/test_case/logic/program_plan)|program_plan|无||将测试用例规划进测试计划内，生成执行用例|
|[设置维护人](module/TestMgmt/test_case/logic/set_maintenance)|set_maintenance|无||设置当前测试用例维护人|
|[设置评审状态](module/TestMgmt/test_case/logic/set_state)|set_state|无||设置测试用例的评审状态属性|
|[设置重要程度](module/TestMgmt/test_case/logic/set_level)|set_level|无||设置测试用例的重要程度属性|


## [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) :id=test_plan

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[开始测试](module/TestMgmt/test_plan/logic/start_test_plan)|start_test_plan|无||测试计划开始测试|
|[结束测试](module/TestMgmt/test_plan/logic/end_test_plan)|end_test_plan|无||设置测试计划状态为结束|
|[负责人变更附加逻辑](module/TestMgmt/test_plan/logic/assignee_onchange)|assignee_onchange|属性逻辑||测试计划负责人变更时触发相应的通知消息|



## [工单(TICKET)](module/ProdMgmt/ticket.md) :id=ticket

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品工单关联分页计数器](module/ProdMgmt/ticket/logic/product_ticket_re_counters)|product_ticket_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联工单](module/ProdMgmt/ticket/logic/others_relation_ticket)|others_relation_ticket|无||工单实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProdMgmt/ticket/logic/allocate_person)|allocate_person|无||分配工单负责人，修改负责人属性|
|[删除](module/ProdMgmt/ticket/logic/delete)|delete|无||工单数据的逻辑删除，修改工单的是否删除属性值|
|[取消关联](module/ProdMgmt/ticket/logic/del_relation)|del_relation|无||工单取消关联数据（正反向关联数据同时删除）|
|[客户取消关联工单](module/ProdMgmt/ticket/logic/customer_del_ticket)|customer_del_ticket|无||客户取消关联工单操作|
|[客户选择工单](module/ProdMgmt/ticket/logic/customer_choose_ticket)|customer_choose_ticket|无||客户选择工单操作|
|[归档](module/ProdMgmt/ticket/logic/archive)|archive|无||未归档工单数据的归档处理，修改工单的归档状态为归档|
|[恢复](module/ProdMgmt/ticket/logic/recover)|recover|无||已删除状态工单数据的恢复，修改工单的是否删除属性值，并恢复访问记录|
|[无操作](module/ProdMgmt/ticket/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/ticket/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工单删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/ticket/logic/is_archived_onchage)|is_archived_onchage|属性逻辑||工单归档或激活数据时触发相应的通知消息|
|[查询归档数据](module/ProdMgmt/ticket/logic/get_archived_info)|get_archived_info|无||查询数据是否归档，归档则返回归档信息|
|[激活](module/ProdMgmt/ticket/logic/activate)|activate|无||激活已归档状态工单，修改工单的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/ticket/logic/state_onchange)|state_onchange|属性逻辑||工单状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/ticket/logic/create_recent)|create_recent|无||在用户对工单数据进行了get或update操作时生成相应的访问记录|
|[获取产品成员](module/ProdMgmt/ticket/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前登陆者权限|
|[设置标签](module/ProdMgmt/ticket/logic/choose_tag)|choose_tag|无||设置工单标签，修改工单标签信息|
|[负责人变更附加逻辑](module/ProdMgmt/ticket/logic/assignee_onchange)|assignee_onchange|属性逻辑||工单负责人变更时触发相应的通知消息|






## [工作(WORK)](module/Base/work.md) :id=work

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[添加项目](module/Base/work/logic/add_project)|add_project|无||项目集下添加子项目|
|[添加项目集](module/Base/work/logic/add_project_portfolio)|add_project_portfolio|无||项目集下添加子项目集。注：只可选择无子项目集的，预防反复嵌套|


## [工时(WORKLOAD)](module/Base/workload.md) :id=workload

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[产品需求维度工时日历查询](module/Base/workload/logic/idea_dimension)|idea_dimension|无||首页工作台工时日历：产品/产品需求维度查询数据使用|
|[产品需求维度管理工时日历查询](module/Base/workload/logic/idea_management_dimension)|idea_management_dimension|无||工时管理菜单中工时日历：产品/产品需求维度查询数据使用|
|[人员维度工时日历查询](module/Base/workload/logic/member_dimension)|member_dimension|无||工时管理菜单中工时日历：人员维度查询数据使用|
|[删除工时记录前附加逻辑](module/Base/workload/logic/before_remove)|before_remove|无||更新动态存储中的剩余工时|
|[工作类别维度工时日历查询](module/Base/workload/logic/type_of_dimension)|type_of_dimension|无||首页工作台工时日历：工作类型维度查询数据使用|
|[工作类别维度管理工时日历查询](module/Base/workload/logic/type_of_management_dimension)|type_of_management_dimension|无||工时管理菜单中工时日历：工作类型维度查询数据使用|
|[工作项维度工时日历查询](module/Base/workload/logic/work_item_dimension)|work_item_dimension|无||首页工作台工时日历：项目/工作项维度查询数据使用|
|[工作项维度管理工时日历查询](module/Base/workload/logic/work_item_management_dimension)|work_item_management_dimension|无||工时管理菜单中工时日历：项目/工作项维度查询数据使用|
|[测试用例维度工时日历查询](module/Base/workload/logic/test_case_dimension)|test_case_dimension|无||首页工作台工时日历：测试库/测试用例维度查询数据使用|
|[测试用例维度管理工时日历查询](module/Base/workload/logic/test_case_management_dimension)|test_case_management_dimension|无||工时管理菜单中工时日历：测试库/测试用例维度查询数据使用|
|[登记工时并更新剩余工时](module/Base/workload/logic/save_workload)|save_workload|无||保存实际登记工时记录，并计算重置剩余工时属性|
|[获取已登记工时](module/Base/workload/logic/get_register_workload)|get_register_workload|无||查看工时详情时，获取预估、已登记、剩余工时；并计算出工时进度|



## [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) :id=work_item

| 中文名col200    | 代码名col200    | 子类型col150    | 插件col200    |  备注col500  |
| -------- |---------- |----------- |------------|----------|
|[修改时间](module/ProjMgmt/work_item/logic/change_time)|change_time|无||修改工作项的开始、结束时间|
|[其他实体关联工作项](module/ProjMgmt/work_item/logic/others_relation_work_item)|others_relation_work_item|无||工作项实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProjMgmt/work_item/logic/change_assignee)|change_assignee|无||工作项分配负责人|
|[删除](module/ProjMgmt/work_item/logic/delete)|delete|无||工作项数据的逻辑删除，修改产品的是否删除属性值；并递归删除所有下级工作项|
|[取消关联](module/ProjMgmt/work_item/logic/del_relation)|del_relation|无||工作项取消关联数据（正反向关联数据同时删除）|
|[变更父工作项](module/ProjMgmt/work_item/logic/change_parent)|change_parent|无||变更父工作项|
|[变更状态](module/ProjMgmt/work_item/logic/change_state)|change_state|无||变更工作项状态|
|[变更顶级工作项](module/ProjMgmt/work_item/logic/change_top)|change_top|无||变更父工作项时，同时继承父工作项的顶级标识|
|[复制子工作项](module/ProjMgmt/work_item/logic/copy_child_work_item)|copy_child_work_item|无||复制工作项时，同时复制子工作项|
|[复制工作项](module/ProjMgmt/work_item/logic/copy_work_item)|copy_work_item|无||复制工作项到其他的同类型项目|
|[子工作项取消关联](module/ProjMgmt/work_item/logic/child_del_relation)|child_del_relation|无||工作项取消关联子工作项|
|[工作项关联分页计数器](module/ProjMgmt/work_item/logic/work_item_re_counters)|work_item_re_counters|无||计算分页下关联事项的条数|
|[工作项删除变更附加逻辑](module/ProjMgmt/work_item/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工作项删除或恢复时触发相应的通知消息|
|[工作项归档变更附加逻辑](module/ProjMgmt/work_item/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||工作项归档或激活时触发相应的通知消息|
|[工作项状态变更附加逻辑](module/ProjMgmt/work_item/logic/state_onchange)|state_onchange|属性逻辑||工作项状态变更时触发相应的通知消息，同时生成流转记录|
|[工作项负责人变更附加逻辑](module/ProjMgmt/work_item/logic/assignee_onchange)|assignee_onchange|属性逻辑||工作项负责人变更时触发相应的通知消息|
|[归档](module/ProjMgmt/work_item/logic/archive)|archive|无||未归档工作项数据的归档处理，修改工作项的归档状态为已归档，递归所有下级工作项|
|[恢复](module/ProjMgmt/work_item/logic/recover)|recover|无||递归所有下级工作项，恢复已删除状态工作项数据，修改工作项的是否删除属性值，并恢复访问记录|
|[恢复历史版本](module/ProjMgmt/work_item/logic/restore_version)|restore_version|无||恢复工作项版本至某一指定历史版本|
|[无操作](module/ProjMgmt/work_item/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[树状或平铺表格数据查询（测试）](module/ProjMgmt/work_item/logic/tree_tile_grid_query)|tree_tile_grid_query|无||过程中测试调式逻辑|
|[激活](module/ProjMgmt/work_item/logic/activate)|activate|无||激活已归档状态工作项，工作项存在子工作项，递归激活所有下级工作项|
|[生成最近访问](module/ProjMgmt/work_item/logic/create_recent)|create_recent|无||在用户对工作项数据进行了get或update操作时生成相应的访问记录|
|[移入发布](module/ProjMgmt/work_item/logic/shift_in_version)|shift_in_version|无||将工作项移入对应发布|
|[移入看板](module/ProjMgmt/work_item/logic/shift_in_kanban)|shift_in_kanban|无||将工作项移入对应看板|
|[移入迭代](module/ProjMgmt/work_item/logic/shift_in_sprint)|shift_in_sprint|无||将工作项移入对应迭代|
|[移动工作项](module/ProjMgmt/work_item/logic/move_work_item)|move_work_item|无||工作项移动至其他的同类型项目|
|[移动时子工作项的处理](module/ProjMgmt/work_item/logic/move_child_work_item)|move_child_work_item|无||父工作项移动; 子工作项也移动;并对Top_id进行更新|
|[缺陷年龄报告](module/ProjMgmt/work_item/logic/defect_age_report)|defect_age_report|无||报表缺陷年龄报告数据源<br>|
|[缺陷每日趋势](module/ProjMgmt/work_item/logic/defect_daily_trend)|defect_daily_trend|无||报表缺陷每日趋势数据源|
|[缺陷累计趋势查询](module/ProjMgmt/work_item/logic/defect_total_trend)|defect_total_trend|无||报表缺陷累计趋势报表数据源|
|[获取测试计划对应项目](module/ProjMgmt/work_item/logic/work_item_test_plan_project)|work_item_test_plan_project|无||获取测试计划对应项目|
|[规划工作项](module/ProjMgmt/work_item/logic/plan_work_item)|plan_work_item|无||规划选中工作项至指定发布|
|[设置缺陷类型](module/ProjMgmt/work_item/logic/set_type_bug)|set_type_bug|无||设置当前工作项为缺陷类型|
|[设置默认看板栏](module/ProjMgmt/work_item/logic/set_default_entry)|set_default_entry|无||选择看板后，自动填充所属看板下的的首个看板栏|
|[选择子工作项](module/ProjMgmt/work_item/logic/choose_child)|choose_child|无||选择子工作项|
|[需求年龄报告](module/ProjMgmt/work_item/logic/backlog_age_report)|backlog_age_report|无||报表需求年龄报告数据源|
|[需求树状或平铺表格查询](module/ProjMgmt/work_item/logic/requirement_tree_or_tile_query)|requirement_tree_or_tile_query|无||需求树状或平铺表格查询|
|[需求每日趋势](module/ProjMgmt/work_item/logic/backlog_daily_trend)|backlog_daily_trend|无||报表需求每日趋势数据源|
|[需求累计流图](module/ProjMgmt/work_item/logic/backlog_accumulate_flow)|backlog_accumulate_flow|无||报表需求累计流图数据源|
|[顶级工作项](module/ProjMgmt/work_item/logic/top_work_item)|top_work_item|无||创建时继承父工作项的顶级工作项|



