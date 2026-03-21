```sql
SELECT
t1.`AI_AGENT_CONTEXT_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_TOP`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`SESSION_ID`,
t1.`STATUS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `AI_AGENT_CONVERSATION` t1 

WHERE ( ( t1.`STATUS` = 'active'  OR  t1.`STATUS` = 'paused' )  AND  t1.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`TYPE` = 'topic' )
```