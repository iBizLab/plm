```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t11 
 WHERE 
 t1.`ID` = t11.`TARGET_ID`  AND  ( t11.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0 )
```