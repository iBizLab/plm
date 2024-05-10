```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from work_item t3 where t1.owner_id = t3.id and t3.is_deleted = 0)  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id})  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id} )
```