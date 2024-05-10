```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `MEMBER` t1 

WHERE ( t1.`ROLE_ID` = 'admin'  AND  t1.`OWNER_TYPE` = 'GROUP' )
```