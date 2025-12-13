```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `CUSTOMER` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```