# 数据字典  <!-- {docsify-ignore-all} -->

##### 逻辑子类 :id=DELogicSubType



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|NONE|无|None||
|DEFIELD|属性逻辑|Defield|面向属性的处理逻辑子类型，|
|ATTACHTODEACTION|附加到行为|Attachtodeaction|附加到指定行为|
|ATTACHTODEDATASET|附加到数据集|Attachtodedataset|附加到指定数据集|
|WEBHOOK|WebHook|Webhook|WEB钩子|
|EVENTHOOK|事件处理|Eventhook||
|TIMERTASK|定时作业|Timertask|后台定时作业|
|USER|用户自定义|User||
|USER2|用户自定义2|User2||
|USER3|用户自定义3|User3||
|USER4|用户自定义4|User4||

##### 最近访问对象 :id=Recent_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|product|产品管理|Product||
|project|项目管理|Project||
|library|测试管理|Library||
|space|知识管理|Space||

##### 工作项报表分组属性 :id=Work_item_group_field



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|work_item_type_name|工作项类型|Work_item_type_name||
|state|状态|State||
|priority|优先级|Priority||
|risk|风险|Risk||
|backlog_type|需求类型|Backlog_type||
|backlog_from|需求来源|Backlog_from||
|sprint_name|迭代|Sprint_name||

##### 索引类型 :id=Index_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|PRODUCT|产品|Product||
|PROJECT|项目|Project||
|LIBRARY|测试库|Library||

##### 模板可见范围 :id=Stencil_scope



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|space_stencil|空间模板|Space_stencil||
|org_stencil|组织模板|Org_stencil||

##### 通知消息类型 :id=WFInfomMsgType



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|1|系统消息|INTERNAL||
|2|电子邮件|EMAIL||
|4|手机短信|SMS||
|32|微信|WT||
|64|钉钉|DT||
|128|企业微信|ENTWT||
|256|用户自定义|USER||
|512|用户自定义2|USER2||

##### 工单优先级 :id=Ticket_priority



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|P0|P0|P0||
|P1|P1|P1||
|P2|P2|P2||
|P3|P3|P3||
|P4|P4|P4||

##### 监听通知事件 :id=Notify_event



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.create:AFTER|创建工作项|Projmgmt_work_item_create_after||
|ProjMgmt.project.update:AFTER|更新项目信息|Projmgmt_project_update_after||

##### 状态类型 :id=State_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|1|未开始|Item_1||
|2|进行中|Item_2||
|3|已完成|Item_3||
|4|已关闭|Item_4||

##### 用例评审状态 :id=Test_case_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|待评审|Item_10||
|20|评审中|Item_20||
|30|通过|Item_30||
|40|不通过|Item_40||
|50|废弃|Item_50||

##### 严重程度 :id=Severity



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|致命|Item_10||
|20|严重|Item_20||
|30|一般|Item_30||
|40|建议|Item_40||

##### 迭代状态 :id=Sprint_status



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|1|未开始|Item_1||
|2|进行中|Item_2||
|3|已完成|Item_3||

##### 关注状态 :id=Attention_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|不关注|Item_10||
|20|关注|Item_20||

##### 最近访问 :id=Recent_visite



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|idea|需求|Idea||
|ticket|工单|Ticket||
|test_case|用例|Test_case||
|work_item|工作项|Work_item||
|scrum|scrum项目|Scrum||
|kanban|kanban项目|Kanban||
|waterfall|瀑布项目|Waterfall||
|page|页面|Page||

##### 评论主体类型 :id=Principal_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|work_item|工作项|Work_item||
|idea|需求|Idea||
|test_case|用例|Test_case||

##### 用例类型 :id=Test_case_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|功能测试|Item_10||
|20|性能测试|Item_20||
|30|配置相关|Item_30||
|40|安装部署|Item_40||
|50|接口测试|Item_50||
|60|安全相关|Item_60||
|70|兼容性测试|Item_70||
|80|UI测试|Item_80||
|90|其他|Item_90||

##### 测试计划状态 :id=Test_plan_status



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|pending|未开始|Pending||
|in_progress|进行中|In_progress||
|completed|已完成|Completed||

##### 风险 :id=Risk



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|高|Item_10||
|20|中|Item_20||
|30|低|Item_30||

##### 可供选择的触发器 :id=Enable_action



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.create:AFTER|创建工作项|Projmgmt_work_item_create_after||
|ProjMgmt.project.update:AFTER|更新项目信息|Projmgmt_project_update_after||

##### 工单状态 :id=Ticket_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|待处理|Item_10||
|20|处理中|Item_20||
|30|已计划|Item_30||
|40|已完成|Item_40||
|50|已关闭|Item_50||

##### 用例重要程度 :id=Test_case_level



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|P0|P0|P0||
|P1|P1|P1||
|P2|P2|P2||
|P3|P3|P3||
|P4|P4|P4||

##### 需求状态 :id=Idea_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|待评审|Item_10||
|20|已计划|Item_20||
|30|进行中|Item_30||
|40|已完成|Item_40||
|50|已关闭|Item_50||

