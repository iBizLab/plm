<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    IFNULL(b.new_bugs, 0) AS count,
    IFNULL(c.completed_bugs, 0) AS count2
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i+b.i*10+c.i*100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) <= ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(CREATE_TIME) AS created_date,
        COUNT(*) AS new_bugs
    FROM work_item
    WHERE CREATE_TIME BETWEEN ? AND ?
      AND WORK_ITEM_TYPE_ID like '%bug%'
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?))
    GROUP BY created_date
) b ON date_series.date = b.created_date
         LEFT JOIN (
    SELECT
        DATE(UPDATE_TIME) AS update_date,
        COUNT(*) AS completed_bugs
    FROM work_item
    WHERE UPDATE_TIME BETWEEN ? AND ?
      AND WORK_ITEM_TYPE_ID like '%bug%'
      AND STATE = '40'
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?))
    GROUP BY update_date
) c ON date_series.date = c.update_date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_ltandeq`
4. `Default(传入变量).n_create_time_gtandeq`
5. `Default(传入变量).n_create_time_ltandeq`
6. `Default(传入变量).n_board_id_eq`
7. `Default(传入变量).n_board_id_eq`
8. `Default(传入变量).n_board_id_eq`
9. `Default(传入变量).n_sprint_id_eq`
10. `Default(传入变量).n_sprint_id_eq`
11. `Default(传入变量).n_sprint_id_eq`
12. `Default(传入变量).n_priority_eq`
13. `Default(传入变量).n_priority_eq`
14. `Default(传入变量).n_priority_eq`
15. `Default(传入变量).n_severity_eq`
16. `Default(传入变量).n_severity_eq`
17. `Default(传入变量).n_severity_eq`
18. `Default(传入变量).n_is_archived_in`
19. `Default(传入变量).n_is_archived_in`
20. `Default(传入变量).n_is_archived_in`
21. `Default(传入变量).n_create_time_gtandeq`
22. `Default(传入变量).n_create_time_ltandeq`
23. `Default(传入变量).n_board_id_eq`
24. `Default(传入变量).n_board_id_eq`
25. `Default(传入变量).n_board_id_eq`
26. `Default(传入变量).n_sprint_id_eq`
27. `Default(传入变量).n_sprint_id_eq`
28. `Default(传入变量).n_sprint_id_eq`
29. `Default(传入变量).n_priority_eq`
30. `Default(传入变量).n_priority_eq`
31. `Default(传入变量).n_priority_eq`
32. `Default(传入变量).n_severity_eq`
33. `Default(传入变量).n_severity_eq`
34. `Default(传入变量).n_severity_eq`
35. `Default(传入变量).n_is_archived_in`
36. `Default(传入变量).n_is_archived_in`
37. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
