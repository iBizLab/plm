```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`TARGET_TYPE` = 'customer'  AND  t21.`PRINCIPAL_TYPE` = 'idea'  AND  t21.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0 )
```