```sql
SELECT
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`
FROM `RUN` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.executor_id ) )
```