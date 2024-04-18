<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    SUM(CASE WHEN wi.STATE_TYPE = 'pending' AND wi.CREATE_TIME <= date_series.date THEN 1 ELSE 0 END) AS count,
    SUM(CASE WHEN wi.STATE_TYPE = 'in_progress' AND wi.CREATE_TIME <= date_series.date THEN 1 ELSE 0 END) AS count1,
    SUM(CASE WHEN wi.STATE_TYPE = 'completed' AND wi.CREATE_TIME <= date_series.date THEN 1 ELSE 0 END) AS count2
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i + b.i * 10 + c.i * 100 AS seq
                  FROM
                      (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                      (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                      (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
     ) date_series
         LEFT JOIN (
    SELECT
        t1.`CREATE_TIME`,
        t31.`TYPE` AS `STATE_TYPE`
    FROM `WORK_ITEM` t1
             LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID`
             LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID`
    WHERE
      t21.`GROUP` = 'requirement'
      AND t1.`IS_DELETED` = 0
      AND t1.`PROJECT_ID` = ?
      AND t1.`CREATE_TIME` <= ?
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.WORK_ITEM_TYPE_ID, ?))
) wi ON wi.CREATE_TIME <= date_series.date
GROUP BY
    date_series.date
ORDER BY
    date_series.date ASC;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).N_PROJECT_ID_EQ`
6. `Default(传入变量).N_PROJECT_ID_EQ`
7. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`
8. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`
9. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
