<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t1.IS_DELETED=0  THEN 1 ELSE 0 END),0) AS work_item_re_idea,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_work_item,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'test_case' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t5.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_test_case,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t3.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_ticket
FROM
    `RELATION` t11
JOIN
    `work_item` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `ticket` t3 ON t3.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
LEFT JOIN
    `test_case` t5 ON t5.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ? );
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
