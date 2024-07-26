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
        DATE(wi.CREATE_TIME) AS created_date,
        COUNT(*) AS new_bugs
    FROM work_item wi
             JOIN work_item_type wit ON wi.WORK_ITEM_TYPE_ID = wit.ID
             JOIN work_item_state wis ON wi.state = wis.ID
    WHERE wi.CREATE_TIME BETWEEN ? AND ?
      AND wit.GROUP = 'requirement'
      AND ((? IS NULL OR ? = '') OR wi.BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wis.TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_FROM, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.IS_ARCHIVED, ?))
    GROUP BY created_date
) b ON date_series.date = b.created_date
         LEFT JOIN (
    SELECT
        DATE(wi.UPDATE_TIME) AS update_date,
        COUNT(*) AS completed_bugs
    FROM work_item wi
             JOIN work_item_type wit ON wi.WORK_ITEM_TYPE_ID = wit.ID
             JOIN work_item_state wis ON wi.state = wis.ID
    WHERE wi.UPDATE_TIME BETWEEN ? AND ?
      AND wit.GROUP = 'requirement'
      AND wi.STATE = '40'
      AND ((? IS NULL OR ? = '') OR wi.BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wis.TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_FROM, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.IS_ARCHIVED, ?))
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
6. `Default(传入变量).N_BOARD_ID_EQ`
7. `Default(传入变量).N_BOARD_ID_EQ`
8. `Default(传入变量).N_BOARD_ID_EQ`
9. `Default(传入变量).N_PRIORITY_EQ`
10. `Default(传入变量).N_PRIORITY_EQ`
11. `Default(传入变量).N_PRIORITY_EQ`
12. `Default(传入变量).n_work_item_type_group`
13. `Default(传入变量).n_work_item_type_group`
14. `Default(传入变量).n_work_item_type_group`
15. `Default(传入变量).N_BACKLOG_TYPE_EQ`
16. `Default(传入变量).N_BACKLOG_TYPE_EQ`
17. `Default(传入变量).N_BACKLOG_TYPE_EQ`
18. `Default(传入变量).N_BACKLOG_FROM_EQ`
19. `Default(传入变量).N_BACKLOG_FROM_EQ`
20. `Default(传入变量).N_BACKLOG_FROM_EQ`
21. `Default(传入变量).n_is_archived_in`
22. `Default(传入变量).n_is_archived_in`
23. `Default(传入变量).n_is_archived_in`
24. `Default(传入变量).n_create_time_ltandeq`
25. `Default(传入变量).n_create_time_gtandeq`
26. `Default(传入变量).N_BOARD_ID_EQ`
27. `Default(传入变量).N_BOARD_ID_EQ`
28. `Default(传入变量).N_BOARD_ID_EQ`
29. `Default(传入变量).N_PRIORITY_EQ`
30. `Default(传入变量).N_PRIORITY_EQ`
31. `Default(传入变量).N_PRIORITY_EQ`
32. `Default(传入变量).n_work_item_type_group`
33. `Default(传入变量).n_work_item_type_group`
34. `Default(传入变量).n_work_item_type_group`
35. `Default(传入变量).N_BACKLOG_TYPE_EQ`
36. `Default(传入变量).N_BACKLOG_TYPE_EQ`
37. `Default(传入变量).N_BACKLOG_TYPE_EQ`
38. `Default(传入变量).N_BACKLOG_FROM_EQ`
39. `Default(传入变量).N_BACKLOG_FROM_EQ`
40. `Default(传入变量).N_BACKLOG_FROM_EQ`
41. `Default(传入变量).n_is_archived_in`
42. `Default(传入变量).n_is_archived_in`
43. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
