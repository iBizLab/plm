```sql
SELECT
t1.`CUR_VERSION_ID`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE ( t1.`IS_DELETED` = 0 )
```