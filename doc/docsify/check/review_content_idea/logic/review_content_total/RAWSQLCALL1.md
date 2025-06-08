<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    query1.count1 AS total,
    query2.count2 AS total_already,
    (CONVERT(query2.count2, DECIMAL) / query1.count1 * 100) AS schedule
FROM
    (SELECT COUNT(1) AS count1
     FROM review rv
              LEFT JOIN relation re ON re.PRINCIPAL_ID = rv.ID AND re.PRINCIPAL_TYPE = 'REVIEW'
     WHERE rv.ID = ?) AS query1,

    (SELECT COUNT(*) AS count2
     FROM review rv
              INNER JOIN relation re ON re.PRINCIPAL_ID = rv.ID AND re.PRINCIPAL_TYPE = 'REVIEW'
              INNER JOIN review_content_extend rc ON re.ID = rc.ID AND rc.review_result = 'pass'
     WHERE rv.ID = ?) AS query2;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
