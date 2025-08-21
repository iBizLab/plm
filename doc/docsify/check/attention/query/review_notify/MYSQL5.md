```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  t1.`OWNER_SUBTYPE` = 'REVIEW'  AND  t1.`OWNER_TYPE` = 'REVIEW'  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```