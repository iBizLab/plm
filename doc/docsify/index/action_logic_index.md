# 行为附加 <!-- {docsify-ignore-all} -->

## [应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme.md)  :id=app_view_theme

#### [Get](module/ebsx/app_view_theme#行为) :id=app_view_theme_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取过滤条件(fill_search_conds)](module/ebsx/app_view_theme/logic/fill_search_conds.md)



## [关注(ATTENTION)](module/Base/attention.md)  :id=attention

#### [Create](module/Base/attention#行为) :id=attention_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [添加关注后发送通知(after_create_notify)](module/Base/attention/logic/after_create_notify.md)



## [基线(BASELINE)](module/Base/baseline.md)  :id=baseline

#### [Get](module/Base/baseline#行为) :id=baseline_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/Base/baseline/logic/fill_categories_name.md)


#### [Remove](module/Base/baseline#行为) :id=baseline_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除基线前附加逻辑(before_remove)](module/Base/baseline/logic/before_remove.md)





## [看板(BOARD)](module/ProjMgmt/board.md)  :id=board

#### [Create](module/ProjMgmt/board#行为) :id=board_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板栏和泳道(create_default_entry)](module/ProjMgmt/board/logic/create_default_entry.md)


#### [Remove](module/ProjMgmt/board#行为) :id=board_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除看板之前判断(before_remove)](module/ProjMgmt/board/logic/before_remove.md)





## [评论(COMMENT)](module/Base/comment.md)  :id=comment

#### [Create](module/Base/comment#行为) :id=comment_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [新建评论后通知(after_create_notify)](module/Base/comment/logic/after_create_notify.md)



## [客户(CUSTOMER)](module/ProdMgmt/customer.md)  :id=customer

#### [Get](module/ProdMgmt/customer#行为) :id=customer_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/ProdMgmt/customer/logic/fill_categories_name.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取产品成员(get_product_member)](module/ProdMgmt/customer/logic/get_product_member.md)


#### [Remove](module/ProdMgmt/customer#行为) :id=customer_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除客户发送通知(remove_customer_notify)](module/ProdMgmt/customer/logic/remove_customer_notify.md)





## [讨论(DISCUSS_POST)](module/Team/discuss_post.md)  :id=discuss_post

#### [Get](module/Team/discuss_post#行为) :id=discuss_post_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Team/discuss_post/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取话题成员（移动端）(mob_get_topic_member)](module/Team/discuss_post/logic/mob_get_topic_member.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取讨论权限(get_post_auth)](module/Team/discuss_post/logic/get_post_auth.md)


#### [Update](module/Team/discuss_post#行为) :id=discuss_post_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Team/discuss_post/logic/create_recent.md)



## [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md)  :id=discuss_reply

#### [Create](module/Team/discuss_reply#行为) :id=discuss_reply_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [更新讨论时间(update_post_time)](module/Team/discuss_reply/logic/update_post_time.md)


#### [Save](module/Team/discuss_reply#行为) :id=discuss_reply_Save




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [更新讨论时间(update_post_time)](module/Team/discuss_reply/logic/update_post_time.md)


#### [Update](module/Team/discuss_reply#行为) :id=discuss_reply_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [更新讨论时间(update_post_time)](module/Team/discuss_reply/logic/update_post_time.md)



## [话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md)  :id=discuss_topic

#### [Create](module/Team/discuss_topic#行为) :id=discuss_topic_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/Team/discuss_topic/logic/auto_create_members.md)


#### [Get](module/Team/discuss_topic#行为) :id=discuss_topic_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取话题成员(get_discuss_member_one)](module/Team/discuss_topic/logic/get_discuss_member_one.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Team/discuss_topic/logic/create_recent.md)


#### [Update](module/Team/discuss_topic#行为) :id=discuss_topic_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Team/discuss_topic/logic/create_recent.md)



## [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard.md)  :id=dyna_dashboard

#### [Get](module/Base/dyna_dashboard#行为) :id=dyna_dashboard_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [更新看板部件模型(sync_portlet_model)](module/Base/dyna_dashboard/logic/sync_portlet_model.md)



## [执行人(EXECUTOR)](module/Base/executor.md)  :id=executor

#### [Create](module/Base/executor#行为) :id=executor_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [添加执行人时发送通知(after_create_notice)](module/Base/executor/logic/after_create_notice.md)


#### [Remove](module/Base/executor#行为) :id=executor_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [删除执行人时发送通知(del_notice)](module/Base/executor/logic/del_notice.md)





## [流程准则(GUIDELINE)](module/TestMgmt/guideline.md)  :id=guideline

