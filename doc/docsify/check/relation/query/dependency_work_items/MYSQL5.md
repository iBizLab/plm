```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`SEQUENCE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( ( exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = #{ctx.webcontext.principal_id} and t2.is_deleted = 0)  OR  exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= #{ctx.webcontext.principal_id} and t2.is_deleted = 0) )  AND  t1.`PRINCIPAL_TYPE` = 'dependency' )
```