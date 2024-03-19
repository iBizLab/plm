## 测试计划关联缺陷(Test_plan_relation_bug) <!-- {docsify-ignore-all} -->



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

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_ARCHIVED(是否已归档)` EQ `'0'` AND `WORK_ITEM_TYPE_GROUP(工作项类型分组)` EQ `'bug'` AND `	(
    EXISTS (
      -- 与计划ID关联的RUN的WORK_ITEM
      SELECT 1
      FROM `relation` rel
      INNER JOIN `RUN` ru ON ru.`ID` = rel.`PRINCIPAL_ID`
      WHERE
        rel.`TARGET_ID` = t1.`ID`
        AND ru.`PLAN_ID` = #{ctx.webcontext.principal_id}
        AND rel.`TARGET_TYPE` = 'bug'
        AND rel.`PRINCIPAL_TYPE` = 'run'
    )
    OR EXISTS (
      -- 直接与计划ID关联的WORK_ITEM
      SELECT 1
      FROM `relation` r
      WHERE
        r.`TARGET_ID` = t1.`ID`
        AND r.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}
        AND r.`TARGET_TYPE` = 'work_item'
        AND r.`PRINCIPAL_TYPE` = 'test_plan'
    )
		)`)



### 数据库SQL语句

#### MYSQL5

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
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` = 'bug'  AND  (
    EXISTS (
      -- 与计划ID关联的RUN的WORK_ITEM
      SELECT 1
      FROM `relation` rel
      INNER JOIN `RUN` ru ON ru.`ID` = rel.`PRINCIPAL_ID`
      WHERE
        rel.`TARGET_ID` = t1.`ID`
        AND ru.`PLAN_ID` = #{ctx.webcontext.principal_id}
        AND rel.`TARGET_TYPE` = 'bug'
        AND rel.`PRINCIPAL_TYPE` = 'run'
    )
    OR EXISTS (
      -- 直接与计划ID关联的WORK_ITEM
      SELECT 1
      FROM `relation` r
      WHERE
        r.`TARGET_ID` = t1.`ID`
        AND r.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}
        AND r.`TARGET_TYPE` = 'work_item'
        AND r.`PRINCIPAL_TYPE` = 'test_plan'
    )
		) )
```
