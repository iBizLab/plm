```sql
SELECT
(SELECT COUNT( att.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 


```