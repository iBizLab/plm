```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic}) )
```