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

WHERE ( exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project_id})  AND  t1.`OWNER_TYPE` = 'WORK_ITEM'  AND  t1.`FILE_ID` IS NOT NULL )
```