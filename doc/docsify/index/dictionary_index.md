# 数据字典  <!-- {docsify-ignore-all} -->

##### 严重程度 :id=severity



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|致命|item_10||
|20|严重|item_20||
|30|一般|item_30||
|40|建议|item_40||

##### 产品需求高级搜索属性 :id=idea_advanced_search_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|n_title_like|标题|n_title_like||
|n_identifier_like|编号|n_identifier_like||
|n_description_like|描述|n_description_like||

##### 任务类别 :id=task_category



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|设计|item_10||
|20|研发|item_20||
|30|部署|item_30||
|40|测试|item_40||
|50|文档|item_50||
|60|产品|item_60||
|70|调研|item_70||
|80|其他|item_80||

##### 优先级 :id=work_item_priority



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|低|item_10||
|20|中|item_20||
|30|高|item_30||
|40|紧急|item_40||

##### 关注状态 :id=attention_state



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|不关注|item_10||
|20|关注|item_20||

##### 关注类型 :id=attention_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|不关注|item_10||
|20|订阅|item_20||
|30|重要通知|item_30||
|40|关注|item_40||

##### 可供选择的触发器 :id=enable_action



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.create:AFTER|创建工作项|projmgmt_work_item_create_after||
|ProjMgmt.project.update:AFTER|更新项目信息|projmgmt_project_update_after||
|TestMgmt.run.save_run_history.AFTER|更新执行用例|testmgmt_run_save_run_history_after||
|Base.member.create:AFTER|创建团队成员|base_member_create_after||

##### 团队角色类型 :id=user_group_role_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|admin|团队管理员|admin||
|user|团队成员|user||

##### 基线状态 :id=baseline_status



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|1|打开|item_1||
|2|设立完成|item_2||
|3|规划快照|item_3||

##### 复现概率 :id=reproduction_probability



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|必现|item_10||
|20|大概率复现|item_20||
|30|小概率复现|item_30||
|40|仅出现一次|item_40||

##### 字典目录 :id=dictionary_catalog



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|idea_state|需求状态|idea_state||
|ticket_state|工单状态|ticket_state||
|release_stage|发布阶段|release_stage||

##### 字典项类型 :id=dictionary_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|pending|未开始|pending||
|in_progress|进行中|in_progress||
|completed|已完成|completed||
|closed|已关闭|closed||

##### 实体通知目标类型 :id=DENotifyTargetType



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|EVENTDATAFIELD|属性|eventdatafield||
|DSTUSER|成员|dstuser||
|DSTDEPARTMENT|部门|dstdepartment||

##### 客户等级 :id=customer_level



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|L0|L0|l0||
|L1|L1|l1||
|L2|L2|l2||
|L3|L3|l3||
|L4|L4|l4||

##### 客户行业 :id=customer_sector



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|互联网|item_10||
|20|教育|item_20||
|30|电子商务|item_30||
|40|智能硬件|item_40||
|50|企业服务|item_50||
|60|先进制造|item_60||
|70|游戏|item_70||
|80|金融|item_80||
|90|其他|item_90||

##### 工作项状态类型 :id=state_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|pending|未开始|pending||
|in_progress|进行中|in_progress||
|completed|已完成|completed||
|closed|已关闭|closed||

##### 工作项类型分组 :id=work_item_type_group



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|requirement|需求|requirement||
|task|任务|task||
|bug|缺陷|bug||
|issue|事务|issue||
|plan|计划|plan||

##### 工作项高级搜索属性 :id=work_item_advanced_search_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|n_title_like|标题|n_title_like||
|n_identifier_like|编号|n_identifier_like||
|n_description_like|描述|n_description_like||

##### 工单优先级 :id=ticket_priority



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|P0|P0|p0||
|P1|P1|p1||
|P2|P2|p2||
|P3|P3|p3||
|P4|P4|p4||

##### 工单解决方案 :id=solutions



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|进入需求池|item_10||
|20|技术排期|item_20||
|30|待进一步确认|item_30||
|40|方案调研|item_40||
|50|暂时搁置|item_50||
|60|功能已支持|item_60||
|70|不予采纳|item_70||

##### 工单高级搜索属性 :id=ticket_advanced_search_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|n_title_like|标题|n_title_like||
|n_identifier_like|编号|n_identifier_like||
|n_description_like|描述|n_description_like||

##### 所属类型（空间） :id=space_scope_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|organization|组织|organization||
|user_group|团队|user_group||
|user|个人|user||

##### 所属类型（通用） :id=scope_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|organization|组织|organization||
|user_group|团队|user_group||

##### 执行用例状态 :id=run_status



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|通过|item_10||
|20|受阻|item_20||
|30|失败|item_30||
|40|跳过|item_40||

