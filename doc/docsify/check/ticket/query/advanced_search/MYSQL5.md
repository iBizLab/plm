```sql
SELECT
t1.`ID`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`TITLE`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from product t2, product_member t3 where t1.product_id = t2.id and t2.id = t3.product_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
```