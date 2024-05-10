<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN t3.`TYPE` != 'completed' THEN 1 ELSE 0 END) AS count2,
  SUM(CASE WHEN t3.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count,
  COUNT(*) AS sum_count,
  IF(TRIM(t1.`ASSIGNEE_ID`) IS NULL, '未分组', t1.`ASSIGNEE_ID`) AS filter_type
FROM
  `WORK_ITEM` t1
LEFT JOIN
  `WORK_ITEM_STATE` t3 ON t1.`STATE` = t3.`ID`
WHERE
  t1.`PROJECT_ID` = ?
  AND t1.`IS_DELETED` = 0
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.sprint_id, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.release_id, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.WORK_ITEM_TYPE_ID, ?))
GROUP BY
  filter_type;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_sprint_id_eq`
3. `Default(传入变量).n_sprint_id_eq`
4. `Default(传入变量).n_sprint_id_eq`
5. `Default(传入变量).n_release_id_eq`
6. `Default(传入变量).n_release_id_eq`
7. `Default(传入变量).n_release_id_eq`
8. `Default(传入变量).n_work_item_type_id_eq`
9. `Default(传入变量).n_work_item_type_id_eq`
10. `Default(传入变量).n_work_item_type_id_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