##### 扩展状态 :id=extension_status



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|0|未应用|item_0||
|1|已应用|item_1||

##### 报表类型 :id=report_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|柱状图|item_10||
|20|饼状图|item_20||
|30|折线图|item_30||
|40|区域图|item_40||

##### 报表组别 :id=insight_group



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|board|看板报表|board||
|backlog|需求报表|backlog||
|defect|缺陷报表|defect||
|sprint|迭代报表|sprint||
|project|项目报表|project||
|test_case|测试用例|test_case||
|run_case|执行情况|run_case||

##### 报表（天数0-30） :id=rep_days0_to_30



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|0-1天|item_10||
|20|1-2天|item_20||
|30|2-5天|item_30||
|40|5-7天|item_40||
|50|7-15天|item_50||
|60|15-30天|item_60||
|70|30天以上|item_70||

##### 报表（次数1-10） :id=rep_times1_to_10



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|0次|item_10||
|20|1次|item_20||
|30|2次|item_30||
|40|3-5次|item_40||
|50|6-10次|item_50||
|60|10次以上|item_60||

##### 报表（次数1-5） :id=rep_times1_to_5



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|1次|1次|item_1||
|2次|2次|item_2||
|3次|3次|item_3||
|4次|4次|item_4||
|5次|5次|item_5||
|5次以上|5次以上|item_6||

##### 搜索所属菜单 :id=search_menu



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|product|产品管理|product||
|project|项目管理|project||
|library|测试管理|library||
|space|知识管理|space||

##### 日志状态 :id=log_state



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|SUCCESS|成功|success||
|FAILURE|失败|failure||

##### 最近使用 :id=recent_use



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|scrum|scrum|scrum||
|waterfall|waterfall|waterfall||
|kanban|kanban|kanban||
|library|library|library||
|product|product|product||
|space|space|space||

##### 最近访问 :id=recent_visite



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|idea|需求|idea||
|ticket|工单|ticket||
|test_case|用例|test_case||
|work_item|工作项|work_item||
|scrum|scrum项目|scrum||
|kanban|kanban项目|kanban||
|waterfall|瀑布项目|waterfall||
|page|页面|page||

##### 最近访问对象 :id=recent_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|product|产品管理|product||
|project|项目管理|project||
|library|测试管理|library||
|space|知识管理|space||

##### 最近访问（首页） :id=recent_index



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|idea|需求|idea||
|ticket|工单|ticket||
|test_case|用例|test_case||
|work_item|工作项|work_item||
|page|页面|page||

##### 模板分组 :id=stenci_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|space_stencil|空间|space_stencil||
|org_stencil|组织|org_stencil||

##### 模板可见范围 :id=stencil_scope



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|space_stencil|空间模板|space_stencil||
|org_stencil|组织模板|org_stencil||

##### 活动对象类型 :id=activity_obj_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|work_item|工作项|work_item||
|idea|需求|idea||
|ticket|工单|ticket||
|test_case|用例|test_case||
|run|执行用例|run||
|customer|客户|customer||

##### 测试分类 :id=test_plan_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|普通测试|item_10||
|20|迭代测试|item_20||
|30|发布测试|item_30||

##### 测试用例高级搜索属性 :id=test_case_advanced_search_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|n_title_like|标题|n_title_like||
|n_identifier_like|编号|n_identifier_like||
|n_description_like|描述|n_description_like||

##### 测试类型 :id=test_case_test_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|automation|自动|automation||
|manual|手动|manual||

##### 测试计划状态 :id=test_plan_status



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|pending|未开始|pending||
|in_progress|进行中|in_progress||
|completed|已完成|completed||

##### 用例状态 :id=case_state



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|设计|item_10||
|20|就绪|item_20||
|30|废弃|item_30||

##### 用例类型 :id=test_case_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|功能测试|item_10||
|20|性能测试|item_20||
|30|配置相关|item_30||
|40|安装部署|item_40||
|50|接口测试|item_50||
|60|安全相关|item_60||
|70|兼容性测试|item_70||
|80|UI测试|item_80||
|90|其他|item_90||

##### 用例评审状态 :id=test_case_state



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|待评审|item_10||
|20|评审中|item_20||
|30|通过|item_30||
|40|不通过|item_40||
|50|已撤回|item_50||

##### 用例重要程度 :id=test_case_level



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|P0|P0|p0||
|P1|P1|p1||
|P2|P2|p2||
|P3|P3|p3||
|P4|P4|p4||

##### 登录结果 :id=AuthCode



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|200|成功|item_200||
|400|用户不存在|item_400||
|401.2|配置错误|item_3||
|401.1|密码错误|item_4||
|403.6|地址被拒绝|item_5||

