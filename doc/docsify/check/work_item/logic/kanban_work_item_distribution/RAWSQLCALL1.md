<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN s.`TYPE` != 'completed' THEN 1 ELSE 0 END) AS count2,
  SUM(CASE WHEN s.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count,
  wi.`ENTRY_ID` AS filter_type
FROM
  `WORK_ITEM` wi
  JOIN `WORK_ITEM_STATE` s ON wi.`STATE` = s.`ID`
WHERE
  wi.`PROJECT_ID` = ?
  AND wi.`IS_DELETED` = 0
  AND wi.`BOARD_ID` IS NOT NULL
  AND wi.`ENTRY_ID` IS NOT NULL
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BOARD_ID, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.WORK_ITEM_TYPE_ID, ?))
GROUP BY
  wi.`ENTRY_ID`;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_board_id_eq`
3. `Default(传入变量).n_board_id_eq`
4. `Default(传入变量).n_board_id_eq`
5. `Default(传入变量).n_work_item_type_id_eq`
6. `Default(传入变量).n_work_item_type_id_eq`
7. `Default(传入变量).n_work_item_type_id_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
