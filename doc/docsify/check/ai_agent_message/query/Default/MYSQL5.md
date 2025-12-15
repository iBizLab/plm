```sql
SELECT
t1.`CONTENT_TYPE`,
t1.`CONVERSATION_ID`,
t11.`NAME` AS `CONVERSATION_NAME`,
t11.`TITLE` AS `CONVERSATION_TITLE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
(select count(1) from ai_agent_feedback t where t.user_id=#{ctx.sessioncontext.srfuserid} and t.message_id=t1.`ID` and t.feedback_type='dislike') AS `IS_DISLIKE`,
(select count(1) from ai_agent_feedback t where t.user_id=#{ctx.sessioncontext.srfuserid} and t.message_id=t1.`ID` and t.feedback_type='like') AS `IS_LIKE`,
t1.`NAME`,
t1.`SENDER_TYPE`,
t1.`SEQUENCE`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_AGENT_MESSAGE` t1 
LEFT JOIN `AI_AGENT_CONVERSATION` t11 ON t1.`CONVERSATION_ID` = t11.`ID` 


```