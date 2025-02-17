## 缺陷年龄报告 <!-- {docsify-ignore-all} -->

   报表缺陷年龄报告数据源


### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./defect_age_report#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./defect_age_report#end1 {"结束"}]]
state "查询缺陷年龄报告" as RAWSQLCALL1  [[$./defect_age_report#rawsqlcall1 {"查询缺陷年龄报告"}]]


Begin --> RAWSQLCALL1
RAWSQLCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `result(结果)`

#### 查询缺陷年龄报告 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



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
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 1 THEN '10'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 1 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 2 THEN '20'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 2 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 5 THEN '30'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 5 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 7 THEN '40'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 7 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 15 THEN '50'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 15 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 30 THEN '60'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 30 THEN '70'
            ELSE NULL
            END AS filter_type,
        COUNT(*) AS count
    FROM work_item
    WHERE
        CREATE_TIME IS NOT NULL
      AND WORK_ITEM_TYPE_ID LIKE '%BUG%'
      AND IS_DELETED = 0
      AND PROJECT_ID = ?
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)  -- 看板
      AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR CREATE_TIME BETWEEN ? AND ?) -- 创建时间范围
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?)) -- 优先级
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?)) -- 严重程度
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?)) -- 是否归档
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
5. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
6. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
7. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
8. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
9. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
10. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
11. `Default(传入变量).N_PRIORITY_EQ`
12. `Default(传入变量).N_PRIORITY_EQ`
13. `Default(传入变量).N_PRIORITY_EQ`
14. `Default(传入变量).N_SEVERITY_EQ`
15. `Default(传入变量).N_SEVERITY_EQ`
16. `Default(传入变量).N_SEVERITY_EQ`
17. `Default(传入变量).n_is_archived_in`
18. `Default(传入变量).n_is_archived_in`
19. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|结果|result|数据对象列表|||
