```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BOARD` t1 

WHERE ( t1.`ID` <> #{ctx.webcontext.project} )
```