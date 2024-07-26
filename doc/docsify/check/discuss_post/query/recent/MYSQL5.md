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

WHERE ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) <= 30  AND  exists(select 1 from `member` t2 where t1.topic_id = t2.owner_id and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```