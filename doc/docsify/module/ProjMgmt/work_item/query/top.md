## 顶层数据查询(top) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `指定属性组`
*  **属性组：**[规划](#)
  * `BOARD_ID(看板标识)`
  * `PROJECT_IS_ARCHIVED(项目是否归档)`
  * `PROJECT_IS_DELETED(项目是否删除)`
  * `DELIVERABLE_IMP(交付物)`
  * `OVERDUE_TIME(逾期天数)`
  * `FINISHER(完成人)`
  * `ACTUAL_END_AT(实际结束时间)`
  * `ACTUAL_START_AT(实际开始时间)`
  * `MULTIPLE_PEOPLE(多人任务)`
  * `EXECUTORS(执行人)`
  * `IS_OVERTIME(是否超时)`
  * `SOLUTION_WAY(解决办法)`
  * `TAGS(标签)`
  * `P_WORK_ITEM_TYPE_ID(父工作项类型)`
  * `SHOW_IDENTIFIER(编号)`
  * `IDENTIFIER(编号)`
  * `ATTENTIONS(关注)`
  * `WORK_ITEM_ORIGIN_STATE(原始状态)`
  * `STATE(状态)`
  * `RELEASE_STATUS(发布阶段)`
  * `STATE_TYPE(工作项状态类型)`
  * `SEQUENCE(序号)`
  * `ENTRY_POSITION(所在看板栏位置)`
  * `REP_DATE(统计日期字段)`
  * `END_AT(截止时间)`
  * `REP_VALUE_3(报表值3)`
  * `RECENT_CREATE_DAYS(最近创建日期)`
  * `REP_VALUE_2(报表值2)`
  * `WORK_ITEM_TYPE_SEQUENCE(工作项类型序号)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `WORK_ITEM_TYPE_GROUP(工作项类型分组)`
  * `WORK_ITEM_SUB_TYPE(工作项下级类型)`
  * `TOP_TITLE(顶级工作项标题)`
  * `TOP_ID(顶级工作项标识)`
  * `TEST_PLAN_ID(测试计划ID)`
  * `SWIMLANE_ID(泳道标识)`
  * `SPRINT_ID(迭代标识)`
  * `REP_VALUE_1(报表值1)`
  * `REP_PERCENT_VALUE(报表百分值)`
  * `REP_GROUP_VALUE(报表分组属性)`
  * `RELEASE_ID(项目发布标识)`
  * `PROJECT_IDENTIFIER(项目标识)`
  * `PROJECT_ID(项目)`
  * `PID(父标识)`
  * `IS_LEAF(是否叶子节点)`
  * `IS_DELETED(是否已删除)`
  * `IS_ARCHIVED(是否已归档)`
  * `ID(标识)`
  * `ENTRY_STATUS(看板栏状态)`
  * `ENTRY_ID(看板栏标识)`
  * `DELIVERABLE(交付物)`
  * `CUR_VERSION_NAME(当前版本名称)`
  * `CUR_VERSION_ID(当前版本标识)`
  * `CHOOSE_VERSION_NAME(选择版本名称)`
  * `CHOOSE_VERSION_ID(选择版本标识)`
  * `ATTENTIONS_IMP(关注人)`
  * `ASSIGNEE_ID(负责人)`
  * `REP_NUM(统计数)`
  * `ENTRY_NAME(看板栏名称)`
  * `SPRINT_STATUS(迭代状态)`
  * `SPRINT_NAME(迭代名称)`
  * `RELEASE_NAME(项目发布名称)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `RISK(风险)`
  * `CREATE_TIME(建立时间)`
  * `SEVERITY(严重程度)`
  * `START_AT(开始时间)`
  * `CREATE_MAN(建立人)`
  * `TITLE(标题)`
  * `BACKLOG_FROM(需求来源)`
  * `JOB_TYPE(任务类别)`
  * `ATTACHMENTS(附件)`
  * `ACTUAL_WORKLOAD(实际工时)`
  * `PROJECT_TYPE(项目类型)`
  * `COMPLETED_AT(完成时间)`
  * `REAPPEAR_PROBABILITY(复现概率)`
  * `BACKLOG_TYPE(需求类型)`
  * `ASSIGNEE_NAME(负责人)`
  * `PRIORITY(优先级)`
  * `BOARD_NAME(看板名称)`
  * `UPDATE_MAN(更新人)`
  * `UPDATE_TIME(更新时间)`
  * `ESTIMATED_WORKLOAD(预估工时)`
  * `WORKLOAD_SCHEDULE(工时进度)`
  * `PROJECT_NAME(所属项目)`
  * `WORK_ITEM_TYPE_NAME(工作项类型)`
  * `PTITLE(父工作项)`
  * `DEPENDENCIES(依赖)`



### 查询条件

(`PID(父标识)` ISNULL AND `IS_ARCHIVED(是否已归档)` EQ `'0'` AND `IS_DELETED(是否已删除)` EQ `'0'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`PID` IS NULL  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

</el-dialog>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
                MYSQL5 : false
        
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>