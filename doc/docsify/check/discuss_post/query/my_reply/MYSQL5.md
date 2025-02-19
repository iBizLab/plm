```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `DISCUSS_REPLY` t21 
 WHERE 
 t1.`ID` = t21.`POST_ID`  AND  ( t21.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```