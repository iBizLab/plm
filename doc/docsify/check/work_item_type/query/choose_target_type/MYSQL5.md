```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( exists(select 1 from `project` t2 where t2.`TYPE` = t1.`PROJECT_TYPE` and t2.`ID` = #{ctx.webcontext.project_id} and t1.`ID` <> #{ctx.webcontext.origin_type}) )
```