##### 项目状态 :id=Project_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|normal|正常|Normal||
|warning|预警|Warning||
|delay|延期|Delay||

##### 需求优先级 :id=Idea_priority



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|P0|P0|P0||
|P1|P1|P1||
|P2|P2|P2||
|P3|P3|P3||
|P4|P4|P4||

##### 最近访问（首页） :id=Recent_index



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|idea|需求|Idea||
|ticket|工单|Ticket||
|test_case|用例|Test_case||
|work_item|工作项|Work_item||
|page|页面|Page||

##### 发布状态 :id=Version_status



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|pending|未开始|Pending||
|in_progress|进行中|In_progress||
|completed|已发布|Completed||
|closed|已关闭|Closed||

##### 客户行业 :id=Customer_sector



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|互联网|Item_10||
|20|教育|Item_20||
|30|电子商务|Item_30||
|40|智能硬件|Item_40||
|50|企业服务|Item_50||
|60|先进制造|Item_60||
|70|游戏|Item_70||
|80|金融|Item_80||
|90|其他|Item_90||

##### 任务类别 :id=Task_category



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|设计|Item_10||
|20|研发|Item_20||
|30|部署|Item_30||
|40|测试|Item_40||
|50|文档|Item_50||
|60|产品|Item_60||
|70|调研|Item_70||
|80|其他|Item_80||

##### 实体通知目标类型 :id=DENotifyTargetType



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|EVENTDATAFIELD|属性|Eventdatafield||
|DSTUSER|成员|Dstuser||
|DSTDEPARTMENT|部门|Dstdepartment||

##### 项目类型 :id=Project_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|scrum|Scrum项目|Scrum||
|kanban|Kanban项目|Kanban||
|waterfall|瀑布项目|Waterfall||

##### 通知人员属性 :id=Notify_field



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|ProjMgmt.work_item.assignee_id|负责人|Projmgmt_work_item_assignee_id||
|ProjMgmt.work_item.create_man|建立人|Projmgmt_work_item_create_man||

##### 测试类型 :id=Test_case_test_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|automation|自动|Automation||
|manual|手动|Manual||

##### 优先级 :id=Work_item_priority



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|低|Item_10||
|20|中|Item_20||
|30|高|Item_30||
|40|紧急|Item_40||

##### 关注类型 :id=Attention_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|不关注|Item_10||
|20|订阅|Item_20||
|30|重要通知|Item_30||
|40|关注|Item_40||

##### 需求来源 :id=Demand_sources



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|产品规划|Item_10||
|20|用户反馈|Item_20||
|30|内部需求|Item_30||
|40|竞品调研|Item_40||
|50|其他|Item_50||

##### 日志状态 :id=Log_state



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|SUCCESS|成功|Success||
|FAILURE|失败|Failure||

##### 复现概率 :id=Reproduction_probability



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|必现|Item_10||
|20|大概率复现|Item_20||
|30|小概率复现|Item_30||
|40|仅出现一次|Item_40||

##### 测试分类 :id=Test_plan_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|普通测试|Item_10||
|20|迭代测试|Item_20||
|30|发布测试|Item_30||

##### 工作项类型分组 :id=Work_item_type_group



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|requirement|需求|Requirement||
|task|任务|Task||
|bug|缺陷|Bug||
|issue|事务|Issue||
|plan|计划|Plan||

##### 需求类型 :id=Requirement_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|技术需求|Item_10||
|20|功能需求|Item_20||
|30|安全需求|Item_30||
|40|体验优化|Item_40||

##### 执行用例状态 :id=Run_status



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|通过|Item_10||
|20|受阻|Item_20||
|30|失败|Item_30||
|40|跳过|Item_40||

##### 扩展状态 :id=Extension_status



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|0|未应用|Item_0||
|1|已应用|Item_1||

##### 通知子类 :id=DENotifySubType



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|NONE|无|None||
|EVENTHOOK|事件通知|Eventhook||
|FIELDCHANGEHOOK|属性变更通知|Fieldchangehook||

##### 最近使用 :id=Recent_use



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|scrum|scrum|Scrum||
|waterfall|waterfall|Waterfall||
|kanban|kanban|Kanban||
|library|library|Library||
|product|product|Product||
|space|space|Space||

##### 工单解决方案 :id=Solutions



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|10|进入需求池|Item_10||
|20|技术排期|Item_20||
|30|待进一步确认|Item_30||
|40|方案调研|Item_40||
|50|暂时搁置|Item_50||
|60|功能已支持|Item_60||
|70|不予采纳|Item_70||

##### 客户等级 :id=Customer_level



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|L0|L0|L0||
|L1|L1|L1||
|L2|L2|L2||
|L3|L3|L3||
|L4|L4|L4||

##### 页面类型 :id=Page_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|1|文档|Item_1||
|2|分组|Item_2||
|3|画板|Item_3||

##### 角色类型 :id=Role_type



| 值        |    文本    |   代码名    |  备注     |
| --------   |------------|------------|------------|
|admin|管理员|Admin||
|user|普通成员|User||
|reader|只读成员|Reader||