#### [Update](module/TestMgmt/guideline#行为) :id=guideline_Update



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成阶段排序值(fill_stage_order)](module/TestMgmt/guideline/logic/fill_stage_order.md)





## [需求(IDEA)](module/ProdMgmt/idea.md)  :id=idea

#### [Create](module/ProdMgmt/idea#行为) :id=idea_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [设置初始排序值(set_sequence)](module/ProdMgmt/idea/logic/set_sequence.md)



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

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取产品成员(get_product_member)](module/ProdMgmt/idea/logic/get_product_member.md)


#### [GetDraft](module/ProdMgmt/idea#行为) :id=idea_GetDraft



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充表单(fill_idea_form)](module/ProdMgmt/idea/logic/fill_idea_form.md)




#### [Update](module/ProdMgmt/idea#行为) :id=idea_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent.md)



## [效能报表(INSIGHT_REPORT)](module/Insight/insight_report.md)  :id=insight_report

#### [Create](module/Insight/insight_report#行为) :id=insight_report_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [建立报表扩展模型(create_bi_report)](module/Insight/insight_report/logic/create_bi_report.md)




#### [Get](module/Insight/insight_report#行为) :id=insight_report_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取视图成员(get_view_member)](module/Insight/insight_report/logic/get_view_member.md)


#### [Remove](module/Insight/insight_report#行为) :id=insight_report_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除报表扩展模型(remove_bi_report)](module/Insight/insight_report/logic/remove_bi_report.md)





## [效能视图(INSIGHT_VIEW)](module/Insight/insight_view.md)  :id=insight_view

#### [Create](module/Insight/insight_view#行为) :id=insight_view_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/Insight/insight_view/logic/auto_create_members.md)


#### [Get](module/Insight/insight_view#行为) :id=insight_view_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取视图成员(get_view_member)](module/Insight/insight_view/logic/get_view_member.md)



## [测试库(LIBRARY)](module/TestMgmt/library.md)  :id=library

#### [Create](module/TestMgmt/library#行为) :id=library_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/TestMgmt/library/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/TestMgmt/library/logic/auto_create_members.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/library/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建测试库流程准则(auto_create_guideline)](module/TestMgmt/library/logic/auto_create_guideline.md)


#### [Get](module/TestMgmt/library#行为) :id=library_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试库成员(get_library_member_one)](module/TestMgmt/library/logic/get_library_member_one.md)

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
> 实体通知 [测试库成员加入通知(library_member_create)]()


#### [Remove](module/TestMgmt/library_member#行为) :id=library_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除测试库成员通知(remove_library_member_notify)](module/TestMgmt/library_member/logic/remove_library_member_notify.md)





## [页面(PAGE)](module/Wiki/article_page.md)  :id=article_page

#### [Create](module/Wiki/article_page#行为) :id=article_page_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [同步发布名称与名称(sync_name)](module/Wiki/article_page/logic/sync_name.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/article_page/logic/create_recent.md)


#### [Get](module/Wiki/article_page#行为) :id=article_page_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/article_page/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取知识空间成员(get_space_member)](module/Wiki/article_page/logic/get_space_member.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [置空共享访问密码(reset_shared_pwd)](module/Wiki/article_page/logic/reset_shared_pwd.md)


#### [Update](module/Wiki/article_page#行为) :id=article_page_Update



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [同步发布名称与名称(sync_name)](module/Wiki/article_page/logic/sync_name.md)


> [!NOTE|label:外部逻辑]
> 执行处理逻辑 [生成版本(commit_version)](module/Wiki/article_page/logic/commit_version.md)
> 执行实体 [页面(PAGE)](module/Wiki/article_page.md) 的 [生成版本(commit_version)](module/Wiki/article_page#行为) 行为




#### [共享设置(shared_setting)](module/Wiki/article_page#行为) :id=article_page_shared_setting



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [访问密码加密(encrypt_access_key)](module/Wiki/article_page/logic/encrypt_access_key.md)





## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md)  :id=portfolio_member

#### [Create](module/Base/portfolio_member#行为) :id=portfolio_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [项目集加入成员通知(create_member_notify)]()


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
> 执行处理逻辑 [创建产品流程准则(auto_create_guideline)](module/ProdMgmt/product/logic/auto_create_guideline.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成产品工单类型(create_product_ticket)](module/ProdMgmt/product/logic/create_product_ticket.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/product/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/ProdMgmt/product/logic/auto_create_members.md)


#### [Get](module/ProdMgmt/product#行为) :id=product_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取产品成员(get_product_member_one)](module/ProdMgmt/product/logic/get_product_member_one.md)

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
> 实体通知 [产品成员加入通知(create_member_notify)]()


#### [Remove](module/ProdMgmt/product_member#行为) :id=product_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除产品成员通知(remove_product_member_notify)](module/ProdMgmt/product_member/logic/remove_product_member_notify.md)





## [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md)  :id=product_plan

#### [Get](module/ProdMgmt/product_plan#行为) :id=product_plan_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/ProdMgmt/product_plan/logic/fill_categories_name.md)



## [项目(PROJECT)](module/ProjMgmt/project.md)  :id=project

#### [Create](module/ProjMgmt/project#行为) :id=project_Create



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建之前(before_create)](module/ProjMgmt/project/logic/before_create.md)



