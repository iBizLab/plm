```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t61.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t51.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
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
t41.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t91.`NAME` AS `RELEASE_NAME`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t31.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t71.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
LEFT JOIN `WORK_ITEM` t41 ON t1.`PID` = t41.`ID` 
LEFT JOIN `ENTRY` t51 ON t1.`ENTRY_ID` = t51.`ID` 
LEFT JOIN `BOARD` t61 ON t1.`BOARD_ID` = t61.`ID` 
LEFT JOIN `WORK_ITEM` t71 ON t1.`TOP_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 
LEFT JOIN `PROJECT_RELEASE` t91 ON t1.`RELEASE_ID` = t91.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( <choose><when test="ctx.webcontext.principal_type !=null ">  t101.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.target_type !=null ">  t101.`TARGET_TYPE` = #{ctx.webcontext.target_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> )
```