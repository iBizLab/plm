```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( exists(select 1 from `comment` t2 where t1.owner_id = t2.PRINCIPAL_ID and t2.id=#{ctx.webcontext.id})  AND  t1.`TYPE` = '40'  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```