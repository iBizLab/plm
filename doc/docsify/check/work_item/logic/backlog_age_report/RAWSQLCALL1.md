<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    time_ranges.filter_type,
    COALESCE(SUM(count), 0) AS count
FROM (
         SELECT '10' AS filter_type UNION ALL
         SELECT '20' UNION ALL
         SELECT '30' UNION ALL
         SELECT '40' UNION ALL
         SELECT '50' UNION ALL
         SELECT '60' UNION ALL
         SELECT '70'
     ) AS time_ranges
         LEFT JOIN (
    SELECT
        CASE
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 1 THEN '10'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 1 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 2 THEN '20'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 2 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 5 THEN '30'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 5 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 7 THEN '40'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 7 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 15 THEN '50'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 15 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 30 THEN '60'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 30 THEN '70'
            ELSE NULL
            END AS filter_type,
        COUNT(*) AS count
    FROM work_item T1
    INNER JOIN work_item_type T2 ON T1.WORK_ITEM_TYPE_ID = T2.ID
    WHERE T1.UPDATE_TIME IS NOT NULL and T2.`GROUP` = 'requirement'
      AND T1.PROJECT_ID = ?
      AND ((? IS NULL OR ? = '') OR T1.BOARD_ID = ?)  -- 看板
      AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR T1.CREATE_TIME BETWEEN ? AND ?) -- 创建时间范围
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.BACKLOG_TYPE, ?)) -- 需求类型
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.PRIORITY, ?)) -- 优先级
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.BACKLOG_FROM, ?)) -- 需求来源
      AND ((? IS NULL OR ? = '') OR T1.IS_ARCHIVED = ?) -- 是否归档
      AND ((? IS NULL OR ? = '') OR T1.IS_DELETED = ?) -- 是否删除
    GROUP BY filter_type
) AS T1 ON T1.filter_type = time_ranges.filter_type
GROUP BY time_ranges.filter_type
ORDER BY time_ranges.filter_type ASC;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).N_BOARD_ID_EQ`
3. `Default(传入变量).N_BOARD_ID_EQ`
4. `Default(传入变量).N_BOARD_ID_EQ`
5. `Default(传入变量).n_create_time_gtandeq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_create_time_ltandeq`
9. `Default(传入变量).n_create_time_gtandeq`
10. `Default(传入变量).n_create_time_ltandeq`
11. `Default(传入变量).N_BACKLOG_TYPE_EQ`
12. `Default(传入变量).N_BACKLOG_TYPE_EQ`
13. `Default(传入变量).N_BACKLOG_TYPE_EQ`
14. `Default(传入变量).N_PRIORITY_EQ`
15. `Default(传入变量).N_PRIORITY_EQ`
16. `Default(传入变量).N_PRIORITY_EQ`
17. `Default(传入变量).N_BACKLOG_FROM_EQ`
18. `Default(传入变量).N_BACKLOG_FROM_EQ`
19. `Default(传入变量).N_BACKLOG_FROM_EQ`
20. `Default(传入变量).N_IS_ARCHIVED_EQ`
21. `Default(传入变量).N_IS_ARCHIVED_EQ`
22. `Default(传入变量).N_IS_ARCHIVED_EQ`
23. `Default(传入变量).N_IS_DELETED_EQ`
24. `Default(传入变量).N_IS_DELETED_EQ`
25. `Default(传入变量).N_IS_DELETED_EQ`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
