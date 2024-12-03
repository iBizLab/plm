## 七天内创建或完成的工作项(seven_days) <!-- {docsify-ignore-all} -->

工作项完成趋势逻辑中使用

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

* `默认（全部查询列）`



### 查询条件

((`CREATE_TIME(建立时间)` LT `'7'` OR `COMPLETED_AT(完成时间)` LT `'7'`) AND `IS_DELETED(是否已删除)` EQ `'0'`)





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

WHERE ( ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) < 7  OR  DATEDIFF(sysdate(),t1.`COMPLETED_AT`) < 7 )  AND  t1.`IS_DELETED` = 0 )
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