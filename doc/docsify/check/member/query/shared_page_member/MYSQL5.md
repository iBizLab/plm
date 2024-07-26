```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.shared_page}  AND  t1.`OWNER_TYPE` = 'PAGE'  AND  t1.`OWNER_SUBTYPE` = 'SHARED' )
```