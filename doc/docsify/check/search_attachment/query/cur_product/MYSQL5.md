```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( (exists(select 1 from idea t2 where t1.owner_id = t2.id and t2.product_id = #{ctx.webcontext.product_id})
or exists(select 1 from ticket t3 where t1.owner_id = t3.id and t3.product_id = #{ctx.webcontext.product_id}))  AND  t1.`OWNER_TYPE` IN ('TICKET','IDEA')  AND  t1.`FILE_ID` IS NOT NULL )
```