```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t11.`IS_DELETED`,
t1.`NAME`,
t1.`SPRINT_ID`,
t21.`NAME` AS `SPRINT_NAME`,
t1.`SPRINT_STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t11.`COMPLETED_AT` AS `WORK_ITEM_COMPLETED_AT`,
t1.`WORK_ITEM_ID`,
t11.`PRIORITY` AS `WORK_ITEM_PRIORITY`,
t11.`TITLE` AS `WORK_ITEM_TITLE`
FROM `SPRINT_ALTERATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`WORK_ITEM_ID` = t11.`ID` 
LEFT JOIN `SPRINT` t21 ON t1.`SPRINT_ID` = t21.`ID` 


```