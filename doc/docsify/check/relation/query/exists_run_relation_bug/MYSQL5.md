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
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_TYPE` = 'run'  AND  exists(select 1 from run t2 where t1.principal_id = t2.id and t2.case_id = #{ctx.datacontext.principal_id})  AND  t1.`TARGET_ID` = #{ctx.datacontext.target_id} )
```