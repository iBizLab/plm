```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t31.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_TO`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='CUSTOMER') AS `RELATION_TOTAL_CUSTOMER`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t11.`SECTION_ID`,
t21.`NAME` AS `SECTION_NAME`,
concat(t31.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 
LEFT JOIN `SECTION` t21 ON t11.`SECTION_ID` = t21.`ID` 
LEFT JOIN `PRODUCT` t31 ON t1.`PRODUCT_ID` = t31.`ID` 


```