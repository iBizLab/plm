<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN t31.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count2,
  COUNT(*) AS count,
  COALESCE(t1.`SPRINT_ID`, '未加入迭代') AS filter_type
FROM
  `WORK_ITEM` t1
  LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID`
WHERE
  t1.`PROJECT_ID` = ?
--   AND t1.`WORK_ITEM_TYPE_ID` LIKE '%story%'
  AND t1.`IS_DELETED` = 0
	AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR t1.CREATE_TIME BETWEEN ? and ? )
GROUP BY
  filter_type;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_create_time_ltandeq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
