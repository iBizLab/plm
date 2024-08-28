# 工作项(work_item)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [工作项(WORK_ITEM)](module/ProjMgmt/work_item)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProjMgmt/work_item/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|严重程度|w_severity|严重程度(SEVERITY)||
|任务类别|w_job_type|任务类别(JOB_TYPE)||
|优先级|w_priority|优先级(PRIORITY)||
|关注人|w_attentions|关注(ATTENTIONS)||
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)|参数界面行为临时配置，用于测试功能，测试完后删除|
|发布|w_release_id|项目发布标识(RELEASE_ID)||
|复现概率|w_reappear_probability|复现概率(REAPPEAR_PROBABILITY)||
|完成时间|w_completed_at|完成时间(COMPLETED_AT)||
|工作项类型|w_work_item_origin_state|原始状态(WORK_ITEM_ORIGIN_STATE)||
|开始时间|w_start_at|开始时间(START_AT)||
|归档状态|w_archived_state|是否已归档(IS_ARCHIVED)||
|截止时间|w_end_at|截止时间(END_AT)||
|更新人|w_update_man|更新人(UPDATE_MAN)||
|更新时间|w_update_time|更新时间(UPDATE_TIME)||
|标签|w_tags|标签(TAGS)||
|状态|w_state|状态(STATE)||
|状态类型|w_state_type|工作项状态类型(STATE_TYPE)||
|看板|w_board_id|看板标识(BOARD_ID)||
|负责人|w_assignee_id|负责人(ASSIGNEE_ID)||
|迭代|w_sprint_id|迭代标识(SPRINT_ID)||
|需求来源|w_backlog_from|需求来源(BACKLOG_FROM)||
|需求类型|w_backlog_type|需求类型(BACKLOG_TYPE)||
|项目|w_project|项目(PROJECT_ID)||
|风险|w_risk|风险(RISK)||
##### 计算式维度
|    名称col200   | 代码名col150      |  计算公式col500    |  备注col500  |
| --------  |------------| -----   |  --------|
|状态变更时间|w_state_transition|state_transition||

