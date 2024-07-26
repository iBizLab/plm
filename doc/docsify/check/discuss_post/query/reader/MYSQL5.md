```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`OWNER_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`OWNER_TYPE` = 'DISCUSS' ) ) AND ( t1.`IS_DELETED` = 0 )
```