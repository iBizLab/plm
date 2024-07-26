```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 

WHERE ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) <= 30  AND  exists(select 1 from `discuss_post` t2, `member` t3 where t1.post_id = t2.id and t2.topic_id = t3.owner_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})  AND  exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic}) )
```