### 指标
##### 常规指标
|    名称col200   | 代码名col150 |  聚合模式col150  | 属性col350      |  备注col500  |
| --------  |------------| -----   |  --------|--------|
|剩余工时|z_remaining_workload|合计|剩余工时(REMAINING_WORKLOAD)||
|登记工时|z_actual_workload|合计|实际工时(ACTUAL_WORKLOAD)||
|预估工时|z_estimated_workload|合计|预估工时(ESTIMATED_WORKLOAD)||
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|关联产品需求|z_relation_total_idea|(SELECT COUNT(1) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='IDEA')||
|关联工作项|z_relation_total_work_item2|(SELECT COUNT(1) FROM RELATION s1 LEFT JOIN WORK_ITEM s2 ON s1.TARGET_ID =s2.ID LEFT JOIN WORK_ITEM_TYPE s3 ON s3.ID= s2.WORK_ITEM_TYPE_ID WHERE s1.PRINCIPAL_ID = dataresult.ID  AND s1.TARGET_TYPE = 'WORK_ITEM' AND s3.ORGIN_STATE IN (params(work_item_type,'epic','bug','feature','issue','story','task','milestone','requirement','stage')))||
|关联工单|z_relation_total_ticket|(SELECT COUNT(1) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='TICKET')||
|关联测试用例|z_relation_total_test_case|(SELECT COUNT(1) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='TEST_CASE')||
|工作项完成率|work_item_completed_rate|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and is_deleted = 0) / if(countif(is_deleted = 0) = 0, 1, countif(is_deleted = 0))|统计完成工作项的占比，反映工作项的完成情况。|
|工作项按期完成数|work_items_completed_on_schedule|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and (end_at is not null and end_at >= completed_at or end_at is null and 1 = param(end_at, 0)) and is_deleted = 0)|统计已完成工作项的按期数量。|
|工作项按期完成率|work_item_completion_rate_on_schedule|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and (end_at is not null and end_at >= completed_at or end_at is null and 1 = param(end_at, 0)) and is_deleted = 0) / if(countif(is_deleted=0) = 0, 1, countif(is_deleted=0))|统计按期完成的工作项占比，反映工作项的按期完成情况。|
|工作项数量|count|countif(is_deleted = 0 )|统计所有的工作项数量。|
|工作项逾期完成数|overdue_completed_work_item|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and (end_at is not null and end_at < now() or end_at is null and 1 = param(end_at, 0)) and is_deleted = 0)|统计已完成工作项的逾期数量。|
|工作项逾期完成率|overdue_completed_work_item_rate|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and (end_at is not null and end_at < now() or end_at is null and 1 = param(end_at, 0)) and is_deleted = 0) / if(countif(is_deleted=0) = 0, 1, countif(is_deleted=0))|统计已完成的逾期工作项，占完成或关闭工作项的比例，反映项目或团队完成工作项的逾期情况。|
|未完成工作项逾期数|overdue_unfinished_work_item|countif((end_at is not null and end_at < now() or end_at is null and 1 = param(end_at, 0)) and state <> 40  and is_deleted = 0)|统计未完成工作项的逾期数量。|
|未完成工作项逾期率|overdue_unfinished_work_item_rate|countif((end_at is not null and end_at < now() or end_at is null and 1 = param(end_at, 0)) and state <> 40  and is_deleted = 0) / if(countif(is_deleted=0) = 0, 1, countif(is_deleted=0))|统计未完成的逾期工作项，占未完成工作项的比例，反映未完成工作项的逾期占比。|
|状态变更时间|state_transition|(SELECT MAX(UPDATE_TIME) FROM TRANSITION_HISTORY WHERE OWNER_ID = dataresult.ID AND  TO_STATE = PARAM(state_type,'10'))|状态变更时间|
|缺陷DI|bug_di|sum(multiif(severity =40,0.1,severity =30,1,severity =20,3,severity =10,10,0))|统计项目、发布版本、迭代的缺陷 DI，反映团队的开发质量。|
|缺陷占比|bug_ratio|countif(multiif(param(code_type, '-1') = '10', severity in (params(severity, ('10'))), param(code_type, '-1') = '20', priority in (params(priority, ('10'))), severity in (params(severity, ('10')))) and WORK_ITEM_TYPE_GROUP = 'bug') / if(countif(WORK_ITEM_TYPE_GROUP = 'bug') = 0, 1, countif(WORK_ITEM_TYPE_GROUP = 'bug'))|统计不同属性缺陷的占比情况。<br>|
|需求吞吐量|idea_throughput|countif(multiif(param(code_type, '-1') = '10', state_type = param(state_type, 'completed'), param(code_type, '-1') = '20', state = param(state, '10'), state_type = 'completed') and WORK_ITEM_TYPE_GROUP = 'requirement' and is_deleted = 0)|统计完成或交付的需求数量。|
|需求覆盖率|idea_coverage|countif(relation_total_test_case <> 0 and WORK_ITEM_TYPE_GROUP = 'requirement'  and is_deleted = 0) / if(countif(is_deleted = 0 and WORK_ITEM_TYPE_GROUP = 'requirement') = 0, 1, countif(is_deleted = 0 and WORK_ITEM_TYPE_GROUP = 'requirement'))|统计关联了用例的需求数占比，反映了测试用例对需求的覆盖程度。|
|预估偏差率|estimated_deviation_rate|sumif(abs(actual_workload - estimated_workload) / if(estimated_workload = 0, 1, estimated_workload), is_deleted = 0) / countif(is_deleted = 0)|统计成员对工作项的预估偏差情况，反映成员对工作项的计划偏差情况。|
|预估差异工时|estimated_differential_working_hours|sum(abs(ACTUAL_WORKLOAD-ESTIMATED_WORKLOAD))|统计预估工时与实际工时的偏差量。|

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>