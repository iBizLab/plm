# 行为附加 <!-- {docsify-ignore-all} -->

## [页面(PAGE)](module/Wiki/Article_page.md)  :id=Article_page

#### [Create](module/Wiki/Article_page#行为) :id=Article_page_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/Article_page/logic/create_recent.md)


#### [Get](module/Wiki/Article_page#行为) :id=Article_page_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/Article_page/logic/create_recent.md)



## [关注(ATTENTION)](module/Base/Attention.md)  :id=Attention

#### [Create](module/Base/Attention#行为) :id=Attention_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [添加关注后发送通知(after_create_notify)](module/Base/Attention/logic/after_create_notify.md)



## [看板(BOARD)](module/ProjMgmt/Board.md)  :id=Board

#### [Create](module/ProjMgmt/Board#行为) :id=Board_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板栏和泳道(create_default_entry)](module/ProjMgmt/Board/logic/create_default_entry.md)



## [评论(COMMENT)](module/Base/Comment.md)  :id=Comment

#### [Create](module/Base/Comment#行为) :id=Comment_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [新建评论后通知(after_create_notify)](module/Base/Comment/logic/after_create_notify.md)



## [客户(CUSTOMER)](module/ProdMgmt/Customer.md)  :id=Customer

#### [Remove](module/ProdMgmt/Customer#行为) :id=Customer_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [删除客户通知(remove_notify)]()





## [需求(IDEA)](module/ProdMgmt/Idea.md)  :id=Idea

#### [Create](module/ProdMgmt/Idea#行为) :id=Idea_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Idea/logic/create_recent.md)
><br>备注生成最近访问

#### [Update](module/ProdMgmt/Idea#行为) :id=Idea_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Idea/logic/create_recent.md)


#### [Get](module/ProdMgmt/Idea#行为) :id=Idea_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Idea/logic/create_recent.md)



## [测试库(LIBRARY)](module/TestMgmt/Library.md)  :id=Library

#### [Create](module/TestMgmt/Library#行为) :id=Library_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/TestMgmt/Library/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Library/logic/create_recent.md)


#### [Update](module/TestMgmt/Library#行为) :id=Library_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Library/logic/create_recent.md)


#### [Get](module/TestMgmt/Library#行为) :id=Library_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Library/logic/create_recent.md)



## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member.md)  :id=Library_member

#### [Create](module/TestMgmt/Library_member#行为) :id=Library_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入测试库成员通知(library_member_create)]()


#### [Remove](module/TestMgmt/Library_member#行为) :id=Library_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [通过标识通知成员(notify_by_id)](module/TestMgmt/Library_member/logic/notify_by_id.md)





## [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic.md)  :id=PSDELogic

#### [Get](module/extension/PSDELogic#行为) :id=PSDELogic_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取最后运行状态(get_last_run_info)](module/extension/PSDELogic/logic/get_last_run_info.md)



## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member.md)  :id=Portfolio_member

#### [Create](module/Base/Portfolio_member#行为) :id=Portfolio_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入成员通知(create_member_notify)]()


#### [Remove](module/Base/Portfolio_member#行为) :id=Portfolio_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [通过标识通知成员(notify_by_id)](module/Base/Portfolio_member/logic/notify_by_id.md)





## [产品(PRODUCT)](module/ProdMgmt/Product.md)  :id=Product

#### [Create](module/ProdMgmt/Product#行为) :id=Product_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/ProdMgmt/Product/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Product/logic/create_recent.md)


#### [Update](module/ProdMgmt/Product#行为) :id=Product_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [批量更新最近访问父名称(recent_parent_name)](module/ProdMgmt/Product/logic/recent_parent_name.md)


#### [Get](module/ProdMgmt/Product#行为) :id=Product_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Product/logic/create_recent.md)



## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member.md)  :id=Product_member

#### [Create](module/ProdMgmt/Product_member#行为) :id=Product_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入产品成员通知(create_member_notify)]()


#### [Remove](module/ProdMgmt/Product_member#行为) :id=Product_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [通过标识通知成员(notify_by_id)](module/ProdMgmt/Product_member/logic/notify_by_id.md)





