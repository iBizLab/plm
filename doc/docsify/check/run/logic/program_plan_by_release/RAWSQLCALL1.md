<p class="panel-title"><b>执行sql语句</b></p>

```sql

SELECT
t11.*
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 
LEFT JOIN  `LIBRARY` t12 ON t11.TEST_LIBRARY_ID = t12.ID 
WHERE 
( t11.`IS_DELETED` = 0 ) 
AND
( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = ?  AND  t1.`TARGET_TYPE` = 'test_case' ) 
AND
t12.ID = ?
AND
 not exists(select 1 from run t2 
where 
t11.ID= t2.CASE_ID 
AND
t2.PLAN_ID = ?  AND  t11.`IS_DELETED` = 0 )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).id(标识)`
2. `Default(传入变量).library`
3. `Default(传入变量).principal_id`

重置参数`relations(关联用例列表)`，并将执行sql结果赋值给参数`relations(关联用例列表)`
