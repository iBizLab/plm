```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( t1.project_id in (select r1.target_id from relation r1 where r1.PRINCIPAL_TYPE = 'product' and r1.TARGET_TYPE = 'project' and r1.PRINCIPAL_ID = #{ctx.webcontext.product})  AND  exists(select 1 from `stage` s1, `stage` s2 where t1.`STATUS`  = s1.`id` and s1.`pid` = s2.`id` and s2.`TYPE` = 'published' and s1.`RELEASE_ID`= t1.`id`)  AND  t1.`END_AT` IS NOT NULL )
```