##### 监听通知事件 :id=notify_event



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.create:AFTER|创建工作项|projmgmt_work_item_create_after||
|ProjMgmt.project.update:AFTER|更新项目信息|projmgmt_project_update_after||

##### 索引类型 :id=index_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|PRODUCT|产品|product||
|PROJECT|项目|project||
|LIBRARY|测试库|library||

##### 缺陷属性分布报表分组属性 :id=defect_property_distribution



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|state|工作项状态|state||
|state_type|状态类型|state_type||
|priority|优先级|priority||
|severity|严重程度|severity||
|sprint_id|迭代|sprint_id||
|REAPPEAR_PROBABILITY|复现概率|reappear_probability||

##### 角色类型 :id=role_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|admin|管理员|admin||
|user|普通成员|user||
|reader|只读成员|reader||

##### 评审内容变更类型 :id=review_change_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|0|新增|item_0||
|1|修改|item_1||
|2|删除|item_2||

##### 评审类型 :id=review_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|用例评审|item_10||
|20|基线评审|item_20||

##### 评审结果 :id=review_result



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|2|未评审|item_2||
|3|通过|item_3||
|4|拒绝|item_4||

##### 评论主体类型 :id=principal_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|work_item|工作项|work_item||
|idea|需求|idea||
|test_case|用例|test_case||

##### 迭代状态 :id=sprint_status



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|1|未开始|item_1||
|2|进行中|item_2||
|3|已完成|item_3||

##### 通知人员属性 :id=notify_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.assignee_id|负责人|projmgmt_work_item_assignee_id||
|ProjMgmt.work_item.create_man|建立人|projmgmt_work_item_create_man||

##### 通知分组 :id=group



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|product|产品管理|product||
|project|项目管理|project||
|test|测试管理|test||
|wiki|知识管理|wiki||

##### 通知子类 :id=DENotifySubType



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|NONE|无|none||
|EVENTHOOK|事件通知|eventhook||
|FIELDCHANGEHOOK|属性变更通知|fieldchangehook||

##### 通知消息类型 :id=WFInfomMsgType



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|1|系统消息|INTERNAL||
|2|电子邮件|EMAIL||
|4|手机短信|SMS||
|32|微信|WT||
|64|钉钉|DT||
|128|企业微信|ENTWT||

##### 逻辑子类 :id=DELogicSubType



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|NONE|无|none||
|DEFIELD|属性逻辑|defield|面向属性的处理逻辑子类型，|
|ATTACHTODEACTION|附加到行为|attachtodeaction|附加到指定行为|
|ATTACHTODEDATASET|附加到数据集|attachtodedataset|附加到指定数据集|
|WEBHOOK|WebHook|webhook|WEB钩子|
|EVENTHOOK|事件处理|eventhook||
|TIMERTASK|定时作业|timertask|后台定时作业|
|USER|用户自定义|user||
|USER2|用户自定义2|user2||
|USER3|用户自定义3|user3||
|USER4|用户自定义4|user4||

##### 阶段类型 :id=stage_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|pending|未开始|pending||
|in_progress|进行中|in_progress||
|published|已发布|published||

##### 需求优先级 :id=idea_priority



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|P0|P0|p0||
|P1|P1|p1||
|P2|P2|p2||
|P3|P3|p3||
|P4|P4|p4||

##### 需求属性分布 :id=work_item_group_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|state|状态|state||
|priority|优先级|priority||
|risk|风险|risk||
|backlog_type|需求类型|backlog_type||
|backlog_from|需求来源|backlog_from||
|sprint_name|迭代|sprint_name||

##### 需求来源 :id=demand_sources



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|产品规划|item_10||
|20|用户反馈|item_20||
|30|内部需求|item_30||
|40|竞品调研|item_40||
|50|其他|item_50||

##### 需求类型 :id=requirement_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|技术需求|item_10||
|20|功能需求|item_20||
|30|安全需求|item_30||
|40|体验优化|item_40||

##### 页面类型 :id=page_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|1|文档|item_1||
|2|分组|item_2||
|3|画板|item_3||

##### 页面高级搜索属性 :id=page_advanced_search_field



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|n_name_like|主题|n_name_like||
|n_content_like|页面内容|n_content_like||

##### 项目状态 :id=project_state



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|normal|正常|normal||
|warning|预警|warning||
|delay|延期|delay||

##### 项目类型 :id=project_type



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|scrum|Scrum项目|scrum||
|kanban|Kanban项目|kanban||
|waterfall|瀑布项目|waterfall||

##### 风险 :id=risk



| 值col150        |    文本col150    |   代码名col150    |  备注col800     |
| --------   |------------|------------|------------|
|10|高|item_10||
|20|中|item_20||
|30|低|item_30||

