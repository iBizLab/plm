```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `EXECUTOR` t1 

WHERE ( t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` = #{ctx.webcontext.id} )
```