## [项目(PROJECT)](module/ProjMgmt/Project.md)  :id=Project

#### [Create](module/ProjMgmt/Project#行为) :id=Project_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/ProjMgmt/Project/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Project/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板(create_default_board)](module/ProjMgmt/Project/logic/create_default_board.md)


#### [Update](module/ProjMgmt/Project#行为) :id=Project_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Project/logic/create_recent.md)


#### [Get](module/ProjMgmt/Project#行为) :id=Project_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Project/logic/create_recent.md)


#### [获取主数据(get_major_data)](module/ProjMgmt/Project#行为) :id=Project_get_major_data




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取项目进度(get_schedule)](module/ProjMgmt/Project/logic/get_schedule.md)



## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md)  :id=Project_member

#### [Create](module/ProjMgmt/Project_member#行为) :id=Project_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入项目成员通知(create_member_notify)]()


#### [Remove](module/ProjMgmt/Project_member#行为) :id=Project_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [通过标识通知成员(notify_by_id)](module/ProjMgmt/Project_member/logic/notify_by_id.md)





## [执行用例(RUN)](module/TestMgmt/Run.md)  :id=Run

#### [Remove](module/TestMgmt/Run#行为) :id=Run_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除用例相关信息(delete_run_info)](module/TestMgmt/Run/logic/delete_run_info.md)





## [空间(SPACE)](module/Wiki/Space.md)  :id=Space

#### [Create](module/Wiki/Space#行为) :id=Space_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/Wiki/Space/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/Space/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建主页(auto_create_home_page)](module/Wiki/Space/logic/auto_create_home_page.md)


#### [Get](module/Wiki/Space#行为) :id=Space_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/Space/logic/create_recent.md)



## [空间成员(SPACE_MEMBER)](module/Wiki/Space_member.md)  :id=Space_member

#### [Create](module/Wiki/Space_member#行为) :id=Space_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入知识库成员通知(create_member_notify)]()


#### [Remove](module/Wiki/Space_member#行为) :id=Space_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [通过标识通知成员(notify_by_id)](module/Wiki/Space_member/logic/notify_by_id.md)





## [用例(TEST_CASE)](module/TestMgmt/Test_case.md)  :id=Test_case

#### [Create](module/TestMgmt/Test_case#行为) :id=Test_case_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Test_case/logic/create_recent.md)


#### [Update](module/TestMgmt/Test_case#行为) :id=Test_case_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Test_case/logic/create_recent.md)


#### [Get](module/TestMgmt/Test_case#行为) :id=Test_case_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/Test_case/logic/create_recent.md)



## [工单(TICKET)](module/ProdMgmt/Ticket.md)  :id=Ticket

#### [Create](module/ProdMgmt/Ticket#行为) :id=Ticket_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Ticket/logic/create_recent.md)


#### [Update](module/ProdMgmt/Ticket#行为) :id=Ticket_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Ticket/logic/create_recent.md)


#### [Get](module/ProdMgmt/Ticket#行为) :id=Ticket_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/Ticket/logic/create_recent.md)



## [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md)  :id=Work_item

#### [Create](module/ProjMgmt/Work_item#行为) :id=Work_item_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [需求树表新建时填充类型(fill_type)](module/ProjMgmt/Work_item/logic/fill_type.md)


> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [顶级工作项(top_work_item)](module/ProjMgmt/Work_item/logic/top_work_item.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Work_item/logic/create_recent.md)

> [!NOTE|label:实体通知]
> 实体通知 [工作项创建时分配通知(create_notify)]()


#### [Update](module/ProjMgmt/Work_item#行为) :id=Work_item_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Work_item/logic/create_recent.md)


#### [Get](module/ProjMgmt/Work_item#行为) :id=Work_item_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/Work_item/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取工时进度(get_workload_schedule)](module/ProjMgmt/Work_item/logic/get_workload_schedule.md)


#### [GetDraft](module/ProjMgmt/Work_item#行为) :id=Work_item_GetDraft




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试计划对应项目(work_item_test_plan_project)](module/ProjMgmt/Work_item/logic/work_item_test_plan_project.md)









