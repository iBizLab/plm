## BI查询(bi_search) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[BI查询属性组](#)
  * `IS_DELETED(是否已删除)`
  * `IS_ARCHIVED(是否已归档)`
  * `COMPLETED_AT(完成时间)`
  * `CREATE_TIME(建立时间)`
  * `UPDATE_TIME(更新时间)`
  * `START_AT(开始时间)`
  * `END_AT(截止时间)`
  * `TITLE(标题)`
  * `REP_GROUP_VALUE(报表分组属性)`
  * `UPDATE_MAN(更新人)`
  * `ATTENTIONS_IMP(关注人)`
  * `CREATE_MAN(建立人)`
  * `IDENTIFIER(编号)`
  * `SHOW_IDENTIFIER(编号)`
  * `RELATION_TOTAL_TICKET(关联工单数)`
  * `RELATION_TOTAL_WORK_ITEM(关联工作项数)`
  * `WORKLOAD_SCHEDULE(工时进度)`
  * `REMAINING_WORKLOAD(剩余工时)`
  * `RELATION_TOTAL_TEST_CASE(关联测试用例数)`
  * `RELATION_TOTAL_IDEA(关联产品需求数)`
  * `PROJECT_TYPE(项目类型)`
  * `PROJECT_NAME(所属项目)`
  * `WORK_ITEM_TYPE_NAME(工作项类型)`
  * `ASSIGNEE_NAME(负责人)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `ASSIGNEE_ID(负责人)`
  * `STATE(状态)`
  * `PROJECT_ID(项目)`
  * `JOB_TYPE(任务类别)`
  * `BACKLOG_FROM(需求来源)`
  * `REAPPEAR_PROBABILITY(复现概率)`
  * `PRIORITY(优先级)`
  * `BACKLOG_TYPE(需求类型)`
  * `SEVERITY(严重程度)`
  * `RISK(风险)`
  * `ID(标识)`
  * `STATE_TYPE(工作项状态类型)`
  * `SPRINT_ID(迭代标识)`
  * `WORK_ITEM_TYPE_GROUP(工作项类型分组)`
  * `SPRINT_NAME(迭代名称)`
  * `ACTUAL_WORKLOAD(实际工时)`
  * `ESTIMATED_WORKLOAD(预估工时)`
  * `RELEASE_NAME(项目发布名称)`
  * `RELEASE_ID(项目发布标识)`
  * `TAGS(标签)`
  * `ENTRY_NAME(看板栏名称)`
  * `ENTRY_ID(看板栏标识)`
  * `WORK_ITEM_ORIGIN_STATE(原始状态)`
  * `BOARD_NAME(看板名称)`
  * `BOARD_ID(看板标识)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`JOB_TYPE`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`REAPPEAR_PROBABILITY`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t1.`RELEASE_ID`,
t71.`NAME` AS `RELEASE_NAME`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t61.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t31.`TYPE` AS `STATE_TYPE`,
t1.`TAGS`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `SPRINT` t61 ON t1.`SPRINT_ID` = t61.`ID` 
LEFT JOIN `PROJECT_RELEASE` t71 ON t1.`RELEASE_ID` = t71.`ID` 


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