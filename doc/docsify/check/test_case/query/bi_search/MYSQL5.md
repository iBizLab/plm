```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`REVIEW_RESULT_STATE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE_ID`,
t1.`TEST_LIBRARY_ID`,
t11.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`
FROM `TEST_CASE` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`TEST_LIBRARY_ID` = t11.`ID` 


```