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
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) )
```