<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建项目流程准则(auto_create_guideline)](module/ProjMgmt/project/logic/auto_create_guideline.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/project/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/ProjMgmt/project/logic/auto_create_members.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成默认看板(create_default_board)](module/ProjMgmt/project/logic/create_default_board.md)


#### [Get](module/ProjMgmt/project#行为) :id=project_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取项目成员(get_project_member_one)](module/ProjMgmt/project/logic/get_project_member_one.md)

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
> 实体通知 [项目成员加入通知(create_member_notify)]()


#### [Remove](module/ProjMgmt/project_member#行为) :id=project_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除项目成员通知(remove_project_member_notify)](module/ProjMgmt/project_member/logic/remove_project_member_notify.md)





## [实体属性(PSDEFIELD)](module/extension/PSDEField.md)  :id=PSDEField

#### [Create](module/extension/PSDEField#行为) :id=PSDEField_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:外部逻辑]
> 执行实体 [实体属性(PSDEFIELD)](module/extension/PSDEField.md) 的 [应用(APPLY)](module/extension/PSDEField#行为) 行为


#### [Update](module/extension/PSDEField#行为) :id=PSDEField_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:外部逻辑]
> 执行实体 [实体属性(PSDEFIELD)](module/extension/PSDEField.md) 的 [应用(APPLY)](module/extension/PSDEField#行为) 行为



## [实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic.md)  :id=PSDELogic

#### [Get](module/extension/PSDELogic#行为) :id=PSDELogic_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取最后运行状态(get_last_run_info)](module/extension/PSDELogic/logic/get_last_run_info.md)



## [实体通知(PSDENOTIFY)](module/extension/PSDENotify.md)  :id=PSDENotify

#### [Create](module/extension/PSDENotify#行为) :id=PSDENotify_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:外部逻辑]
> 执行实体 [实体通知(PSDENOTIFY)](module/extension/PSDENotify.md) 的 [应用(APPLY)](module/extension/PSDENotify#行为) 行为


#### [Update](module/extension/PSDENotify#行为) :id=PSDENotify_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:外部逻辑]
> 执行实体 [实体通知(PSDENOTIFY)](module/extension/PSDENotify.md) 的 [应用(APPLY)](module/extension/PSDENotify#行为) 行为



## [智能报表(PSSYSBIREPORT)](module/extension/PSSysBIReport.md)  :id=PSSysBIReport

#### [Update](module/extension/PSSysBIReport#行为) :id=PSSysBIReport_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [更新报表(update_report)](module/extension/PSSysBIReport/logic/update_report.md)



## [项目发布(RELEASE)](module/ProjMgmt/release.md)  :id=release

#### [Create](module/ProjMgmt/release#行为) :id=release_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [新建后附加逻辑(after_create)](module/ProjMgmt/release/logic/after_create.md)


#### [Get](module/ProjMgmt/release#行为) :id=release_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/ProjMgmt/release/logic/fill_categories_name.md)


#### [计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release#行为) :id=release_cal_release_work_item_num




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release/logic/cal_release_work_item_num.md)



## [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)  :id=review_content

#### [Create](module/TestMgmt/review_content#行为) :id=review_content_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成评审结果(generate_review_results)](module/TestMgmt/review_content/logic/generate_review_results.md)


#### [Update](module/TestMgmt/review_content#行为) :id=review_content_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [变更评审状态(change_review_state)](module/TestMgmt/review_content/logic/change_review_state.md)



## [执行用例(RUN)](module/TestMgmt/run.md)  :id=run

#### [Get](module/TestMgmt/run#行为) :id=run_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试库成员(get_library_member)](module/TestMgmt/run/logic/get_library_member.md)


#### [Remove](module/TestMgmt/run#行为) :id=run_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除用例相关信息(delete_run_info)](module/TestMgmt/run/logic/delete_run_info.md)





## [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md)  :id=shared_space

#### [Get](module/Wiki/shared_space#行为) :id=shared_space_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取共享链接(shared_url)](module/Wiki/shared_space/logic/shared_url.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [置空共享访问密码(reset_shared_pwd)](module/Wiki/shared_space/logic/reset_shared_pwd.md)


#### [共享设置(shared_setting)](module/Wiki/shared_space#行为) :id=shared_space_shared_setting



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [访问密码加密(encrypt_access_key)](module/Wiki/shared_space/logic/encrypt_access_key.md)





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

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [创建空间流程准则(auto_create_guideline)](module/Wiki/space/logic/auto_create_guideline.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [自动创建人员(auto_create_members)](module/Wiki/space/logic/auto_create_members.md)


#### [Get](module/Wiki/space#行为) :id=space_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取知识空间成员(get_space_member_one)](module/Wiki/space/logic/get_space_member_one.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/Wiki/space/logic/create_recent.md)



## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md)  :id=space_member

#### [Create](module/Wiki/space_member#行为) :id=space_member_Create




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:实体通知]
> 实体通知 [空间成员加入通知(create_member_notify)]()


#### [Remove](module/Wiki/space_member#行为) :id=space_member_Remove



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [移除空间成员发送通知(remove_space_member_notify)](module/Wiki/space_member/logic/remove_space_member_notify.md)





## [迭代(SPRINT)](module/ProjMgmt/sprint.md)  :id=sprint

#### [Get](module/ProjMgmt/sprint#行为) :id=sprint_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/ProjMgmt/sprint/logic/fill_categories_name.md)


#### [计算发布工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint#行为) :id=sprint_cal_sprint_work_item_num




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [计算迭代工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num.md)



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
> 执行处理逻辑 [填充最近执行(fill_latest_executed)](module/TestMgmt/test_case/logic/fill_latest_executed.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试库成员(get_library_member)](module/TestMgmt/test_case/logic/get_library_member.md)


#### [Update](module/TestMgmt/test_case#行为) :id=test_case_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent.md)



## [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)  :id=test_plan

#### [Get](module/TestMgmt/test_plan#行为) :id=test_plan_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充类别文本(fill_categories_name)](module/TestMgmt/test_plan/logic/fill_categories_name.md)



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

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取产品成员(get_product_member)](module/ProdMgmt/ticket/logic/get_product_member.md)


#### [GetDraft](module/ProdMgmt/ticket#行为) :id=ticket_GetDraft




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充表单(fill_idea_form)](module/ProdMgmt/ticket/logic/fill_idea_form.md)


#### [Update](module/ProdMgmt/ticket#行为) :id=ticket_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProdMgmt/ticket/logic/create_recent.md)



## [版本(VERSION)](module/Base/version.md)  :id=version

#### [提交版本(COMMIT)](module/Base/version#行为) :id=version_COMMIT




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [判断执行用例是否为最新版本(run_is_newest)](module/Base/version/logic/run_is_newest.md)


#### [GetDraft](module/Base/version#行为) :id=version_GetDraft



<p class="panel-title"><b>操作之前</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [新建版本时填充默认版本名称(fill_default_name)](module/Base/version/logic/fill_default_name.md)





## [视图主题设置(VIEW_THEME_SETTING)](module/Base/view_theme_setting.md)  :id=view_theme_setting

#### [Get](module/Base/view_theme_setting#行为) :id=view_theme_setting_Get




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取过滤条件(fill_search_conds)](module/Base/view_theme_setting/logic/fill_search_conds.md)



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
> 执行处理逻辑 [新建工作项前校验父子工作项类型(before_create_check_type)](module/ProjMgmt/work_item/logic/before_create_check_type.md)


> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [设置初始排序值(set_sequence)](module/ProjMgmt/work_item/logic/set_sequence.md)



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
> 执行处理逻辑 [获取项目成员(get_project_member)](module/ProjMgmt/work_item/logic/get_project_member.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)


#### [GetDraft](module/ProjMgmt/work_item#行为) :id=work_item_GetDraft




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [获取测试计划对应项目(work_item_test_plan_project)](module/ProjMgmt/work_item/logic/work_item_test_plan_project.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充表单(fill_idea_form)](module/ProjMgmt/work_item/logic/fill_idea_form.md)

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [填充用例信息(fill_test_case_info)](module/ProjMgmt/work_item/logic/fill_test_case_info.md)


#### [Update](module/ProjMgmt/work_item#行为) :id=work_item_Update




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent.md)



## [工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard.md)  :id=work_item_wizard

#### [CreateTemp](module/ProjMgmt/work_item_wizard#行为) :id=work_item_wizard_CreateTemp




<p class="panel-title"><b>操作之后</b></p>
<br>

> [!NOTE|label:内部逻辑]
> 执行处理逻辑 [CreateTemp后附加(create_temp_after)](module/ProjMgmt/work_item_wizard/logic/create_temp_after.md)









