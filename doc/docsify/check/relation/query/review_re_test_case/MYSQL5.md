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

WHERE ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'idea'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  EXISTS (
        SELECT 1
        FROM `test_case` t2
        WHERE t1.`TARGET_ID` = t2.`ID`
        AND t2.`is_deleted` = 0
    ) )
```