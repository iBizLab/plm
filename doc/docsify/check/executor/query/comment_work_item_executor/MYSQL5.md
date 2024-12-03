```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `EXECUTOR` t1 

WHERE ( exists (select 1 from comment t2 where t1.OWNER_ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id})  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```