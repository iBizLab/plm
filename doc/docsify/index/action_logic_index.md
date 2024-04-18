# 行为附加 <!-- {docsify-ignore-all} -->

## [关注(ATTENTION)](module/Base/attention.md)  :id=attention

#### [Create](module/Base/attention#行为) :id=attention_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify.md)



## [看板(BOARD)](module/ProjMgmt/board.md)  :id=board

#### [Create](module/ProjMgmt/board#行为) :id=board_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板栏和泳道(create_default_entry)](module/ProjMgmt/board/logic/create_default_entry.md)



## [评论(COMMENT)](module/Base/comment.md)  :id=comment

#### [Create](module/Base/comment#行为) :id=comment_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify.md)



## [客户(CUSTOMER)](module/ProdMgmt/customer.md)  :id=customer

#### [Remove](module/ProdMgmt/customer#行为) :id=customer_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除客户发送通知(remove_customer_notify)](module/ProdMgmt/customer/logic/remove_customer_notify.md)





## [需求(IDEA)](module/ProdMgmt/idea.md)  :id=idea

#### [Create](module/ProdMgmt/idea#行为) :id=idea_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent.md)
><br>备注生成最近访问

#### [Get](module/ProdMgmt/idea#行为) :id=idea_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent.md)


#### [Update](module/ProdMgmt/idea#行为) :id=idea_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent.md)



## [测试库(LIBRARY)](module/TestMgmt/library.md)  :id=library

#### [Create](module/TestMgmt/library#行为) :id=library_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/TestMgmt/library/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/library/logic/create_recent.md)


#### [Get](module/TestMgmt/library#行为) :id=library_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/library/logic/create_recent.md)


#### [Update](module/TestMgmt/library#行为) :id=library_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/library/logic/create_recent.md)



## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)  :id=library_member

#### [Create](module/TestMgmt/library_member#行为) :id=library_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入测试库成员通知(library_member_create)]()


#### [Remove](module/TestMgmt/library_member#行为) :id=library_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除测试库成员通知(remove_library_member_notify)](module/TestMgmt/library_member/logic/remove_library_member_notify.md)





## [页面(PAGE)](module/Wiki/article_page.md)  :id=article_page

#### [Create](module/Wiki/article_page#行为) :id=article_page_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/article_page/logic/create_recent.md)


#### [Get](module/Wiki/article_page#行为) :id=article_page_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/article_page/logic/create_recent.md)


#### [Update](module/Wiki/article_page#行为) :id=article_page_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/article_page/logic/create_recent.md)



## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md)  :id=portfolio_member

#### [Create](module/Base/portfolio_member#行为) :id=portfolio_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入成员通知(create_member_notify)]()


#### [Remove](module/Base/portfolio_member#行为) :id=portfolio_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除项目集成员通知(remove_project_set_member_notify)](module/Base/portfolio_member/logic/remove_project_set_member_notify.md)





## [产品(PRODUCT)](module/ProdMgmt/product.md)  :id=product

#### [Create](module/ProdMgmt/product#行为) :id=product_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/ProdMgmt/product/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/product/logic/create_recent.md)


#### [Get](module/ProdMgmt/product#行为) :id=product_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/product/logic/create_recent.md)


#### [Update](module/ProdMgmt/product#行为) :id=product_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [批量更新最近访问父名称(recent_parent_name)](module/ProdMgmt/product/logic/recent_parent_name.md)



## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md)  :id=product_member

#### [Create](module/ProdMgmt/product_member#行为) :id=product_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入产品成员通知(create_member_notify)]()


#### [Remove](module/ProdMgmt/product_member#行为) :id=product_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除产品成员通知(remove_product_member_notify)](module/ProdMgmt/product_member/logic/remove_product_member_notify.md)





## [项目(PROJECT)](module/ProjMgmt/project.md)  :id=project

#### [Create](module/ProjMgmt/project#行为) :id=project_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/ProjMgmt/project/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/project/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板(create_default_board)](module/ProjMgmt/project/logic/create_default_board.md)


#### [Get](module/ProjMgmt/project#行为) :id=project_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/project/logic/create_recent.md)


#### [Update](module/ProjMgmt/project#行为) :id=project_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/project/logic/create_recent.md)


#### [获取主数据(get_major_data)](module/ProjMgmt/project#行为) :id=project_get_major_data




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取项目进度(get_schedule)](module/ProjMgmt/project/logic/get_schedule.md)



## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md)  :id=project_member

#### [Create](module/ProjMgmt/project_member#行为) :id=project_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入项目成员通知(create_member_notify)]()


#### [Remove](module/ProjMgmt/project_member#行为) :id=project_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除项目成员通知(remove_project_member_notify)](module/ProjMgmt/project_member/logic/remove_project_member_notify.md)





## [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic.md)  :id=PSDELogic

#### [Get](module/extension/PSDELogic#行为) :id=PSDELogic_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取最后运行状态(get_last_run_info)](module/extension/PSDELogic/logic/get_last_run_info.md)



## [执行用例(RUN)](module/TestMgmt/run.md)  :id=run

#### [Remove](module/TestMgmt/run#行为) :id=run_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除用例相关信息(delete_run_info)](module/TestMgmt/run/logic/delete_run_info.md)





## [空间(SPACE)](module/Wiki/space.md)  :id=space

#### [Create](module/Wiki/space#行为) :id=space_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/Wiki/space/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/space/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建主页(auto_create_home_page)](module/Wiki/space/logic/auto_create_home_page.md)


#### [Get](module/Wiki/space#行为) :id=space_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/space/logic/create_recent.md)



## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md)  :id=space_member

#### [Create](module/Wiki/space_member#行为) :id=space_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [加入知识库成员通知(create_member_notify)]()


#### [Remove](module/Wiki/space_member#行为) :id=space_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除空间成员发送通知(remove_space_member_notify)](module/Wiki/space_member/logic/remove_space_member_notify.md)





## [用例(TEST_CASE)](module/TestMgmt/test_case.md)  :id=test_case

#### [Create](module/TestMgmt/test_case#行为) :id=test_case_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)


#### [Get](module/TestMgmt/test_case#行为) :id=test_case_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)


#### [Update](module/TestMgmt/test_case#行为) :id=test_case_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)



## [工单(TICKET)](module/ProdMgmt/ticket.md)  :id=ticket

#### [Create](module/ProdMgmt/ticket#行为) :id=ticket_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/ticket/logic/create_recent.md)


#### [Get](module/ProdMgmt/ticket#行为) :id=ticket_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/ticket/logic/create_recent.md)


#### [Update](module/ProdMgmt/ticket#行为) :id=ticket_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/ticket/logic/create_recent.md)



## [工时(WORKLOAD)](module/Base/workload.md)  :id=workload

#### [Remove](module/Base/workload#行为) :id=workload_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除工时记录前附加逻辑(before_remove)](module/Base/workload/logic/before_remove.md)





## [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)  :id=work_item

#### [Create](module/ProjMgmt/work_item#行为) :id=work_item_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [顶级工作项(top_work_item)](module/ProjMgmt/work_item/logic/top_work_item.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)

> [!NOTE|label:实体通知]
> 实体通知 [工作项创建时分配通知(create_notify)]()


#### [Get](module/ProjMgmt/work_item#行为) :id=work_item_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)


#### [GetDraft](module/ProjMgmt/work_item#行为) :id=work_item_GetDraft




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试计划对应项目(work_item_test_plan_project)](module/ProjMgmt/work_item/logic/work_item_test_plan_project.md)


#### [Update](module/ProjMgmt/work_item#行为) :id=work_item_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)









